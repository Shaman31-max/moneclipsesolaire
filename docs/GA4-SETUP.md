# Tracking GA4 — moneclipsesolaire.fr

## Architecture

- **Site Next.js** (`moneclipsesolaire.fr`) : gtag.js via `@next/third-parties` → événements `view_item`, `add_to_cart`, `begin_checkout`.
- **Checkout Shopify** (`shop.moneclipsesolaire.fr`) : Custom Pixel (Customer Events) → événement `purchase`.
- **Cross-domain** : NON nécessaire. Le site et le checkout partagent le même domaine racine (`moneclipsesolaire.fr`), le cookie `_ga` est posé sur `.moneclipsesolaire.fr` et partagé automatiquement entre les deux. La session GA4 reste continue.

Le même ID de mesure GA4 (`G-XXXXXXXXXX`) est utilisé des deux côtés → un seul flux de données, attribution unifiée.

## 1. Google Analytics

1. [analytics.google.com](https://analytics.google.com) → Administration → Créer une propriété (fuseau France, devise EUR).
2. Créer un **flux de données Web** pour `https://moneclipsesolaire.fr` → copier l'**ID de mesure** `G-XXXXXXXXXX`.
3. Coller cet ID dans `.env.local` : `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` (et dans les variables d'environnement Vercel/hébergeur pour la prod). Redéployer.
4. **Administration → Flux de données → votre flux → Configurer les paramètres du balisage → Lister les origines de trafic indésirables** : ajouter `moneclipsesolaire.fr` (évite qu'un retour du checkout soit compté comme referral).
5. **Administration → Événements clés** : vérifier que `purchase` est marqué comme événement clé (il l'est par défaut).

## 2. Shopify — Custom Pixel (purchase)

Admin Shopify → **Paramètres → Événements client → Ajouter un pixel personnalisé** → nom : `GA4 Purchase` → coller le code ci-dessous (remplacer `G-XXXXXXXXXX`), **Enregistrer** puis **Connecter**.

```js
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

const script = document.createElement('script');
script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
script.async = true;
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
// Consent Mode v2 — mêmes signaux que le site Next.js.
gtag('consent', 'default', {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted',
});

analytics.subscribe('checkout_completed', (event) => {
  const checkout = event.data.checkout;

  // Stitching de session : le front Next.js transmet le client_id GA4 et le
  // gclid via les attributs de panier (voir src/lib/attribution.ts). La
  // sandbox des Custom Pixels ne garantissant pas l'accès au cookie _ga,
  // sans ce client_id le purchase créerait une nouvelle identité GA4 et la
  // conversion serait attribuée en (direct)/(none) dans Google Ads.
  const attrs = {};
  (checkout.attributes || []).forEach((a) => { attrs[a.key] = a.value; });

  const config = { send_page_view: false };
  if (attrs.ga_client_id) config.client_id = attrs.ga_client_id;
  // send_page_view: false — les pages du site sont déjà suivies côté Next.js,
  // on ne veut que l'événement purchase depuis le checkout.
  gtag('config', GA_MEASUREMENT_ID, config);

  gtag('event', 'purchase', {
    transaction_id: (checkout.order && checkout.order.id) || checkout.token,
    currency: checkout.currencyCode,
    value: Number(checkout.totalPrice && checkout.totalPrice.amount),
    tax: Number(checkout.totalTax && checkout.totalTax.amount) || 0,
    shipping: Number(checkout.shippingLine && checkout.shippingLine.price && checkout.shippingLine.price.amount) || 0,
    items: checkout.lineItems.map((item) => ({
      item_id: String((item.variant && item.variant.id) || item.id),
      item_name: item.title,
      price: Number(item.variant && item.variant.price && item.variant.price.amount),
      quantity: item.quantity,
    })),
  });
});
```

> ℹ️ Les attributs `ga_client_id`, `gclid` et `utm_*` transmis par le front
> sont aussi visibles sur chaque commande dans l'admin Shopify (section
> « Informations supplémentaires ») — utile pour auditer l'attribution
> commande par commande.

> ⚠️ **Ne pas** installer en plus l'app « Google & YouTube » avec GA4 connecté sur la même propriété : elle enverrait ses propres événements (`begin_checkout`, `purchase`) → double comptage. Ce pixel suffit.

## 3. Google Ads — import des conversions

1. Google Ads et GA4 : même compte Google admin des deux côtés.
2. GA4 → **Administration → Associations de produits → Associations Google Ads** → associer le compte Google Ads (activer la personnalisation des annonces).
3. Google Ads → **Objectifs → Conversions → Nouvelle action de conversion → Importer → Propriétés Google Analytics (GA4) → Web** → sélectionner `purchase`.
4. Dans Google Ads, définir `purchase` comme action de conversion **principale**.
5. Activer le **marquage automatique (auto-tagging / GCLID)** dans Google Ads (Paramètres du compte) — indispensable à l'attribution. Le GCLID survit jusqu'au checkout car même domaine racine.

## 4. Vérification

1. **DebugView** : GA4 → Administration → DebugView, avec l'extension Chrome « Google Analytics Debugger » activée (ou `?debug_mode=1`).
2. Parcours test : scroller jusqu'aux produits (`view_item`) → ajouter au panier (`add_to_cart`) → cliquer « Finaliser ma commande » (`begin_checkout`) → payer en mode test Shopify (Bogus Gateway) → vérifier `purchase` avec `transaction_id`, `value`, `items`.
3. Vérifier dans DebugView que tout le parcours reste dans **la même session** (même identifiant client).
4. Rapports → Monétisation → Achats e-commerce (données visibles sous 24 h).

## Événements implémentés côté Next.js

| Événement | Déclencheur | Fichier |
|---|---|---|
| `view_item` | Carte produit visible à l'écran (1× par produit) | `src/components/Products.tsx` |
| `add_to_cart` | Bouton « Ajouter au panier » / case ebook | `src/components/Products.tsx` |
| `begin_checkout` | Clic « Finaliser ma commande » ou panier navbar (redirection checkout) | `src/components/Products.tsx`, `src/components/Navbar.tsx` |
| `purchase` | `checkout_completed` côté Shopify | Custom Pixel (ci-dessus) |

Helpers : `src/lib/analytics.ts`. Chaque variante Shopify encodant un pack (1, 2, 3… paires), un item = quantité 1 au prix du pack.
