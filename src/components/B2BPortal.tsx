"use client";

import { useState, useEffect } from "react";
import B2BLogin from "./B2BLogin";
import B2BCatalog from "./B2BCatalog";

const SESSION_KEY = "mes_b2b_session";

export type B2BSession = {
  company: string;
};

export default function B2BPortal() {
  const [session, setSession] = useState<B2BSession | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) setSession(JSON.parse(raw));
    } catch {}
  }, []);

  const handleLogin = (s: B2BSession) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    setSession(s);
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
  };

  if (!mounted) return null;

  if (!session) return <B2BLogin onLogin={handleLogin} />;
  return <B2BCatalog session={session} onLogout={handleLogout} />;
}
