"use client";

import { useEffect, useState } from "react";

const BASE = [
  "✦ CERTIFIÉ ISO 12312-2",
  "✦ CONFORME CE",
  "✦ PROTECTION OBSERVATION SOLAIRE",
  "✦ LIVRAISON GRATUITE GARANTIE AVANT L'ÉCLIPSE",
];

const items = [...BASE, ...BASE, ...BASE, ...BASE];

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current <= last || current < 10);
      last = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-[49] overflow-hidden bg-[#22D3EE]/10 border-b border-[#22D3EE]/20 backdrop-blur-sm flex items-center transition-transform duration-300"
      style={{
        height: "36px",
        top: "64px",
        transform: visible ? "translateY(0)" : "translateY(-36px)",
      }}
    >
      <div className="flex" style={{ animation: "ticker 30s linear infinite" }}>
        {items.map((item, i) => (
          <span key={i} className="text-[15px] font-semibold text-[#FFB800] tracking-wider flex-shrink-0 px-8">
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </div>
  );
}
