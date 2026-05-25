"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, LogOut, ShieldCheck, FileText, Truck,
  Eye, Smartphone, Zap, Lock, CheckCircle, ShoppingCart, ExternalLink,
} from "lucide-react";
import type { B2BSession } from "./B2BPortal";

// ── B2B Pricing ──────────────────────────────────────────────────
const UNIT_PRICE = 1.10;
const TVA = 0.20;

function fmt(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ── B2B Products ─────────────────────────────────────────────────
type B2BProduct = {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  desc: string;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  features: string[];
  minQty: number;
  sliderMax: number;
  tiers: { min: number; label: string; discount: number; tag: string | null }[];
  unit: string;
};

const B2B_PRODUCTS: B2BProduct[] = [
  {
    id: "glasses",
    sku: "MES-LUN-B2B",
    name: "Lunettes Éclipse",
    subtitle: "Observation directe certifiée ISO",
    desc: "Lunettes certifiées ISO 12312-2, filtre ND 5.0. Monture rigide recyclée. Co-branding possible dès 1 000 u.",
    color: "#22D3EE",
    icon: Eye,
    features: ["ISO 12312-2 • CE 2797", "Filtre ND 5.0 optique", "Co-branding dès 1 000 u."],
    minQty: 500,
    sliderMax: 5000,
    unit: "paire",
    tiers: [
      { min: 500,  label: "500",   discount: 0,    tag: null },
      { min: 1000, label: "1 000", discount: 0.05, tag: "–5%" },
      { min: 2500, label: "2 500", discount: 0.10, tag: "–10%" },
      { min: 5000, label: "5 000", discount: 0.15, tag: "–15%" },
    ],
  },
  {
    id: "filter",
    sku: "MES-FIL-B2B",
    name: "Filtre Téléphone",
    subtitle: "Filmer & photographier l'éclipse",
    desc: "Film ND 5.0 universel pour smartphone/tablette 50–90 mm. Sachet zip individuel, prêt à la revente.",
    color: "#FFB800",
    icon: Smartphone,
    features: ["Compatible 50–90 mm", "Film ND 5.0 optique", "Sachet zip individuel"],
    minQty: 250,
    sliderMax: 3000,
    unit: "filtre",
    tiers: [
      { min: 250,  label: "250",   discount: 0,    tag: null },
      { min: 500,  label: "500",   discount: 0.05, tag: "–5%" },
      { min: 1000, label: "1 000", discount: 0.10, tag: "–10%" },
      { min: 2500, label: "2 500", discount: 0.15, tag: "–15%" },
    ],
  },
];

// ── B2B Slider ───────────────────────────────────────────────────
function B2BSlider({
  qty, onChange, color, product,
}: {
  qty: number; onChange: (v: number) => void; color: string; product: B2BProduct;
}) {
  const { minQty, sliderMax, tiers } = product;
  const pct = ((qty - minQty) / (sliderMax - minQty)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = Number(e.target.value);
    // snap to multiples of 50
    onChange(Math.round(raw / 50) * 50 || minQty);
  };

  return (
    <div className="relative pt-2 pb-1">
      <div className="relative h-2 rounded-full" style={{ backgroundColor: "rgba(232,240,255,0.08)" }}>
        {/* Fill */}
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-150"
          style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.9 }}
        />

        {/* Tier markers */}
        {tiers.slice(1).map((t) => {
          const p = ((t.min - minQty) / (sliderMax - minQty)) * 100;
          const unlocked = qty >= t.min;
          return (
            <div
              key={t.min}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300"
              style={{
                left: `${p}%`,
                borderColor: unlocked ? color : "rgba(232,240,255,0.15)",
                backgroundColor: unlocked ? color : "#060412",
                boxShadow: unlocked ? `0 0 10px ${color}90` : "none",
              }}
            />
          );
        })}

        {/* Native input (invisible) */}
        <input
          type="range" min={minQty} max={sliderMax} step={50} value={qty}
          onChange={handleChange}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          style={{ zIndex: 10 }}
        />

        {/* Custom thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-white pointer-events-none transition-all duration-150"
          style={{
            left: `${pct}%`,
            backgroundColor: color,
            boxShadow: `0 0 14px ${color}90`,
          }}
        />
      </div>

      {/* Tier labels */}
      <div className="relative h-5 mt-2">
        {tiers.map((t) => {
          const p = ((t.min - minQty) / (sliderMax - minQty)) * 100;
          const unlocked = qty >= t.min;
          return (
            <span
              key={t.min}
              className="absolute -translate-x-1/2 text-[9px] font-bold transition-colors duration-300"
              style={{
                left: `${p}%`,
                color: unlocked ? color : "rgba(232,240,255,0.25)",
              }}
            >
              {t.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

// ── B2B Product Card ─────────────────────────────────────────────
function B2BProductCard({
  product,
  onAddToQuote,
  inQuote,
}: {
  product: B2BProduct;
  onAddToQuote: (id: string, qty: number) => void;
  inQuote: boolean;
}) {
  const [qty, setQty] = useState(product.minQty);
  const [prevTierIdx, setPrevTierIdx] = useState(0);

  const activeTier = [...product.tiers].reverse().find((t) => qty >= t.min)!;
  const tierIdx = product.tiers.indexOf(activeTier);
  const unitHT = UNIT_PRICE * (1 - activeTier.discount);
  const totalHT = unitHT * qty;
  const totalTTC = totalHT * (1 + TVA);

  const justUnlocked = tierIdx > prevTierIdx && tierIdx > 0;

  const handleQty = useCallback((v: number) => {
    setPrevTierIdx(tierIdx);
    setQty(v);
  }, [tierIdx]);

  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-3xl p-8 border flex flex-col overflow-hidden"
      style={{
        background: "rgba(4,18,58,0.88)",
        borderColor: `${product.color}28`,
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ background: `radial-gradient(ellipse at 30% 15%, ${product.color}, transparent 65%)` }}
      />

      {/* SKU */}
      <div className="relative z-10 text-[10px] font-mono text-white/65 mb-3">{product.sku}</div>

      {/* Header */}
      <div className="relative z-10 flex items-start gap-4 mb-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${product.color}18`, border: `1px solid ${product.color}35` }}
        >
          <Icon size={26} style={{ color: product.color }} />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] mb-1 font-semibold" style={{ color: product.color }}>
            {product.subtitle}
          </div>
          <h3 className="text-xl font-black text-white leading-tight">{product.name}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="relative z-10 text-sm text-white/88 leading-relaxed mb-4">{product.desc}</p>

      {/* Features */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-6">
        {product.features.map((f) => (
          <span
            key={f}
            className="text-[10px] px-2.5 py-1 rounded-full font-semibold"
            style={{ backgroundColor: `${product.color}12`, color: `${product.color}EE`, border: `1px solid ${product.color}28` }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Price */}
      <div className="relative z-10 flex items-end gap-3 mb-6">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black" style={{ color: product.color }}>
              {fmt(unitHT)} €
            </span>
            {activeTier.discount > 0 && (
              <span className="text-lg text-white/30 line-through">{fmt(UNIT_PRICE)} €</span>
            )}
          </div>
          <div className="text-xs text-white/75 mt-0.5">
            HT / {product.unit} · min. {product.minQty.toLocaleString("fr-FR")} {product.unit}s
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTier.discount > 0 && (
            <motion.div
              key={activeTier.tag}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="ml-auto px-3 py-1.5 rounded-xl font-black text-sm text-white flex items-center gap-1.5"
              style={{ backgroundColor: product.color, boxShadow: `0 0 20px ${product.color}60` }}
            >
              <Zap size={12} /> {activeTier.tag}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slider */}
      <div className="relative z-10 mb-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-white/82 uppercase tracking-wider">Quantité</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black tabular-nums" style={{ color: product.color }}>
              {qty.toLocaleString("fr-FR")}
            </span>
            <span className="text-xs text-white/72">{product.unit}s</span>
          </div>
        </div>
        <B2BSlider qty={qty} onChange={handleQty} color={product.color} product={product} />
      </div>

      {/* Unlock flash */}
      <AnimatePresence>
        {justUnlocked && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="relative z-10 mb-4 overflow-hidden"
          >
            <div
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold"
              style={{ backgroundColor: `${product.color}18`, border: `1px solid ${product.color}45`, color: product.color }}
            >
              <Zap size={14} /> Remise {activeTier.tag} débloquée !
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tier badges */}
      <div className="relative z-10 grid grid-cols-4 gap-1.5 mb-6">
        {product.tiers.map((t) => {
          const unlocked = qty >= t.min;
          const active = activeTier === t;
          return (
            <div
              key={t.min}
              className="flex flex-col items-center gap-1 py-2.5 px-1 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: active ? `${product.color}22` : unlocked ? `${product.color}0A` : "rgba(232,240,255,0.03)",
                border: `1px solid ${active ? product.color + "55" : unlocked ? product.color + "22" : "rgba(232,240,255,0.06)"}`,
              }}
            >
              {t.discount === 0 ? (
                <CheckCircle size={12} style={{ color: unlocked ? product.color : "rgba(232,240,255,0.15)" }} />
              ) : unlocked ? (
                <Zap size={12} style={{ color: product.color }} />
              ) : (
                <Lock size={11} className="text-white/38" />
              )}
              <span className="text-[9px] font-black" style={{ color: unlocked ? product.color : "rgba(232,240,255,0.2)" }}>
                {t.discount === 0 ? "Base" : t.tag}
              </span>
              <span className="text-[8px] text-white/50">{t.label}</span>
            </div>
          );
        })}
      </div>

      {/* Totals */}
      <div className="relative z-10 rounded-xl p-4 mb-5" style={{ background: "rgba(232,240,255,0.05)", border: "1px solid rgba(232,240,255,0.08)" }}>
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-white/78">Total HT</span>
          <span className="font-black text-white">{fmt(totalHT)} €</span>
        </div>
        <div className="flex justify-between text-xs text-white/70 mb-2">
          <span>TVA 20%</span>
          <span>{fmt(totalHT * TVA)} €</span>
        </div>
        <div className="flex justify-between text-base font-black border-t border-[#E8F0FF]/8 pt-2">
          <span className="text-white/92">Total TTC</span>
          <span style={{ color: product.color }}>{fmt(totalTTC)} €</span>
        </div>
      </div>

      {/* CTA */}
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={() => onAddToQuote(product.id, qty)}
        className="relative z-10 w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-base text-white transition-all"
        style={{
          backgroundColor: inQuote ? "#22c55e" : product.color,
          boxShadow: inQuote ? "0 0 24px rgba(34,197,94,0.4)" : `0 0 28px ${product.color}50`,
        }}
      >
        {inQuote ? (
          <><CheckCircle size={18} /> Dans le devis</>
        ) : (
          <><ShoppingCart size={18} /> Ajouter au devis — {qty.toLocaleString("fr-FR")} {product.unit}s</>
        )}
      </motion.button>
    </motion.div>
  );
}

// ── Main catalog ─────────────────────────────────────────────────
type QuoteLine = { productId: string; qty: number; unitHT: number; name: string };
type Props = { session: B2BSession; onLogout: () => void };

export default function B2BCatalog({ session, onLogout }: Props) {
  const [quote, setQuote] = useState<QuoteLine[]>([]);
  const [sent, setSent] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const addToQuote = (productId: string, qty: number) => {
    const p = B2B_PRODUCTS.find((x) => x.id === productId)!;
    const tier = [...p.tiers].reverse().find((t) => qty >= t.min)!;
    const unitHT = UNIT_PRICE * (1 - tier.discount);
    setQuote((q) => {
      const exists = q.find((l) => l.productId === productId);
      if (exists) return q.map((l) => l.productId === productId ? { ...l, qty, unitHT } : l);
      return [...q, { productId, qty, unitHT, name: p.name }];
    });
    setShowQuote(true);
  };

  const totalHT = quote.reduce((s, l) => s + l.qty * l.unitHT, 0);
  const totalTTC = totalHT * (1 + TVA);
  const totalUnits = quote.reduce((s, l) => s + l.qty, 0);

  return (
    <div className="min-h-screen bg-[#060412] pt-16">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#0D0820]/50 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#22D3EE] opacity-[0.02] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <Building2 size={16} className="text-[#22D3EE]" />
              <span className="font-black text-white text-lg">{session.company}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-[#FFB800] border border-[#22D3EE]/30 bg-[#22D3EE]/12">
                Partenaire certifié
              </span>
            </div>
            <p className="text-xs text-white/70 mt-1">{session.email} · {session.siret}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowQuote((v) => !v)}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white/90 hover:text-[#FFB800] transition-all border"
              style={{ background: "rgba(4,18,58,0.85)", borderColor: "rgba(30,127,255,0.25)" }}
            >
              <FileText size={14} />
              Devis
              {quote.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#22D3EE] text-[10px] font-bold text-white flex items-center justify-center">
                  {quote.length}
                </span>
              )}
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs text-white/70 hover:text-white/88 transition-all border"
              style={{ background: "rgba(4,18,58,0.70)", borderColor: "rgba(232,240,255,0.08)" }}
            >
              <LogOut size={13} /> Déconnexion
            </button>
          </div>
        </div>

        {/* Conditions bar */}
        <div
          className="rounded-2xl p-5 mb-10 flex flex-wrap gap-6 items-center"
          style={{ background: "rgba(4,18,58,0.88)", border: "1px solid rgba(30,127,255,0.2)" }}
        >
          {[
            { icon: ShieldCheck, label: "Prix unitaire HT", value: "1,10 €" },
            { icon: Eye, label: "Min. Lunettes", value: "500 paires" },
            { icon: Smartphone, label: "Min. Filtres", value: "250 unités" },
            { icon: Truck, label: "Délai livraison", value: "5–7 j ouvrés" },
            { icon: FileText, label: "Paiement", value: "Virement 30j" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={14} className="text-[#22D3EE] flex-shrink-0" />
              <div>
                <div className="text-[10px] text-white/72 uppercase tracking-wider">{label}</div>
                <div className="text-sm font-bold text-white">{value}</div>
              </div>
            </div>
          ))}
          <div className="ml-auto flex gap-2">
            {[
              { code: "ISO 12312-2", href: "https://www.iso.org/standard/59289.html" },
              { code: "CE 2797", href: "https://ec.europa.eu/growth/single-market/ce-marking_en" },
            ].map((c) => (
              <a key={c.code} href={c.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] text-[#FFB800] hover:opacity-80 transition-opacity group border"
                style={{ background: "rgba(30,127,255,0.12)", borderColor: "rgba(30,127,255,0.28)" }}
              >
                <ShieldCheck size={11} /> {c.code}
                <ExternalLink size={9} className="opacity-40 group-hover:opacity-70 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Section title */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#22D3EE] mb-1 font-medium">Catalogue B2B</p>
          <h1 className="text-3xl font-black text-white">
            Collection Éclipse 2026 — <span className="gradient-text-blue">Tarifs Partenaires</span>
          </h1>
          <p className="text-white/78 text-sm mt-1">
            Glissez le curseur pour ajuster la quantité — remises automatiques à chaque palier.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {B2B_PRODUCTS.map((p) => (
            <B2BProductCard
              key={p.id}
              product={p}
              onAddToQuote={addToQuote}
              inQuote={quote.some((l) => l.productId === p.id)}
            />
          ))}
        </div>

        {/* Paliers table */}
        <div
          className="rounded-2xl p-6 border"
          style={{ background: "rgba(4,18,58,0.88)", borderColor: "rgba(30,127,255,0.18)" }}
        >
          <h3 className="text-sm font-bold text-white mb-4">Paliers de remise</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E8F0FF]/8">
                  <th className="text-left pb-3 text-white/72 text-xs uppercase tracking-wider font-semibold">Produit</th>
                  <th className="text-center pb-3 text-white/72 text-xs uppercase tracking-wider font-semibold">Base</th>
                  <th className="text-center pb-3 text-[#22D3EE] text-xs uppercase tracking-wider font-semibold">–5%</th>
                  <th className="text-center pb-3 text-[#22D3EE] text-xs uppercase tracking-wider font-semibold">–10%</th>
                  <th className="text-center pb-3 text-[#FFB800] text-xs uppercase tracking-wider font-semibold">–15%</th>
                </tr>
              </thead>
              <tbody>
                {B2B_PRODUCTS.map((p) => (
                  <tr key={p.id} className="border-b border-[#E8F0FF]/5 last:border-0">
                    <td className="py-3 font-semibold text-white">{p.name}</td>
                    {p.tiers.map((t) => (
                      <td key={t.min} className="py-3 text-center">
                        <div className="text-white/90 font-bold">{t.min >= 1000 ? `${t.min/1000}K` : t.min}</div>
                        <div className="text-[10px] text-white/65">{fmt(UNIT_PRICE * (1 - t.discount))} €/u</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quote sidebar */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] z-50 flex flex-col overflow-hidden"
            style={{ background: "rgba(0,4,18,0.97)", borderLeft: "1px solid rgba(30,127,255,0.2)" }}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8F0FF]/8">
              <div>
                <h2 className="font-black text-white text-lg">Récap devis</h2>
                <p className="text-[10px] text-white/65">{session.company}</p>
              </div>
              <button onClick={() => setShowQuote(false)} className="text-white/70 hover:text-white text-2xl font-light">×</button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {quote.length === 0 ? (
                <p className="text-center text-sm text-white/65 py-12">Aucun produit dans le devis</p>
              ) : quote.map((line) => {
                const p = B2B_PRODUCTS.find((x) => x.id === line.productId)!;
                return (
                  <div key={line.productId} className="rounded-xl p-4 flex gap-3 border" style={{ background: "rgba(4,18,58,0.80)", borderColor: "rgba(30,127,255,0.18)" }}>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono text-white/55">{p.sku}</div>
                      <div className="text-sm font-bold text-white">{line.name}</div>
                      <div className="text-xs text-white/75 mt-1">
                        {line.qty.toLocaleString("fr-FR")} × {fmt(line.unitHT)} € HT
                      </div>
                      <div className="text-sm font-black text-[#FFB800] mt-1">{fmt(line.qty * line.unitHT)} € HT</div>
                    </div>
                    <button onClick={() => setQuote((q) => q.filter((l) => l.productId !== line.productId))}
                      className="text-white/45 hover:text-red-400 transition-colors text-xl leading-none">×</button>
                  </div>
                );
              })}
            </div>

            {quote.length > 0 && !sent && (
              <div className="px-6 py-5 border-t border-[#E8F0FF]/8">
                <div className="space-y-1.5 mb-4">
                  <div className="flex justify-between text-sm text-white/78">
                    <span>Unités totales</span>
                    <span className="font-bold text-white">{totalUnits.toLocaleString("fr-FR")}</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/78">
                    <span>Total HT</span>
                    <span className="font-bold text-white">{fmt(totalHT)} €</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/65">
                    <span>TVA 20%</span><span>{fmt(totalHT * TVA)} €</span>
                  </div>
                  <div className="flex justify-between text-base font-black pt-2 border-t border-[#E8F0FF]/8">
                    <span className="text-white">Total TTC</span>
                    <span className="text-[#FFB800]">{fmt(totalTTC)} €</span>
                  </div>
                </div>
                <button onClick={() => setSent(true)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#22D3EE] text-white font-bold text-sm hover:bg-[#3D8FFF] transition-colors glow-blue">
                  <FileText size={14} /> Envoyer la demande de devis
                </button>
                <p className="text-[10px] text-white/50 text-center mt-2">Devis PDF sous 24h ouvrées</p>
              </div>
            )}

            {sent && (
              <div className="px-6 py-8 text-center">
                <div className="w-14 h-14 rounded-full bg-[#22D3EE]/20 flex items-center justify-center mx-auto mb-3 glow-blue">
                  <CheckCircle size={26} className="text-[#FFB800]" />
                </div>
                <h3 className="font-black text-white text-lg mb-1">Envoyé !</h3>
                <p className="text-sm text-white/72">Réponse sous 24h ouvrées à {session.email}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQuote && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowQuote(false)}
            className="fixed inset-0 bg-black/50 z-40 sm:hidden" />
        )}
      </AnimatePresence>
    </div>
  );
}
