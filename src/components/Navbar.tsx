"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { trackBeginCheckout } from "@/lib/analytics";

const ECLIPSE = new Date("2026-08-12T10:00:00+02:00");
function getLeft() {
  const diff = ECLIPSE.getTime() - Date.now();
  if (diff <= 0) return { j: 0, h: 0, m: 0 };
  return {
    j: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
  };
}
function pad(n: number) { return String(n).padStart(2, "0"); }

// Compte à rebours compact intégré au header, à droite du logo.
function NavCountdown() {
  const [time, setTime] = useState<ReturnType<typeof getLeft> | null>(null);
  useEffect(() => {
    setTime(getLeft());
    const id = setInterval(() => setTime(getLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-1 flex-shrink-0" aria-label="Compte à rebours avant l'éclipse du 12 août 2026">
      {[
        { val: time?.j ?? 0, label: "j", padded: false },
        { val: time?.h ?? 0, label: "h", padded: true },
        { val: time?.m ?? 0, label: "min", padded: true },
      ].map(({ val, label, padded }) => (
        <div
          key={label}
          className="glass rounded-lg px-1.5 py-0.5 border border-red-500/40 text-center"
        >
          <span
            suppressHydrationWarning
            className="text-sm font-black tabular-nums text-red-500"
            style={{ textShadow: "0 0 10px rgba(239,68,68,0.8)" }}
          >
            {padded ? pad(val) : val}
          </span>
          <span className="text-[8px] uppercase tracking-wide text-white/70 ml-0.5">{label}</span>
        </div>
      ))}
    </div>
  );
}

const links = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
  { href: "/eclipse", label: "L'Éclipse" },
  { href: "/certifications", label: "Nos certifications" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/suivi", label: "Suivre ma commande" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, checkoutUrl, items } = useCart();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`anim-slide-down-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-[0_4px_30px_rgba(30,127,255,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-7 h-7 relative">
            <div className="absolute inset-0 rounded-full bg-[#22D3EE] opacity-80 corona-pulse" />
            <div className="absolute inset-[3px] rounded-full bg-[#060412]" />
          </div>
          <span className="font-bold text-base tracking-tight">
            <span style={{ background: "linear-gradient(135deg, #22D3EE, #FFB800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>MonEclipse</span>
            <span className="text-white">Solaire</span>
            <span style={{ background: "linear-gradient(135deg, #FFB800, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>.fr</span>
          </span>
        </Link>

        <NavCountdown />

        {/* Desktop nav links */}
        <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex items-center gap-1.5 text-sm text-white/93 hover:text-[#22D3EE] transition-colors duration-200 tracking-wide whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Spacer on smaller screens */}
        <div className="flex-1 xl:hidden" />

        {/* B2C cart button */}
        {totalItems > 0 && (
          <a
            href={checkoutUrl}
            onClick={() => trackBeginCheckout(items)}
            className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-black text-black bg-[#FFB800] hover:bg-[#e6a700] transition-colors flex-shrink-0"
            style={{ boxShadow: "0 0 18px rgba(255,184,0,0.45)" }}
          >
            <ShoppingCart size={15} />
            <span className="hidden sm:inline">Panier</span>
            <span className="w-5 h-5 rounded-full bg-black/25 text-[10px] font-bold flex items-center justify-center">
              {totalItems}
            </span>
          </a>
        )}
      </div>

      {/* Mobile links strip */}
      <div className="xl:hidden glass-dark border-t border-[#22D3EE]/08">
        <div className="flex overflow-x-auto scrollbar-none px-4 gap-1 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-white/80 hover:text-[#22D3EE] whitespace-nowrap transition-colors flex-shrink-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
