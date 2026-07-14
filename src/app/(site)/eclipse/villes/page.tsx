import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { VILLES } from "@/lib/villes";

export const metadata: Metadata = {
  title: "Éclipse du 12 août 2026 ville par ville : horaires et occultation en France | MonEclipseSolaire.fr",
  description:
    "À quelle heure et à quel pourcentage verrez-vous l'éclipse du 12 août 2026 dans votre ville ? Horaires, taux d'occultation et meilleurs spots pour 21 grandes villes françaises.",
  alternates: { canonical: "https://moneclipsesolaire.fr/eclipse/villes" },
};

// Hub SEO local : liste des pages villes, triées par taux d'occultation.
export default function VillesPage() {
  const pct = (v: string) => Number(v.replace(",", "."));
  const villes = [...VILLES].sort((a, b) => pct(b.occultation) - pct(a.occultation));

  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <nav className="text-xs text-white/50 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#FFB800] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/eclipse" className="hover:text-[#FFB800] transition-colors">Éclipse 2026</Link>
          <span>/</span>
          <span className="text-white/80">Ville par ville</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
          L&apos;éclipse solaire du 12 août 2026, ville par ville
        </h1>
        <p className="text-white/75 leading-relaxed mb-3 max-w-2xl">
          Le 12 août 2026 en fin de journée, toute la France vivra une éclipse solaire partielle
          exceptionnelle — de ≈ 85 % du Soleil occulté à Strasbourg jusqu&apos;à ≈ 99,5 % sur la côte
          basque, à un souffle de la totalité. Sélectionnez votre ville pour connaître les horaires précis, le pourcentage
          d&apos;occultation et les meilleurs spots d&apos;observation.
        </p>
        <p className="text-xs text-white/45 italic mb-10">
          Quel que soit l&apos;endroit, une règle absolue : des lunettes certifiées ISO 12312-2 du
          début à la fin de l&apos;éclipse.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {villes.map((v) => (
            <Link
              key={v.slug}
              href={`/eclipse/${v.slug}`}
              className="glass rounded-2xl p-5 border border-white/10 hover:border-[#FFB800]/40 transition-colors group"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="font-black text-white group-hover:text-[#FFB800] transition-colors">{v.name}</span>
                <span className="text-lg font-black text-[#FFB800]">≈ {v.occultation} %</span>
              </div>
              <div className="text-xs text-white/55 mb-2">{v.region}</div>
              <div className="text-xs text-white/70 flex items-center gap-1">
                Maximum vers <strong className="text-white">{v.maxTime}</strong>
                <ArrowRight size={12} className="ml-auto text-white/40 group-hover:text-[#FFB800] transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-6 border border-[#FFB800]/25 text-center">
          <p className="text-white font-black text-lg mb-1">Où que vous soyez le 12 août…</p>
          <p className="text-sm text-white/70 mb-4">
            …il vous faudra des lunettes certifiées ISO 12312-2. Dès 3,99 €, livraison 72 h partout en France.
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
