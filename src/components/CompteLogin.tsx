"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from "lucide-react";
import type { CompteSession } from "./ComptePortal";

type Tab = "login" | "register";
type Props = { onLogin: (s: CompteSession) => void };

export default function CompteLogin({ onLogin }: Props) {
  const [tab, setTab] = useState<Tab>("login");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    onLogin({
      name: form.name || form.email.split("@")[0],
      email: form.email,
    });
  };

  return (
    <div className="min-h-screen bg-[#060412] flex items-center justify-center px-6 py-24">
      {/* Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] " style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.04), transparent)" }} />
      </div>

      <div className="relative z-10 w-full max-w-sm">
        {/* Header */}
        <div className="anim-fade-in-up-fast text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-[#22D3EE]/15 border border-[#22D3EE]/25 flex items-center justify-center mx-auto mb-4">
            <User size={24} className="text-[#22D3EE]" />
          </div>
          <h1 className="text-2xl font-black text-white">Mon espace</h1>
          <p className="text-sm text-white/85 mt-1">Suivez vos commandes en temps réel</p>
        </div>

        {/* Card */}
        <div className="anim-fade-in-up-fast glass rounded-2xl p-7 border border-[#22D3EE]/12">
          {/* Tab switcher */}
          <div className="flex rounded-xl bg-white/4 p-1 mb-6">
            {(["login", "register"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  tab === t ? "bg-[#22D3EE] text-white" : "text-white/88 hover:text-white/96"
                }`}
              >
                {t === "login" ? "Connexion" : "Créer un compte"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === "register" && (
              <InputField label="Prénom & Nom" icon={User}>
                <input
                  type="text" required placeholder="Marie Dupont"
                  value={form.name} onChange={set("name")}
                />
              </InputField>
            )}

            <InputField label="Email" icon={Mail}>
              <input
                type="email" required placeholder="vous@exemple.fr"
                value={form.email} onChange={set("email")}
              />
            </InputField>

            <InputField label="Mot de passe" icon={Lock}>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required placeholder="••••••••"
                  value={form.password} onChange={set("password")}
                  className="pr-10"
                />
                <button
                  type="button" onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/78 hover:text-white/95 transition-colors"
                >
                  {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </InputField>

            {tab === "login" && (
              <div className="text-right -mt-2">
                <button type="button" className="text-xs text-[#22D3EE]/60 hover:text-[#22D3EE] transition-colors">
                  Mot de passe oublié ?
                </button>
              </div>
            )}

            <button
              type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#22D3EE] text-white font-bold text-sm hover:bg-[#3D8FFF] transition-colors glow-blue disabled:opacity-60 mt-2"
            >
              {loading
                ? <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                : <>{tab === "login" ? "Se connecter" : "Créer mon compte"} <ArrowRight size={14} /></>
              }
            </button>
          </form>
        </div>

        <p className="text-center text-[10px] text-white/65 mt-5">
          En continuant vous acceptez nos{" "}
          <span className="text-[#22D3EE]/40 underline cursor-pointer">CGV</span>
          {" "}et notre{" "}
          <span className="text-[#22D3EE]/40 underline cursor-pointer">politique de confidentialité</span>.
        </p>
      </div>

      <style jsx>{`
        input {
          width: 100%;
          padding: 0.7rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #DCE8FF;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        input::placeholder { color: rgba(220,232,255,0.22); }
        input:focus { border-color: rgba(30,127,255,0.5); }
      `}</style>
    </div>
  );
}

function InputField({ label, icon: Icon, children }: {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/82 mb-1.5">
        <Icon size={10} className="text-[#22D3EE]" />
        {label}
      </label>
      {children}
    </div>
  );
}
