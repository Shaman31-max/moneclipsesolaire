"use client";

import { useEffect, useState } from "react";

const ECLIPSE = new Date("2026-08-12T10:00:00+02:00");

function getLeft() {
  const diff = ECLIPSE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    j: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function NavCountdown() {
  const [t, setT] = useState(getLeft());

  useEffect(() => {
    const id = setInterval(() => setT(getLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!t) return null;

  return (
    <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl glass border border-[#22D3EE]/15 select-none">
      {/* Pulsing dot */}
      <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] corona-pulse flex-shrink-0" />

      {/* Units */}
      <div className="flex items-baseline gap-1 text-xs font-mono tabular-nums">
        <span className="font-black text-[#A78BFA]">{t.j}</span>
        <span className="text-[#DCE8FF]/30 text-[10px]">j</span>
        <span className="text-[#DCE8FF]/50 mx-0.5">·</span>
        <span className="font-black text-[#DCE8FF]">{pad(t.h)}</span>
        <span className="text-[#DCE8FF]/30 text-[10px]">h</span>
        <span className="font-black text-[#DCE8FF]">{pad(t.m)}</span>
        <span className="text-[#DCE8FF]/30 text-[10px]">m</span>
        <span className="font-black text-[#DCE8FF]/50">{pad(t.s)}</span>
        <span className="text-[#DCE8FF]/20 text-[10px]">s</span>
      </div>

      <span className="text-[9px] text-[#DCE8FF]/25 uppercase tracking-wider ml-0.5 whitespace-nowrap">
        avant l'éclipse
      </span>
    </div>
  );
}
