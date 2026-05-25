"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingCart, Factory, Truck, Sun, ChevronRight, CheckCircle } from "lucide-react";

const ECLIPSE_DATE = new Date("2026-08-12T10:00:00+02:00");
const BATCH1_DEADLINE = new Date("2026-06-15T23:59:59+02:00");

function daysUntil(date: Date) {
  return Math.ceil((date.getTime() - Date.now()) / 86400000);
}

export default function BatchSystem() {
  const [days1, setDays1] = useState(daysUntil(BATCH1_DEADLINE));
  const [daysEclipse, setDaysEclipse] = useState(daysUntil(ECLIPSE_DATE));

  useEffect(() => {
    const id = setInterval(() => {
      setDays1(daysUntil(BATCH1_DEADLINE));
      setDaysEclipse(daysUntil(ECLIPSE_DATE));
    }, 60000);
    return () => clearInterval(id);
  }, []);

  const batch1Active = days1 > 0;

  return (
    <section id="commande" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#FFB800] opacity-[0.025] blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[calc(0.75rem+3px)] uppercase tracking-[0.3em] text-[#FFB800] mb-3 font-medium">
            Production à la demande
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#DCE8FF] mb-5 leading-tight">
            Un événement unique, zéro sur-production,<br />
            <span className="gradient-text-blue">pas de gaspillage</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm leading-relaxed">
            Les commandes sont regroupées par vagues de fabrication afin de produire <strong className="text-white">uniquement les quantités réellement commandées</strong>.
          </p>
        </motion.div>

        {/* Badge batch 1 actif */}
        {batch1Active && (
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#22c55e]/40 bg-[#22c55e]/10">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] corona-pulse" />
              <span className="text-sm font-bold text-[#22c55e]">
                Phase 1 ouverte — encore {days1} jour{days1 > 1 ? "s" : ""} pour commander
              </span>
            </div>
          </div>
        )}

        {/* ── Phases ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass rounded-2xl p-6 border-2 overflow-hidden"
            style={{ borderColor: batch1Active ? "#22c55e60" : "#22D3EE30" }}
          >
            {batch1Active && (
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/40 text-[10px] font-black text-[#22c55e] uppercase tracking-wider">
                Ouverte
              </div>
            )}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center font-black text-[#22D3EE] text-lg">1</div>
              <div>
                <div className="font-black text-white text-base">Phase 1</div>
                <div className="text-[10px] text-white/55 uppercase tracking-wider">Première série</div>
              </div>
            </div>

            <div className="space-y-3">
              <PhaseStep
                icon={ShoppingCart}
                color="#22c55e"
                label="Commandes ouvertes"
                value="maintenant → 15 juin"
              />
              <PhaseStep
                icon={Factory}
                color="#22D3EE"
                label="Production"
                value="fin juin / début juillet"
              />
              <PhaseStep
                icon={Truck}
                color="#FFB800"
                label="Expéditions & livraisons"
                value="à partir du 20 juillet"
              />
            </div>

            <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between">
              <span className="text-xs text-white/55">Avant l'éclipse</span>
              <span className="text-sm font-black text-[#22c55e]">23 jours de marge</span>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative glass rounded-2xl p-6 border-2 overflow-hidden"
            style={{ borderColor: "#FFB80030" }}
          >
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/30 text-[10px] font-black text-[#FFB800] uppercase tracking-wider">
              Bientôt
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#FFB800]/15 border border-[#FFB800]/30 flex items-center justify-center font-black text-[#FFB800] text-lg">2</div>
              <div>
                <div className="font-black text-white text-base">Phase 2</div>
                <div className="text-[10px] text-white/55 uppercase tracking-wider">Dernière série</div>
              </div>
            </div>

            <div className="space-y-3">
              <PhaseStep
                icon={ShoppingCart}
                color="#FFB800"
                label="Commandes ouvertes"
                value="16 juin → 24 juin"
              />
              <PhaseStep
                icon={Factory}
                color="#FFB800"
                label="Production"
                value="juillet"
              />
              <PhaseStep
                icon={Truck}
                color="#22D3EE"
                label="Expéditions & livraisons"
                value="à partir du 1er août"
              />
            </div>

            <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between">
              <span className="text-xs text-white/55">Avant l'éclipse</span>
              <span className="text-sm font-black text-[#FFB800]">11 jours de marge</span>
            </div>
          </motion.div>
        </div>

        {/* ── Frise chronologique ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 border border-white/8 mb-10 overflow-x-auto"
        >
          <p className="text-xs uppercase tracking-widest text-white/40 mb-6 text-center">Frise chronologique</p>
          <div className="flex items-start justify-between min-w-[480px] gap-1 relative">
            {/* Ligne de fond */}
            <div className="absolute top-5 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#22c55e]/40 via-[#FFB800]/30 to-[#FFB800]/60" />

            {[
              { date: "Maintenant", label: "Cmd ouvertes", color: "#22c55e", dot: true },
              { date: "15 juin", label: "Clôture P1", color: "#22D3EE", dot: false },
              { date: "20 juil.", label: "Livraison P1", color: "#FFB800", dot: false },
              { date: "1er août", label: "Livraison P2", color: "#22D3EE", dot: false },
              { date: "12 août", label: "🌑 Éclipse", color: "#FFB800", dot: false },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1 relative z-10">
                <div
                  className="w-4 h-4 rounded-full border-2 flex-shrink-0"
                  style={{
                    backgroundColor: `${item.color}25`,
                    borderColor: item.color,
                    boxShadow: item.dot ? `0 0 12px ${item.color}` : undefined,
                  }}
                />
                <div className="text-[10px] font-black text-center whitespace-nowrap" style={{ color: item.color }}>{item.date}</div>
                <div className="text-[9px] text-white/55 text-center whitespace-nowrap">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Comment ça fonctionne ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 border border-[#22D3EE]/10 mb-6"
        >
          <h3 className="font-black text-[#DCE8FF] mb-5 text-base flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] text-xs">?</span>
            Comment ça fonctionne ?
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            {[
              { n: "1", text: "Vous passez votre commande pendant la période ouverte.", color: "#22c55e" },
              { n: "2", text: "Une fois les commandes clôturées, nous lançons la fabrication.", color: "#22D3EE" },
              { n: "3", text: "Les produits sont contrôlés puis expédiés en une seule vague.", color: "#FFB800" },
            ].map((step, i) => (
              <div key={i} className="flex flex-row sm:flex-col items-start sm:items-center gap-3 flex-1">
                <div className="flex sm:flex-col items-center gap-2 sm:gap-1 flex-shrink-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                    style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}50`, color: step.color }}
                  >
                    {step.n}
                  </div>
                  {i < 2 && (
                    <ChevronRight size={14} className="text-white/20 hidden sm:block rotate-90" />
                  )}
                </div>
                <p className="text-xs text-white/80 leading-relaxed sm:text-center">{step.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Avantages ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-5 border border-[#22c55e]/20"
        >
          <p className="text-xs font-bold text-[#22c55e] uppercase tracking-widest mb-4">✅ Cela permet :</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "♻️", label: "Zéro gaspillage", desc: "Une meilleure qualité de production" },
              { icon: "📦", label: "Moins de surstock", desc: "Produit uniquement pour les commandes" },
              { icon: "🎯", label: "Séries exclusives", desc: "Fabriquées spécialement pour vous" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-xs font-black text-white">{item.label}</div>
                  <div className="text-[10px] text-white/60 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function PhaseStep({
  icon: Icon, color, label, value,
}: {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
      >
        <Icon size={14} style={{ color }} />
      </div>
      <div className="flex-1 flex items-center justify-between gap-2">
        <span className="text-xs text-white/65">{label}</span>
        <span className="text-xs font-bold text-white text-right">{value}</span>
      </div>
    </div>
  );
}
