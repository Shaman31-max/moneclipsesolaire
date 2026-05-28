"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { useB2BCart } from "@/contexts/B2BCartContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, LogOut, ShieldCheck, FileText, Truck,
  Eye, Smartphone, Zap, Lock, CheckCircle, ShoppingCart, ExternalLink, BarChart3, Package,
} from "lucide-react";
import type { B2BSession } from "./B2BPortal";
import RentabilityCalculator from "./RentabilityCalculator";

// ── B2B Pricing ──────────────────────────────────────────────────
const TVA = 0.20;

function fmt(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ── B2B Products ─────────────────────────────────────────────────
type B2BBullet = { title: string; text: string; link?: { href: string; label: string } };

type B2BProduct = {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  desc: string;
  bullets?: B2BBullet[];
  image?: string;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  features: string[];
  minQty: number;
  sliderMax: number;
  step: number;
  tiers: { min: number; label: string; unitHT: number; tag: string | null; variantId: string; acompteVariantId: string }[];
  unit: string;
};

const B2B_PRODUCTS: B2BProduct[] = [
  {
    id: "glasses",
    sku: "MES-LUN-B2B",
    name: "Lunettes Éclipse avec présentoir",
    subtitle: "Observation directe certifiée ISO",
    desc: "",
    bullets: [
      { title: "Packaging en pack de 50 unités avec présentoir", text: "Pour faciliter la distribution." },
      { title: "Code-barres EAN standardisé", text: "Pour un passage en caisse rapide et simplifié." },
      { title: "Certification ISO 12312-2 & marquage CE", text: "Lunettes certifiées conformes à la norme internationale ISO 12312-2 pour l'observation directe du Soleil. Certification CE obtenue auprès d'un laboratoire européen agréé.", link: { href: "/#faq", label: "En savoir plus" } },
      { title: "Filtre solaire optique ND 5.0", text: "Filtration haute densité bloquant plus de 99,999 % de la lumière solaire ainsi que les rayons UV et infrarouges nocifs." },
      { title: "Observation solaire sécurisée", text: "Permet d'observer une éclipse solaire directement en toute sécurité." },
      { title: "Faible MOQ — Commerce de proximité", text: "Commande dès 200 paires, idéal pour les épiceries, librairies, offices de tourisme et boutiques de proximité." },
    ],
    image: "/lunettes_avec_presentoir.png",
    color: "#22D3EE",
    icon: Eye,
    features: [],
    minQty: 200,
    sliderMax: 5000,
    step: 50,
    unit: "paire",
    tiers: [
      { min: 200,  label: "200",   unitHT: 0.69, tag: "Faible MOQ", variantId: "58142211866969", acompteVariantId: "58142212260185" },
      { min: 500,  label: "500",   unitHT: 0.62, tag: null, variantId: "58137195741529", acompteVariantId: "58140136145241" },
      { min: 1000, label: "1 000", unitHT: 0.52, tag: null, variantId: "58137195774297", acompteVariantId: "58140136178009" },
      { min: 2000, label: "2 000", unitHT: 0.52, tag: null, variantId: "58137195807065", acompteVariantId: "58140136210777" },
      { min: 5000, label: "5 000", unitHT: 0.49, tag: null, variantId: "58137195839833", acompteVariantId: "58140136243545" },
    ],
  },
  {
    id: "filter",
    image: "/presentoir_filtre.png",
    sku: "MES-FIL-B2B",
    name: "Filtre Téléphone avec présentoir",
    subtitle: "Filmer & photographier l'éclipse",
    desc: "",
    bullets: [
      { title: "Packaging en pack de 40 unités avec présentoir", text: "Pour faciliter la distribution." },
      { title: "Code-barres EAN standardisé", text: "Pour un passage en caisse rapide et simplifié." },
      { title: "Certification ISO 12312-2 & marquage CE", text: "Filtres certifiés conformes à la norme internationale ISO 12312-2. Certification CE obtenue auprès d'un laboratoire européen agréé.", link: { href: "/#faq", label: "En savoir plus" } },
      { title: "Filtre solaire optique ND 5.0", text: "Filtration haute densité bloquant plus de 99,999 % de la lumière solaire ainsi que les rayons UV et infrarouges nocifs." },
      { title: "Observation solaire sécurisée", text: "Permet de filmer et photographier l'éclipse solaire en toute sécurité." },
      { title: "Faible MOQ — Commerce de proximité", text: "Commande dès 80 filtres, idéal pour les épiceries, librairies, offices de tourisme et boutiques de proximité." },
    ],
    color: "#FFB800",
    icon: Smartphone,
    features: [],
    minQty: 80,
    sliderMax: 3000,
    step: 40,
    unit: "filtre",
    tiers: [
      { min: 80,   label: "80",    unitHT: 0.92, tag: "Faible MOQ", variantId: "58142212227417", acompteVariantId: "58142212358489" },
      { min: 200,  label: "200",   unitHT: 0.69, tag: null, variantId: "58137196724569", acompteVariantId: "58140136276313" },
      { min: 1000, label: "1 000", unitHT: 0.52, tag: null, variantId: "58137196757337", acompteVariantId: "58140136309081" },
      { min: 2000, label: "2 000", unitHT: 0.52, tag: null, variantId: "58137196790105", acompteVariantId: "58140136341849" },
      { min: 5000, label: "5 000", unitHT: 0.49, tag: null, variantId: "58137196822873", acompteVariantId: "58140136374617" },
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
    onChange(Math.round(raw / product.step) * product.step || minQty);
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
          type="range" min={minQty} max={sliderMax} step={product.step} value={qty}
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
  recommendedQty,
}: {
  product: B2BProduct;
  onAddToQuote: (id: string, qty: number) => void;
  inQuote: boolean;
  recommendedQty?: number;
}) {
  const [qty, setQty] = useState(product.minQty);
  const [prevTierIdx, setPrevTierIdx] = useState(0);

  useEffect(() => {
    if (recommendedQty === undefined) return;
    const snapped = Math.round(recommendedQty / product.step) * product.step;
    const clamped = Math.max(product.minQty, Math.min(product.sliderMax, snapped));
    setQty(clamped);
  }, [recommendedQty, product.step, product.minQty, product.sliderMax]);

  const activeTier = [...product.tiers].reverse().find((t) => qty >= t.min) ?? product.tiers[0];
  const tierIdx = product.tiers.indexOf(activeTier);
  const unitHT = activeTier.unitHT;
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
      className="relative rounded-3xl p-4 sm:p-8 border flex flex-col overflow-hidden"
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

      {/* Product image */}
      {product.image && (
        <div className="relative z-10 w-full h-44 mb-4">
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain drop-shadow-lg" />
        </div>
      )}

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
      {product.bullets && product.bullets.length > 0 ? (
        <div className="relative z-10 space-y-2.5 mb-4">
          {product.bullets.map((b) => (
            <div key={b.title} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${product.color}20`, border: `1px solid ${product.color}40` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }} />
              </div>
              <p className="text-sm text-white/85 leading-snug">
                <span className="font-bold text-white">{b.title}</span>
                {" — "}
                <span className="text-white/70">{b.text}</span>
                {b.link && (
                  <> <a href={b.link.href} className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors text-xs ml-1">{b.link.label} →</a></>
                )}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="relative z-10 text-sm text-white/88 leading-relaxed mb-4">{product.desc}</p>
      )}

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
            <span className="text-3xl sm:text-4xl font-black" style={{ color: product.color }}>
              {fmt(unitHT)} €
            </span>
          </div>
          <div className="text-xs text-white/75 mt-0.5">
            HT / {product.unit} · min. {product.minQty.toLocaleString("fr-FR")} {product.unit}s
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTier.tag && (
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
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black tabular-nums" style={{ color: product.color }}>
              {qty.toLocaleString("fr-FR")}
            </span>
            <span className="text-xs text-white/72">{product.unit}s</span>
            <span className="text-xs text-white/40">·</span>
            <span className="text-sm font-bold text-white/55">{Math.ceil(qty / 50)}</span>
            <span className="text-xs text-white/40">packs de 50</span>
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
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-6">
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
              {unlocked ? (
                <CheckCircle size={12} style={{ color: product.color }} />
              ) : (
                <Lock size={11} className="text-white/38" />
              )}
              <span className="text-[9px] font-black" style={{ color: unlocked ? product.color : "rgba(232,240,255,0.2)" }}>
                {fmt(t.unitHT)} €
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
        className="relative z-10 mt-auto w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-base text-white transition-all"
        style={{
          backgroundColor: inQuote ? "#22c55e" : product.color,
          boxShadow: inQuote ? "0 0 24px rgba(34,197,94,0.4)" : `0 0 28px ${product.color}50`,
        }}
      >
        {inQuote ? (
          <><CheckCircle size={18} /> Dans le panier</>
        ) : (
          <><ShoppingCart size={18} /> <span className="hidden sm:inline">Ajouter au panier — </span>{qty.toLocaleString("fr-FR")} {product.unit}s</>

        )}
      </motion.button>
    </motion.div>
  );
}

// ── Main catalog ─────────────────────────────────────────────────
type QuoteLine = { productId: string; qty: number; unitHT: number; name: string; variantId: string; acompteVariantId: string };
type Props = { session: B2BSession; onLogout: () => void };

export default function B2BCatalog({ session, onLogout }: Props) {
  const [quote, setQuote] = useState<QuoteLine[]>([]);
  const [entreprise, setEntreprise] = useState("");
  const [tva, setTva] = useState("");
  const [recommendedQty, setRecommendedQty] = useState<number | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<"catalogue" | "calculateur">("catalogue");
  const { sidebarOpen: showQuote, setSidebarOpen: setShowQuote, sync } = useB2BCart();

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("tab") === "calculateur") setActiveTab("calculateur");
  }, []);

  const addToQuote = (productId: string, qty: number) => {
    const p = B2B_PRODUCTS.find((x) => x.id === productId)!;
    const tier = [...p.tiers].reverse().find((t) => qty >= t.min) ?? p.tiers[0];
    const unitHT = tier.unitHT;
    const variantId = tier.variantId;
    const acompteVariantId = tier.acompteVariantId;
    setQuote((q) => {
      const exists = q.find((l) => l.productId === productId);
      if (exists) return q.map((l) => l.productId === productId ? { ...l, qty, unitHT, variantId, acompteVariantId } : l);
      return [...q, { productId, qty, unitHT, variantId, acompteVariantId, name: p.name }];
    });
  };

  const totalHT = quote.reduce((s, l) => s + l.qty * l.unitHT, 0);
  const totalTTC = totalHT * (1 + TVA);
  const totalUnits = quote.reduce((s, l) => s + l.qty, 0);

  const buildUrl = (useAcompte: boolean) => {
    if (quote.length === 0) return "#";
    const items = quote.map((l) => `${useAcompte ? l.acompteVariantId : l.variantId}:${l.qty}`).join(",");
    const base = `https://shop.moneclipsesolaire.fr/cart/${items}`;
    const params = new URLSearchParams();
    if (entreprise.trim()) params.set("attributes[Entreprise]", entreprise.trim());
    if (tva.trim()) params.set("attributes[N° TVA]", tva.trim());
    const qs = params.toString();
    return qs ? `${base}?${qs}` : base;
  };
  const checkoutUrl = buildUrl(false);
  const acompteUrl = buildUrl(true);

  useEffect(() => {
    sync(quote.length, checkoutUrl, acompteUrl);
  }, [quote, checkoutUrl, acompteUrl, sync]);

  return (
    <div className="min-h-screen bg-[#060412] pt-16">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#0D0820]/50 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#22D3EE] opacity-[0.02] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
        {/* Header sticky */}
        <div className="sticky top-[100px] z-30 glass-dark border border-[#22D3EE]/10 rounded-2xl px-4 sm:px-6 py-3 mb-8 sm:mb-10 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <Building2 size={16} className="text-[#22D3EE]" />
              <span className="font-black text-white text-lg">{session.company}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-[#FFB800] border border-[#22D3EE]/30 bg-[#22D3EE]/12">
                Partenaire certifié
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowQuote(!showQuote)}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border"
              style={{
                background: quote.length > 0 ? "rgba(255,184,0,0.15)" : "rgba(4,18,58,0.85)",
                borderColor: quote.length > 0 ? "rgba(255,184,0,0.4)" : "rgba(30,127,255,0.25)",
                color: quote.length > 0 ? "#FFB800" : "rgba(255,255,255,0.9)",
              }}
            >
              <ShoppingCart size={14} />
              Mon panier
              {quote.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#FFB800] text-[10px] font-bold text-black flex items-center justify-center">
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
          className="rounded-2xl p-4 sm:p-5 mb-8 sm:mb-10"
          style={{ background: "rgba(4,18,58,0.88)", border: "1px solid rgba(30,127,255,0.2)" }}
        >
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 items-center">
            {[
              { icon: ShieldCheck, label: "Prix unitaire HT", value: "à partir de 0,61 € HT" },
              { icon: Eye, label: "Min. Lunettes", value: "200 paires" },
              { icon: Smartphone, label: "Min. Filtres", value: "80 unités" },
              { icon: Truck, label: "Délai livraison", value: "Selon calendrier", href: "/#commande" },
              { icon: FileText, label: "Paiement", value: "50% acompte, solde à réception" },
            ].map(({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string; href?: string }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={13} className="text-[#22D3EE] flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-white/72 uppercase tracking-wider">{label}</div>
                  {href ? (
                    <a href={href} className="text-xs sm:text-sm font-bold text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors">{value} →</a>
                  ) : (
                    <div className="text-xs sm:text-sm font-bold text-white">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4 pt-3 border-t border-white/5">
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

        {/* Certificats téléchargeables */}
        <div className="mb-8 flex flex-wrap gap-3 items-center">
          <span className="text-xs text-white/50 uppercase tracking-widest font-semibold">Télécharger les certificats</span>
          <a
            href="/certificat-iso-12312-2.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white border border-[#22D3EE]/30 bg-[#22D3EE]/10 hover:bg-[#22D3EE]/20 transition-colors"
          >
            <FileText size={14} className="text-[#22D3EE]" /> Certificat ISO 12312-2
          </a>
          <a
            href="/certificat-ce.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white border border-[#FFB800]/30 bg-[#FFB800]/10 hover:bg-[#FFB800]/20 transition-colors"
          >
            <FileText size={14} className="text-[#FFB800]" /> Certificat CE
          </a>
        </div>

        {/* Section title + Tab switcher */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#22D3EE] mb-1 font-medium">Espace Partenaires B2B</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              {activeTab === "catalogue"
                ? <>Collection Éclipse 2026 — <span className="gradient-text-blue">Catalogue</span></>
                : <>Simulateur de <span className="gradient-text-blue">Vente</span></>
              }
            </h1>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("catalogue")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all border"
                style={{
                  background: activeTab === "catalogue" ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.04)",
                  borderColor: activeTab === "catalogue" ? "#22D3EE" : "rgba(255,255,255,0.1)",
                  color: activeTab === "catalogue" ? "#22D3EE" : "rgba(255,255,255,0.6)",
                }}
              >
                <Package size={14} /> Catalogue
              </button>
              <button
                onClick={() => setActiveTab("calculateur")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all border"
                style={{
                  background: activeTab === "calculateur" ? "rgba(255,184,0,0.15)" : "rgba(255,255,255,0.04)",
                  borderColor: activeTab === "calculateur" ? "#FFB800" : "rgba(255,255,255,0.1)",
                  color: activeTab === "calculateur" ? "#FFB800" : "rgba(255,255,255,0.6)",
                }}
              >
                <BarChart3 size={14} /> Simulateur
              </button>
            </div>
          </div>
        </div>

        {/* Bannière simulateur */}
        {activeTab === "catalogue" && (
          <div className="mb-8">
          <p className="text-center text-white/60 text-sm mb-3">Perdu sur les quantités ? Cliquez ci-dessous pour estimer vos ventes</p>
          <button
            onClick={() => setActiveTab("calculateur")}
            className="w-full mb-8 flex items-center justify-between gap-4 px-6 py-5 rounded-2xl transition-all group"
            style={{ background: "linear-gradient(135deg, #FFB800, #FF8C00)", boxShadow: "0 0 32px rgba(255,184,0,0.45), 0 4px 16px rgba(0,0,0,0.3)" }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center flex-shrink-0">
                <BarChart3 size={24} className="text-black" />
              </div>
              <div className="text-left">
                <p className="font-black text-black text-base">Accéder au simulateur de rentabilité</p>
                <p className="text-xs text-black/65 mt-0.5">Calculez vos gains et la quantité idéale à commander</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-black font-black text-xl group-hover:translate-x-1 transition-transform flex-shrink-0">
              <span>›</span><span className="group-hover:opacity-100 opacity-60 transition-opacity">›</span>
            </div>
          </button>
          </div>
        )}

        {/* Tab content */}
        {activeTab === "calculateur" ? (
          <div className="mb-8">
            <RentabilityCalculator onOrder={(units) => { setRecommendedQty(units); setActiveTab("catalogue"); }} />
          </div>
        ) : (
          <div>
        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          {B2B_PRODUCTS.map((p) => (
            <B2BProductCard
              key={p.id}
              product={p}
              onAddToQuote={addToQuote}
              inQuote={quote.some((l) => l.productId === p.id)}
              recommendedQty={p.id === "glasses" ? recommendedQty : undefined}
            />
          ))}
        </div>

        {/* Full-width CTA */}
        <AnimatePresence>
          {quote.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="mb-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-lg text-black bg-white hover:bg-gray-100 transition-colors"
                style={{ boxShadow: "0 0 32px rgba(255,255,255,0.12)" }}
              >
                <ShoppingCart size={20} />
                Finaliser la commande — {fmt(totalTTC)} € TTC →
              </a>
              <a
                href={acompteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-auto flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-black text-base text-black bg-[#FFB800] hover:bg-[#e6a700] transition-colors whitespace-nowrap"
                style={{ boxShadow: "0 0 24px rgba(255,184,0,0.35)" }}
              >
                Acompte 50% — {fmt(totalTTC * 0.5)} € →
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Paliers table */}
        <div
          className="rounded-2xl p-4 sm:p-6 border"
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
                        <div className="text-[10px] text-white/65">{fmt(t.unitHT)} €/u</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
          </div>
        )}
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
                <h2 className="font-black text-white text-lg flex items-center gap-2">
                  <ShoppingCart size={18} className="text-[#FFB800]" /> Mon panier B2B
                </h2>
                <p className="text-[10px] text-white/65">{session.company}</p>
              </div>
              <button onClick={() => setShowQuote(false)} className="text-white/70 hover:text-white text-2xl font-light">×</button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {quote.length === 0 ? (
                <p className="text-center text-sm text-white/65 py-12">Aucun produit dans le panier</p>
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

            {quote.length > 0 && (
              <div className="px-6 py-5 border-t border-[#E8F0FF]/8">
                <div className="space-y-1.5 mb-5">
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

                {/* Champs optionnels entreprise / TVA */}
                <div className="space-y-2 mb-4">
                  <div>
                    <label className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mb-1 block">
                      Entreprise <span className="text-white/30 normal-case">(facultatif)</span>
                    </label>
                    <input
                      type="text"
                      value={entreprise}
                      onChange={(e) => setEntreprise(e.target.value)}
                      placeholder="Nom de l'entreprise"
                      className="w-full bg-white/05 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-[#FFB800]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-white/50 uppercase tracking-wider font-semibold mb-1 block">
                      N° TVA intracommunautaire <span className="text-white/30 normal-case">(facultatif)</span>
                    </label>
                    <input
                      type="text"
                      value={tva}
                      onChange={(e) => setTva(e.target.value)}
                      placeholder="FR12345678901"
                      className="w-full bg-white/05 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:border-[#FFB800]/50 transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Finaliser — bouton principal blanc */}
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm text-black bg-white hover:bg-gray-100 transition-colors mb-3"
                  style={{ boxShadow: "0 0 24px rgba(255,255,255,0.15)" }}
                >
                  <ShoppingCart size={15} /> Finaliser la commande — {fmt(totalTTC)} € →
                </a>

                <div className="mt-3 pt-3 border-t border-white/06">
                  <p className="text-[10px] text-white/45 text-center mb-2">— ou régler en 2 fois —</p>
                  <a
                    href={acompteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-black bg-[#FFB800] hover:bg-[#e6a700] transition-colors"
                    style={{ boxShadow: "0 0 16px rgba(255,184,0,0.35)" }}
                  >
                    Payer l'acompte 50% — {fmt(totalTTC * 0.5)} € →
                  </a>
                  <p className="text-[10px] text-white/35 text-center mt-1.5">Solde de {fmt(totalTTC * 0.5)} € à réception</p>
                </div>
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
