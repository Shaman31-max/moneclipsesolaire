"use client";

import { motion } from "framer-motion";
import { Building2, Package, FileText, HeadphonesIcon, Percent, Truck } from "lucide-react";
import { useState } from "react";

const advantages = [
  { icon: Percent, text: "Tarifs dégressifs dès 10 unités", color: "#22D3EE" },
  { icon: Package, text: "Conditionnement personnalisé & co-branding", color: "#FFB800" },
  { icon: FileText, text: "Factures pro + certificats de conformité CE", color: "#22D3EE" },
  { icon: Truck, text: "Livraison groupée express France entière", color: "#FFB800" },
  { icon: HeadphonesIcon, text: "Account manager dédié", color: "#22D3EE" },
  { icon: Building2, text: "Contrats cadre multi-commandes", color: "#FFB800" },
];

const tiers = [
  { label: "Starter", qty: "10–49 unités", discount: "–10%", color: "#22D3EE" },
  { label: "Business", qty: "50–199 unités", discount: "–20%", color: "#FFB800", highlight: true },
  { label: "Enterprise", qty: "200+ unités", discount: "–30%", color: "#0891B2" },
];

export default function B2B() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ company: "", email: "", quantity: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="b2b" className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 bg-[#22D3EE] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#22D3EE]/30 mb-6">
            <Building2 size={14} className="text-[#22D3EE]" />
            <span className="text-xs font-medium text-[#22D3EE] uppercase tracking-widest">Espace Partenaires</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#DCE8FF] mb-4">
            Solutions <span className="gradient-text-blue">B2B</span>
          </h2>
          <p className="text-[#DCE8FF]/50 max-w-xl mx-auto">
            Écoles, mairies, associations, entreprises — équipez vos collaborateurs
            et clients pour l'éclipse du 12 août 2026.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: advantages + tiers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Pricing tiers */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {tiers.map((tier) => (
                <div
                  key={tier.label}
                  className={`flex-1 rounded-xl p-4 text-center relative ${tier.highlight ? "glass-dark ring-1 ring-[#FFB800]/40" : "glass"}`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold bg-[#FFB800] text-[#050510] uppercase tracking-wider">
                      Populaire
                    </div>
                  )}
                  <div className="text-sm font-semibold text-[#DCE8FF]/60 mb-1">{tier.label}</div>
                  <div className="text-3xl font-black mb-1" style={{ color: tier.color }}>{tier.discount}</div>
                  <div className="text-xs text-[#DCE8FF]/40">{tier.qty}</div>
                </div>
              ))}
            </div>

            {/* Advantages list */}
            <div className="space-y-3">
              {advantages.map(({ icon: Icon, text, color }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-xl glass"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}20`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className="text-sm text-[#DCE8FF]/70">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#22D3EE]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-[#DCE8FF] mb-2">Demande envoyée !</h3>
                <p className="text-[#DCE8FF]/50 text-sm">Notre équipe vous contacte sous 24h ouvrées.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#DCE8FF] mb-2">Demande de devis</h3>
                <p className="text-sm text-[#DCE8FF]/50 mb-6">Réponse garantie sous 24h ouvrées</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { key: "company", label: "Société / Organisation", placeholder: "Mairie de Lyon" },
                    { key: "email", label: "Email professionnel", placeholder: "contact@mairie.fr", type: "email" },
                    { key: "quantity", label: "Quantité estimée", placeholder: "ex: 150 unités" },
                  ].map(({ key, label, placeholder, type = "text" }) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-[#DCE8FF]/50 uppercase tracking-wider mb-1.5">
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#DCE8FF] placeholder-[#DCE8FF]/30 text-sm focus:outline-none focus:border-[#22D3EE]/50 transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-medium text-[#DCE8FF]/50 uppercase tracking-wider mb-1.5">
                      Message (optionnel)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Précisez vos besoins, délais, personnalisation..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#DCE8FF] placeholder-[#DCE8FF]/30 text-sm focus:outline-none focus:border-[#22D3EE]/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#22D3EE] text-white font-bold text-sm hover:bg-[#3D8FFF] transition-colors glow-blue"
                  >
                    Envoyer la demande de devis
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
