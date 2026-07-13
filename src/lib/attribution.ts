// Attribution Google Ads / GA4 en architecture headless.
//
// Le site (moneclipsesolaire.fr) et le checkout Shopify
// (shop.moneclipsesolaire.fr) partagent le même domaine racine : les cookies
// _ga et _gcl_aw sont donc déjà communs. Mais le Custom Pixel Shopify qui
// envoie `purchase` tourne dans une sandbox où l'accès aux cookies first-party
// n'est pas garanti → risque de nouveau client_id GA4 sur le purchase, et
// donc de conversion non attribuée dans Google Ads (import GA4).
//
// Solution : capturer gclid/UTM au premier atterrissage, lire le client_id
// GA4 dans le cookie _ga, et transmettre le tout au checkout via les
// attributs de panier (`?attributes[...]`) — les paramètres d'URL survivent
// à la redirection checkout (vérifié) et deviennent des attributs de commande
// lisibles par le Custom Pixel (event.data.checkout.attributes) et visibles
// sur la commande dans l'admin Shopify.

const STORAGE_KEY = "mes_attribution";
const TTL_MS = 90 * 24 * 3600 * 1000; // fenêtre de conversion Ads : 90 jours

const CLICK_IDS = ["gclid", "gbraid", "wbraid"] as const;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

type Stored = { ts: number; params: Record<string, string> };

/**
 * À appeler au montage côté client : si l'URL d'atterrissage porte un
 * identifiant de clic publicitaire ou des UTM, on les persiste (les clics
 * plus récents écrasent les anciens — modèle last-click, comme Google Ads).
 */
export function captureLandingParams() {
  if (typeof window === "undefined") return;
  try {
    const url = new URL(window.location.href);
    const params: Record<string, string> = {};
    for (const k of [...CLICK_IDS, ...UTM_KEYS]) {
      const v = url.searchParams.get(k);
      if (v) params[k] = v.slice(0, 200);
    }
    if (Object.keys(params).length === 0) return;
    const stored: Stored = { ts: Date.now(), params };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {}
}

function getStoredParams(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const stored: Stored = JSON.parse(raw);
    if (Date.now() - stored.ts > TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return stored.params ?? {};
  } catch {
    return {};
  }
}

/** client_id GA4 depuis le cookie _ga (format GA1.1.123456.789012). */
function getGaClientId(): string | null {
  try {
    const m = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
    if (!m) return null;
    const parts = m[1].split(".");
    return parts.length >= 4 ? `${parts[2]}.${parts[3]}` : null;
  } catch {
    return null;
  }
}

/**
 * Suffixe `attributes[...]` à concaténer à une URL de checkout (cart
 * permalink). Chaîne vide si rien à transmettre.
 */
export function checkoutAttributionSuffix(): string {
  if (typeof window === "undefined") return "";
  const entries: [string, string][] = [];
  const cid = getGaClientId();
  if (cid) entries.push(["ga_client_id", cid]);
  for (const [k, v] of Object.entries(getStoredParams())) entries.push([k, v]);
  if (entries.length === 0) return "";
  return entries
    .map(([k, v]) => `attributes[${encodeURIComponent(k)}]=${encodeURIComponent(v)}`)
    .join("&");
}

/** Ajoute le suffixe d'attribution à une URL de checkout existante. */
export function decorateCheckoutUrl(url: string): string {
  const suffix = checkoutAttributionSuffix();
  if (!suffix || url === "#") return url;
  return url + (url.includes("?") ? "&" : "?") + suffix;
}
