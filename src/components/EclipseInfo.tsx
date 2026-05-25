"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Eye, AlertTriangle, Sun, Thermometer, Star } from "lucide-react";

const cities = [
  { name: "Biarritz", pct: "99,5% d'obscurité" },
  { name: "Bayonne", pct: "99,3%" },
  { name: "Bordeaux", pct: "98,5%" },
  { name: "Toulouse", pct: "97%" },
  { name: "Paris", pct: "92%" },
];

const horaires = [
  { label: "Début", time: "~18h00" },
  { label: "Maximum", time: "19h15–20h30" },
  { label: "Fin", time: ">21h00" },
];

export default function EclipseInfo() {
  return (
    <section id="eclipse" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 space-y-10">



        {/* Pourquoi spéciale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7 border border-[#22D3EE]/15"
        >
          <h3 className="text-xl font-black text-[#DCE8FF] mb-4 flex items-center gap-2">
            <Star size={20} style={{ color: "#22D3EE" }} /> Pourquoi cette éclipse est-elle si spéciale ?
          </h3>
          <div className="space-y-3">
            {[
              "La plus impressionnante visible depuis la France depuis des décennies",
              "Visible dans tout le pays",
              "Proche d'une éclipse totale dans certaines régions",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#22D3EE]/20 border border-[#22D3EE]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                </div>
                <p className="text-sm text-[#E8F0FF]/88">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#E8F0FF]/70 italic">
            Des millions de personnes devraient observer cet événement astronomique historique.
          </p>
        </motion.div>

        {/* Que verra-t-on en France */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7 border border-[#FFB800]/15"
        >
          <h3 className="text-xl font-black text-[#DCE8FF] mb-4 flex items-center gap-2">
            <MapPin size={20} style={{ color: "#FFB800" }} /> Que verra-t-on en France ?
          </h3>
          <p className="text-sm text-[#E8F0FF]/85 mb-3 leading-relaxed">
            La France observera une éclipse partielle <strong className="text-white">extrêmement impressionnante</strong> : la Lune viendra masquer une très grande partie du Soleil pendant quelques minutes.
          </p>
          <p className="text-sm text-[#E8F0FF]/75 mb-5 leading-relaxed">
            Plus vous êtes dans le <strong className="text-white">sud-ouest</strong>, plus le Soleil sera recouvert.
          </p>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3 font-semibold">Taux d'occultation par ville</p>
          <div className="space-y-2">
            {cities.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <div className="w-24 text-sm font-bold text-white">{c.name}</div>
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#22D3EE] to-[#FFB800]"
                    style={{ width: c.pct.replace(",", ".").match(/[\d.]+/)?.[0] + "%" }}
                  />
                </div>
                <div className="text-sm font-black text-right whitespace-nowrap" style={{ color: "#FFB800" }}>{c.pct}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Horaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-7 border border-[#FFB800]/15"
        >
          <h3 className="text-xl font-black text-[#DCE8FF] mb-4 flex items-center gap-2">
            <Clock size={20} style={{ color: "#FFB800" }} /> À quelle heure aura lieu l'éclipse ?
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {horaires.map((h) => (
              <div key={h.label} className="text-center p-4 rounded-xl bg-[#FFB800]/08 border border-[#FFB800]/20">
                <div className="text-xs uppercase tracking-widest text-[#FFB800]/70 mb-1">{h.label}</div>
                <div className="text-xl font-black text-[#FFB800]">{h.time}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#E8F0FF]/70 leading-relaxed">
            ⚠️ Le Soleil sera très bas sur l'horizon au moment du maximum — choisissez un endroit avec une vue dégagée vers l'ouest.
          </p>
        </motion.div>

        {/* Avertissement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border-2 border-red-500/60 bg-red-500/08 p-6"
        >
          <h3 className="text-lg font-black text-red-400 mb-3 flex items-center gap-2">
            <AlertTriangle size={18} /> ⚠️ Important : protéger ses yeux
          </h3>
          <p className="text-sm text-[#E8F0FF]/85 mb-3 leading-relaxed">
            Regarder une éclipse sans protection adaptée peut provoquer des <strong className="text-red-400">lésions irréversibles de la rétine</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22D3EE]/15 border border-[#22D3EE]/30">
              <span className="text-[#22D3EE] font-bold text-sm">✓</span>
              <span className="text-sm text-white">Lunettes certifiées ISO 12312-2</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22D3EE]/15 border border-[#22D3EE]/30">
              <span className="text-[#22D3EE] font-bold text-sm">✓</span>
              <span className="text-sm text-white">Filtres solaires ND 5.0 pour téléphone</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-red-400/80 font-semibold">Les lunettes de soleil classiques ne protègent pas suffisamment.</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center glass rounded-2xl p-6 border border-[#22c55e]/30"
        >
          <p className="text-lg font-black text-white mb-1">🌞 Préparez-vous dès maintenant</p>
          <p className="text-sm text-[#E8F0FF]/75 mb-4">
            Les lunettes d'éclipse risquent d'être en rupture de stock à l'approche du 12 août 2026.
          </p>
          <a
            href="#produits"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFB800] text-black font-bold text-sm hover:bg-[#FFC933] transition-colors"
          >
            Commander mes lunettes →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
