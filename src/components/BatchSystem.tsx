"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Package, Truck, Clock, CheckCircle, AlertTriangle, Lock, ShoppingCart } from "lucide-react";

const BATCHES = [
  {
    id: 1,
    label: "1ère Série",
    tag: "OUVERTE",
    tagColor: "#22c55e",
    orderDeadline: new Date("2026-06-15T23:59:59+02:00"),
    deliveryDate: new Date("2026-07-20T00:00:00+02:00"),
    orderLabel: "Commandez avant le 15 juin",
    deliveryLabel: "Livraison le 20 juillet",
    desc: "Idéal pour prévoir sereinement. Vous recevez votre commande 23 jours avant l'éclipse.",
    color: "#22D3EE",
    glowColor: "rgba(30,127,255,0.3)",
  },
  {
    id: 2,
    label: "2ème Série",
    tag: "BIENTÔT",
    tagColor: "#FFAA00",
    orderDeadline: new Date("2026-06-30T23:59:59+02:00"),
    deliveryDate: new Date("2026-08-05T00:00:00+02:00"),
    orderLabel: "Commandez avant le 30 juin",
    deliveryLabel: "Livraison le 5 août",
    desc: "Dernière chance. Livraison 7 jours avant l'éclipse — délai serré, ne tardez pas.",
    color: "#FFAA00",
    glowColor: "rgba(255,170,0,0.25)",
  },
];

const ECLIPSE_DATE = new Date("2026-08-12T10:00:00+02:00");

function daysUntil(date: Date) {
  return Math.ceil((date.getTime() - Date.now()) / 86400000);
}

