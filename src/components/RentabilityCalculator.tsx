"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Package, Euro, Target, Store, ShoppingCart } from "lucide-react";

const ECLIPSE_DATE = new Date("2026-08-12T00:00:00");

const PERIODS = [
  { id: "p1", label: "8 → 4 sem.", multiplier: 1, days: 28, color: "#22D3EE", desc: "Curiosité croissante" },
  { id: "p2", label: "4 → 2 sem.", multiplier: 2, days: 14, color: "#FFB800", desc: "Engouement fort" },
  { id: "p3", label: "2 → 0 sem.", multiplier: 3, days: 14, color: "#EF4444", desc: "Pic de demande" },
];

const PURCHASE_TIERS = [
  { min: 200, price: 0.92 },
  { min: 500, price: 0.70 },
  { min: 1000, price: 0.66 },
  { min: 2000, price: 0.63 },
  { min: 5000, price: 0.61 },
];

function getPurchasePrice(units: number): number {
  const tier = [...PURCHASE_TIERS].reverse().find((t) => units >= t.min);
  return tier ? tier.price : PURCHASE_TIERS[0].price;
}

function getAutoPeriod(): string {
  const weeksLeft = (ECLIPSE_DATE.getTime() - Date.now()) / (7 * 24 * 60 * 60 * 1000);
  if (weeksLeft <= 2) return "p3";
  if (weeksLeft <= 4) return "p2";
  return "p1";
}

function fmt2(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtN(n: number) {
  return Math.round(n).toLocaleString("fr-FR");
}

function InputField({
  label, value, onChange, unit, min, max, step = 1, color,
}: {
  label: string; value: number; onChange: (v: number) => void;
  unit: string; min?: number; max?: number; step?: number; color: string;
}) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1.5">{label}</label>
      <div
        className="flex items-center gap-2 rounded-xl border px-3 py-2.5 transition-all focus-within:border-[#22D3EE]/50"
        style={{ background: "rgba(232,240,255,0.04)", borderColor: "rgba(232,240,255,0.1)" }}
      >
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          step={step}
          className="flex-1 bg-transparent font-black text-xl outline-none tabular-nums w-full"
          style={{ color }}
        />
        <span className="text-xs text-white/45 shrink-0">{unit}</span>
      </div>
    </div>
  );
}

