"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingCart, Factory, Truck, Sun, ChevronRight, CheckCircle } from "lucide-react";

const ECLIPSE_DATE = new Date("2026-08-12T10:00:00+02:00");
const BATCH0_DEADLINE = new Date("2026-06-07T23:59:59+02:00");
const BATCH1_DEADLINE = new Date("2026-06-15T23:59:59+02:00");

function daysUntil(date: Date) {
  return Math.ceil((date.getTime() - Date.now()) / 86400000);
}

export default function BatchSystem() {
  const [days0, setDays0] = useState(daysUntil(BATCH0_DEADLINE));
  const [days1, setDays1] = useState(daysUntil(BATCH1_DEADLINE));
  const [daysEclipse, setDaysEclipse] = useState(daysUntil(ECLIPSE_DATE));

  useEffect(() => {
    const id = setInterval(() => {
      setDays0(daysUntil(BATCH0_DEADLINE));
      setDays1(daysUntil(BATCH1_DEADLINE));
      setDaysEclipse(daysUntil(ECLIPSE_DATE));
    }, 60000);
    return () => clearInterval(id);
  }, []);

  const batch0Active = days0 > 0;
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
          className="text-center mb-6"
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

        {/* Badge phase active */}
        {batch0Active && (
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#22c55e]/40 bg-[#22c55e]/10">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] corona-pulse" />
              <span className="text-sm font-bold text-[#22c55e]">
                Phase 1 ouverte — encore {days0} jour{days0 > 1 ? "s" : ""} pour commander (livraison 6 juillet)
              </span>
            </div>
          </div>
        )}

        {/* ── Phases ── */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">

          {/* Phase 1 — Express */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative glass rounded-2xl p-6 border-2 overflow-hidden h-full"
              style={{ borderColor: batch0Active ? "#22c55e60" : "#22c55e20" }}>
              {batch0Active && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/40 text-[10px] font-black text-[#22c55e] uppercase tracking-wider">
                  Ouverte
                </div>
              )}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center font-black text-[#22c55e] text-lg">1</div>
                <div>
                  <div className="font-black text-white text-base">Phase 1</div>
                  <div className="text-[10px] text-white/55 uppercase tracking-wider">Livraison rapide</div>
                </div>
              </div>
              <div className="space-y-3">
                <PhaseStep icon={ShoppingCart} color="#22c55e" label="Commandes ouvertes" value="maintenant → 07 juin" />
                <PhaseStep icon={Factory} color="#22D3EE" label="Production" value="courant juin" />
                <PhaseStep icon={Truck} color="#FFB800" label="Livraison" value="06 juillet" />
              </div>
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative glass rounded-2xl p-6 border-2 overflow-hidden h-full"
              style={{ borderColor: !batch0Active && batch1Active ? "#22D3EE60" : "#22D3EE20" }}>
              {!batch0Active && batch1Active && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#22D3EE]/20 border border-[#22D3EE]/40 text-[10px] font-black text-[#22D3EE] uppercase tracking-wider">
                  Ouverte
                </div>
              )}
              {batch0Active && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-white/40 uppercase tracking-wider">
                  Bientôt
                </div>
              )}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center font-black text-[#22D3EE] text-lg">2</div>
                <div>
                  <div className="font-black text-white text-base">Phase 2</div>
                  <div className="text-[10px] text-white/55 uppercase tracking-wider">Première série</div>
                </div>
              </div>
              <div className="space-y-3">
                <PhaseStep icon={ShoppingCart} color="#22D3EE" label="Commandes ouvertes" value="08 juin → 15 juin" />
                <PhaseStep icon={Factory} color="#22D3EE" label="Production" value="fin juin / début juillet" />
                <PhaseStep icon={Truck} color="#FFB800" label="Livraison" value="à partir du 20 juillet" />
              </div>
            </div>
          </motion.div>

          {/* Phase 3 */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative glass rounded-2xl p-6 border-2 overflow-hidden h-full"
              style={{ borderColor: "#FFB80030" }}>
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/30 text-[10px] font-black text-[#FFB800] uppercase tracking-wider">
                Bientôt
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#FFB800]/15 border border-[#FFB800]/30 flex items-center justify-center font-black text-[#FFB800] text-lg">3</div>
                <div>
                  <div className="font-black text-white text-base">Phase 3</div>
                  <div className="text-[10px] text-white/55 uppercase tracking-wider">Dernière série</div>
                </div>
              </div>
              <div className="space-y-3">
                <PhaseStep icon={ShoppingCart} color="#FFB800" label="Commandes ouvertes" value="16 juin → 24 juin" />
                <PhaseStep icon={Factory} color="#FFB800" label="Production" value="juillet" />
                <PhaseStep icon={Truck} color="#22D3EE" label="Livraison" value="à partir du 1er août" />
              </div>
            </div>
          </motion.div>

        </div>

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

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            {[
              { n: "1", text: "Vous passez votre commande pendant la période ouverte.", color: "#22c55e" },
              { n: "2", text: "Une fois les commandes clôturées, nous lançons la fabrication.", color: "#22D3EE" },
              { n: "3", text: "Les produits sont contrôlés puis expédiés en une seule vague.", color: "#FFB800" },
            ].map((step, i) => (
              <div key={i} className="flex sm:flex-col items-center gap-3 flex-1">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}50`, color: step.color }}
                >
                  {step.n}
                </div>
                <p className="text-xs text-white/80 leading-relaxed sm:text-center">{step.text}</p>
                {/* Mobile: down arrow */}
                {i < 2 && <ChevronRight size={14} className="text-white/20 sm:hidden rotate-90 flex-shrink-0" />}
              </div>
            )).reduce<React.ReactNode[]>((acc, el, i) => {
              acc.push(el);
              if (i < 2) acc.push(
                <ChevronRight key={`arrow-${i}`} size={18} className="text-white/20 hidden sm:block flex-shrink-0" />
              );
              return acc;
            }, [])}
          </div>

        </motion.div>

        <div className="mt-6 flex justify-center">
          <a
            href="/#produits"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFB800] text-black font-black text-sm hover:bg-[#FFC933] transition-all duration-200 glow-gold"
          >
            Commandez vos lunettes →
          </a>
        </div>

      </div>
    </section>
  );
}

function FriseTimeline({
  title, titleColor, border, nodes, badges, delay, topRounded = true,
}: {
  title: string;
  titleColor: string;
  border: string;
  nodes: { date: string; label: string; color: string; glow: boolean }[];
  badges: string[];
  delay: number;
  topRounded?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`glass p-6 border-2 ${topRounded ? "rounded-2xl" : "rounded-b-2xl"}`}
      style={{ borderColor: `${border}40` }}
    >
      <p className="text-sm uppercase tracking-widest font-black mb-6" style={{ color: titleColor }}>
        {title}
      </p>

      {/* ── Desktop : horizontal ── */}
      <div className="hidden sm:flex relative items-center">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px]"
          style={{ background: `linear-gradient(to right, ${nodes[0].color}60, ${nodes[1].color}50, ${nodes[2].color}60)` }}
        />
        <TimelineNode node={nodes[0]} num={1} />
        <div className="flex-1 flex justify-center items-center relative z-10">
          <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap bg-[#060412] border border-white/20 text-white/80">{badges[0]}</span>
        </div>
        <TimelineNode node={nodes[1]} num={2} />
        <div className="flex-1 flex justify-center items-center relative z-10">
          <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap bg-[#060412] border border-white/20 text-white/80">{badges[1]}</span>
        </div>
        <TimelineNode node={nodes[2]} num={3} />
      </div>

      {/* ── Mobile : vertical ── */}
      <div className="flex sm:hidden flex-col">
        {[0, 1, 2].map((i) => (
          <div key={i}>
            {/* Node row */}
            <div className="flex items-start gap-4">
              {/* Left : circle + vertical line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-sm"
                  style={{
                    backgroundColor: `${nodes[i].color}20`,
                    borderColor: nodes[i].color,
                    color: nodes[i].color,
                    boxShadow: nodes[i].glow ? `0 0 14px ${nodes[i].color}90` : undefined,
                  }}
                >
                  {i + 1}
                </div>
                {i < 2 && <div className="w-[2px] h-8 mt-1" style={{ background: `${nodes[i].color}40` }} />}
              </div>
              {/* Right : date + label */}
              <div className="pt-2 pb-1">
                <div className="text-base font-black" style={{ color: nodes[i].color }}>{nodes[i].date}</div>
                <div className="text-sm text-white/60 mt-0.5 leading-tight">{nodes[i].label}</div>
              </div>
            </div>
            {/* Badge between nodes */}
            {i < 2 && (
              <div className="flex items-center gap-3 ml-5 my-1">
                <div className="w-[2px] h-4 invisible" />
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#060412] border border-white/20 text-white/70">
                  {badges[i]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TimelineNode({ node, num }: { node: { date: string; label: string; color: string; glow: boolean }; num: number }) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-2 flex-shrink-0">
      <div
        className="w-11 h-11 rounded-full border-2 flex items-center justify-center font-black text-sm"
        style={{
          backgroundColor: `${node.color}20`,
          borderColor: node.color,
          color: node.color,
          boxShadow: node.glow ? `0 0 18px ${node.color}90` : undefined,
        }}
      >
        {num}
      </div>
      <div className="text-[13px] font-black text-center whitespace-nowrap mt-1" style={{ color: node.color }}>{node.date}</div>
      <div className="text-[12px] text-white/60 text-center max-w-[100px] leading-tight">{node.label}</div>
    </div>
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
