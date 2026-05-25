"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowDown, ShieldCheck, Star, Zap, ExternalLink } from "lucide-react";

const GlassesModel = dynamic(() => import("./GlassesModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-28 h-28 rounded-full border-4 border-[#1E7FFF]/30 border-t-[#1E7FFF] animate-spin" />
    </div>
  ),
});

const AnimatedEclipse = dynamic(() => import("./AnimatedEclipse"), { ssr: false });

const badges = [
  { icon: ShieldCheck, text: "ISO 12312-2 Certifiées" },
];

const isoCerts = [
  {
    code: "ISO 12312-2",
    label: "Certifié",
    lab: "DIN CERTCO Europe",
    href: "https://www.iso.org/standard/59289.html",
  },
  {
    code: "CE 2797",
    label: "Directive EPI",
    lab: "Labo. notifié UE",
    href: "https://ec.europa.eu/growth/single-market/ce-marking_en",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#1E7FFF] opacity-[0.04] blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-[#4DD9FF] opacity-[0.03] blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-center py-16">
        {/* ── Left: text ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#1E7FFF]/25 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#4DD9FF] corona-pulse" />
            <span className="text-xs font-medium text-[#4DD9FF] uppercase tracking-widest">
              Éclipse Totale · 12 Août 2026 · France
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="block text-white">Observez</span>
            <span className="block gradient-text-blue glow-blue-text">l'Éclipse</span>
            <span className="block text-white">en toute</span>
            <span className="block text-white">sécurité</span>
          </h1>

          <p className="text-white/92 text-lg mb-8 max-w-md leading-relaxed">
            Le 12 août 2026, la France vivra sa plus impressionnante éclipse solaire depuis 1999.
          </p>

          {/* Quality badges */}
          <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-4">
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/93 border border-[#1E7FFF]/10">
                <Icon size={12} className="text-[#4DD9FF]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-8 justify-center lg:justify-start">
            <span className="text-xs text-white/65">Livraison en 2 séries de production —</span>
            <a href="#commande" className="text-xs text-[#4DD9FF] hover:text-white underline transition-colors">
              Voir les explications
            </a>
          </div>

          {/* ISO Certifications with arrows */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            {isoCerts.map((cert, i) => (
              <motion.a
                key={cert.code}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-[#1E7FFF]/20 hover:border-[#1E7FFF]/50 transition-all duration-200"
              >
                {/* Animated arrow */}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  <div
                    className="w-0 h-0 flex-shrink-0"
                    style={{
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderLeft: "7px solid #1E7FFF",
                    }}
                  />
                </motion.span>
                <ShieldCheck size={14} className="text-[#1E7FFF] flex-shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-[#4DD9FF] leading-none">{cert.code} {cert.label}</div>
                  <div className="text-[10px] text-white/82 mt-0.5 flex items-center gap-1">
                    {cert.lab} <ExternalLink size={8} className="opacity-60" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#produits"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-base glow-blue hover:bg-gray-100 transition-colors text-center"
            >
              Découvrir nos produits
            </motion.a>
            <motion.a
              href="#eclipse"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full glass border border-[#1E7FFF]/25 text-white font-semibold text-base hover:border-[#1E7FFF]/60 transition-all text-center"
            >
              En savoir plus
            </motion.a>
          </div>
        </motion.div>

        {/* ── Right: 3D glasses + eclipse ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative flex flex-col gap-4"
        >
          {/* 3D Glasses */}
          <div className="relative h-[300px] lg:h-[340px]">
            <div className="absolute inset-0 rounded-full bg-[#1E7FFF] opacity-[0.08] blur-[60px] scale-75" />
            <GlassesModel />

            {/* ISO badge floating next to glasses */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute top-6 right-2 flex flex-col gap-2"
            >
              {isoCerts.map((cert, i) => (
                <motion.a
                  key={cert.code}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-2 px-3 py-2 glass rounded-xl text-xs shadow-lg hover:scale-105 transition-transform"
                >
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.5 }}>
                    <div className="w-0 h-0" style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid #1E7FFF" }} />
                  </motion.span>
                  <ShieldCheck size={12} className="text-[#1E7FFF]" />
                  <div>
                    <div className="text-[#4DD9FF] font-bold text-[11px] leading-none">{cert.code}</div>
                    <div className="text-white/82 text-[9px]">{cert.lab}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Eclipse canvas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative h-[220px] lg:h-[260px] rounded-2xl overflow-hidden glass border border-[#1E7FFF]/10"
          >
            <AnimatedEclipse />
            <div className="absolute bottom-3 left-0 right-0 flex justify-center">
              <div className="px-3 py-1 rounded-full bg-[#000510]/80 text-[10px] text-white/90 border border-[#1E7FFF]/10">
                Simulation en direct · Éclipse totale du 12 août 2026
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/72"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Découvrir</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
