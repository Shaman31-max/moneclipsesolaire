import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ShoppingCart, ShieldCheck } from "lucide-react";
import { ENSEIGNES, getEnseigne } from "@/lib/enseignes";

// Pages transactionnelles « enseignes » : guides d'achat honnêtes répondant
// aux recherches « lunettes éclipse solaire {enseigne} ». Non affiliées.

export function generateStaticParams() {
  return ENSEIGNES.map((e) => ({ enseigne: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ enseigne: string }> }): Promise<Metadata> {
  const { enseigne: slug } = await params;
  const e = getEnseigne(slug);
  if (!e) return {};
  return {
    title: `Lunettes éclipse solaire ${e.chez} : ce qu'il faut vérifier avant d'acheter (2026) | MonEclipseSolaire.fr`,
    description: `Trouve-t-on des lunettes d'éclipse certifiées ISO 12312-2 ${e.chez} ? Disponibilité, points à vérifier et alternative en ligne avec certificat vérifiable.`,
    alternates: { canonical: `https://moneclipsesolaire.fr/acheter/${e.slug}` },
  };
}

const CHECKLIST = [
  "La mention ISO 12312-2 imprimée sur la monture, avec le nom du fabricant",
  "Un certificat de laboratoire consultable (ex. DIN CERTCO) — pas seulement un logo",
  "Un vendeur identifiable, avec une adresse en Europe",
  "Un filtre parfaitement intact : ni rayure, ni pliure, ni décollement",
  "Le test visuel à réception : portées en intérieur, vous ne devez strictement rien voir",
];

export default async function EnseignePage({ params }: { params: Promise<{ enseigne: string }> }) {
  const { enseigne: slug } = await params;
  const e = getEnseigne(slug);
  if (!e) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: e.faq.map((f) => ({
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
      { "@type": "ListItem", position: 2, name: "Où acheter ses lunettes d'éclipse", item: "https://moneclipsesolaire.fr/acheter" },
      { "@type": "ListItem", position: 3, name: `Lunettes éclipse ${e.chez}` },
    ],
  };

  const autres = ENSEIGNES.filter((x) => x.slug !== e.slug);

  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="max-w-3xl mx-auto">
        <nav className="text-xs text-white/50 mb-6 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[#FFB800] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/acheter" className="hover:text-[#FFB800] transition-colors">Où acheter</Link>
          <span>/</span>
          <span className="text-white/80 capitalize">{e.name}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
          Lunettes éclipse solaire {e.chez}&nbsp;: le guide d&apos;achat 2026
        </h1>

        <div className="space-y-5 text-[15px] text-white/85 leading-relaxed">
          <h2 className="text-2xl font-black text-white mt-2 mb-3">
            Trouve-t-on des lunettes d&apos;éclipse {e.chez}&nbsp;?
          </h2>
          <p>{e.dispo}</p>

          <h2 className="text-2xl font-black text-white mt-10 mb-3">
            Les 5 points à vérifier, où que vous achetiez
          </h2>
          <ul className="space-y-2.5">
            {CHECKLIST.map((c) => (
              <li key={c} className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-[#FFB800] flex-shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-white/60">
            Le mode d&apos;emploi détaillé de chaque vérification :{" "}
            <Link href="/blog/verifier-lunettes-eclipse-iso-12312-2" className="text-[#FFB800] underline underline-offset-2">
              comment vérifier des lunettes d&apos;éclipse
            </Link>.
          </p>

          <h2 className="text-2xl font-black text-white mt-10 mb-3">{e.angleTitle}</h2>
          {e.angle.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h2 className="text-2xl font-black text-white mt-10 mb-3">
            L&apos;alternative en ligne&nbsp;: acheter en direct, certificat à l&apos;appui
          </h2>
          <p>
            Nous vendons en direct, sans intermédiaire, des lunettes d&apos;éclipse{" "}
            <strong className="text-white">certifiées ISO 12312-2 par DIN CERTCO</strong> — le
            certificat est consultable sur notre{" "}
            <Link href="/certifications" className="text-[#FFB800] underline underline-offset-2">page certifications</Link>.
            Dès 3,99&nbsp;€ la paire, tarifs dégressifs jusqu&apos;à 24 paires, livraison en
            72&nbsp;h partout en France, directement en boîte aux lettres.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 glass rounded-2xl p-6 border border-[#FFB800]/25 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck size={18} className="text-[#22D3EE]" />
            <span className="text-xs font-bold text-[#22D3EE]">Certificat DIN CERTCO vérifiable</span>
          </div>
          <p className="text-white font-black text-lg mb-1">Équipé en 72 h, sans course aux magasins</p>
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

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-black text-white mb-5">Questions fréquentes</h2>
          <div className="space-y-4">
            {e.faq.map((f) => (
              <div key={f.q} className="glass rounded-xl p-5 border border-white/10">
                <h3 className="font-bold text-white mb-2">{f.q}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Autres enseignes */}
        <section className="mt-12">
          <h2 className="text-lg font-black text-white mb-4">Les autres points de vente</h2>
          <div className="flex flex-wrap gap-3">
            {autres.map((x) => (
              <Link
                key={x.slug}
                href={`/acheter/${x.slug}`}
                className="px-4 py-2 rounded-xl border border-white/15 text-sm text-white/80 hover:border-[#FFB800]/50 hover:text-[#FFB800] transition-colors capitalize"
              >
                {x.name}
              </Link>
            ))}
          </div>
        </section>

        <p className="mt-10 text-xs text-white/40 italic">
          MonEclipseSolaire.fr est un site indépendant, sans aucune affiliation avec {e.name === "pharmacie" ? "les officines citées" : e.name}.
          Les marques citées le sont uniquement à titre d&apos;identification. Les informations de
          disponibilité sont générales et peuvent varier selon les points de vente.
        </p>
      </article>
    </main>
  );
}
