"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Bannière de consentement (Consent Mode v2). Le snippet gtag de layout.tsx
// lit le choix mémorisé et pose le default AVANT tout hit ; cette bannière
// ne fait que recueillir/mettre à jour le choix.
const STORAGE_KEY = "mes_consent";
export const OPEN_CONSENT_EVENT = "mes:open-consent";

type Choice = "granted" | "denied";

function applyConsent(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {}
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  const update = {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  };
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", update);
  } else {
    // gtag.js exige un objet `arguments`, pas un tableau.
    w.dataLayer = w.dataLayer || [];
    const push = function () {
      // eslint-disable-next-line prefer-rest-params
      (w.dataLayer as unknown[]).push(arguments);
    } as unknown as (...a: unknown[]) => void;
    push("consent", "update", update);
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {}
    const open = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  if (!visible) return null;

  const choose = (choice: Choice) => {
    applyConsent(choice);
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-[90] p-3 sm:p-4">
      <div className="max-w-3xl mx-auto glass rounded-2xl border border-white/15 p-4 sm:p-5 shadow-2xl" style={{ backgroundColor: "rgba(6,4,18,0.96)" }}>
        <p className="text-sm text-white/85 leading-relaxed">
          <strong className="text-white">Cookies & mesure d&apos;audience.</strong>{" "}
          Nous utilisons
          Google Analytics et Google Ads pour mesurer l&apos;audience et nos campagnes. Vous pouvez
          accepter ou refuser — le site fonctionne pareil dans les deux cas.{" "}
          <Link href="/cookies" className="text-[#FFB800] underline underline-offset-2">En savoir plus</Link>
        </p>
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => choose("granted")}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-black text-sm bg-[#FFB800] text-black hover:bg-[#e6a700] transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={() => choose("denied")}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-bold text-sm text-white/80 border border-white/20 hover:border-white/40 transition-colors"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}

/** Petit bouton « Gérer mes cookies » (footer, page cookies…). */
export function ManageCookiesButton({ className }: { className?: string }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={className ?? "text-xs text-[#E8F0FF]/45 hover:text-[#22D3EE]/60 transition-colors"}
    >
      Gérer mes cookies
    </button>
  );
}
