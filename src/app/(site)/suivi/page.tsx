"use client";

import { useState } from "react";
import { Package, Truck, CheckCircle, Clock, Factory, MapPin, Search, ExternalLink } from "lucide-react";
import CommanderCTA from "@/components/CommanderCTA";

const STAGES = [
  {
    key: "received",
    label: "Commande reçue",
    sub: "Votre commande a été enregistrée et validée",
    icon: CheckCircle,
    activeFrom: new Date("2026-01-01"),
  },
  {
    key: "production",
    label: "Production en cours",
    sub: "Fabrication de votre commande — batch planifié",
    icon: Factory,
    activeFrom: new Date("2026-06-01"),
  },
  {
    key: "prep",
    label: "Reçue — préparation expédition",
    sub: "Arrivée en entrepôt, mise en colis",
    icon: Package,
    activeFrom: new Date("2026-07-20"),
  },
  {
    key: "shipping",
    label: "En cours d'expédition",
    sub: "Colis remis à La Poste, en route vers vous",
    icon: Truck,
    activeFrom: new Date("2026-08-01"),
  },
  {
    key: "delivered",
    label: "Livré",
    sub: "Dans votre boîte aux lettres avant le 12 août",
    icon: MapPin,
    activeFrom: new Date("2026-08-10"),
  },
];

function getCurrentStageIdx() {
  const now = new Date();
  let idx = -1;
  for (let i = 0; i < STAGES.length; i++) {
    if (now >= STAGES[i].activeFrom) idx = i;
  }
  return idx;
}

export default function SuiviPage() {
  const [tracking, setTracking] = useState("");
  const currentIdx = getCurrentStageIdx();
  const laPosteUrl = `https://www.laposte.fr/outils/suivre-vos-envois?code=${tracking.trim()}`;

  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div className="anim-fade-in-up-fast text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#FFB800] mb-3 font-medium">Suivi de commande</p>
          <h1 className="text-3xl md:text-4xl font-black text-[#DCE8FF] mb-3">
            Où est ma <span className="gradient-text-blue">commande&nbsp;?</span>
          </h1>
          <p className="text-white/65 text-sm">
            Suivez l'avancement de votre commande en temps réel.
          </p>
        </div>

        {/* Tracking input */}
        <div className="anim-fade-in-up-fast glass rounded-2xl p-6 mb-8 border border-[#22D3EE]/12">
          <p className="text-sm font-bold text-white/80 mb-3">
            Vous avez reçu un numéro de suivi par email ?
          </p>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/35" />
              <input
                type="text"
                value={tracking}
                onChange={(e) => setTracking(e.target.value)}
                placeholder="Ex : 2A12345678901"
                className="w-full bg-white/05 border border-white/10 rounded-xl pl-9 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#22D3EE]/50 transition-colors"
              />
            </div>
            <a
              href={tracking.trim() ? laPosteUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { if (!tracking.trim()) e.preventDefault(); }}
              className="flex items-center gap-1.5 px-4 py-3 rounded-xl font-bold text-sm transition-all"
              style={{
                backgroundColor: tracking.trim() ? "#FFB800" : "rgba(255,184,0,0.15)",
                color: tracking.trim() ? "#000" : "rgba(255,184,0,0.4)",
                cursor: tracking.trim() ? "pointer" : "not-allowed",
              }}
            >
              Suivre
              <ExternalLink size={13} />
            </a>
          </div>
          <p className="text-xs text-white/35 mt-2">
            Votre numéro de suivi vous sera envoyé par email dès traitement de votre commande.
          </p>
        </div>

        {/* Production timeline */}
        <div className="anim-fade-in-up-fast glass rounded-2xl p-6 border border-[#22D3EE]/12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#22D3EE] font-semibold mb-6">
            Statut de production
          </p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-5 bottom-5 w-px bg-white/08" />

            <div className="space-y-0">
              {STAGES.map((stage, i) => {
                const isDone = i <= currentIdx;
                const isCurrent = i === currentIdx;
                const Icon = stage.icon;

                return (
                  <div key={stage.key}
                    className="anim-fade-in-up-fast relative flex gap-4 pb-7 last:pb-0">
                    {/* Icon circle */}
                    <div
                      className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500"
                      style={{
                        backgroundColor: isDone
                          ? isCurrent ? "#FFB800" : "rgba(255,184,0,0.18)"
                          : "rgba(232,240,255,0.05)",
                        border: `2px solid ${isDone ? (isCurrent ? "#FFB800" : "rgba(255,184,0,0.4)") : "rgba(232,240,255,0.08)"}`,
                        boxShadow: isCurrent ? "0 0 18px rgba(255,184,0,0.5)" : "none",
                      }}
                    >
                      {isDone && !isCurrent ? (
                        <CheckCircle size={16} className="text-[#FFB800]" />
                      ) : (
                        <Icon
                          size={16}
                          style={{ color: isDone ? (isCurrent ? "#000" : "#FFB800") : "rgba(232,240,255,0.2)" }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="text-sm font-black"
                          style={{ color: isDone ? (isCurrent ? "#FFB800" : "#DCE8FF") : "rgba(232,240,255,0.28)" }}
                        >
                          {stage.label}
                        </span>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/30">
                            En cours
                          </span>
                        )}
                      </div>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: isDone ? "rgba(232,240,255,0.6)" : "rgba(232,240,255,0.2)" }}
                      >
                        {stage.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/06">
            <p className="text-xs text-white/40 text-center">
              Livraison garantie avant l'éclipse du{" "}
              <span className="text-white/60 font-semibold">12 août 2026</span> ·{" "}
              <a href="/suivi" className="text-[#22D3EE]/60 hover:text-[#22D3EE] underline underline-offset-2 transition-colors">
                voir le planning
              </a>
            </p>
          </div>
        </div>

        {/* Help */}
        <div className="anim-fade-in-up-fast mt-6 text-center">
          <p className="text-xs text-white/35">
            Un problème avec votre commande ?{" "}
            <a href="mailto:postmaster@moneclipsesolaire.fr" className="text-[#FFB800]/70 hover:text-[#FFB800] underline underline-offset-2 transition-colors">
              Contactez-nous
            </a>
          </p>
        </div>

      </div>
      <CommanderCTA />
    </main>
  );
}
