"use client";

import { sendGAEvent } from "@next/third-parties/google";
import type { CartItem } from "@/contexts/CartContext";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

const CURRENCY = "EUR";

export type GAItem = {
  item_id: string;
  item_name: string;
  price: number;
  quantity: number;
  item_variant?: string;
};

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

// Chaque variante Shopify encode déjà le pack (qty lunettes) : on la traite
// comme 1 item de quantité 1 au prix du pack, cohérent avec le panier.
export function cartItemToGAItem(item: CartItem): GAItem {
  return {
    item_id: item.variantNumericId,
    item_name: item.name,
    price: round2(item.price),
    quantity: 1,
  };
}

export function trackViewItem(item: GAItem) {
  sendGAEvent("event", "view_item", {
    currency: CURRENCY,
    value: round2(item.price * item.quantity),
    items: [item],
  });
}

export function trackAddToCart(item: GAItem) {
  sendGAEvent("event", "add_to_cart", {
    currency: CURRENCY,
    value: round2(item.price * item.quantity),
    items: [item],
  });
}

export function trackBeginCheckout(items: CartItem[]) {
  if (items.length === 0) return;
  const gaItems = items.map(cartItemToGAItem);
  sendGAEvent("event", "begin_checkout", {
    currency: CURRENCY,
    value: round2(gaItems.reduce((s, i) => s + i.price * i.quantity, 0)),
    items: gaItems,
  });
}
