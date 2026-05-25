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
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["rgba(240,238,255,", "rgba(167,139,250,", "rgba(34,211,238,", "rgba(200,190,255,"];

    const stars: Star[] = Array.from({ length: 500 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() < 0.6 ? Math.random() * 0.8 + 0.2   // tiny
        : Math.random() < 0.85 ? Math.random() * 1.0 + 0.8  // small
        : Math.random() * 1.5 + 1.5,                         // medium
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.001,
      phase: Math.random() * Math.PI * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const shooters: Shooter[] = Array.from({ length: 4 }, () => ({
      x: 0, y: 0, vx: 0, vy: 0,
      length: 0, alpha: 0, life: 0, maxLife: 1, active: false,
    }));

    function spawnShooter(s: Shooter) {
      s.x = Math.random() * canvas!.width * 0.8;
      s.y = Math.random() * canvas!.height * 0.4;
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
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      // Stars
      stars.forEach((s) => {
        const a = 0.2 + 0.8 * ((1 + Math.sin(t * s.speed * 60 + s.phase)) / 2);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `${s.color}${a.toFixed(2)})`;
        ctx.fill();

        // Tiny cross sparkle on bigger stars
        if (s.r > 1.8 && a > 0.7) {
          ctx.strokeStyle = `${s.color}${(a * 0.4).toFixed(2)})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 2.5, s.y);
          ctx.lineTo(s.x + s.r * 2.5, s.y);
          ctx.moveTo(s.x, s.y - s.r * 2.5);
          ctx.lineTo(s.x, s.y + s.r * 2.5);
          ctx.stroke();
        }
      });

      // Shooting stars
      nextShoot--;
      if (nextShoot <= 0) {
        const idle = shooters.find((s) => !s.active);
        if (idle) spawnShooter(idle);
        nextShoot = 180 + Math.random() * 360;
      }

      shooters.forEach((s) => {
        if (!s.active) return;
        s.life++;
        s.alpha = s.life < 10 ? s.life / 10
          : s.life > s.maxLife - 15 ? (s.maxLife - s.life) / 15
          : 1;
        if (s.life >= s.maxLife) { s.active = false; return; }

        const tailX = s.x - s.vx * (s.length / (s.vx ** 2 + s.vy ** 2) ** 0.5);
        const tailY = s.y - s.vy * (s.length / (s.vx ** 2 + s.vy ** 2) ** 0.5);

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `rgba(240,238,255,0)`);
        grad.addColorStop(0.6, `rgba(167,139,250,${(s.alpha * 0.4).toFixed(2)})`);
        grad.addColorStop(1, `rgba(240,238,255,${s.alpha.toFixed(2)})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,238,255,${s.alpha.toFixed(2)})`;
        ctx.fill();

        s.x += s.vx;
        s.y += s.vy;

        if (s.x > canvas.width + 200 || s.y > canvas.height + 200) s.active = false;
      });

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}
