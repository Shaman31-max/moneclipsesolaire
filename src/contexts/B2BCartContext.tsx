"use client";

import { createContext, useContext, useState, useCallback } from "react";

type B2BCartContextType = {
  count: number;
  checkoutUrl: string;
  acompteUrl: string;
  sidebarOpen: boolean;
  setSidebarOpen: (v: boolean) => void;
  sync: (count: number, checkoutUrl: string, acompteUrl: string) => void;
};

const B2BCartContext = createContext<B2BCartContextType>({
  count: 0,
  checkoutUrl: "#",
  acompteUrl: "#",
  sidebarOpen: false,
  setSidebarOpen: () => {},
  sync: () => {},
});

export function B2BCartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const [checkoutUrl, setCheckoutUrl] = useState("#");
  const [acompteUrl, setAcompteUrl] = useState("#");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sync = useCallback((c: number, cu: string, au: string) => {
    setCount(c);
    setCheckoutUrl(cu);
    setAcompteUrl(au);
  }, []);

  return (
    <B2BCartContext.Provider value={{ count, checkoutUrl, acompteUrl, sidebarOpen, setSidebarOpen, sync }}>
      {children}
    </B2BCartContext.Provider>
  );
}

export function useB2BCart() {
  return useContext(B2BCartContext);
}
