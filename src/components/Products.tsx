"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Eye, Smartphone, CheckCircle, Zap, BookOpen } from "lucide-react";

const PRICE_STEPS = [
  { qty: 1,  total: 4.99,  mention: "Solo" },
  { qty: 2,  total: 6.99,  mention: "Duo" },
  { qty: 3,  total: 8.99,  mention: null },
  { qty: 4,  total: 9.99,  mention: "Famille" },
  { qty: 5,  total: 12.49, mention: null },
  { qty: 6,  total: 13.99, mention: null },
  { qty: 8,  total: 17.49, mention: "Bureau" },
  { qty: 10, total: 19.99, mention: "⭐ Meilleure offre" },
  { qty: 12, total: 22.99, mention: null },
  { qty: 16, total: 24.99, mention: null },
  { qty: 20, total: 34.99, mention: "🎉 Événement" },
];

function fmt(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

type Bullet = { title: string; text: string };

type ProductDef = {
  id: string;
  name: string;
  subtitle: string;
  desc?: string;
  intro?: string;
  bullets?: Bullet[];
  useCases?: string[];
  warning?: string;
  warnings?: string[];
  unit: string;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  features: string[];
  variantId: string;
  fixedPrice?: number;
  image?: string;
};

const PRODUCTS: ProductDef[] = [
  {
    id: "glasses",
    name: "Lunettes Éclipse Pro",
    subtitle: "Observer en toute sécurité",
    image: "/LUNETTE_ECLIPSE_2.png",
    bullets: [
      { title: "Certification ISO 12312-2 & marquage CE", text: "Conformes à la norme internationale, certification obtenue auprès d'un laboratoire européen agréé." },
      { title: "Filtre solaire optique ND 5.0", text: "Bloque plus de 99,999 % de la lumière solaire, UV et infrarouges." },
      { title: "Observation solaire sécurisée", text: "Observer une éclipse directement en toute sécurité." },
      { title: "Adultes & enfants", text: "Design léger et confortable pour toute la famille." },
      { title: "Production responsable", text: "Fabrication à la demande pour limiter le gaspillage." },
    ],
    unit: "paire",
    color: "#FFB800",
    icon: Eye,
    features: [],
    variantId: "gid://shopify/ProductVariant/58125149110617",
  },
  {
    id: "filter",
    name: "Filtre Téléphone Universel",
    subtitle: "Filmer & photographier l'éclipse",
    image: "/filtre_telephone.png",
    intro: "Capturez l'éclipse solaire du 12 août 2026 en toute sécurité grâce à notre filtre solaire ND 5.0 spécialement conçu pour smartphones et tablettes.",
    bullets: [
      { title: "Compatible avec tous les téléphones", text: "Ce filtre est le même que celui pour les lunettes et permet de rendre ce moment mémorable." },
      { title: "Production responsable", text: "Production réalisée en batches limités afin de réduire le gaspillage et la surproduction." },
    ],
    warnings: [
      "Ce filtre est conçu exclusivement pour la capture photo/vidéo du Soleil avec un smartphone ou une tablette.",
      "Ne jamais observer directement le Soleil à travers l'écran ou l'objectif sans protection adaptée pour les yeux.",
      "Toujours utiliser des lunettes certifiées ISO 12312-2 pour l'observation directe de l'éclipse solaire.",
    ],
    unit: "filtre",
    color: "#FFB800",
    icon: Smartphone,
    features: [],
    variantId: "gid://shopify/ProductVariant/58125148586329",
  },
  {
    id: "ebook",
    name: "Ma première éclipse",
    subtitle: "Ebook enfant — dès 6 ans",
    image: "/ebook.png",
    desc: "Un ebook illustré et pédagogique pour expliquer l'éclipse solaire aux enfants. Comprendre le phénomène, se préparer à l'observer en sécurité, et vivre un moment inoubliable en famille. Téléchargement instantané après commande.",
    unit: "ebook",
    color: "#FFB800",
    icon: BookOpen,
    features: ["Dès 6 ans", "Illustré & interactif", "Téléchargement instantané", "Format PDF"],
    variantId: "gid://shopify/ProductVariant/58125148586329",
    fixedPrice: 0.99,
  },
];

function ProductCard({ product }: { product: ProductDef }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const Icon = product.icon;

  const step = PRICE_STEPS[stepIdx];
  const unitPrice = step.total / step.qty;
  const isFixed = !!product.fixedPrice;

  const variantNumericId = product.variantId.split("/").pop();
  const checkoutUrl = `https://ijtkfu-q9.myshopify.com/cart/${variantNumericId}:${isFixed ? 1 : step.qty}`;

  const handleAdd = () => {
    setAdded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative glass rounded-3xl p-8 border flex flex-col overflow-hidden"
      style={{ borderColor: `${product.color}20` }}
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 20%, ${product.color}, transparent 65%)` }}
      />

      {/* Product image */}
      {product.image && (
        <div className="relative z-10 w-full h-48 mb-4 -mt-2 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>
      )}

      {/* Icon + title */}
      <div className="relative z-10 flex items-start gap-4 mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${product.color}15`, border: `1px solid ${product.color}30` }}
        >
          <Icon size={26} style={{ color: product.color }} />
        </div>
        <div>
          <div className="text-[12px] uppercase tracking-[0.25em] mb-1" style={{ color: product.color }}>
            {product.subtitle}
          </div>
          <h3 className="text-xl font-black text-[#DCE8FF] leading-tight">{product.name}</h3>
        </div>
      </div>

      {/* Description */}
      {product.bullets ? (
        <div className="relative z-10 mb-5 space-y-2.5">
          {product.intro && (
            <p className="text-sm text-white/80 leading-relaxed mb-3">{product.intro}</p>
          )}
          {product.bullets.map((b) => (
            <div key={b.title} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${product.color}20`, border: `1px solid ${product.color}40` }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }} />
              </div>
              <p className="text-sm text-white/85 leading-snug">
                <span className="font-bold text-white">{b.title}</span>
                {" — "}
                <span className="text-white/70">{b.text}</span>
              </p>
            </div>
          ))}
          {product.useCases && product.useCases.length > 0 && (
            <div className="mt-2">
              <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1.5">Idéal pour</p>
              <div className="flex flex-wrap gap-2">
                {product.useCases.map((u) => (
                  <span key={u} className="text-xs px-2.5 py-1 rounded-full" style={{ backgroundColor: `${product.color}15`, color: product.color, border: `1px solid ${product.color}30` }}>
                    {u}
                  </span>
                ))}
              </div>
            </div>
          )}
          {product.warning && (
            <div className="text-[16px] text-white/45 italic mt-1 pl-6 space-y-0.5">
              {product.warning.split(". ").filter(Boolean).map((line, i) => (
                <p key={i}>{line}{line.endsWith(".") ? "" : "."}</p>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className="relative z-10 text-sm text-white/85 leading-relaxed mb-5">{product.desc}</p>
      )}

      {/* Features */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-6">
        {product.features.map((f) => (
          <span
            key={f}
            className="text-[10px] px-2.5 py-1 rounded-full font-medium"
            style={{ backgroundColor: `${product.color}18`, color: "#ffffff", border: `1px solid ${product.color}40` }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Prix fixe (ebook) ou slider */}
      {isFixed ? (
        <div className="relative z-10 mb-6 flex items-end gap-3">
          <div>
            <span className="text-[calc(2.25rem-7px)] font-black" style={{ color: product.color }}>{fmt(product.fixedPrice!)} €</span>
            <div className="text-xs text-white/65 mt-0.5">Téléchargement instantané · TVA incluse</div>
          </div>
        </div>
      ) : null}

      {/* Slider + prix (produits physiques uniquement) */}
      {!isFixed && (
        <>
          <div className="relative z-10 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white/75 uppercase tracking-wider">Quantité</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tabular-nums" style={{ color: product.color }}>{step.qty}</span>
                <span className="text-xs text-white/65">{product.unit}{step.qty > 1 ? "s" : ""}</span>
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={PRICE_STEPS.length - 1}
              step={1}
              value={stepIdx}
              onChange={(e) => { setStepIdx(Number(e.target.value)); setAdded(false); }}
              className="w-full cursor-pointer"
              style={{ accentColor: product.color }}
            />
            <div className="flex justify-between mt-1.5">
              {PRICE_STEPS.map((s, i) => (
                <span
                  key={i}
                  className="text-[12px] font-bold transition-colors"
                  style={{ color: i === stepIdx ? product.color : "rgba(220,232,255,0.2)" }}
                >
                  {s.qty}
                </span>
              ))}
            </div>
            <p className="text-[14px] text-white/35 mt-1.5">* Prix dégressif en fonction de la quantité</p>
          </div>

          <div className="relative z-10 mb-4 flex items-end gap-3">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-[calc(2.25rem-7px)] font-black" style={{ color: product.color }}>{fmt(step.total)} €</span>
                <span className="text-xs font-semibold whitespace-nowrap" style={{ color: product.color }}>Livraison incluse</span>
              </div>
              <div className="text-[calc(0.75rem+2px)] text-white/65 mt-0.5">
                {fmt(unitPrice)} € / {product.unit}
              </div>
            </div>
            <AnimatePresence mode="wait">
              {step.mention && (
                <motion.div
                  key={step.mention}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="ml-auto px-3 py-1.5 rounded-xl font-black text-sm text-white"
                  style={{ backgroundColor: product.color, boxShadow: `0 0 20px ${product.color}60` }}
                >
                  {step.mention}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}

      {/* CTA */}
      <div className="relative z-10 mt-auto">
        {isFixed ? (
          <label className="flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-200 select-none"
            style={{ borderColor: added ? "#22c55e" : `${product.color}40`, backgroundColor: added ? "rgba(34,197,94,0.08)" : `${product.color}08` }}
          >
            <input
              type="checkbox"
              checked={added}
              onChange={(e) => { setAdded(e.target.checked); }}
              className="w-5 h-5 rounded cursor-pointer"
              style={{ accentColor: product.color }}
            />
            <div className="flex-1">
              <div className="font-black text-white text-sm">{product.name}</div>
              <div className="text-xs text-white/65">Téléchargement instantané</div>
            </div>
            <span className="text-xl font-black" style={{ color: product.color }}>{fmt(product.fixedPrice!)} €</span>
          </label>
        ) : (
          <div className="flex flex-col gap-2">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={handleAdd}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-base text-white transition-all duration-200"
              style={{
                backgroundColor: added ? "#22c55e" : product.color,
                boxShadow: added ? "0 0 24px rgba(34,197,94,0.4)" : `0 0 28px ${product.color}50`,
              }}
            >
              {added ? (
                <><CheckCircle size={18} /> Ajouté au panier</>
              ) : (
                <><ShoppingCart size={18} /> Ajouter au panier — {step.qty} {product.unit}{step.qty > 1 ? "s" : ""}</>
              )}
            </motion.button>
            <AnimatePresence>
              {added && (
                <motion.a
                  href={checkoutUrl}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-black text-sm text-black transition-all duration-200 bg-white hover:bg-gray-100"
                >
                  Finaliser ma commande →
                </motion.a>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="produits" className="relative py-24 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#22D3EE] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[calc(0.75rem+3px)] uppercase tracking-[0.3em] text-[#FFB800] mb-3 font-medium">Nos Produits</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#DCE8FF] mb-4">
            Choisissez vos <span className="gradient-text-blue">équipements</span>
          </h2>
          <p className="text-white/75 text-[calc(0.875rem+2px)] max-w-lg mx-auto">
            Glissez le curseur pour ajuster la quantité, prix dégressif en fonction de la quantité.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="flex items-center gap-3 mt-2 mb-6 px-4 py-3 rounded-xl border border-amber-400/30 bg-amber-400/06">
          <span className="text-amber-400 text-lg flex-shrink-0">⚠️</span>
          <p className="text-xs text-white/80">
            <span className="font-black text-amber-400">* Information importante — </span>
            Ne pas utiliser si le filtre présente des rayures ou dommages. Enfants : surveillance adulte obligatoire.
          </p>
        </div>

        {/* Bandeau livraison */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 relative overflow-hidden rounded-2xl border border-[#22c55e]/40 bg-[#22c55e]/08 px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/05 via-[#22c55e]/10 to-[#22c55e]/05 pointer-events-none" />
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/40 flex items-center justify-center flex-shrink-0">
              <Zap size={18} className="text-[#22c55e]" />
            </div>
            <div className="text-left">
              <div className="text-lg md:text-xl font-black text-white leading-tight">🚚 Livraison gratuite & incluse directement dans votre boîte aux lettres</div>
              <div className="text-sm font-semibold mt-0.5" style={{ color: "#22c55e" }}>
                Garantie chez vous avant l'éclipse — sans frais cachés · selon le{" "}
                <a href="/#commande" className="underline underline-offset-2 hover:text-white transition-colors">planning de livraison</a>*
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
