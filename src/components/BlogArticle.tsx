import Link from "next/link";
import { Clock, ArrowLeft, ShoppingCart } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

// Gabarit d'article de blog : en-tête, JSON-LD Article, contenu typographié
// et CTA final vers la fiche produit.
export default function BlogArticle({ post, children }: { post: BlogPost; children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "fr-FR",
    author: {
      "@type": "Organization",
      name: "MonEclipseSolaire.fr",
      url: "https://moneclipsesolaire.fr/qui-sommes-nous",
    },
    publisher: { "@id": "https://moneclipsesolaire.fr/#organization" },
    mainEntityOfPage: `https://moneclipsesolaire.fr/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-[#FFB800] transition-colors mb-6">
          <ArrowLeft size={12} /> Tous les articles
        </Link>

        <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">{post.title}</h1>
        <div className="flex items-center gap-3 text-xs text-white/50 mb-10 pb-6 border-b border-white/10">
          <span>{post.dateLabel}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {post.readingMinutes} min de lecture
          </span>
          <span>· Par Julien &amp; Estelle</span>
        </div>

        <div className="blog-content space-y-5 text-[15px] text-white/85 leading-relaxed [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-black [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-white [&_a]:text-[#FFB800] [&_a]:underline [&_a]:underline-offset-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5">
          {children}
        </div>

        {/* CTA produit */}
        <div className="mt-12 glass rounded-2xl p-6 border border-[#FFB800]/25 text-center">
          <p className="text-white font-black text-lg mb-1">
            Prêt pour le 12 août 2026 ?
          </p>
          <p className="text-sm text-white/70 mb-4">
            Lunettes éclipse certifiées ISO 12312-2, dès 3,99 € — livraison gratuite en France.
          </p>
          <Link
            href="/#produits"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-white bg-[#FFB800] text-black hover:bg-[#e6a700] transition-colors"
          >
            <ShoppingCart size={16} /> Commander mes lunettes
          </Link>
        </div>
      </article>
    </main>
  );
}
