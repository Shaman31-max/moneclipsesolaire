"use client";

import Reveal from "@/components/Reveal";
import { ShieldCheck, ExternalLink, Award, CheckCircle } from "lucide-react";

const certs = [
  {
    code: "ISO 12312-2",
    year: "2015",
    label: "Protection oculaire solaire",
    lab: "DIN CERTCO — Europe",
    href: "https://www.iso.org/standard/59289.html",
    color: "#22D3EE",
  },
  {
    code: "CE 2797",
    year: "EN ISO",
    label: "Directive EPI 2016/425",
    lab: "Laboratoire notifié UE",
    href: "https://ec.europa.eu/growth/single-market/ce-marking_en",
    color: "#FFB800",
  },
];

export function IsoBadgeInline() {
  return (
    <div className="flex flex-wrap gap-3">
      {certs.map((c) => (
        <a
          key={c.code}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border transition-all duration-200 hover:scale-[1.03]"
          style={{ borderColor: `${c.color}30` }}
        >
          {/* Arrow indicator */}
          <div className="flex items-center gap-1 badge-bounce">
            <div
              className="w-0 h-0"
              style={{
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderLeft: `7px solid ${c.color}`,
              }}
            />
          </div>
          <ShieldCheck size={15} style={{ color: c.color }} className="flex-shrink-0" />
          <div>
            <div className="text-xs font-bold leading-none" style={{ color: c.color }}>
              {c.code}
            </div>
            <div className="text-[10px] text-white/85 mt-0.5 leading-none">{c.lab}</div>
          </div>
          <ExternalLink size={11} className="text-white/65 group-hover:text-white/92 transition-colors ml-1 flex-shrink-0" />
        </a>
      ))}
    </div>
  );
}

export default function IsoCertification() {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060412]/60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-[calc(0.75rem+3px)] uppercase tracking-[0.3em] text-[#FFB800] mb-3 font-black text-center">Certifications</p>

        {/* Bandeau avertissement rouge */}
        <Reveal className="mb-8 rounded-2xl border-2 border-red-500/60 bg-red-500/10 px-6 py-5 flex items-center gap-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-500/05 to-transparent pointer-events-none" />
          <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500/60 flex items-center justify-center">
            <span className="text-2xl">⚠️</span>
          </div>
          <div className="relative z-10">
            <p className="font-black text-red-400 text-base leading-snug">
              Attention : Observer le soleil sans protection certifiée ISO 12312-2 provoque des lésions oculaires permanentes.
            </p>
            <p className="font-bold text-red-400/80 text-sm mt-1">
              Ne jamais utiliser de lunettes de soleil ordinaires.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Left: Main cert */}
          <Reveal className="md:col-span-2">
            <div className="flex items-start gap-5">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center">
                  <Award size={28} className="text-[#22D3EE]" />
                </div>
                <div className="absolute -inset-1 rounded-2xl border border-[#22D3EE]/10 animate-ping" style={{ animationDuration: "3s" }} />
              </div>
              <div>
                <h3 className="text-xl font-black text-white mb-1">
                  Certifications officielles
                </h3>
                <p className="text-sm text-white/90 mb-2 max-w-md">
                  Nos lunettes et nos filtres sont testés dans un laboratoire européen accrédité.
                </p>
                <p className="text-sm text-white/70 mb-4 max-w-md">
                  Le certificat peut être consulté{" "}
                  <a
                    href="https://www.ccqs.com/eu/certificateverification/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors"
                  >
                    ici →
                  </a>
                </p>
                <div className="flex flex-wrap gap-3">
                  {certs.map((c, i) => (
                    <a
                      key={c.code}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 px-5 py-3 rounded-xl glass border transition-all duration-200 hover:scale-[1.04]"
                      style={{ borderColor: `${c.color}25` }}
                    >
                      {/* Animated arrow */}
                      <div className="badge-bounce flex-shrink-0" style={{ animationDelay: `${i * 0.3}s` }}>
                        <div
                          className="w-0 h-0"
                          style={{
                            borderTop: "6px solid transparent",
                            borderBottom: "6px solid transparent",
                            borderLeft: `9px solid ${c.color}`,
                          }}
                        />
                      </div>

                      <ShieldCheck size={18} style={{ color: c.color }} className="flex-shrink-0" />

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black" style={{ color: c.color }}>{c.code}</span>
                          <span
                            className="text-[10px] px-1.5 py-0.5 rounded font-bold"
                            style={{ backgroundColor: `${c.color}20`, color: c.color }}
                          >
                            :{c.year}
                          </span>
                        </div>
                        <div className="text-xs text-white/85 mt-0.5">{c.label}</div>
                        <div className="text-[11px] text-white/78 flex items-center gap-1">
                          {c.lab}
                          <ExternalLink size={9} className="group-hover:text-white/92 transition-colors" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Checklist */}
          <Reveal delay={0.2} className="glass rounded-2xl p-5 border border-[#22D3EE]/15">
            <div className="text-xs font-bold uppercase tracking-widest text-[#FFB800] mb-4">
              Contrôles en laboratoire
            </div>
            {[
              "Transmission lumineuse < 0.003%",
              "Filtre UV 100% (UV-A & UV-B)",
              "Infrarouge bloqué à 100%",
              "Test de durabilité 200h UV",
              "Conforme Règlement UE 2016/425",
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-2.5 py-1.5 border-b border-white/8 last:border-0">
                <CheckCircle size={13} className="text-[#22D3EE] flex-shrink-0" />
                <span className="text-xs text-white/92">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>

      </div>
    </section>
  );
}
