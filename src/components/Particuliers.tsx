"use client";

import { motion } from "framer-motion";
import { User, Lock, Mail, Eye, EyeOff, Package, Star, Heart } from "lucide-react";
import { useState } from "react";

type Tab = "login" | "register";

const features = [
  { icon: Package, text: "Suivi de vos commandes en temps réel" },
  { icon: Star, text: "Programme fidélité — cumulez des points" },
  { icon: Heart, text: "Sauvegardez vos produits favoris" },
];

export default function Particuliers() {
  const [tab, setTab] = useState<Tab>("login");
  const [showPass, setShowPass] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <section id="particuliers" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 bg-[#FFB800] opacity-[0.02] blur-[100px]" />
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
            <User size={14} className="text-[#22D3EE]" />
            <span className="text-xs font-medium text-[#22D3EE] uppercase tracking-widest">Espace Particuliers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#DCE8FF] mb-4">
            Votre compte <span className="gradient-text-blue">personnel</span>
          </h2>
          <p className="text-[#DCE8FF]/50 max-w-lg mx-auto">
            Connectez-vous pour accéder à vos commandes, votre programme fidélité et vos favoris.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Eclipse decorative */}
              <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-[#22D3EE] opacity-[0.05] blur-[60px]" />
              <h3 className="text-2xl font-bold text-[#DCE8FF] mb-8 relative">
                Un compte, tous vos avantages
              </h3>
              <div className="space-y-4 relative">
                {features.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#22D3EE]" />
                    </div>
                    <span className="text-[#DCE8FF]/70 text-sm">{text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "12 400+", label: "Clients" },
                  { value: "4.9★", label: "Satisfaction" },
                  { value: "48h", label: "Livraison" },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-black gradient-text-blue">{value}</div>
                    <div className="text-xs text-[#DCE8FF]/40 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Auth form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8">
              {loggedIn ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-[#22D3EE]/20 flex items-center justify-center mx-auto mb-4 glow-blue">
                    <User size={32} className="text-[#22D3EE]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#DCE8FF] mb-2">
                    Bienvenue, {form.name || form.email.split("@")[0]} !
                  </h3>
                  <p className="text-[#DCE8FF]/50 text-sm mb-6">Vous êtes connecté à votre espace personnel.</p>
                  <div className="grid grid-cols-3 gap-3">
                    {["Mes commandes", "Mes favoris", "Mon profil"].map((item) => (
                      <button
                        key={item}
                        className="py-2 px-3 text-xs rounded-xl glass border border-[#22D3EE]/20 text-[#DCE8FF]/60 hover:text-[#22D3EE] hover:border-[#22D3EE]/40 transition-all"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {/* Tab switcher */}
                  <div className="flex rounded-xl bg-white/5 p-1 mb-6">
                    {(["login", "register"] as Tab[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                          tab === t
                            ? "bg-[#22D3EE] text-white"
                            : "text-[#DCE8FF]/50 hover:text-[#DCE8FF]"
                        }`}
                      >
                        {t === "login" ? "Connexion" : "Créer un compte"}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {tab === "register" && (
                      <div>
                        <label className="block text-xs font-medium text-[#DCE8FF]/50 uppercase tracking-wider mb-1.5">
                          Prénom & Nom
                        </label>
                        <div className="relative">
                          <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#DCE8FF]/30" />
                          <input
                            type="text"
                            required
                            placeholder="Marie Dupont"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#DCE8FF] placeholder-[#DCE8FF]/30 text-sm focus:outline-none focus:border-[#22D3EE]/50 transition-colors"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-medium text-[#DCE8FF]/50 uppercase tracking-wider mb-1.5">
                        Email
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#DCE8FF]/30" />
                        <input
                          type="email"
                          required
                          placeholder="vous@exemple.fr"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#DCE8FF] placeholder-[#DCE8FF]/30 text-sm focus:outline-none focus:border-[#22D3EE]/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#DCE8FF]/50 uppercase tracking-wider mb-1.5">
                        Mot de passe
                      </label>
                      <div className="relative">
                        <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#DCE8FF]/30" />
                        <input
                          type={showPass ? "text" : "password"}
                          required
                          placeholder="••••••••"
                          value={form.password}
                          onChange={(e) => setForm({ ...form, password: e.target.value })}
                          className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-[#DCE8FF] placeholder-[#DCE8FF]/30 text-sm focus:outline-none focus:border-[#22D3EE]/50 transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPass(!showPass)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#DCE8FF]/30 hover:text-[#DCE8FF]/70 transition-colors"
                        >
                          {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>

                    {tab === "login" && (
                      <div className="text-right">
                        <button type="button" className="text-xs text-[#22D3EE]/70 hover:text-[#22D3EE] transition-colors">
                          Mot de passe oublié ?
                        </button>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#22D3EE] text-white font-bold text-sm hover:bg-[#3D8FFF] transition-colors glow-blue mt-2"
                    >
                      {tab === "login" ? "Se connecter" : "Créer mon compte"}
                    </button>
                  </form>

                  <p className="text-center text-xs text-[#DCE8FF]/30 mt-4">
                    En continuant, vous acceptez nos{" "}
                    <button className="text-[#22D3EE]/60 hover:text-[#22D3EE] underline">CGV</button>
                    {" "}et notre{" "}
                    <button className="text-[#22D3EE]/60 hover:text-[#22D3EE] underline">politique de confidentialité</button>.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
