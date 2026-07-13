"use client";

import { CartProvider } from "@/contexts/CartContext";
import CookieConsent from "@/components/CookieConsent";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CookieConsent />
    </CartProvider>
  );
}
