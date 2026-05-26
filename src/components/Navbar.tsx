"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useB2BCart } from "@/contexts/B2BCartContext";

const links = [
  { href: "/#produits", label: "Commander" },
  { href: "/#eclipse", label: "L'Éclipse" },
  { href: "/#faq", label: "FAQ" },
  { href: "/b2b", label: "Partenaires B2B", badge: true },
  { href: "/suivi", label: "Suivre ma commande" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, checkoutUrl } = useCart();
  const { count: b2bCount, setSidebarOpen } = useB2BCart();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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

        {/* Desktop nav links */}
        <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex items-center gap-1.5 text-sm text-white/93 hover:text-[#22D3EE] transition-colors duration-200 tracking-wide whitespace-nowrap"
            >
              {l.label}
              {l.badge && (
                <span className="px-1.5 py-0.5 rounded-full bg-[#22D3EE]/20 text-[9px] font-bold text-[#FFB800] border border-[#22D3EE]/30">
                  PRO
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Spacer on smaller screens */}
        <div className="flex-1 xl:hidden" />

        {/* B2B cart button */}
        {b2bCount > 0 && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-black text-black bg-[#FFB800] hover:bg-[#e6a700] transition-colors flex-shrink-0"
            style={{ boxShadow: "0 0 18px rgba(255,184,0,0.45)" }}
          >
            <ShoppingCart size={15} />
            <span className="hidden sm:inline">Panier B2B</span>
            <span className="w-5 h-5 rounded-full bg-black/25 text-[10px] font-bold flex items-center justify-center">
              {b2bCount}
            </span>
          </button>
        )}

        {/* B2C cart button */}
        {totalItems > 0 && (
          <a
            href={checkoutUrl}
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
              {l.badge && (
                <span className="px-1.5 py-0.5 rounded-full bg-[#22D3EE]/20 text-[9px] font-bold text-[#FFB800] border border-[#22D3EE]/30">
                  PRO
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
