"use client";

import { useEffect, useRef, useState } from "react";

// Révélation au scroll en CSS pur + IntersectionObserver — remplace les
// motion.div whileInView de framer-motion sans dépendance.
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "y",
  onEnter,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number; // secondes
  variant?: "y" | "x";
  onEnter?: () => void;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const onEnterRef = useRef(onEnter);
  onEnterRef.current = onEnter;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    let io: IntersectionObserver | null = null;

    const enter = () => {
      if (done) return;
      done = true;
      setInView(true);
      onEnterRef.current?.();
      cleanup();
    };

    // Vérification directe par la géométrie — filet de sécurité si
    // l'IntersectionObserver ne notifie pas (anciens moteurs, cas limites)
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 40 && r.bottom > 0) enter();
    };

    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) enter();
        },
        { threshold: 0 }
      );
      io.observe(el);
    }

    window.addEventListener("scroll", check, { passive: true });
    check();

    function cleanup() {
      io?.disconnect();
      window.removeEventListener("scroll", check);
    }
    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className={`${variant === "x" ? "reveal-x" : "reveal"} ${inView ? "reveal-in" : ""} ${className}`}
      style={delay ? { ...style, transitionDelay: `${delay}s` } : style}
    >
      {children}
    </div>
  );
}
