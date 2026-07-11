"use client";

import { useState } from "react";
import { ShoppingCart, ChevronUp, ChevronDown, Minus, Plus, Trash2 } from "lucide-react";
import { useCart, type CartItem } from "@/contexts/CartContext";
import { trackBeginCheckout } from "@/lib/analytics";
import { PRICE_STEPS, GLASSES_PRODUCT_ID, GLASSES_VARIANT_NUMERIC_IDS } from "@/lib/pricing";

function fmt(n: number) {
  return n.toFixed(2).replace(".", ",");
}

// Barre panier fixe en bas d'écran, mobile uniquement. Apparaît dès qu'un
// article est ajouté ; un tap sur le résumé déplie le détail des articles
// avec modification de quantité (paliers de prix pour les lunettes).
export default function MobileCartBar() {
  const { items, totalItems, checkoutUrl, addItem, removeItem } = useCart();
  const [open, setOpen] = useState(false);

  if (totalItems === 0) return null;

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  // Pour les lunettes, la quantité est un palier : passer au palier
  // suivant/précédent remplace le variant Shopify et le prix du pack.
  const stepIdxOf = (item: CartItem) =>
    item.productId === GLASSES_PRODUCT_ID
      ? GLASSES_VARIANT_NUMERIC_IDS.indexOf(item.variantNumericId)
      : -1;

  const changeStep = (item: CartItem, dir: 1 | -1) => {
    const idx = stepIdxOf(item);
    const next = idx + dir;
    if (idx < 0 || next < 0 || next >= PRICE_STEPS.length) return;
    addItem({
      ...item,
      variantNumericId: GLASSES_VARIANT_NUMERIC_IDS[next],
      price: PRICE_STEPS[next].total,
    });
  };

  return (
    <>
    {/* Réserve la hauteur de la barre en bas de page pour ne pas masquer le footer */}
    <div className="md:hidden h-[68px]" aria-hidden />
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-[#FFB800]/30"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Détail des articles (déplié) */}
      {open && (
        <div className="border-b border-white/10 px-4 py-2 max-h-[45vh] overflow-y-auto">
          {items.map((item) => {
            const stepIdx = stepIdxOf(item);
            const step = stepIdx >= 0 ? PRICE_STEPS[stepIdx] : null;
            return (
              <div key={item.productId} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-b-0">
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-white truncate">{item.name}</div>
                  <div className="text-[11px] text-white/60 tabular-nums">
                    {step ? `${step.qty} paire${step.qty > 1 ? "s" : ""} — ` : ""}{fmt(item.price)} €
                  </div>
                </div>
                {step && (
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => changeStep(item, -1)}
                      disabled={stepIdx <= 0}
                      aria-label="Diminuer la quantité"
                      className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center text-white disabled:opacity-30 active:scale-95 transition-all"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-7 text-center text-sm font-black text-white tabular-nums">{step.qty}</span>
                    <button
                      onClick={() => changeStep(item, 1)}
                      disabled={stepIdx >= PRICE_STEPS.length - 1}
                      aria-label="Augmenter la quantité"
                      className="w-8 h-8 rounded-lg border border-[#FFB800]/50 bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800] disabled:opacity-30 active:scale-95 transition-all"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                )}
                <button
                  onClick={() => removeItem(item.productId)}
                  aria-label={`Retirer ${item.name} du panier`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-red-400 active:scale-95 transition-all flex-shrink-0"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex items-center gap-3 px-4 py-3">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Voir le détail du panier"
          className="flex items-center gap-2 min-w-0 text-left"
        >
          <div className="relative flex-shrink-0">
            <ShoppingCart size={22} className="text-[#FFB800]" />
            <span className="absolute -top-2 -right-2 min-w-[18px] min-h-[18px] rounded-full bg-[#FFB800] text-black text-[10px] font-black flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-[11px] text-white/70 flex items-center gap-0.5">
              {totalItems} article{totalItems > 1 ? "s" : ""}
              {open ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
            </span>
            <span className="text-sm font-black text-white tabular-nums">
              {fmt(total)} €
            </span>
          </div>
        </button>
        <a
          href={checkoutUrl}
          onClick={() => trackBeginCheckout(items)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-black text-black bg-[#FFB800] hover:bg-[#e6a700] active:scale-[0.98] transition-all"
          style={{ boxShadow: "0 0 18px rgba(255,184,0,0.45)" }}
        >
          Commander
        </a>
      </div>
    </div>
    </>
  );
}
