"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, BarChart3, Package, Zap } from "lucide-react";

// ── Constants ────────────────────────────────────────────────
const ECLIPSE_DATE  = new Date("2026-08-12T00:00:00");
const MS_PER_DAY    = 24 * 60 * 60 * 1000;

const SEGMENTS = [
  { label: ">8 sem.",   color: "#64748B", multiplier: 1, startMsBefore: Infinity,           endMsBefore: 8 * 7 * MS_PER_DAY },
  { label: "8→4 sem.", color: "#22D3EE", multiplier: 1, startMsBefore: 8 * 7 * MS_PER_DAY, endMsBefore: 4 * 7 * MS_PER_DAY },
  { label: "4→2 sem.", color: "#FFB800", multiplier: 2, startMsBefore: 4 * 7 * MS_PER_DAY, endMsBefore: 2 * 7 * MS_PER_DAY },
  { label: "2→0 sem.", color: "#EF4444", multiplier: 3, startMsBefore: 2 * 7 * MS_PER_DAY, endMsBefore: 0 },
];

const PURCHASE_TIERS = [
  { min: 200,  price: 0.92 },
  { min: 500,  price: 0.70 },
  { min: 1000, price: 0.66 },
  { min: 2000, price: 0.63 },
  { min: 5000, price: 0.61 },
];

// ── Helpers ──────────────────────────────────────────────────
function getPurchasePrice(units: number) {
  const tier = [...PURCHASE_TIERS].reverse().find((t) => units >= t.min);
  return tier ? tier.price : PURCHASE_TIERS[0].price;
}

function integrate(durationDays: number, exposedPerDay: number, baseConvRate: number) {
  const eclipseMs = ECLIPSE_DATE.getTime();
  const startMs   = eclipseMs - durationDays * MS_PER_DAY;
  const endMs     = eclipseMs;
  let totalSales = 0, weightedDays = 0, activeDays = 0;
  const breakdown: { label: string; color: string; multiplier: number; days: number; sales: number }[] = [];

  for (const seg of SEGMENTS) {
    const segStart = seg.startMsBefore === Infinity ? 0 : eclipseMs - seg.startMsBefore;
    const segEnd   = eclipseMs - seg.endMsBefore;
    const oStart   = Math.max(startMs, segStart);
    const oEnd     = Math.min(endMs, segEnd);
    if (oEnd <= oStart) continue;
    const days  = (oEnd - oStart) / MS_PER_DAY;
    const sales = exposedPerDay * (baseConvRate * seg.multiplier / 100) * days;
    totalSales    += sales;
    weightedDays  += days * seg.multiplier;
    activeDays    += days;
    breakdown.push({ label: seg.label, color: seg.color, multiplier: seg.multiplier, days: Math.round(days), sales: Math.round(sales) });
  }
  return { totalSales: Math.round(totalSales), breakdown, effectiveMultiplier: activeDays > 0 ? weightedDays / activeDays : 1 };
}

function fmt(n: number, dec = 2) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: dec, maximumFractionDigits: dec });
}
function fmtN(n: number) { return Math.round(n).toLocaleString("fr-FR"); }

// ── Sub-components ───────────────────────────────────────────
function InputBox({ label, value, onChange, unit, min, max, step = 1 }: {
  label: string; value: number; onChange: (v: number) => void;
  unit: string; min?: number; max?: number; step?: number;
}) {
  return (
    <div className="flex flex-col gap-1 min-w-0">
      <label className="text-[16px] font-bold text-white/40 uppercase tracking-widest leading-none">{label}</label>
      <div className="flex items-center gap-1.5 rounded-xl border px-3 py-1.5 focus-within:border-[#22D3EE]/60 transition-colors"
        style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}>
        <input
          type="number" value={value} min={min} max={max} step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent text-white font-black text-base outline-none tabular-nums [font-family:var(--font-outfit)]"
        />
        <span className="text-[14px] text-white/35 shrink-0 font-medium">{unit}</span>
      </div>
    </div>
  );
}

