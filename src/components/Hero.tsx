"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowDown, ShieldCheck } from "lucide-react";

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
  const [time, setTime] = useState<ReturnType<typeof getLeft> | null>(null);
  useEffect(() => {
    setTime(getLeft());
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
        <div className="anim-fade-in-left text-center lg:text-left">
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
            <a
              href="#produits"
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-base glow-blue hover:bg-gray-100 hover:scale-[1.03] active:scale-[0.97] transition-all text-center"
            >
              Commandez vos lunettes d'Éclipse ici
            </a>
          </div>
        </div>

        {/* ── Right: 3D glasses + eclipse ── */}
        <div className="anim-fade-in-scale relative flex flex-col gap-4">
          {/* Compte à rebours */}
          <div className="flex justify-center gap-2 md:gap-4 mb-2">
            {[
              { val: time?.j ?? 0, label: "Jours" },
              { val: time?.h ?? 0, label: "Heures" },
              { val: time?.m ?? 0, label: "Min" },
              { val: time?.s ?? 0, label: "Sec" },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex flex-col items-center">
                <div className="glass rounded-xl px-2 py-2 md:px-4 md:py-3 border border-red-500/40 min-w-[52px] md:min-w-[64px] text-center">
                  <span suppressHydrationWarning className="text-2xl md:text-4xl font-black tabular-nums text-red-500" style={{ textShadow: "0 0 16px rgba(239,68,68,0.8)" }}>
                    {i === 0 ? val : pad(val)}
                  </span>
                </div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/70 mt-1">{label}</span>
              </div>
            ))}
          </div>

          {/* Lunettes image */}
          <div className="relative h-[300px] lg:h-[380px]">
            <div className="absolute inset-0 rounded-full bg-[#22D3EE] opacity-[0.1] blur-[80px] scale-75" />
            <Image
              src="/lunette-eclipse.png"
              alt="Lunettes éclipse solaire certifiées ISO 12312-2 pour observer l'éclipse du 12 août 2026"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative z-10 object-contain drop-shadow-2xl"
            />

            {/* ISO badge floating next to glasses */}
            <div className="anim-fade-in-right absolute top-6 right-2 flex flex-col gap-2">
              {isoCerts.map((cert, i) => (
                <a
                  key={cert.code}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${i % 2 === 0 ? "anim-float-y" : "anim-float-y-rev"} flex items-center gap-2 px-3 py-2 glass rounded-xl text-xs shadow-lg hover:scale-105 transition-transform`}
                >
                  <span className="badge-bounce">
                    <div className="w-0 h-0" style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid #22D3EE" }} />
                  </span>
                  <ShieldCheck size={12} className="text-[#22D3EE]" />
                  <div>
                    <div className="text-[#FFB800] font-bold text-[11px] leading-none">{cert.code}</div>
                    <div className="text-white/82 text-[9px]">{cert.lab}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="anim-scroll-bob absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/72">
        <span className="text-xs uppercase tracking-widest">Découvrir</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
