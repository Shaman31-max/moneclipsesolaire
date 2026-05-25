"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";

const links = [
  { href: "/#produits", label: "Produits" },
  { href: "/#eclipse", label: "L'Éclipse" },
  { href: "/#faq", label: "FAQ" },
  { href: "/b2b", label: "Partenaires B2B", badge: true },
  { href: "/compte", label: "Mon Compte" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <span className="font-bold text-base tracking-tight hidden sm:block">
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

        {/* Right side: Cart + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="relative p-2 text-white/92 hover:text-[#22D3EE] transition-colors">
            <ShoppingCart size={18} />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#22D3EE] text-[9px] flex items-center justify-center text-white font-bold">
              0
            </span>
          </button>

          <a
            href="/#produits"
            className="px-4 py-2 rounded-full bg-[#FFB800] text-black text-sm font-semibold hover:bg-[#FFC933] transition-all duration-200 glow-gold whitespace-nowrap"
          >
            Commander
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 flex-shrink-0"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-t border-[#22D3EE]/10"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-white/93 hover:text-[#22D3EE] py-2 border-b border-white/5 transition-colors"
                >
                  <span>{l.label}</span>
                  {l.badge && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#22D3EE]/20 text-[9px] font-bold text-[#FFB800] border border-[#22D3EE]/30">
                      PRO
                    </span>
                  )}
                </a>
              ))}
              <a
                href="/#produits"
                onClick={() => setOpen(false)}
                className="mt-1 px-4 py-3 rounded-full bg-[#22D3EE] text-white text-center font-semibold text-sm"
              >
                Commander maintenant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
