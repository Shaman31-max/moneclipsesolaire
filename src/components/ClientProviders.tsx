"use client";

import { CartProvider } from "@/contexts/CartContext";
import { B2BCartProvider } from "@/contexts/B2BCartContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <B2BCartProvider>{children}</B2BCartProvider>
    </CartProvider>
  );
}
