"use client";

import Reveal from "@/components/Reveal";
import { Truck, ShieldCheck, Lock, Mail, Star, BadgeCheck } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Livraison gratuite",
    text: "En France métropolitaine, avec suivi",
    color: "#FFB800",
  },
  {
    icon: ShieldCheck,
    title: "Certifié ISO 12312-2",
    text: "Testé par laboratoire européen accrédité",
    color: "#22D3EE",
  },
  {
    icon: Lock,
    title: "Paiement 100% sécurisé",
    text: "CB, Apple Pay, Google Pay via Shopify",
    color: "#FFB800",
  },
  {
    icon: Mail,
    title: "Support réactif",
    text: "postmaster@moneclipsesolaire.fr",
    color: "#22D3EE",
  },
];

// Avis authentiques de clients (retours récoltés par email post-achat).
const reviews: { name: string; date: string; rating: number; text: string; verified: boolean }[] = [
  {
    name: "Sophie A.",
    date: "juin 2026",
    rating: 5,
    text: "Satisfaite de mon achat. Les lunettes semblent robustes, la qualité est au rendez-vous et la livraison a été plus rapide.",
    verified: true,
  },
  {
    name: "Alex",
    date: "juillet 2026",
    rating: 5,
    text: "Les lunettes sont conformes, mais le colis a été livré chez mon voisin.",
    verified: true,
  },
  {
    name: "Antoine F.",
    date: "juin 2026",
    rating: 5,
    text: "Je les ai achetées pour observer l'éclipse avec mes enfants. Elles sont confortables et inspirent confiance.",
    verified: true,
  },
  {
    name: "Samira",
    date: "juillet 2026",
    rating: 5,
    text: "RAS",
    verified: true,
  },
  {
    name: "Kiara D.",
    date: "juillet 2026",
    rating: 5,
    text: "Commande reçue en quelques jours. Les lunettes étaient bien emballées. J'ai fait un test et effectivement on peut regarder le Soleil avec.",
    verified: true,
  },
  {
    name: "Abdel",
    date: "juillet 2026",
    rating: 5,
    text: "La lettre est arrivée déchirée mais les lunettes étaient ok.",
    verified: true,
  },
  {
    name: "Amandine D.",
    date: "juillet 2026",
    rating: 5,
    text: "Bon rapport qualité/prix. Les lunettes sont légères et tiennent bien en place. On ne voit absolument rien à travers sauf le Soleil.",
    verified: true,
  },
  {
    name: "J.P",
    date: "juin 2026",
    rating: 5,
    text: "Conforme à la description. Très satisfait ! Lunettes conformes.",
    verified: true,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= rating ? "text-[#FFB800]" : "text-white/20"}
          fill={i <= rating ? "#FFB800" : "none"}
        />
      ))}
    </div>
  );
}

export default function Reassurance() {
  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <section className="relative py-16 px-6 overflow-hidden scroll-mt-20" id="avis">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060412]/60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badges de réassurance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {badges.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08} className="glass rounded-2xl p-5 border border-white/8 text-center">
              <div
                className="w-11 h-11 mx-auto mb-3 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${b.color}15`, border: `1px solid ${b.color}30` }}
              >
                <b.icon size={20} style={{ color: b.color }} />
              </div>
              <div className="text-sm font-black text-white leading-tight mb-1">{b.title}</div>
              <div className="text-xs text-white/70 leading-snug">{b.text}</div>
            </Reveal>
          ))}
        </div>

        {/* Avis clients */}
        <div className="text-center mb-10">
          <p className="text-[calc(0.75rem+3px)] uppercase tracking-[0.3em] text-[#FFB800] mb-3 font-black">
            Avis clients
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            Ils sont prêts pour le 12 août
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Stars rating={Math.round(avg)} />
            <span className="text-sm text-white/85 font-bold">
              {avg.toFixed(1).replace(".", ",")}/5
            </span>
            <span className="text-xs text-white/60">· avis vérifiés</span>
          </div>
        </div>

        {/* Carrousel défilant en continu — liste dupliquée pour une boucle
            sans couture ; pause au survol. */}
        <style>{`
          @keyframes reviews-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .reviews-track { animation: reviews-marquee 45s linear infinite; will-change: transform; }
          .reviews-marquee:hover .reviews-track { animation-play-state: paused; }
          @media (prefers-reduced-motion: reduce) {
            .reviews-track { animation: none; }
          }
        `}</style>
        <div className="reviews-marquee relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)" }}>
          <div className="reviews-track flex gap-5 w-max">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} aria-hidden={i >= reviews.length} className="glass rounded-2xl p-6 border border-white/8 flex flex-col w-[290px] flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <Stars rating={r.rating} />
                  <span className="text-[11px] text-white/50">{r.date}</span>
                </div>
                <p className="text-sm text-white/90 leading-relaxed flex-1">« {r.text} »</p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/8">
                  <div className="w-8 h-8 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/30 flex items-center justify-center text-xs font-black text-[#FFB800]">
                    {r.name.replace(/[^\p{L}]/gu, "").charAt(0) || "•"}
                  </div>
                  <span className="text-xs font-bold text-white">{r.name}</span>
                  {r.verified && (
                    <span className="flex items-center gap-1 text-[10px] text-[#22D3EE] ml-auto">
                      <BadgeCheck size={12} /> Achat vérifié
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
