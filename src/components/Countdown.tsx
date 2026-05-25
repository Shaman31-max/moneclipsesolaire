"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ECLIPSE_DATE = new Date("2026-08-12T10:00:00+02:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = ECLIPSE_DATE.getTime() - Date.now();
  if (diff <= 0) return { jours: 0, heures: 0, minutes: 0, secondes: 0 };
  const jours = Math.floor(diff / 86400000);
  const heures = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const secondes = Math.floor((diff % 60000) / 1000);
  return { jours, heures, minutes, secondes };
}

function Unit({ value, label }: { value: number; label: string }) {
  const prev = String(value + 1).padStart(2, "0");
  const curr = pad(value);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-32 md:w-36 md:h-44 overflow-hidden rounded-xl glass border border-red-500/40">
        {/* Top half */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl md:text-6xl font-bold tabular-nums text-red-500" style={{ textShadow: "0 0 20px rgba(239,68,68,0.9), 0 0 40px rgba(239,68,68,0.4)" }}>
            {curr}
          </span>
        </div>
        {/* Separator line */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-red-500/20" />
        {/* Corner screws effect */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-red-500/30" />
        <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500/30" />
        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-red-500/30" />
        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500/30" />
      </div>
      <span className="text-xs uppercase tracking-[0.2em] text-[#E8F0FF]/75 font-medium">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#1E7FFF] mb-4 font-medium">
            Compte à rebours
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#DCE8FF] mb-2">
            Éclipse Solaire — 12 Août 2026
          </h2>
          <p className="text-[#E8F0FF]/75 mb-12 text-sm">
            Visible depuis le nord de la France · Maximum à 10h32 UTC+2
          </p>

          <div className="flex items-end justify-center gap-4 md:gap-6">
            <Unit value={time.jours} label="Jours" />
            <span className="text-5xl font-bold text-red-500 mb-10 opacity-70">:</span>
            <Unit value={time.heures} label="Heures" />
            <span className="text-5xl font-bold text-red-500 mb-10 opacity-70">:</span>
            <Unit value={time.minutes} label="Minutes" />
            <span className="text-5xl font-bold text-red-500 mb-10 opacity-70">:</span>
            <Unit value={time.secondes} label="Secondes" />
          </div>

          <motion.div
            className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-[#1E7FFF]/20"
            animate={{ borderColor: ["rgba(30,127,255,0.15)", "rgba(77,217,255,0.5)", "rgba(30,127,255,0.15)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-[#1E7FFF] corona-pulse" />
            <span className="text-sm text-[#E8F0FF]/88">
              Ne manquez pas cet événement unique — commandez maintenant pour être prêt
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
