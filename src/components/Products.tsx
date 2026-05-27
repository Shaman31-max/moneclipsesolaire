"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Eye, Smartphone, CheckCircle, Zap, BookOpen, ShieldCheck, ExternalLink } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

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
  variantIds?: string[];
  fixedPrice?: number;
  image?: string;
  badge?: string;
};

const PRODUCTS: ProductDef[] = [
  {
    id: "glasses",
    name: "Paire de Lunettes Éclipse",
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
    badge: "ISO 12312-2",
    features: [],
    variantId: "gid://shopify/ProductVariant/58137193283929",
    variantIds: [
      "gid://shopify/ProductVariant/58137193283929",
      "gid://shopify/ProductVariant/58137193316697",
      "gid://shopify/ProductVariant/58137193349465",
      "gid://shopify/ProductVariant/58137193382233",
      "gid://shopify/ProductVariant/58137193415001",
      "gid://shopify/ProductVariant/58137193447769",
      "gid://shopify/ProductVariant/58137193480537",
      "gid://shopify/ProductVariant/58137193513305",
      "gid://shopify/ProductVariant/58137193546073",
      "gid://shopify/ProductVariant/58137193578841",
      "gid://shopify/ProductVariant/58137193611609",
    ],
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
    badge: "ISO 12312-2",
    variantId: "gid://shopify/ProductVariant/58137193644377",
    variantIds: [
      "gid://shopify/ProductVariant/58137193644377",
      "gid://shopify/ProductVariant/58137193677145",
      "gid://shopify/ProductVariant/58137193709913",
      "gid://shopify/ProductVariant/58137193742681",
      "gid://shopify/ProductVariant/58137193775449",
      "gid://shopify/ProductVariant/58137193808217",
      "gid://shopify/ProductVariant/58137193840985",
      "gid://shopify/ProductVariant/58137193873753",
      "gid://shopify/ProductVariant/58137193906521",
      "gid://shopify/ProductVariant/58137193939289",
      "gid://shopify/ProductVariant/58137193972057",
    ],
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
    features: [],
    variantId: "gid://shopify/ProductVariant/58137194037593",
    fixedPrice: 0.99,
  },
];

