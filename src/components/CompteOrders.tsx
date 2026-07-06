"use client";

import { LogOut, Package, Truck, CheckCircle, Clock, MapPin, ChevronDown, ChevronUp, ShoppingBag } from "lucide-react";
import { useState } from "react";
import type { CompteSession } from "./ComptePortal";

type OrderStatus = "confirmed" | "production" | "shipped" | "delivered";

type Order = {
  id: string;
  ref: string;
  date: string;
  batch: 1 | 2;
  batchLabel: string;
  deliveryDate: string;
  items: { name: string; qty: number; unitHT: number }[];
  status: OrderStatus;
  tracking?: string;
};

// Mock orders — en production ces données viendraient de l'API Shopify
const MOCK_ORDERS: Order[] = [
  {
    id: "o1",
    ref: "MES-2026-00342",
    date: "21 mai 2026",
    batch: 1,
    batchLabel: "1ère Série",
    deliveryDate: "20 juillet 2026",
    status: "confirmed",
    items: [
      { name: "Lunettes Éclipse Pro", qty: 2, unitHT: 14.9 },
      { name: "Filtre Téléphone Universel", qty: 1, unitHT: 12.9 },
    ],
  },
];

const STEPS: { key: OrderStatus; label: string; desc: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { key: "confirmed", label: "Commande confirmée", desc: "Votre paiement a été accepté", icon: CheckCircle },
  { key: "production", label: "En production", desc: "Fabrication après clôture de série", icon: Package },
  { key: "shipped", label: "Expédiée", desc: "Colis remis au transporteur", icon: Truck },
  { key: "delivered", label: "Livrée", desc: "Profitez de l'éclipse !", icon: MapPin },
];

const STATUS_ORDER: OrderStatus[] = ["confirmed", "production", "shipped", "delivered"];

function statusIndex(s: OrderStatus) {
  return STATUS_ORDER.indexOf(s);
}

function totalHT(items: Order["items"]) {
  return items.reduce((s, i) => s + i.qty * i.unitHT, 0);
}

