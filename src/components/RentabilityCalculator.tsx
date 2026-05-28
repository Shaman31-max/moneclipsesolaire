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
  { min: 200,  price: 0.69 },
  { min: 500,  price: 0.62 },
  { min: 1000, price: 0.52 },
  { min: 2000, price: 0.52 },
  { min: 5000, price: 0.49 },
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
function InputBox({ label, value, onChange, unit, min, max, step = 1, hint, decimal = false }: {
  label: string; value: number; onChange: (v: number) => void;
  unit: string; min?: number; max?: number; step?: number; hint?: string; decimal?: boolean;
}) {
  const [raw, setRaw] = useState(String(value).replace(".", ","));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setRaw(input);
    const normalized = input.replace(",", ".");
    const n = parseFloat(normalized);
    if (!isNaN(n) && (min === undefined || n >= min) && (max === undefined || n <= max)) {
      onChange(n);
    }
  };

  const handleBlur = () => {
    setRaw(String(value).replace(".", ","));
  };

  if (decimal) {
    return (
      <div className="flex flex-col gap-1 min-w-0">
        <label className="text-[16px] font-bold text-white/40 uppercase tracking-widest leading-none">{label}</label>
        <div className="flex items-center gap-1.5 rounded-xl border px-3 py-1.5 focus-within:border-[#22D3EE]/60 transition-colors"
          style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}>
          <input
            type="text" inputMode="decimal" value={raw}
            onChange={handleChange} onBlur={handleBlur}
            className="w-full bg-transparent text-white font-black text-base outline-none tabular-nums [font-family:var(--font-outfit)]"
          />
          <span className="text-[14px] text-white/35 shrink-0 font-medium">{unit}</span>
        </div>
        {hint && <p className="text-[11px] text-white/30 leading-snug mt-0.5 italic">{hint}</p>}
      </div>
    );
  }

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
      {hint && <p className="text-[11px] text-white/30 leading-snug mt-0.5 italic">{hint}</p>}
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
export default function RentabilityCalculator({ onOrder }: { onOrder?: (units: number) => void }) {
  const [trafficPerDay,      setTrafficPerDay]     = useState(300);
  const [exposureRate,       setExposureRate]       = useState(70);
  const [salePrice,          setSalePrice]          = useState(3.99);
  const [durationWeeks,      setDurationWeeks]      = useState(6);
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
      grossMargin, marginRate, breakEven, breakEvenPct, roi, unitMargin,
    };
  }, [totalDays, exposedPerDay, baseConversionRate, salePriceHT, salePrice]);

  const marginColor  = r.marginRate >= 40 ? "#22C55E" : r.marginRate >= 20 ? "#FFB800" : "#EF4444";
  const breakEvenPct = r.breakEvenPct ?? 0;

  const weeklyChart = useMemo(() => {
    const eclipseMs = ECLIPSE_DATE.getTime();
    let cumSales = 0, cumMargin = 0;
    let breakEvenWeek: number | null = null;
    const weeks = Array.from({ length: Math.max(durationWeeks, 1) }, (_, idx) => {
      const weekNum = idx + 1;
      const startDaysBefore = (durationWeeks - idx) * 7;
      const endDaysBefore   = (durationWeeks - idx - 1) * 7;
      const wStartMs = eclipseMs - startDaysBefore * MS_PER_DAY;
      const wEndMs   = eclipseMs - Math.max(endDaysBefore, 0) * MS_PER_DAY;
      let sales = 0;
      for (const seg of SEGMENTS) {
        const segStart = seg.startMsBefore === Infinity ? 0 : eclipseMs - seg.startMsBefore;
        const segEnd   = eclipseMs - seg.endMsBefore;
        const oStart = Math.max(wStartMs, segStart);
        const oEnd   = Math.min(wEndMs, segEnd);
        if (oEnd <= oStart) continue;
        sales += exposedPerDay * (baseConversionRate * seg.multiplier / 100) * ((oEnd - oStart) / MS_PER_DAY);
      }
      sales = Math.round(sales);
      const ca     = sales * salePriceHT;
      const margin = sales * r.unitMargin;
      cumSales  += sales;
      cumMargin += margin;
      if (breakEvenWeek === null && r.unitMargin > 0 && cumMargin >= r.totalPurchaseCost) breakEvenWeek = weekNum;
      return { weekNum, sales, ca, margin, cumSales, cumMargin };
    });
    return { weeks, breakEvenWeek };
  }, [durationWeeks, exposedPerDay, baseConversionRate, salePriceHT, r]);

  const PROFILES = [
    { label: "Bar / Tabac", icon: "🍺", traffic: 200, exposure: 80, conv: 15 },
    { label: "Commerce de proximité", icon: "🛒", traffic: 300, exposure: 70, conv: 6 },
  ];

  const applyProfile = (p: typeof PROFILES[0]) => {
    setTrafficPerDay(p.traffic);
    setExposureRate(p.exposure);
    setBaseConversionRate(p.conv);
  };

  const activeProfile = PROFILES.find(
    (p) => p.traffic === trafficPerDay && p.exposure === exposureRate && p.conv === baseConversionRate
  );

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
      className="flex flex-col gap-3 font-sans">

      {/* ── PROFILS ── */}
      <div className="flex gap-2 flex-wrap items-center">
        <span className="text-[12px] text-white/40 font-semibold shrink-0">Choisissez ici</span>
        {PROFILES.map((p) => {
          const active = activeProfile?.label === p.label;
          return (
            <button key={p.label} onClick={() => applyProfile(p)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-bold transition-all"
              style={{
                background: active ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.04)",
                borderColor: active ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.1)",
                color: active ? "#22D3EE" : "rgba(220,232,255,0.5)",
              }}>
              <span>{p.icon}</span>
              {p.label}
              {active && <span className="text-[11px] font-normal opacity-70">— actif</span>}
            </button>
          );
        })}
        <span className="flex items-center text-[12px] text-white/25 italic pl-1">ou saisissez vos propres valeurs</span>
      </div>

      {/* ── INPUTS HORIZONTAUX ── */}
      <div className="rounded-2xl border p-4" style={{ background: "rgba(4,18,58,0.88)", borderColor: "rgba(34,211,238,0.15)" }}>
        <p className="text-[14px] font-bold text-[#22D3EE] uppercase tracking-widest mb-3">Paramètres — à saisir</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          <InputBox label="Achalandage / jour" value={trafficPerDay} onChange={setTrafficPerDay} unit="clients" min={1} />
          <InputBox label="Clients exposés" value={exposureRate} onChange={setExposureRate} unit="%" min={1} max={100} hint="% des clients qui voient les lunettes (ex: 70% si en caisse)" />
          <InputBox label="Prix de vente TTC" value={salePrice} onChange={setSalePrice} unit="€" min={0.01} step={0.10} decimal />
          <InputBox label="Durée de vente" value={durationWeeks} onChange={setDurationWeeks} unit="semaines" min={1} max={52} />
          <InputBox label="Achats impulsifs" value={baseConversionRate} onChange={setBaseConversionRate} unit="/ 100" min={0.1} max={100} step={0.5} hint="Nb de clients sur 100 passant en caisse qui achètent spontanément" />
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
          label="Chiffre d'affaires HT"
          value={fmt(r.totalRevenueHT, 0)}
          unit="€"
          sub={`TTC : ${fmt(r.totalRevenueTTC, 0)} €`}
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
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-4xl font-black text-[#FFB800]">{fmtN(r.unitsToOrder)}</span>
              <span className="text-sm text-white/40">unités recommandées</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1 flex-wrap">
              <span className="text-2xl font-black text-[#FFB800]/70">{r.cartonsToOrder}</span>
              <span className="text-sm text-white/40">packs de 50</span>
            </div>
            <p className="text-sm text-white/40 mt-2">
              <strong className="text-white/70">{fmt(r.purchasePrice)} €/u HT</strong> · {fmt(r.totalPurchaseCost, 0)} € investis
            </p>
          </div>
          {onOrder && (
            <button onClick={() => onOrder?.(r.unitsToOrder)}
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
          <p className="text-[14px] font-bold text-green-400 uppercase tracking-widest">Bénéfice brut de l'opération</p>
          <p className="text-2xl font-black text-green-300 mt-2">{fmt(r.grossMargin, 0)} €</p>
          <p className="text-[14px] text-green-400/50 mt-1">sur {durationWeeks} sem. de ventes</p>
        </div>
      </div>

    </motion.div>
  );
}
