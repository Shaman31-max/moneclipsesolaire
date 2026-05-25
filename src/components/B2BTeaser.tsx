"use client";

import { motion } from "framer-motion";
import { Building2, ArrowRight, Package, Percent, Truck, ShieldCheck } from "lucide-react";

const perks = [
  { icon: Percent, text: "Des remises exclusives" },
  { icon: Package, text: "Commande min. 500 pièces" },
  { icon: ShieldCheck, text: "Factures pro + certificats CE" },
  { icon: Truck, text: "Livraison groupée express" },
];

export default function B2BTeaser() {
  return (
    <section id="b2b" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-10 border border-[#22D3EE]/15 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#22D3EE] opacity-[0.04] blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            {/* Left */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#22D3EE]/10 border border-[#22D3EE]/20 mb-5">
                <Building2 size={13} className="text-[#22D3EE]" />
                <span className="text-xs font-bold text-[#FFB800] uppercase tracking-widest">Espace Partenaires</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Vous êtes un professionnel ?
                <br />
                <span style={{ background: "linear-gradient(135deg, #22D3EE, #FFB800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Accès B2B dédié</span>
              </h2>

              <p className="text-white/90 text-sm mb-6 max-w-md leading-relaxed">
                Écoles, mairies, associations, revendeurs — accédez à notre catalogue B2B avec tarifs dégressifs, commande minimum 500 pièces.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {perks.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 text-xs text-white/92">
                    <div className="w-6 h-6 rounded-lg bg-[#22D3EE]/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={12} className="text-[#22D3EE]" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>

              <motion.a
                href="/b2b"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FFB800] text-black font-bold text-sm glow-gold hover:bg-[#FFC933] transition-colors"
              >
                Accéder à l'espace partenaires
                <ArrowRight size={15} />
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
