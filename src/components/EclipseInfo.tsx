"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Eye, AlertTriangle } from "lucide-react";

const facts = [
  {
    icon: Clock,
    title: "Durée de totalité",
    value: "2min 44s",
    desc: "Durée maximale de la phase totale observée depuis Brest",
    color: "#1E7FFF",
  },
  {
    icon: MapPin,
    title: "Zone de totalité",
    value: "Nord-Ouest",
    desc: "Bretagne, Normandie, Pays de la Loire, Île-de-France partiellement",
    color: "#4DD9FF",
  },
  {
    icon: Clock,
    title: "Heure du maximum",
    value: "10h32",
    desc: "Heure locale UTC+2 — prévoyez d'être en place 30 minutes avant",
    color: "#1E7FFF",
  },
  {
    icon: Eye,
    title: "Magnitude maximale",
    value: "1.037",
    desc: "L'éclipse sera totale sur un couloir de 160km de largeur",
    color: "#4DD9FF",
  },
];

export default function EclipseInfo() {
  return (
    <section id="eclipse" className="relative py-24 px-6 overflow-hidden">
      {/* Animated eclipse graphic */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none hidden xl:block">
        <div className="relative w-full h-full">
          {/* Moon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#000510] z-10 shadow-[0_0_0_4px_rgba(30,127,255,0.15)]" />
          {/* Sun */}
          <div className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-1/2 w-52 h-52 rounded-full bg-gradient-to-br from-[#1E7FFF] to-[#4DD9FF] corona-pulse opacity-80" />
          {/* Corona ring 1 */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-[#1E7FFF]/20 spin-slow"
            style={{ animationDuration: "15s" }}
          />
          {/* Corona ring 2 */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#1E7FFF]/10 spin-slow"
            style={{ animationDuration: "25s", animationDirection: "reverse" }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#1E7FFF] mb-3 font-medium">L'événement</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#DCE8FF] mb-6 leading-tight">
              L'éclipse totale<br />
              <span className="gradient-text-blue">du 12 août 2026</span>
            </h2>
            <p className="text-[#E8F0FF]/82 text-lg mb-12 leading-relaxed">
              Pour la première fois depuis 1999, une éclipse solaire totale traversera la France.
              Un phénomène astronomique rarissime que des millions de Français pourront observer
              depuis chez eux — à condition d'être équipés.
            </p>
          </motion.div>

          {/* Facts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {facts.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-5"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${fact.color}20`, border: `1px solid ${fact.color}40` }}
                    >
                      <Icon size={16} style={{ color: fact.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-[#E8F0FF]/65 uppercase tracking-wider mb-1">{fact.title}</div>
                      <div className="text-xl font-black" style={{ color: fact.color }}>{fact.value}</div>
                      <div className="text-xs text-[#E8F0FF]/75 mt-1 leading-relaxed">{fact.desc}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-[#0A3ACC]/10 border border-[#0A3ACC]/20"
          >
            <AlertTriangle size={18} className="text-[#0A3ACC] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-[#E8F0FF]/88">
              <strong className="text-[#0A3ACC]">Attention :</strong> Observer le soleil sans protection certifiée ISO 12312-2
              provoque des lésions oculaires permanentes. Ne jamais utiliser de lunettes de soleil ordinaires.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
