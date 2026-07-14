import { MapPin, ShoppingCart, TicketPercent } from "lucide-react";
import { PRICE_STEPS, GLASSES_VARIANT_NUMERIC_IDS } from "@/lib/pricing";

// Offre locale Toulouse : code promo TOULOUSE = 2,99 € de réduction par
// article sur les variants lunettes (côté Shopify). De 1 à 6 paires les
// paliers valent quantité + 2,99 € → le code donne exactement 1 €/paire ;
// au-delà, c'est encore moins cher. Les liens checkout pré-remplissent le
// code via ?discount=TOULOUSE.
const SHOPIFY_STORE = "https://shop.moneclipsesolaire.fr";
const REDUCTION = 2.99;

function fmt(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function RetraitToulouse() {
  return (
    <section className="mt-12 glass rounded-2xl p-6 border border-[#22D3EE]/30">
      <div className="flex items-center gap-2 mb-2">
        <MapPin size={18} className="text-[#22D3EE]" />
        <h2 className="text-xl font-black text-white">
          Offre locale&nbsp;: 1&nbsp;€ la paire en retrait à Toulouse
        </h2>
      </div>
      <p className="text-sm text-white/75 leading-relaxed mb-2">
        Vous êtes à Toulouse ou dans les environs&nbsp;? Avec le code{" "}
        <strong className="text-[#22D3EE]">TOULOUSE</strong>, vos lunettes certifiées
        ISO&nbsp;12312-2 passent à <strong className="text-white">1&nbsp;€ la paire jusqu&apos;à
        6 paires</strong> (et moins encore au-delà), à récupérer en retrait sur Toulouse.
      </p>
      <p className="text-xs text-white/50 mb-5">
        Le code est automatiquement appliqué via les boutons ci-dessous. L&apos;adresse et les
        créneaux de retrait vous sont communiqués par email après la commande.
      </p>
      <div className="flex flex-wrap gap-2.5">
        {PRICE_STEPS.map((s, i) => {
          const prix = s.total - REDUCTION;
          return (
            <a
              key={s.qty}
              href={`${SHOPIFY_STORE}/cart/${GLASSES_VARIANT_NUMERIC_IDS[i]}:1?discount=TOULOUSE`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#22D3EE]/40 text-sm font-bold text-white hover:bg-[#22D3EE]/10 hover:border-[#22D3EE] transition-colors"
            >
              <ShoppingCart size={13} className="text-[#22D3EE]" />
              {s.qty} paire{s.qty > 1 ? "s" : ""} — {fmt(prix)}&nbsp;€
            </a>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-white/45 flex items-center gap-1.5">
        <TicketPercent size={13} className="text-[#22D3EE]" />
        Code <strong className="text-white/70">TOULOUSE</strong> valable jusqu&apos;au 13 août 2026 — aussi saisissable manuellement au paiement.
      </p>
    </section>
  );
}
