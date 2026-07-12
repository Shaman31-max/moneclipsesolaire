import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, MapPin, Eye, ShoppingCart, ArrowRight } from "lucide-react";
import { VILLES, getVille } from "@/lib/villes";

// Pages SEO locales : une page statique par grande ville française.

export function generateStaticParams() {
  return VILLES.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville: slug } = await params;
  const ville = getVille(slug);
  if (!ville) return {};
  return {
    title: `Éclipse solaire du 12 août 2026 ${ville.in} : heure, occultation et où l'observer | MonEclipseSolaire.fr`,
    description: `Éclipse du 12 août 2026 ${ville.in} : maximum vers ${ville.maxTime}, environ ${ville.occultation} % du Soleil occulté. Horaires, meilleurs spots d'observation et conseils de sécurité.`,
    alternates: { canonical: `https://moneclipsesolaire.fr/eclipse/${ville.slug}` },
  };
}

export default async function VillePage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville: slug } = await params;
  const ville = getVille(slug);
  if (!ville) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ville.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://moneclipsesolaire.fr" },
      { "@type": "ListItem", position: 2, name: "Éclipse 2026 ville par ville", item: "https://moneclipsesolaire.fr/eclipse/villes" },
      { "@type": "ListItem", position: 3, name: `Éclipse ${ville.in}` },
    ],
  };

  const nearby = ville.nearby.map((s) => getVille(s)).filter((v) => v !== undefined);

  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto">
        <nav className="text-xs text-white/50 mb-6 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[#FFB800] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/eclipse/villes" className="hover:text-[#FFB800] transition-colors">Éclipse ville par ville</Link>
          <span>/</span>
          <span className="text-white/80">{ville.name}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
          Éclipse solaire du 12 août 2026 {ville.in}&nbsp;: horaires et conseils d&apos;observation
        </h1>

        {/* Encadré réponse directe */}
        <div className="glass rounded-2xl p-5 border border-[#FFB800]/25 mb-10 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Maximum</div>
            <div className="text-xl font-black text-[#FFB800]">{ville.maxTime}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Soleil occulté</div>
            <div className="text-xl font-black text-[#FFB800]">≈ {ville.occultation} %</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">Région</div>
            <div className="text-sm font-bold text-white mt-1.5">{ville.region}</div>
          </div>
        </div>

        <div className="space-y-5 text-[15px] text-white/85 leading-relaxed">
          <p>{ville.intro}</p>

          <h2 className="text-2xl font-black text-white mt-10 mb-3 flex items-center gap-2">
            <Clock size={20} className="text-[#FFB800]" /> Les horaires de l&apos;éclipse {ville.in}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-3 text-white/60">Début de l&apos;éclipse partielle</td>
                  <td className="p-3 font-bold text-white">{ville.startTime}</td>
                </tr>
                <tr className="border-b border-white/10 bg-[#FFB800]/5">
                  <td className="p-3 text-white/60">Maximum (≈ {ville.occultation} % du Soleil occulté)</td>
                  <td className="p-3 font-black text-[#FFB800]">{ville.maxTime}</td>
                </tr>
                <tr>
                  <td className="p-3 text-white/60">Fin de l&apos;observation</td>
                  <td className="p-3 font-bold text-white">{ville.endTime}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/45 italic">
            Horaires locaux indicatifs, arrondis. Données astronomiques de référence : IMCCE / Observatoire de Paris.
            Particularité de cette éclipse : elle a lieu en fin de journée, avec un Soleil bas sur l&apos;horizon <strong className="text-white/70">ouest</strong>.
          </p>

          <h2 className="text-2xl font-black text-white mt-10 mb-3 flex items-center gap-2">
            <Eye size={20} className="text-[#FFB800]" /> Que verra-t-on depuis {ville.name}&nbsp;?
          </h2>
          <p>{ville.experience}</p>
          <p>
            Attention : même avec ≈ {ville.occultation} % du Soleil masqué, le croissant restant est
            aussi dangereux pour la rétine qu&apos;en plein midi.{" "}
            <strong className="text-white">Les lunettes certifiées ISO 12312-2 sont indispensables du début à la fin</strong> —
            voir <Link href="/blog/lunettes-de-soleil-eclipse-danger" className="text-[#FFB800] underline underline-offset-2">pourquoi les lunettes de soleil ne suffisent pas</Link>.
          </p>

          <h2 className="text-2xl font-black text-white mt-10 mb-3 flex items-center gap-2">
            <MapPin size={20} className="text-[#FFB800]" /> Les meilleurs spots d&apos;observation {ville.in}
          </h2>
          <p className="text-sm text-white/60">
            Le critère n°1 pour cette éclipse de fin de journée : un <strong className="text-white/80">horizon ouest parfaitement dégagé</strong>.
          </p>
          <ul className="space-y-3 mt-2">
            {ville.spots.map((s) => (
              <li key={s.name} className="glass rounded-xl p-4 border border-white/10">
                <div className="font-bold text-white mb-1">{s.name}</div>
                <div className="text-sm text-white/70">{s.desc}</div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-black text-white mt-10 mb-3">Conseils spécifiques pour {ville.name}</h2>
          <p>{ville.conseils}</p>
        </div>

        {/* CTA principal */}
        <div className="mt-12 glass rounded-2xl p-6 border border-[#FFB800]/25 text-center">
          <p className="text-white font-black text-lg mb-1">Prêt pour le 12 août {ville.in}&nbsp;?</p>
          <p className="text-sm text-white/70 mb-4">
            Lunettes éclipse certifiées ISO 12312-2, dès 2,99 € — livraison en 72 h à {ville.name} et partout en France.
          </p>
          <Link
            href="/#produits"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black bg-[#FFB800] text-black hover:bg-[#e6a700] transition-colors"
          >
            <ShoppingCart size={16} /> Commander mes lunettes
          </Link>
        </div>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-black text-white mb-5">Questions fréquentes — éclipse {ville.in}</h2>
          <div className="space-y-4">
            {ville.faq.map((f) => (
              <div key={f.q} className="glass rounded-xl p-5 border border-white/10">
                <h3 className="font-bold text-white mb-2">{f.q}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Maillage villes voisines */}
        {nearby.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-black text-white mb-4">L&apos;éclipse dans les villes voisines</h2>
            <div className="flex flex-wrap gap-3">
              {nearby.map((v) => (
                <Link
                  key={v.slug}
                  href={`/eclipse/${v.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/15 text-sm text-white/80 hover:border-[#FFB800]/50 hover:text-[#FFB800] transition-colors"
                >
                  Éclipse {v.in} (≈ {v.occultation} %) <ArrowRight size={13} />
                </Link>
              ))}
              <Link
                href="/eclipse/villes"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#FFB800]/30 text-sm text-[#FFB800] hover:bg-[#FFB800]/10 transition-colors"
              >
                Toutes les villes <ArrowRight size={13} />
              </Link>
            </div>
          </section>
        )}

        <p className="mt-10 text-sm text-white/55">
          Pour tout comprendre de l&apos;événement, consultez notre{" "}
          <Link href="/blog/eclipse-solaire-12-aout-2026-guide" className="text-[#FFB800] underline underline-offset-2">
            guide complet de l&apos;éclipse du 12 août 2026
          </Link>{" "}
          et nos conseils pour{" "}
          <Link href="/blog/verifier-lunettes-eclipse-iso-12312-2" className="text-[#FFB800] underline underline-offset-2">
            vérifier la certification de vos lunettes
          </Link>.
        </p>
      </article>
    </main>
  );
}
