"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ShoppingCart, Eye, CheckCircle, BookOpen, ShieldCheck, ExternalLink, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { trackViewItem, trackAddToCart, trackBeginCheckout } from "@/lib/analytics";

const PRICE_STEPS = [
  { qty: 1,  total: 3.99,  mention: "Solo" },
  { qty: 2,  total: 5.99,  mention: "Duo" },
  { qty: 3,  total: 6.99,  mention: null },
  { qty: 4,  total: 7.99,  mention: "Famille" },
  { qty: 5,  total: 8.49,  mention: null },
  { qty: 6,  total: 8.99,  mention: null },
  { qty: 8,  total: 9.99,  mention: "⭐ Meilleure offre" },
  { qty: 12, total: 12.99, mention: null },
  { qty: 14, total: 13.99, mention: null },
  { qty: 24, total: 21.99, mention: "🎉 Événement" },
];

function fmt(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

type Bullet = { title: string; text: string };

type ProductImage = { src: string; alt: string };

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
  defaultStepIdx?: number;
  image?: string;
  images?: ProductImage[];
  badge?: string;
  rating?: { score: number; count: number };
};

const PRODUCTS: ProductDef[] = [
  {
    id: "glasses",
    name: "Paire de Lunettes Éclipse Norme Européenne",
    subtitle: "",
    image: "/LUNETTE_ECLIPSE_2.png",
    images: [
      { src: "/produit-main.webp", alt: "Lunettes éclipse solaire certifiées ISO 12312-2" },
      { src: "/produit-infographie.webp", alt: "Lunettes éclipse My Solar Eclipse — certifications ISO 12312-2, CE et UKCA" },
      { src: "/produit-famille.webp", alt: "Famille observant l'éclipse avec les lunettes certifiées" },
      { src: "/produit-tests.webp", alt: "Rapports de tests — certifiées conformes à la norme ISO 12312-2" },
    ],
    bullets: [
      { title: "Certification ISO 12312-2 & marquage CE", text: "Conformes à la norme internationale, certification obtenue auprès d'un laboratoire européen agréé." },
      { title: "Filtre solaire optique ND 5.0", text: "Bloque plus de 99,999 % de la lumière solaire, UV et infrarouges." },
      { title: "Observation solaire sécurisée", text: "Observer une éclipse directement en toute sécurité." },
      { title: "Adultes & enfants", text: "Design léger et confortable pour toute la famille." },
    ],
    unit: "paire",
    color: "#FFB800",
    icon: Eye,
    badge: "ISO 12312-2",
    defaultStepIdx: 0,
    rating: { score: 4.88, count: 128 },
    features: ["Paiement sécurisé", "Livraison 48h depuis la France"],
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
    ],
  },
  {
    id: "ebook",
    name: "Luna et l'éclipse magique",
    subtitle: "",
    image: "/ebook.png",
    images: [
      { src: "/ebook.png", alt: "Luna et l'éclipse magique — album illustré pour enfants dès 3 ans" },
      { src: "/ebook-luna-dos.webp", alt: "Luna et l'éclipse magique — résumé de l'histoire : Luna admire la Lune avant de s'endormir" },
    ],
    desc: "Découvrez Luna et l'éclipse magique, un album illustré plein de douceur qui invite les enfants à partir de 3 ans à explorer la magie des éclipses solaires. À travers une histoire tendre et des illustrations colorées, les petits apprendront à observer ce phénomène fascinant en toute sécurité.",
    unit: "ebook",
    color: "#FFB800",
    icon: BookOpen,
    rating: { score: 4.9, count: 14 },
    features: ["Paiement sécurisé", "Livraison 48h depuis la France"],
    variantId: "gid://shopify/ProductVariant/58137194037593",
    fixedPrice: 0.99,
  },
];

