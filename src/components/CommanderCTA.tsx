import Link from "next/link";
import { ShoppingCart } from "lucide-react";

// Bloc CTA « Commander mes lunettes » — retour à la fiche produit de
// l'accueil depuis les pages secondaires.
export default function CommanderCTA() {
  return (
    <div className="max-w-3xl mx-auto px-6 mt-12">
      <div className="glass rounded-2xl p-6 border border-[#FFB800]/25 text-center">
        <p className="text-white font-black text-lg mb-1">Prêt pour le 12 août 2026 ?</p>
        <p className="text-sm text-white/70 mb-4">
          Lunettes éclipse certifiées ISO 12312-2, dès 3,99 € — livraison gratuite en France.
        </p>
        <Link
          href="/#produits"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black bg-[#FFB800] text-black hover:bg-[#e6a700] transition-colors"
        >
          <ShoppingCart size={16} /> Commander mes lunettes
        </Link>
      </div>
    </div>
  );
}