function ProductCard({ product }: { product: ProductDef }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const Icon = product.icon;
  const { addItem, removeItem, checkoutUrl } = useCart();

  const step = PRICE_STEPS[stepIdx];
  const unitPrice = step.total / step.qty;
  const isFixed = !!product.fixedPrice;

  const activeVariantId = product.variantIds ? product.variantIds[stepIdx] : product.variantId;
  const variantNumericId = activeVariantId.split("/").pop()!;

  const handleAdd = () => {
    if (added) {
      removeItem(product.id);
      setAdded(false);
    } else {
      addItem({
        variantNumericId,
        qty: 1,
        name: product.name,
        price: isFixed ? product.fixedPrice! : step.total,
        productId: product.id,
      });
      setAdded(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative glass rounded-3xl p-5 border flex flex-col overflow-hidden"
      style={{ borderColor: `${product.color}20` }}
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 20%, ${product.color}, transparent 65%)` }}
      />

      {/* Product image */}
      {product.image && (
        <div className="relative z-10 w-full h-32 mb-3">
          {product.badge && (
            <a
              href="https://www.iso.org/standard/59289.html"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 left-0 z-20 group flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl glass border transition-all duration-200 hover:scale-[1.03]"
              style={{ borderColor: "rgba(34,211,238,0.30)" }}
            >
              <div className="flex items-center gap-1 badge-bounce">
                <div className="w-0 h-0" style={{ borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid #22D3EE" }} />
              </div>
              <ShieldCheck size={12} className="text-[#22D3EE] flex-shrink-0" />
              <div>
                <div className="text-[10px] font-bold leading-none text-[#22D3EE]">{product.badge}</div>
                <div className="text-[8px] text-white/80 mt-0.5 leading-none">DIN CERTCO — Europe</div>
              </div>
              <ExternalLink size={9} className="text-white/50 group-hover:text-white/90 transition-colors flex-shrink-0" />
            </a>
          )}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain drop-shadow-lg"
          />
        </div>
      )}

      {/* Icon + title */}
      <div className="relative z-10 flex items-start gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${product.color}15`, border: `1px solid ${product.color}30` }}
        >
          <Icon size={20} style={{ color: product.color }} />
        </div>
        <div>
          <div className="text-[12px] uppercase tracking-[0.25em] mb-1" style={{ color: product.color }}>
            {product.subtitle}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-xl font-black text-[#DCE8FF] leading-tight">{product.name}</h3>
            {product.badge && (
              <span className="px-2 py-0.5 rounded-full text-[9px] font-bold text-[#FFB800] border border-[#22D3EE]/30 bg-[#22D3EE]/12 whitespace-nowrap">
                ✓ {product.badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Description — collapsible */}
      <div className="relative z-10 mb-3">
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {product.bullets ? (
                <div className="space-y-2.5 mb-3">
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
                  {product.warnings && product.warnings.map((w, i) => (
                    <p key={i} className="text-xs text-white/45 italic pl-6">{w}</p>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-white/85 leading-relaxed mb-3">{product.desc}</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
          style={{ color: expanded ? "rgba(255,255,255,0.5)" : product.color }}
        >
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            ▼
          </motion.span>
          {expanded ? "Masquer" : "En savoir plus"}
        </button>
      </div>

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
          <div className="relative z-10 mb-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">Quantité</span>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tabular-nums" style={{ color: product.color }}>{step.qty}</span>
                <span className="text-xs text-white/55">{product.unit}{step.qty > 1 ? "s" : ""}</span>
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
            <div className="flex justify-between mt-1">
              {PRICE_STEPS.map((s, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold transition-colors"
                  style={{ color: i === stepIdx ? product.color : "rgba(220,232,255,0.18)" }}
                >
                  {s.qty}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 mb-3 flex items-center gap-2">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black" style={{ color: product.color }}>{fmt(step.total)} €</span>
                <span className="text-[10px] font-semibold whitespace-nowrap text-white/55">Livraison incluse · {fmt(unitPrice)} €/{product.unit}</span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              {step.mention && (
                <motion.div
                  key={step.mention}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="ml-auto px-2.5 py-1 rounded-lg font-black text-xs text-white"
                  style={{ backgroundColor: product.color, boxShadow: `0 0 14px ${product.color}60` }}
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
              onChange={(e) => {
                if (e.target.checked) {
                  addItem({ variantNumericId, qty: 1, name: product.name, price: product.fixedPrice!, productId: product.id });
                } else {
                  removeItem(product.id);
                }
                setAdded(e.target.checked);
              }}
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
            <p className="text-xs text-white/45 text-center italic">
              * Prix dégressif en fonction de la quantité commandée
            </p>
            <p className="text-xs text-white/50 text-center">
              * Production à la demande — commandez maintenant et recevez à partir du <strong className="text-white/70">06 juillet</strong> ·{" "}
              <a href="/#commande" className="text-[#22D3EE]/70 hover:text-[#22D3EE] underline underline-offset-2 transition-colors">voir le planning</a>
            </p>
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
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Products() {
  const { totalItems, checkoutUrl } = useCart();

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

        {/* Finaliser ma commande — pleine largeur */}
        <AnimatePresence>
          {totalItems > 0 && (
            <motion.a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-lg text-black bg-white hover:bg-gray-100 transition-colors"
              style={{ boxShadow: "0 0 40px rgba(255,255,255,0.12)" }}
            >
              <ShoppingCart size={20} />
              Finaliser ma commande — {totalItems} article{totalItems > 1 ? "s" : ""} →
            </motion.a>
          )}
        </AnimatePresence>

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
