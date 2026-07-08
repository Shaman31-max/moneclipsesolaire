"use client";

import { useEffect, useState } from "react";

const ECLIPSE = new Date("2026-08-12T10:00:00+02:00");
function getLeft() {
  const diff = ECLIPSE.getTime() - Date.now();
  if (diff <= 0) return { j: 0, h: 0, m: 0 };
  return {
    j: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
  };
}
function pad(n: number) { return String(n).padStart(2, "0"); }

// Compte à rebours compact en tête de landing page.
export default function CountdownBanner() {
  const [time, setTime] = useState<ReturnType<typeof getLeft> | null>(null);
  useEffect(() => {
    setTime(getLeft());
    const id = setInterval(() => setTime(getLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pt-32 xl:pt-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3">
        <div className="flex justify-center items-center gap-2 md:gap-4">
          {[
            { val: time?.j ?? 0, label: "Jours", padded: false },
            { val: time?.h ?? 0, label: "Heures", padded: true },
            { val: time?.m ?? 0, label: "Min", padded: true },
          ].map(({ val, label, padded }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="glass rounded-xl px-3 py-2 md:px-4 md:py-3 border border-red-500/40 min-w-[56px] md:min-w-[68px] text-center">
                <span
                  suppressHydrationWarning
                  className="text-2xl md:text-4xl font-black tabular-nums text-red-500"
                  style={{ textShadow: "0 0 16px rgba(239,68,68,0.8)" }}
                >
                  {padded ? pad(val) : val}
                </span>
              </div>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/70 mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
