"use client";

import { useEffect, useState } from "react";
import CompteLogin from "./CompteLogin";
import CompteOrders from "./CompteOrders";

const SESSION_KEY = "mes_compte_session";

export type CompteSession = { name: string; email: string };

export default function ComptePortal() {
  const [session, setSession] = useState<CompteSession | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) setSession(JSON.parse(raw));
    } catch {}
  }, []);

  const login = (s: CompteSession) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    setSession(s);
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
  };

  if (!mounted) return null;
  if (!session) return <CompteLogin onLogin={login} />;
  return <CompteOrders session={session} onLogout={logout} />;
}
