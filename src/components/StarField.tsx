"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number; y: number; r: number;
  alpha: number; speed: number; phase: number;
  color: string;
};

type Shooter = {
  x: number; y: number;
  vx: number; vy: number;
  length: number; alpha: number; life: number; maxLife: number;
  active: boolean;
};

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let ctx: CanvasRenderingContext2D | null = null;
    try {
      ctx = canvas.getContext("2d");
    } catch {
      return;
    }
    if (!ctx) return;

    // Fewer stars on mobile/low-end devices
    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const STAR_COUNT = isMobile ? 200 : 400;
    const SHOOTER_COUNT = isMobile ? 2 : 4;

    let resizeTimer: ReturnType<typeof setTimeout>;
    const resize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (isMobile) draw(); // redessine la frame statique
      }, 150);
    };
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("resize", resize, { passive: true });

    const COLORS = ["rgba(240,238,255,", "rgba(255,184,0,", "rgba(34,211,238,", "rgba(200,190,255,"];

    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() < 0.6 ? Math.random() * 0.8 + 0.2
        : Math.random() < 0.85 ? Math.random() * 1.0 + 0.8
        : Math.random() * 1.5 + 1.5,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.001,
      phase: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const shooters: Shooter[] = Array.from({ length: SHOOTER_COUNT }, () => ({
      x: 0, y: 0, vx: 0, vy: 0,
      length: 0, alpha: 0, life: 0, maxLife: 1, active: false,
    }));

    function spawnShooter(s: Shooter) {
      if (!canvas) return;
      s.x = Math.random() * canvas.width * 0.8;
      s.y = Math.random() * canvas.height * 0.4;
      const angle = Math.PI / 6 + Math.random() * Math.PI / 6;
      const speed = 6 + Math.random() * 6;
      s.vx = Math.cos(angle) * speed;
      s.vy = Math.sin(angle) * speed;
      s.length = 60 + Math.random() * 100;
      s.maxLife = 60 + Math.random() * 40;
      s.life = 0;
      s.alpha = 0;
      s.active = true;
    }

    let nextShoot = 200 + Math.random() * 300;
    let raf: number;
    let idleId: number | undefined;
    let t = 0;

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      stars.forEach((s) => {
        const a = 0.2 + 0.8 * ((1 + Math.sin(t * s.speed * 60 + s.phase)) / 2);
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `${s.color}${a.toFixed(2)})`;
        ctx!.fill();

        if (!isMobile && s.r > 1.8 && a > 0.7) {
          ctx!.strokeStyle = `${s.color}${(a * 0.4).toFixed(2)})`;
          ctx!.lineWidth = 0.5;
          ctx!.beginPath();
          ctx!.moveTo(s.x - s.r * 2.5, s.y);
          ctx!.lineTo(s.x + s.r * 2.5, s.y);
          ctx!.moveTo(s.x, s.y - s.r * 2.5);
          ctx!.lineTo(s.x, s.y + s.r * 2.5);
          ctx!.stroke();
        }
      });

      if (!isMobile) {
        nextShoot--;
        if (nextShoot <= 0) {
          const idle = shooters.find((s) => !s.active);
          if (idle) spawnShooter(idle);
          nextShoot = 180 + Math.random() * 360;
        }

        shooters.forEach((s) => {
          if (!s.active || !ctx) return;
          s.life++;
          s.alpha = s.life < 10 ? s.life / 10
            : s.life > s.maxLife - 15 ? (s.maxLife - s.life) / 15
            : 1;
          if (s.life >= s.maxLife) { s.active = false; return; }

          const norm = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
          const tailX = s.x - s.vx * (s.length / norm);
          const tailY = s.y - s.vy * (s.length / norm);

          const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
          grad.addColorStop(0, "rgba(240,238,255,0)");
          grad.addColorStop(0.6, `rgba(255,184,0,${(s.alpha * 0.4).toFixed(2)})`);
          grad.addColorStop(1, `rgba(240,238,255,${s.alpha.toFixed(2)})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(s.x, s.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(240,238,255,${s.alpha.toFixed(2)})`;
          ctx.fill();

          s.x += s.vx;
          s.y += s.vy;

          if (s.x > canvas.width + 200 || s.y > canvas.height + 200) s.active = false;
        });
      }

      // Mobile : une seule frame statique — pas de boucle d'animation
      // (l'animation continue à 60 fps coûte cher en CPU/batterie sur iPhone)
      if (!isMobile) raf = requestAnimationFrame(draw);
    };
    // Démarrage différé : ne pas concurrencer l'hydratation et le LCP
    const ric = window.requestIdleCallback as typeof window.requestIdleCallback | undefined;
    const cic = window.cancelIdleCallback as typeof window.cancelIdleCallback | undefined;
    const usedIdle = typeof ric === "function";
    idleId = usedIdle ? ric!(() => draw(), { timeout: 2500 }) : (setTimeout(draw, 1200) as unknown as number);

    // Pause quand l'onglet est masqué
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else if (!isMobile) raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      if (idleId !== undefined) {
        if (usedIdle && typeof cic === "function") cic(idleId);
        else clearTimeout(idleId);
      }
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
