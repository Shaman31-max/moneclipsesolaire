"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArrowDown, ShieldCheck, Star, Zap, ExternalLink } from "lucide-react";

const ECLIPSE = new Date("2026-08-12T10:00:00+02:00");
function getLeft() {
  const diff = ECLIPSE.getTime() - Date.now();
  if (diff <= 0) return { j: 0, h: 0, m: 0, s: 0 };
  return {
    j: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}
function pad(n: number) { return String(n).padStart(2, "0"); }

const GlassesModel = dynamic(() => import("./GlassesModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-28 h-28 rounded-full border-4 border-[#22D3EE]/30 border-t-[#22D3EE] animate-spin" />
    </div>
  ),
});


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
  const [time, setTime] = useState(getLeft());
  useEffect(() => {
    const id = setInterval(() => setTime(getLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#22D3EE] opacity-[0.04] blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-[#FFB800] opacity-[0.03] blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-start pt-6 pb-16">
        {/* ── Left: text ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="block text-white">Vivez l'éclipse</span>
            <span className="block gradient-text-blue glow-blue-text">solaire du</span>
            <span className="block text-white">12 Août 2026</span>
          </h1>

          <p className="text-white/92 text-lg mb-8 max-w-md leading-relaxed">
            Le 12 août 2026, la France vivra sa plus impressionnante éclipse solaire depuis 1999. Ne ratez pas cet évènement unique qui ne se reproduira pas avant 2081.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#produits"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-base glow-blue hover:bg-gray-100 transition-colors text-center"
            >
              Commandez vos lunettes d'Éclipse ici
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
          {/* Compte à rebours */}
          <div className="flex justify-center gap-2 md:gap-4 mb-2">
            {[
              { val: time.j, label: "Jours" },
              { val: time.h, label: "Heures" },
              { val: time.m, label: "Min" },
              { val: time.s, label: "Sec" },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex flex-col items-center">
                <div className="glass rounded-xl px-2 py-2 md:px-4 md:py-3 border border-red-500/40 min-w-[52px] md:min-w-[64px] text-center">
                  <span className="text-2xl md:text-4xl font-black tabular-nums text-red-500" style={{ textShadow: "0 0 16px rgba(239,68,68,0.8)" }}>
                    {i === 0 ? val : pad(val)}
                  </span>
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/70 mt-1">{label}</span>
              </div>
            ))}
          </div>

          {/* Lunettes image */}
          <div className="relative h-[300px] lg:h-[380px] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#22D3EE] opacity-[0.1] blur-[80px] scale-75" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lunette-eclipse.png"
              alt="Lunettes Éclipse Pro"
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            />

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
                    <div className="w-0 h-0" style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid #22D3EE" }} />
                  </motion.span>
                  <ShieldCheck size={12} className="text-[#22D3EE]" />
                  <div>
                    <div className="text-[#FFB800] font-bold text-[11px] leading-none">{cert.code}</div>
                    <div className="text-white/82 text-[9px]">{cert.lab}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

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