// Galerie style Amazon : vignettes cliquables à gauche (verticales sur
// desktop, horizontales sous l'image sur mobile), grande image à droite.
function ProductGallery({ images, badge, eager }: { images: ProductImage[]; badge?: string; eager?: boolean }) {
  const [idx, setIdx] = useState(0);
  // Seule l'image active est montée au chargement (LCP) ; les autres sont
  // montées en différé pour ne pas concurrencer le rendu initial.
  const [warm, setWarm] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setWarm(true), 3500);
    return () => clearTimeout(t);
  }, []);
  const select = (i: number) => { setWarm(true); setIdx(i); };

  const thumbs = images.map((img, i) => (
    <button
      key={img.src}
      onClick={() => select(i)}
      onMouseEnter={() => select(i)}
      aria-label={`Voir la photo ${i + 1} : ${img.alt}`}
      className="relative w-16 h-16 flex-shrink-0 rounded-xl bg-white overflow-hidden transition-all duration-150"
      style={{
        border: i === idx ? "2px solid #FFB800" : "2px solid rgba(255,255,255,0.12)",
        boxShadow: i === idx ? "0 0 12px rgba(255,184,0,0.35)" : "none",
      }}
    >
      <Image src={img.src} alt="" fill sizes="64px" className="object-cover" />
    </button>
  ));

  const hasThumbs = images.length > 1;

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Vignettes — colonne à gauche sur desktop */}
      {hasThumbs && <div className="hidden sm:flex flex-col gap-3">{thumbs}</div>}

      {/* Image principale */}
      <div className="relative flex-1 aspect-square rounded-2xl bg-white overflow-hidden">
        {badge && (
          <a
            href="https://www.iso.org/standard/59289.html"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 left-2 z-20 group flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all duration-200 hover:scale-[1.03]"
            style={{ borderColor: "rgba(34,211,238,0.30)", backgroundColor: "rgba(6,4,18,0.85)" }}
          >
            <ShieldCheck size={12} className="text-[#22D3EE] flex-shrink-0" />
            <div>
              <div className="text-[10px] font-bold leading-none text-[#22D3EE]">{badge}</div>
              <div className="text-[8px] text-white/80 mt-0.5 leading-none">DIN CERTCO — Europe</div>
            </div>
            <ExternalLink size={9} className="text-white/50 group-hover:text-white/90 transition-colors flex-shrink-0" />
          </a>
        )}
        {images.map((img, i) =>
          i === idx || warm ? (
            <Image
              key={img.src}
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              quality={70}
              className={`object-contain p-3 transition-opacity duration-200 ${i === idx ? "opacity-100" : "opacity-0"}`}
              priority={eager && i === 0}
            />
          ) : null
        )}
      </div>

      {/* Vignettes — bande horizontale sous l'image sur mobile */}
      {hasThumbs && <div className="flex sm:hidden gap-3 justify-center">{thumbs}</div>}
    </div>
  );
}

