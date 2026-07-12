import { MapPin, ShoppingCart } from "lucide-react";

// Offre locale Toulouse : variants Shopify dédiés à 1 €/paire, sans
// livraison (requiresShipping: false). Liens checkout directs (permalink
// panier), indépendants du panier principal du site.
const SHOPIFY_STORE = "https://shop.moneclipsesolaire.fr";

const OPTIONS = [
  { qty: 1, variantId: "58574049313113" },
  { qty: 2, variantId: "58574049345881" },
  { qty: 3, variantId: "58574049378649" },
  { qty: 4, variantId: "58574049411417" },
  { qty: 6, variantId: "58574049444185" },
  { qty: 8, variantId: "58574049476953" },
  { qty: 12, variantId: "58574049509721" },
];

export default function RetraitToulouse() {
  return (
    <section className="mt-12 glass rounded-2xl p-6 border border-[#22D3EE]/30">
      <div className="flex items-center gap-2 mb-2">
        <MapPin size={18} className="text-[#22D3EE]" />
        <h2 className="text-xl font-black text-white">
          Offre locale&nbsp;: retrait à Toulouse — 1&nbsp;€ la paire
        </h2>
      </div>
      <p className="text-sm text-white/75 leading-relaxed mb-1">
        Vous êtes à Toulouse ou dans les environs&nbsp;? Récupérez vos lunettes certifiées
        ISO&nbsp;12312-2 <strong className="text-white">en retrait, sans frais de livraison, à
        1&nbsp;€ la paire</strong> — mêmes lunettes, même certification DIN CERTCO.
      </p>
      <p className="text-xs text-white/50 mb-5">
        L&apos;adresse et les créneaux de retrait vous sont communiqués par email juste après la
        commande. Paiement sécurisé en ligne, aucune adresse de livraison demandée.
      </p>
      <div className="flex flex-wrap gap-2.5">
        {OPTIONS.map((o) => (
          <a
            key={o.qty}
            href={`${SHOPIFY_STORE}/cart/${o.variantId}:1`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#22D3EE]/40 text-sm font-bold text-white hover:bg-[#22D3EE]/10 hover:border-[#22D3EE] transition-colors"
          >
            <ShoppingCart size={13} className="text-[#22D3EE]" />
            {o.qty} paire{o.qty > 1 ? "s" : ""} — {o.qty}&nbsp;€
          </a>
        ))}
      </div>
    </section>
  );
}