function KpiCard({ label, value, unit, sub, color, size = "md" }: {
  label: string; value: string; unit: string; sub?: string; color: string; size?: "sm" | "md" | "lg";
}) {
  const valueSize = size === "lg" ? "text-5xl" : size === "sm" ? "text-3xl" : "text-4xl";
  return (
    <div className="rounded-2xl p-4 border flex flex-col justify-between h-full"
      style={{ background: "rgba(4,18,58,0.90)", borderColor: "rgba(255,255,255,0.08)" }}>
      <p className="text-[13px] font-bold text-white/45 uppercase tracking-widest">{label}</p>
      <div className="mt-2">
        <span className={`${valueSize} font-black leading-none`} style={{ color }}>{value}</span>
        <span className="text-sm text-white/40 ml-1.5 font-medium">{unit}</span>
      </div>
      {sub && <p className="text-[13px] text-white/35 mt-1.5 leading-snug">{sub}</p>}
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────
export default function RentabilityCalculator({ onOrder }: { onOrder?: () => void }) {
  const [trafficPerDay,      setTrafficPerDay]     = useState(300);
  const [exposureRate,       setExposureRate]       = useState(70);
  const [salePrice,          setSalePrice]          = useState(3.99);
  const [durationWeeks,      setDurationWeeks]      = useState(8);
  const [baseConversionRate, setBaseConversionRate] = useState(9);

  const totalDays     = durationWeeks * 7;
  const salePriceHT   = salePrice / 1.20;
  const exposedPerDay = trafficPerDay * (exposureRate / 100);

  const r = useMemo(() => {
    const { totalSales, breakdown, effectiveMultiplier } = integrate(totalDays, exposedPerDay, baseConversionRate);
    const cartonsToOrder    = Math.ceil(Math.max(totalSales, 1) / 50);
    const unitsToOrder      = Math.max(cartonsToOrder * 50, 200);
    const purchasePrice     = getPurchasePrice(unitsToOrder);
    const totalPurchaseCost = purchasePrice * unitsToOrder;
    const totalRevenueHT    = salePriceHT * totalSales;
    const totalRevenueTTC   = salePrice * totalSales;
    const grossMargin       = totalRevenueHT - totalPurchaseCost;
    const marginRate        = totalRevenueHT > 0 ? (grossMargin / totalRevenueHT) * 100 : 0;
    const unitMargin        = salePriceHT - purchasePrice;
    const breakEven         = unitMargin > 0 ? Math.ceil(totalPurchaseCost / unitMargin) : null;
    const breakEvenPct      = breakEven && totalSales > 0 ? (breakEven / totalSales) * 100 : null;
    const roi               = totalPurchaseCost > 0 ? totalRevenueTTC / totalPurchaseCost : 0;
    return {
      totalSales, breakdown, effectiveMultiplier,
      cartonsToOrder, unitsToOrder, purchasePrice,
      totalPurchaseCost, totalRevenueHT, totalRevenueTTC,
      grossMargin, marginRate, breakEven, breakEvenPct, roi,
    };
  }, [totalDays, exposedPerDay, baseConversionRate, salePriceHT, salePrice]);

  const marginColor  = r.marginRate >= 40 ? "#22C55E" : r.marginRate >= 20 ? "#FFB800" : "#EF4444";
  const breakEvenPct = r.breakEvenPct ?? 0;

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
      className="flex flex-col gap-3 font-sans">

      {/* ── INPUTS HORIZONTAUX ── */}
      <div className="rounded-2xl border p-4" style={{ background: "rgba(4,18,58,0.88)", borderColor: "rgba(34,211,238,0.15)" }}>
        <p className="text-[14px] font-bold text-[#22D3EE] uppercase tracking-widest mb-3">Paramètres — à saisir</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          <InputBox label="Achalandage / jour" value={trafficPerDay} onChange={setTrafficPerDay} unit="clients" min={1} />
          <InputBox label="Clients exposés" value={exposureRate} onChange={setExposureRate} unit="%" min={1} max={100} />
          <InputBox label="Prix de vente TTC" value={salePrice} onChange={setSalePrice} unit="€" min={0.01} step={0.10} />
          <InputBox label="Durée de vente" value={durationWeeks} onChange={setDurationWeeks} unit="semaines" min={1} max={52} />
          <InputBox label="Achat impulsif / 100 clients" value={baseConversionRate} onChange={setBaseConversionRate} unit="%" min={0.1} max={100} step={0.5} />
        </div>

        {/* Légende + barre coefficients fusionnées */}
        <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-[13px] font-bold text-white/30 uppercase tracking-widest shrink-0">Demande eclipse</span>
          {[
            { color: "#64748B", label: "> 8 sem. ×1" },
            { color: "#22D3EE", label: "8→4 sem. ×1" },
            { color: "#FFB800", label: "4→2 sem. ×2" },
            { color: "#EF4444", label: "2→0 sem. ×3" },
          ].map(({ color, label }) => (
            <span key={label} className="flex items-center gap-1.5 text-[13px] text-white/45">
              <span className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: color }} />
              {label}
            </span>
          ))}
          <div className="flex rounded overflow-hidden h-2 flex-1 gap-px min-w-[80px] mx-2">
            {r.breakdown.map((s) => (
              <div key={s.label} style={{ flex: s.days, backgroundColor: s.color, opacity: 0.75 }} />
            ))}
          </div>
          {r.breakdown.map((s) => (
            <span key={s.label} className="text-[13px] font-bold flex items-center gap-1">
              <span style={{ color: s.color }}>×{s.multiplier}</span>
              <span className="text-white/30">{s.days}j</span>
            </span>
          ))}
          <span className="text-[13px] text-white/35">coef. moy. <strong className="text-white">×{r.effectiveMultiplier.toFixed(2)}</strong></span>
        </div>
      </div>

      {/* ── KPI ROW 1 — 4 carrés ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiCard
          label="Ventes estimées sur la période"
          value={fmtN(r.totalSales)}
          unit="produits"
          sub={`${Math.ceil(r.totalSales / 50)} packs de 50 · ${totalDays} jours`}
          color="#22D3EE"
          size="md"
        />
        <KpiCard
          label="Chiffre d'affaires TTC"
          value={fmt(r.totalRevenueTTC, 0)}
          unit="€"
          sub={`HT : ${fmt(r.totalRevenueHT, 0)} €`}
          color="#22D3EE"
          size="md"
        />
        <KpiCard
          label="Marge brute HT"
          value={fmt(r.grossMargin, 0)}
          unit="€"
          sub={`sur ${durationWeeks} sem. de ventes`}
          color={r.grossMargin >= 0 ? "#22C55E" : "#EF4444"}
          size="md"
        />
        <KpiCard
          label="% Marge"
          value={fmt(r.marginRate, 0)}
          unit="%"
          sub={`${fmt(salePriceHT)} € − ${fmt(r.purchasePrice)} € HT/u`}
          color={marginColor}
          size="md"
        />
      </div>

      {/* ── KPI ROW 2 — Point mort large + Commande ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

        {/* Point mort — 2/3 */}
        <div className="lg:col-span-2 rounded-2xl border p-4 flex flex-col justify-between"
          style={{ background: "rgba(4,18,58,0.90)", borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-[14px] font-bold text-white/45 uppercase tracking-widest">Point mort</p>

          <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
            <div>
              <span className="text-4xl font-black text-white">{r.breakEven !== null ? fmtN(r.breakEven) : "—"}</span>
              <span className="text-sm text-white/40 ml-2">unités · <strong className="text-white">{r.breakEven !== null ? Math.ceil((r.breakEven ?? 0) / 50) : "—"} packs</strong></span>
              {r.breakEven !== null && (
                <p className="text-sm text-white/55 mt-1">
                  Rentabilisé après <span className="font-black text-white">{fmt(breakEvenPct, 0)} %</span> des ventes prévues
                </p>
              )}
            </div>
            {r.breakEvenPct !== null && (
              <div className="rounded-xl px-4 py-2 border text-right"
                style={{ background: "rgba(34,197,94,0.1)", borderColor: "rgba(34,197,94,0.3)" }}>
                <p className="text-[13px] text-green-400 font-semibold uppercase tracking-wider">Potentiel restant</p>
                <p className="text-2xl font-black text-green-400 mt-0.5">{fmt(100 - breakEvenPct, 0)} %</p>
              </div>
            )}
          </div>

          {r.breakEven !== null && (
            <div className="mt-3">
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-full bg-emerald-500 transition-all duration-700"
                  style={{ width: `${Math.min(breakEvenPct, 100)}%` }} />
              </div>
              <div className="flex justify-between text-[13px] text-white/35 mt-1">
                <span>0</span>
                <span className="text-emerald-400 font-semibold">Point mort — {fmtN(r.breakEven ?? 0)} u.</span>
                <span>{fmtN(r.totalSales)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Commande — 1/3 */}
        <div className="rounded-2xl border p-4 flex flex-col justify-between"
          style={{ background: "rgba(255,184,0,0.07)", borderColor: "rgba(255,184,0,0.25)" }}>
          <p className="text-[14px] font-bold text-[#FFB800]/70 uppercase tracking-widest">Commande à réaliser</p>
          <div className="mt-3">
            <span className="text-4xl font-black text-[#FFB800]">{r.cartonsToOrder}</span>
            <span className="text-sm text-white/40 ml-2">cartons de 50</span>
            <p className="text-sm text-white/40 mt-1">
              {fmtN(r.unitsToOrder)} unités · <strong className="text-white/70">{fmt(r.purchasePrice)} €/u HT</strong>
            </p>
          </div>
          {onOrder && (
            <button onClick={onOrder}
              className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-black text-sm text-black transition-all"
              style={{ backgroundColor: "#FFB800", boxShadow: "0 0 20px rgba(255,184,0,0.3)" }}>
              <ShoppingCart size={14} />
              Commander {r.cartonsToOrder} cartons →
            </button>
          )}
        </div>
      </div>

      {/* ── KPI ROW 3 — 3 métriques investisseur ── */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border p-4" style={{ background: "rgba(34,211,238,0.07)", borderColor: "rgba(34,211,238,0.2)" }}>
          <p className="text-[14px] font-bold text-[#22D3EE] uppercase tracking-widest">Investissement initial</p>
          <p className="text-2xl font-black text-[#22D3EE] mt-2">{fmt(r.totalPurchaseCost, 0)} €</p>
          <p className="text-[14px] text-[#22D3EE]/50 mt-1">{fmt(r.purchasePrice)} € HT / unité</p>
        </div>
        <div className="rounded-2xl border p-4" style={{ background: "rgba(34,211,238,0.07)", borderColor: "rgba(34,211,238,0.2)" }}>
          <p className="text-[14px] font-bold text-[#22D3EE] uppercase tracking-widest">Retour potentiel</p>
          <p className="text-2xl font-black text-[#22D3EE] mt-2">×{r.roi.toFixed(1)}</p>
          <p className="text-[14px] text-[#22D3EE]/50 mt-1">CA TTC / investissement HT</p>
        </div>
        <div className="rounded-2xl border p-4" style={{ background: "rgba(34,197,94,0.07)", borderColor: "rgba(34,197,94,0.2)" }}>
          <p className="text-[14px] font-bold text-green-400 uppercase tracking-widest">Marge brute HT estimée</p>
          <p className="text-2xl font-black text-green-300 mt-2">{fmt(r.grossMargin, 0)} €</p>
          <p className="text-[14px] text-green-400/50 mt-1">sur {durationWeeks} sem. de ventes</p>
        </div>
      </div>

    </motion.div>
  );
}