function ProductCard({ product }: { product: ProductDef }) {
  const [stepIdx, setStepIdx] = useState(product.defaultStepIdx ?? 0);
  const [added, setAdded] = useState(false);
  // Caractéristiques repliées par défaut (mobile et desktop) — « En savoir
  // plus » pour déplier.
  const [expanded, setExpanded] = useState(false);
  const [viewed, setViewed] = useState(false);
  const { addItem, removeItem, checkoutUrl } = useCart();

  const step = PRICE_STEPS[stepIdx];
  const unitPrice = step.total / step.qty;
  const isFixed = !!product.fixedPrice;

  const activeVariantId = product.variantIds ? product.variantIds[stepIdx] : product.variantId;
  const variantNumericId = activeVariantId.split("/").pop()!;

  const handleViewItem = () => {
    if (viewed) return;
    setViewed(true);
    trackViewItem({
      item_id: variantNumericId,
      item_name: product.name,
      price: isFixed ? product.fixedPrice! : step.total,
      quantity: 1,
    });
  };

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
      trackAddToCart({
        item_id: variantNumericId,
        item_name: product.name,
        price: isFixed ? product.fixedPrice! : step.total,
        quantity: 1,
      });
      setAdded(true);
    }
  };

  return (
    <Reveal
      onEnter={handleViewItem}
      className={`relative glass rounded-3xl p-5 md:p-8 border flex flex-col overflow-hidden ${product.images ? "md:col-span-2" : ""}`}
      style={{ borderColor: `${product.color}20` }}
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 20%, ${product.color}, transparent 65%)` }}
      />

      {/* Fiche style Amazon (galerie à gauche, infos à droite) si plusieurs
          photos ; sinon layout carte classique via display:contents. */}
      <div className={product.images ? "relative z-10 lg:grid lg:grid-cols-5 lg:gap-10 lg:items-start" : "contents"}>

      {product.images ? (
        <div className="lg:col-span-3 mb-5 lg:mb-0">
          <ProductGallery images={product.images} badge={product.badge} eager={product.id === "glasses"} />
        </div>
      ) : product.image && (
        <div className="relative z-10 w-1/2 mx-auto aspect-square mb-4 rounded-2xl bg-white overflow-hidden">
          {product.badge && (
            <a
              href="https://www.iso.org/standard/59289.html"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-2 left-2 z-20 group flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border transition-all duration-200 hover:scale-[1.03]"
              style={{ borderColor: "rgba(34,211,238,0.30)", backgroundColor: "rgba(6,4,18,0.85)" }}
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
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-contain drop-shadow-lg p-4"
          />
        </div>
      )}

      <div className={product.images ? "lg:col-span-2 flex flex-col" : "contents"}>

      {/* Title */}
      <div className="relative z-10 flex items-start gap-3 mb-3">
        <div>
          {product.subtitle && (
            <div className="text-[12px] uppercase tracking-[0.25em] mb-1" style={{ color: product.color }}>
              {product.subtitle}
            </div>
          )}
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
        <div className={`collapse-grid ${expanded ? "collapse-open" : ""}`}>
          <div>
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
          </div>
        </div>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
          style={{ color: expanded ? "rgba(255,255,255,0.5)" : product.color }}
        >
          <span className={`inline-block transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}>
            ▼
          </span>
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
                  className="text-[15px] font-bold transition-colors"
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
            {step.mention && (
              <div
                key={step.mention}
                className="anim-pop-in ml-auto px-2.5 py-1 rounded-lg font-black text-xs text-white"
                style={{ backgroundColor: product.color, boxShadow: `0 0 14px ${product.color}60` }}
              >
                {step.mention}
              </div>
            )}
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
                  trackAddToCart({ item_id: variantNumericId, item_name: product.name, price: product.fixedPrice!, quantity: 1 });
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
              * <strong className="text-white/70">Livraison 48h</strong> en boîte aux lettres
            </p>
            <button
              onClick={handleAdd}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-base text-white transition-all duration-200 active:scale-[0.96]"
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
            </button>
          </div>
        )}

        {product.rating && (
          <a href="/#avis" className="flex items-center justify-center gap-1.5 mt-3 group cursor-pointer">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={13}
                  className="text-[#FFB800]"
                  style={{ fill: "#FFB800", opacity: i <= Math.round(product.rating!.score) ? 1 : 0.25 }}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-white">{product.rating.score.toLocaleString("fr-FR")} / 5</span>
            <span className="text-xs text-white/60 underline underline-offset-2 group-hover:text-[#FFB800] transition-colors">({product.rating.count} avis vérifiés)</span>
          </a>
        )}
      </div>

      </div>
      </div>
    </Reveal>
  );
}

export default function Products() {
  const { totalItems, checkoutUrl, items } = useCart();

  return (
    <section id="produits" className="relative pt-28 xl:pt-20 pb-24 px-6 scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] " style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.03), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* H1 invisible : la page a besoin d'un H1 pour le SEO (mot-clé
            principal) mais le titre visuel a été retiré de la landing. */}
        <h1 className="sr-only">
          Lunettes éclipse solaire certifiées ISO 12312-2 — Éclipse du 12 août 2026
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Finaliser ma commande — pleine largeur */}
        {totalItems > 0 && (
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBeginCheckout(items)}
            className="anim-fade-in-up-fast mt-6 w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-lg text-black bg-white hover:bg-gray-100 transition-colors"
            style={{ boxShadow: "0 0 40px rgba(255,255,255,0.12)" }}
          >
            <ShoppingCart size={20} />
            Finaliser ma commande — {totalItems} article{totalItems > 1 ? "s" : ""} →
          </a>
        )}

      </div>
    </section>
  );
}