function ResultCard({
  icon, label, value, unit, sub, color, highlight,
}: {
  icon: React.ReactNode; label: string; value: string;
  unit: string; sub: string; color: string; highlight?: boolean;
}) {
  return (
    <div
      className="rounded-2xl px-5 py-4 border flex items-center gap-4"
      style={{
        background: highlight ? `${color}12` : "rgba(4,18,58,0.88)",
        borderColor: highlight ? `${color}45` : "rgba(232,240,255,0.08)",
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}18`, color }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] text-white/55 uppercase tracking-wider font-semibold mb-0.5">{label}</div>
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="text-2xl font-black" style={{ color }}>{value}</span>
          <span className="text-xs text-white/60">{unit}</span>
        </div>
        <div className="text-[10px] text-white/45 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

export default function RentabilityCalculator() {
  const [trafficPerDay, setTrafficPerDay] = useState(200);
  const [exposureRate, setExposureRate] = useState(30);
  const [salePrice, setSalePrice] = useState(3.99);
  const [baseConversionRate, setBaseConversionRate] = useState(3);
  const [selectedPeriod, setSelectedPeriod] = useState(getAutoPeriod());

  const autoPeriodId = getAutoPeriod();
  const activePeriod = PERIODS.find((p) => p.id === selectedPeriod)!;

  const r = useMemo(() => {
    const effConvRate = baseConversionRate * activePeriod.multiplier;
    const exposedPerDay = trafficPerDay * (exposureRate / 100);
    const salesPerDay = exposedPerDay * (effConvRate / 100);
    const totalSales = Math.round(salesPerDay * activePeriod.days);
    const cartonsToOrder = Math.ceil(Math.max(totalSales, 1) / 50);
    const unitsToOrder = Math.max(cartonsToOrder * 50, 200);
    const purchasePrice = getPurchasePrice(unitsToOrder);
    const totalPurchaseCost = purchasePrice * unitsToOrder;
    const totalRevenue = salePrice * totalSales;
    const grossMargin = totalRevenue - totalPurchaseCost;
    const marginRate = totalRevenue > 0 ? (grossMargin / totalRevenue) * 100 : 0;
    const unitMargin = salePrice - purchasePrice;
    const breakEven = unitMargin > 0 ? Math.ceil(totalPurchaseCost / unitMargin) : null;
    return {
      effConvRate,
      exposedPerDay,
      salesPerDay,
      totalSales,
      cartonsToOrder,
      unitsToOrder,
      purchasePrice,
      totalPurchaseCost,
      totalRevenue,
      grossMargin,
      marginRate,
      breakEven,
    };
  }, [trafficPerDay, exposureRate, salePrice, baseConversionRate, activePeriod]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className="grid md:grid-cols-2 gap-6">

        {/* ── Inputs ── */}
        <div
          className="rounded-3xl p-6 border flex flex-col gap-5"
          style={{ background: "rgba(4,18,58,0.88)", borderColor: "rgba(34,211,238,0.2)" }}
        >
          <h3 className="text-base font-black text-white flex items-center gap-2">
            <Store size={16} className="text-[#22D3EE]" />
            Votre point de vente
          </h3>

          <InputField
            label="Achalandage journalier"
            value={trafficPerDay}
            onChange={setTrafficPerDay}
            unit="clients / jour"
            min={1}
            color="#22D3EE"
          />

          <InputField
            label="% de clients exposés au produit"
            value={exposureRate}
            onChange={setExposureRate}
            unit="%"
            min={1}
            max={100}
            color="#22D3EE"
          />

          <InputField
            label="Prix de vente"
            value={salePrice}
            onChange={setSalePrice}
            unit="€"
            min={0.01}
            step={0.10}
            color="#FFB800"
          />

          <InputField
            label="Taux de conversion de base"
            value={baseConversionRate}
            onChange={setBaseConversionRate}
            unit="%"
            min={0.1}
            max={100}
            step={0.5}
            color="#22D3EE"
          />

          {/* Period selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                Période avant l'éclipse
              </span>
              {selectedPeriod === autoPeriodId && (
                <span className="text-[9px] px-2 py-0.5 rounded-full font-bold text-[#22D3EE] border border-[#22D3EE]/30 bg-[#22D3EE]/10">
                  Auto-détecté
                </span>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {PERIODS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPeriod(p.id)}
                  className="rounded-xl p-3 text-center transition-all border"
                  style={{
                    background: selectedPeriod === p.id ? `${p.color}20` : "rgba(255,255,255,0.03)",
                    borderColor: selectedPeriod === p.id ? p.color : "rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-sm font-black mb-0.5" style={{ color: p.color }}>×{p.multiplier}</div>
                  <div className="text-[9px] text-white/70 font-bold">{p.label}</div>
                  <div className="text-[8px] text-white/40 mt-0.5">{p.desc}</div>
                </button>
              ))}
            </div>
            <div className="mt-2 text-center text-xs text-white/50">
              Taux effectif :{" "}
              <span className="font-black text-white">{r.effConvRate.toFixed(1)} %</span>
              <span className="mx-1.5 text-white/20">·</span>
              <span>{fmtN(r.exposedPerDay)} clients exposés/jour</span>
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="flex flex-col gap-3">
          <ResultCard
            icon={<TrendingUp size={15} />}
            label="Nombre de ventes estimées"
            value={fmtN(r.totalSales)}
            unit="produits"
            sub={`${fmt2(r.salesPerDay)} ventes/jour · ${activePeriod.days} jours`}
            color="#22D3EE"
          />

          <ResultCard
            icon={<Package size={15} />}
            label="Commande à réaliser"
            value={String(r.cartonsToOrder)}
            unit="cartons de 50"
            sub={`${fmtN(r.unitsToOrder)} unités · palier ${fmt2(r.purchasePrice)} €/u`}
            color="#FFB800"
          />

          <ResultCard
            icon={<ShoppingCart size={15} />}
            label="Prix d'achat total"
            value={fmt2(r.totalPurchaseCost)}
            unit="€ HT"
            sub={`CA estimé : ${fmt2(r.totalRevenue)} €`}
            color="#22D3EE"
          />

          <ResultCard
            icon={<Euro size={15} />}
            label="Marge brute"
            value={fmt2(r.grossMargin)}
            unit="€"
            sub={`${fmt2(r.marginRate)} % de marge sur CA`}
            color={r.grossMargin >= 0 ? "#22C55E" : "#EF4444"}
            highlight
          />

          <ResultCard
            icon={<Target size={15} />}
            label="Point mort"
            value={r.breakEven !== null ? fmtN(r.breakEven) : "—"}
            unit="unités à vendre"
            sub={
              r.breakEven !== null
                ? `= ${fmt2(r.totalSales > 0 ? (r.breakEven / r.totalSales) * 100 : 0)} % de votre projection`
                : "Prix de vente ≤ prix d'achat"
            }
            color="#FFB800"
          />
        </div>
      </div>
    </motion.div>
  );
}
