import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { ENSEIGNES } from "@/lib/enseignes";

export const metadata: Metadata = {
  title: "Où acheter des lunettes d'éclipse solaire en 2026 ? Enseignes et vérifications | MonEclipseSolaire.fr",
  description:
    "Amazon, Carrefour, Leclerc, Decathlon, Cultura, pharmacie, Fnac : où trouver des lunettes d'éclipse certifiées ISO 12312-2 et que vérifier avant d'acheter.",
  alternates: { canonical: "https://moneclipsesolaire.fr/acheter" },
};

// Hub des guides d'achat par enseigne.
export default function AcheterPage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <nav className="text-xs text-white/50 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#FFB800] transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-white/80">Où acheter</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
          Où acheter des lunettes d&apos;éclipse solaire en 2026&nbsp;?
        </h1>
        <p className="text-white/75 leading-relaxed mb-3">
          Grandes surfaces, enseignes culturelles, pharmacies, marketplaces : à l&apos;approche du
          12 août 2026, les lunettes d&apos;éclipse apparaissent un peu partout — avec des niveaux
          de fiabilité très variables. Nos guides passent en revue chaque circuit de vente&nbsp;:
          ce qu&apos;on y trouve vraiment, et ce qu&apos;il faut vérifier avant de payer.
        </p>
        <p className="text-sm text-white/55 mb-10">
          La règle d&apos;or, partout : mention <strong className="text-white/80">ISO 12312-2</strong>,
          fabricant identifié, certificat de laboratoire vérifiable —{" "}
          <Link href="/blog/verifier-lunettes-eclipse-iso-12312-2" className="text-[#FFB800] underline underline-offset-2">
            la checklist complète est ici
          </Link>.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {ENSEIGNES.map((e) => (
            <Link
              key={e.slug}
              href={`/acheter/${e.slug}`}
              className="glass rounded-2xl p-5 border border-white/10 hover:border-[#FFB800]/40 transition-colors group"
            >
              <div className="font-black text-white group-hover:text-[#FFB800] transition-colors capitalize mb-1">
                Lunettes éclipse {e.chez}
              </div>
              <div className="text-xs text-white/60 leading-relaxed line-clamp-2">{e.angleTitle}</div>
              <div className="text-xs text-[#FFB800] mt-2 flex items-center gap-1">
                Lire le guide <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-6 border border-[#FFB800]/25 text-center">
          <p className="text-white font-black text-lg mb-1">Le plus simple reste la vente directe</p>
          <p className="text-sm text-white/70 mb-4">
            Certificat DIN CERTCO consultable, dès 2,99 €, livraison 72 h en boîte aux lettres.
          </p>
          <Link
            href="/#produits"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black bg-[#FFB800] text-black hover:bg-[#e6a700] transition-colors"
          >
            <ShoppingCart size={16} /> Commander mes lunettes
          </Link>
        </div>
      </div>
    </main>
  );
}
