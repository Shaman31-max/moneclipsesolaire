import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import CommanderCTA from "@/components/CommanderCTA";

export const metadata: Metadata = {
  title: "Blog — Lunettes éclipse & éclipse du 12 août 2026 | MonEclipseSolaire.fr",
  description:
    "Guides et conseils pour observer l'éclipse solaire du 12 août 2026 en toute sécurité : choisir ses lunettes éclipse certifiées, horaires, vérification ISO 12312-2.",
  alternates: { canonical: "https://moneclipsesolaire.fr/blog" },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[calc(0.75rem+3px)] uppercase tracking-[0.3em] text-[#FFB800] mb-3 font-black">
          Blog
        </p>
        <h1 className="text-4xl font-black text-white mb-4">
          Tout savoir sur l&apos;éclipse du 12 août 2026
        </h1>
        <p className="text-white/70 text-sm md:text-base mb-12 max-w-2xl">
          Guides pratiques pour bien choisir vos lunettes d&apos;éclipse solaire, vérifier leur
          certification et profiter du grand rendez-vous astronomique de 2026.
        </p>

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block glass rounded-2xl p-6 border border-white/8 hover:border-[#FFB800]/40 transition-colors"
            >
              <div className="flex items-center gap-3 text-[11px] text-white/50 mb-2">
                <span>{post.dateLabel}</span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {post.readingMinutes} min de lecture
                </span>
              </div>
              <h2 className="text-xl font-black text-white mb-2">{post.title}</h2>
              <p className="text-sm text-white/70 leading-relaxed">{post.description}</p>
              <span className="inline-block mt-3 text-sm font-bold text-[#FFB800]">
                Lire l&apos;article →
              </span>
            </Link>
          ))}
        </div>
      </div>
      <CommanderCTA />
    </main>
  );
}