function fmt(n: number) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function OrderCard({ order }: { order: Order }) {
  const [expanded, setExpanded] = useState(true);
  const currentStep = statusIndex(order.status);

  const batchColor = order.batch === 1 ? "#22D3EE" : "#FFAA00";

  return (
    <div className="anim-fade-in-up-fast glass rounded-2xl border border-[#22D3EE]/12 overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-4 text-left">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${batchColor}18`, border: `1px solid ${batchColor}30` }}
          >
            <ShoppingBag size={16} style={{ color: batchColor }} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-black text-white">{order.ref}</span>
              <span
                className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: `${batchColor}18`, color: batchColor, border: `1px solid ${batchColor}30` }}
              >
                {order.batchLabel}
              </span>
            </div>
            <div className="text-xs text-white/82 mt-0.5">
              Commandé le {order.date} · Livraison prévue le {order.deliveryDate}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
          <span className="text-sm font-black text-[#FFB800] hidden sm:block">
            {fmt(totalHT(order.items) * 1.2)} € TTC
          </span>
          {expanded ? <ChevronUp size={16} className="text-white/78" /> : <ChevronDown size={16} className="text-white/78" />}
        </div>
      </button>

      {expanded && (
        <div className="px-6 pb-6 border-t border-white/8">
          {/* Progress stepper */}
          <div className="py-6">
            <div className="relative flex items-start justify-between">
              {/* Progress bar */}
              <div className="absolute top-5 left-5 right-5 h-0.5 bg-white/5">
                <div
                  className="h-full bg-gradient-to-r from-[#22D3EE] to-[#FFB800] transition-[width] duration-1000 ease-out"
                  style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
                />
              </div>

              {STEPS.map((step, i) => {
                const done = i <= currentStep;
                const active = i === currentStep;
                const Icon = step.icon;
                return (
                  <div key={step.key} className="flex flex-col items-center gap-2 relative z-10 flex-1">
                    <div
                      className={`anim-pop-in w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        active
                          ? "border-[#FFB800] bg-[#22D3EE]/20 shadow-[0_0_16px_rgba(30,127,255,0.5)]"
                          : done
                          ? "border-[#22D3EE] bg-[#22D3EE]/15"
                          : "border-white/8 bg-white/5"
                      }`}
                    >
                      <Icon
                        size={15}
                        className={done ? (active ? "text-[#FFB800]" : "text-[#22D3EE]") : "text-white/65"}
                      />
                    </div>
                    <div className="text-center hidden sm:block">
                      <div className={`text-[10px] font-bold leading-tight ${done ? "text-white/95" : "text-white/65"}`}>
                        {step.label}
                      </div>
                      <div className={`text-[9px] mt-0.5 ${active ? "text-[#FFB800]/60" : "text-white/65"}`}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Current status message */}
            <div className="mt-6 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#22D3EE]/08 border border-[#22D3EE]/15">
              <div className="w-2 h-2 rounded-full bg-[#FFB800] corona-pulse" />
              <div className="text-xs text-white/92">
                {order.status === "confirmed" && (
                  <>Commande confirmée — mise en production après clôture de la <strong className="text-white/96">1ère série le 15 juin</strong>. Livraison le <strong className="text-white/96">20 juillet</strong>.</>
                )}
                {order.status === "production" && <>Vos lunettes sont en cours de fabrication. Expédition prévue début juillet.</>}
                {order.status === "shipped" && (
                  <>Colis expédié{order.tracking && <> — Suivi : <span className="font-mono text-[#FFB800]">{order.tracking}</span></>}</>
                )}
                {order.status === "delivered" && <>Commande livrée. Profitez bien de l'éclipse du 12 août !</>}
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-2 border-t border-white/8 pt-4 mb-4">
            {order.items.map((item) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-white/92">
                  <span className="px-1.5 py-0.5 rounded bg-white/5 text-xs font-mono text-white/82">
                    ×{item.qty}
                  </span>
                  {item.name}
                </div>
                <span className="text-white/90 text-xs">{fmt(item.qty * item.unitHT)} € HT</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-white/8 pt-4 space-y-1">
            <div className="flex justify-between text-xs text-white/85">
              <span>Sous-total HT</span><span>{fmt(totalHT(order.items))} €</span>
            </div>
            <div className="flex justify-between text-xs text-white/78">
              <span>TVA 20%</span><span>{fmt(totalHT(order.items) * 0.2)} €</span>
            </div>
            <div className="flex justify-between text-sm font-black pt-1.5">
              <span className="text-white/96">Total TTC</span>
              <span className="text-[#FFB800]">{fmt(totalHT(order.items) * 1.2)} €</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type Props = { session: CompteSession; onLogout: () => void };

export default function CompteOrders({ session, onLogout }: Props) {
  return (
    <div className="min-h-screen bg-[#060412] pt-16">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#0D0820]/50 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="anim-fade-in-up-fast flex items-center justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#22D3EE] mb-1">Mon espace</p>
            <h1 className="text-2xl font-black text-white">
              Bonjour, {session.name.split(" ")[0]} 👋
            </h1>
            <p className="text-xs text-white/82 mt-0.5">{session.email}</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl glass border border-white/5 text-xs text-white/82 hover:text-white/95 transition-all"
          >
            <LogOut size={13} />
            Déconnexion
          </button>
        </div>

        {/* Orders */}
        <div className="mb-4">
          <h2 className="text-sm font-bold text-white/90 uppercase tracking-widest mb-4">
            Mes commandes
          </h2>

          {MOCK_ORDERS.length === 0 ? (
            <div className="glass rounded-2xl p-12 text-center border border-white/8">
              <ShoppingBag size={32} className="text-[#E8F0FF]/28 mx-auto mb-3" />
              <p className="text-sm text-white/78">Aucune commande pour le moment</p>
              <a href="/#produits" className="mt-4 inline-block px-5 py-2.5 rounded-full bg-[#22D3EE] text-white text-sm font-semibold">
                Découvrir nos produits
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {MOCK_ORDERS.map((o) => <OrderCard key={o.id} order={o} />)}
            </div>
          )}
        </div>

        {/* CTA nouvelle commande */}
        <div className="anim-fade-in-up-fast mt-8 p-5 glass rounded-2xl border border-[#22D3EE]/10 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-white/95">Besoin de plus de lunettes ?</p>
            <p className="text-xs text-white/82 mt-0.5">1ère série ouverte jusqu'au 15 juin — livraison 20 juillet</p>
          </div>
          <a
            href="/#produits"
            className="px-5 py-2.5 rounded-full bg-[#22D3EE] text-white text-sm font-semibold hover:bg-[#3D8FFF] transition-colors glow-blue whitespace-nowrap"
          >
            Commander
          </a>
        </div>
      </div>
    </div>
  );
}
