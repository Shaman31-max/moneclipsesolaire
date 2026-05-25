"use client";

import { useEffect, useRef } from "react";

export default function AnimatedEclipse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 480;
    canvas.height = 480;

    let t = 0;
    let raf: number;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const sunR = 130;
    const moonR = 135;

    function drawCorona(phase: number) {
      const numRays = 24;
      for (let i = 0; i < numRays; i++) {
        const angle = (i / numRays) * Math.PI * 2;
        const wobble = Math.sin(t * 1.5 + i * 0.8) * 6;
        const len = sunR + 30 + wobble + (i % 3 === 0 ? 40 : i % 2 === 0 ? 20 : 10);
        const x1 = cx + Math.cos(angle) * (sunR + 4);
        const y1 = cy + Math.sin(angle) * (sunR + 4);
        const x2 = cx + Math.cos(angle) * len;
        const y2 = cy + Math.sin(angle) * len;

        const grad = ctx!.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `rgba(255, 220, 100, ${0.7 * phase})`);
        grad.addColorStop(0.5, `rgba(255, 160, 30, ${0.35 * phase})`);
        grad.addColorStop(1, `rgba(30, 80, 255, 0)`);

        ctx!.beginPath();
        ctx!.moveTo(x1, y1);
        ctx!.lineTo(x2, y2);
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = i % 3 === 0 ? 2.5 : 1.2;
        ctx!.stroke();
      }

      // Soft outer glow
      const outerGlow = ctx!.createRadialGradient(cx, cy, sunR - 10, cx, cy, sunR + 120);
      outerGlow.addColorStop(0, `rgba(255, 210, 80, ${0.18 * phase})`);
      outerGlow.addColorStop(0.5, `rgba(30, 127, 255, ${0.08 * phase})`);
      outerGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.beginPath();
      ctx!.arc(cx, cy, sunR + 120, 0, Math.PI * 2);
      ctx!.fillStyle = outerGlow;
      ctx!.fill();
    }

    function drawSun(alpha: number) {
      // Outer atmosphere glow
      const atm = ctx!.createRadialGradient(cx, cy, sunR * 0.7, cx, cy, sunR * 1.3);
      atm.addColorStop(0, `rgba(255, 200, 60, ${alpha * 0.9})`);
      atm.addColorStop(0.6, `rgba(255, 120, 0, ${alpha * 0.4})`);
      atm.addColorStop(1, "rgba(255, 80, 0, 0)");
      ctx!.beginPath();
      ctx!.arc(cx, cy, sunR * 1.3, 0, Math.PI * 2);
      ctx!.fillStyle = atm;
      ctx!.fill();

      // Sun disc
      const sunGrad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, sunR);
      sunGrad.addColorStop(0, `rgba(255, 255, 200, ${alpha})`);
      sunGrad.addColorStop(0.5, `rgba(255, 200, 50, ${alpha})`);
      sunGrad.addColorStop(1, `rgba(255, 100, 0, ${alpha})`);
      ctx!.beginPath();
      ctx!.arc(cx, cy, sunR, 0, Math.PI * 2);
      ctx!.fillStyle = sunGrad;
      ctx!.fill();
    }

    function drawMoon(offsetX: number) {
      const mx = cx + offsetX;
      const moonGrad = ctx!.createRadialGradient(mx, cy, 0, mx, cy, moonR);
      moonGrad.addColorStop(0, "#020818");
      moonGrad.addColorStop(0.7, "#010610");
      moonGrad.addColorStop(1, "#000510");
      ctx!.beginPath();
      ctx!.arc(mx, cy, moonR, 0, Math.PI * 2);
      ctx!.fillStyle = moonGrad;
      ctx!.fill();
    }

    function drawDiamondRing(offsetX: number, phase: number) {
      const mx = cx + offsetX;
      // Diamond spark
      const sparkX = cx + (offsetX > 0 ? -sunR : sunR) * 0.85;
      const sparkGrad = ctx!.createRadialGradient(sparkX, cy, 0, sparkX, cy, 18);
      sparkGrad.addColorStop(0, `rgba(255, 255, 240, ${phase})`);
      sparkGrad.addColorStop(0.4, `rgba(255, 220, 100, ${phase * 0.6})`);
      sparkGrad.addColorStop(1, "rgba(255,180,0,0)");
      ctx!.beginPath();
      ctx!.arc(sparkX, cy, 18, 0, Math.PI * 2);
      ctx!.fillStyle = sparkGrad;
      ctx!.fill();

      // Ring glow around moon edge
      const ringGrad = ctx!.createRadialGradient(mx, cy, moonR - 4, mx, cy, moonR + 12);
      ringGrad.addColorStop(0, `rgba(255, 220, 100, ${phase * 0.5})`);
      ringGrad.addColorStop(1, "rgba(255, 150, 0, 0)");
      ctx!.beginPath();
      ctx!.arc(mx, cy, moonR + 12, 0, Math.PI * 2);
      ctx!.fillStyle = ringGrad;
      ctx!.fill();
    }

    function drawStars(intensity: number) {
      for (let i = 0; i < 60; i++) {
        const sx = (Math.sin(i * 137.5) * 0.5 + 0.5) * W;
        const sy = (Math.cos(i * 97.3) * 0.5 + 0.5) * H;
        const sr = 0.8 + (i % 3) * 0.4;
        const twinkle = 0.5 + 0.5 * Math.sin(t * 2 + i);
        // Hide stars near the eclipse centre
        const dist = Math.hypot(sx - cx, sy - cy);
        if (dist < sunR + 60) continue;
        ctx!.beginPath();
        ctx!.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(220, 235, 255, ${intensity * twinkle * 0.9})`;
        ctx!.fill();
      }
    }

    function draw() {
      t += 0.008;
      ctx!.clearRect(0, 0, W, H);

      // Eclipse cycle: 0→1→0 over ~20s (t full cycle = 2π/0.008 * period)
      const cycle = (Math.sin(t * 0.18) + 1) / 2; // 0..1..0
      const totalityPhase = Math.max(0, (cycle - 0.75) / 0.25); // near totality
      const moonOffset = (1 - cycle) * 320 - 160; // moon moves left to right

      // Sky darkening
      const skyDark = cycle;
      const skyGrad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, W * 0.8);
      skyGrad.addColorStop(0, `rgba(1,12,50,${0.6 + skyDark * 0.4})`);
      skyGrad.addColorStop(0.5, `rgba(0,5,20,${0.7 + skyDark * 0.3})`);
      skyGrad.addColorStop(1, `rgba(0,2,10,1)`);
      ctx!.fillStyle = skyGrad;
      ctx!.fillRect(0, 0, W, H);

      drawStars(skyDark * 0.9);
      drawCorona(cycle * 0.9 + 0.1);
      drawSun(1 - cycle * 0.15);
      if (totalityPhase > 0.1) drawDiamondRing(moonOffset, totalityPhase);
      drawMoon(moonOffset);

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full object-contain"
      style={{ imageRendering: "auto" }}
    />
  );
}