function formatDate(date: Date) {
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

function BatchCountdown({ deadline }: { deadline: Date }) {
  const [days, setDays] = useState(daysUntil(deadline));

  useEffect(() => {
    const id = setInterval(() => setDays(daysUntil(deadline)), 60000);
    return () => clearInterval(id);
  }, [deadline]);

  if (days <= 0) return <span className="text-red-400 text-xs font-bold">Clôturé</span>;

  return (
    <span className="tabular-nums">
      <span className="text-2xl font-black">{days}</span>
      <span className="text-xs ml-1 opacity-60">j restants</span>
    </span>
  );
}

export default function BatchSystem() {
  const now = Date.now();
  const batch1Open = now < BATCHES[0].orderDeadline.getTime();
  const batch2Open = now < BATCHES[1].orderDeadline.getTime();

  const eclipseDays = daysUntil(ECLIPSE_DATE);

  return (
    <section id="commande" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#22D3EE] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#22D3EE] mb-3 font-medium">
            Production à la demande
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#DCE8FF] mb-5 leading-tight">
            Un événement unique,<br />
            <span className="gradient-text-blue">zéro gaspillage</span>
          </h2>
          <p className="text-white/85 max-w-2xl mx-auto text-sm leading-relaxed">
            L'éclipse du 12 août 2026 est un événement exceptionnel et non renouvelable.
            Pour éviter tout gaspillage, nous produisons <strong className="text-[#E8F0FF]/92">uniquement à la demande</strong>,
            en deux séries de fabrication.
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-sm font-semibold text-white/70">
            La dernière mise en production sera lancée le 30 juin — après cette date, il ne sera plus possible de commander.
          </p>
        </motion.div>

        {/* Badge batch 1 en cours */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#22D3EE]/40 bg-[#22D3EE]/10">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE] corona-pulse" />
            <span className="text-sm font-bold text-[#A78BFA]">Batch 1 en cours jusqu'au 15 juin</span>
          </div>
        </div>

        {/* Timeline visuelle */}
        <div className="relative mb-14">
          {/* Ligne de temps */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#22D3EE]/30 via-[#A78BFA]/20 to-[#FFAA00]/30" />

          <div className="grid md:grid-cols-5 gap-3 md:gap-0 items-start relative z-10">
            {/* Point 1 : Commande série 1 */}
            <TimelineNode
              date="15 juin"
              label="Clôture commandes"
              sublabel="1ère série"
              color="#22D3EE"
              icon={ShoppingCart}
              active={batch1Open}
            />

            {/* Flèche */}
            <div className="hidden md:flex items-center justify-center pt-6">
              <div className="w-full h-0.5 bg-[#22D3EE]/20" />
            </div>

            {/* Point 2 : Livraison série 1 = Commande série 2 */}
            <TimelineNode
              date="20 juil."
              label="Livraison S1"
              sublabel="Clôture S2 : 30 juin (définitive)"
              color="#A78BFA"
              icon={Truck}
              active={batch2Open}
            />

            {/* Flèche */}
            <div className="hidden md:flex items-center justify-center pt-6">
              <div className="w-full h-0.5 bg-[#FFAA00]/20" />
            </div>

            {/* Point 3 : Éclipse */}
            <TimelineNode
              date="12 août"
              label="Éclipse Totale"
              sublabel={`J-${eclipseDays}`}
              color="#FFB800"
              icon={CheckCircle}
              eclipse
            />
          </div>
        </div>




        {/* Why produce on demand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-6 border border-[#22D3EE]/10"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/15 border border-[#22D3EE]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Package size={18} className="text-[#22D3EE]" />
            </div>
            <div>
              <h3 className="font-bold text-[#DCE8FF] mb-2 text-sm">Pourquoi la production à la demande ?</h3>
              <p className="text-xs text-white/82 leading-relaxed max-w-3xl">
                L'éclipse solaire du 12 août 2026 est un événement qui ne se reproduira pas avant plusieurs décennies en France.
                Produire en masse créerait des millions de lunettes inutilisables après le 12 août. Nous avons choisi de
                <strong className="text-white"> fabriquer uniquement ce qui est commandé.</strong>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5 pt-5 border-t border-white/8">
            {[
              { icon: "♻️", label: "0 gaspillage", desc: "Production exacte à la demande" },
              { icon: "✅", label: "Qualité garantie", desc: "Contrôle qualité avant expédition" },
              { icon: "🚚", label: "Livraison certaine", desc: "Avant l'éclipse, garanti" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-xl mb-1">{item.icon}</div>
                <div className="text-xs font-bold text-white">{item.label}</div>
                <div className="text-[10px] text-white/70 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Warning if nearing deadline */}
        {batch1Open && daysUntil(BATCHES[0].orderDeadline) <= 30 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-[#22c55e]/08 border border-[#22c55e]/20"
          >
            <AlertTriangle size={16} className="text-[#22c55e] flex-shrink-0" />
            <p className="text-sm text-[#E8F0FF]/85">
              <strong className="text-[#22c55e]">1ère série ouverte</strong> — Vous avez encore{" "}
              <strong className="text-white">{daysUntil(BATCHES[0].orderDeadline)} jours</strong> pour commander
              et recevoir vos lunettes le 20 juillet, avec 23 jours de marge avant l'éclipse.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function TimelineNode({
  date, label, sublabel, color, icon: Icon, active, eclipse,
}: {
  date: string; label: string; sublabel: string;
  color: string; icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  active?: boolean; eclipse?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all ${eclipse ? "animate-pulse" : ""}`}
        style={{
          backgroundColor: `${color}15`,
          borderColor: `${color}${active || eclipse ? "60" : "25"}`,
          boxShadow: active || eclipse ? `0 0 20px ${color}30` : "none",
        }}
      >
        <Icon size={20} className={eclipse ? "text-[#FFB800]" : undefined} style={!eclipse ? { color } : undefined} />
      </div>
      <div>
        <div className="text-sm font-black" style={{ color: active || eclipse ? color : undefined, opacity: active || eclipse ? 1 : 0.5 }}>
          {date}
        </div>
        <div className="text-[11px] font-semibold text-white/90">{label}</div>
        <div className="text-[10px] text-white/65">{sublabel}</div>
      </div>
    </div>
  );
}
