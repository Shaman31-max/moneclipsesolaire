"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { trackBeginCheckout } from "@/lib/analytics";

// Barre panier fixe en bas d'écran, mobile uniquement. Apparaît dès qu'un
// article est ajouté au panier pour rendre le passage en caisse évident.
export default function MobileCartBar() {
  const { items, totalItems, checkoutUrl } = useCart();

  if (totalItems === 0) return null;

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
    {/* Réserve la hauteur de la barre en bas de page pour ne pas masquer le footer */}
    <div className="md:hidden h-[68px]" aria-hidden />
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 glass-dark border-t border-[#FFB800]/30"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-2 min-w-0">
          <div className="relative flex-shrink-0">
            <ShoppingCart size={22} className="text-[#FFB800]" />
            <span className="absolute -top-2 -right-2 w-4.5 h-4.5 min-w-[18px] min-h-[18px] rounded-full bg-[#FFB800] text-black text-[10px] font-black flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-[11px] text-white/70">
              {totalItems} article{totalItems > 1 ? "s" : ""}
            </span>
            <span className="text-sm font-black text-white tabular-nums">
              {total.toFixed(2).replace(".", ",")} €
            </span>
          </div>
        </div>
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
