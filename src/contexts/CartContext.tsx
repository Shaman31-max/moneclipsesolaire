"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const SHOPIFY_STORE = "https://shop.moneclipsesolaire.fr";

export type CartItem = {
  variantNumericId: string;
  qty: number;
  name: string;
  price: number;
  productId: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  checkoutUrl: string;
  totalItems: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mes_cart");
      if (saved) {
        const parsed: CartItem[] = JSON.parse(saved);
        // Force qty:1 per item (variants already encode the pack size)
        setItems(parsed.map((i) => ({ ...i, qty: 1 })));
      }
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("mes_cart", JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.productId === item.productId);
      if (exists) return prev.map((i) => i.productId === item.productId ? item : i);
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const checkoutUrl = items.length === 0
    ? "#"
    : `${SHOPIFY_STORE}/cart/${items.map((i) => `${i.variantNumericId}:1`).join(",")}`;

  const totalItems = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, checkoutUrl, totalItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
