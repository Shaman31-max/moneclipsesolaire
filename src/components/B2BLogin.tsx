"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Lock, Mail, ShieldCheck, Eye, EyeOff, ArrowRight, ExternalLink } from "lucide-react";
import type { B2BSession } from "./B2BPortal";

// Demo access codes (in production these would be backend-validated)
const VALID_CODES = ["ECLIPSE2026", "B2BPRO", "PARTENAIRE"];

type Props = { onLogin: (s: B2BSession) => void };

export default function B2BLogin({ onLogin }: Props) {
  const [form, setForm] = useState({ company: "", email: "", code: "" });
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));

    if (!VALID_CODES.includes(form.code.trim().toUpperCase())) {
      setError("Code d'accès invalide. Contactez votre account manager.");
      setLoading(false);
      return;
    }
    onLogin({ company: form.company, email: form.email });
  };

  return (
    <div className="min-h-screen bg-[#060412] flex flex-col items-center justify-center px-6 py-24">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#22D3EE] opacity-[0.04] blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#22D3EE]/15 border border-[#22D3EE]/30 mb-5 mx-auto">
            <Building2 size={28} className="text-[#22D3EE]" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">Espace Partenaires</h1>
          <p className="text-white/88 text-sm">
            Accès réservé aux professionnels &amp; revendeurs agréés
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass rounded-2xl p-8 border border-[#22D3EE]/10"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Company */}
            <Field label="Société / Organisation" icon={Building2}>
              <input
                type="text"
                required
                placeholder="Eclipse Distribution SAS"
                value={form.company}
                onChange={set("company")}
                className="input-b2b"
              />
            </Field>

            {/* Email */}
            <Field label="Email professionnel" icon={Mail}>
              <input
                type="email"
                required
                placeholder="achat@votre-societe.fr"
                value={form.email}
                onChange={set("email")}
                className="input-b2b"
              />
            </Field>

            {/* Access code */}
            <Field label="Code d'accès partenaire" icon={Lock}>
              <div className="relative">
                <input
                  type={showCode ? "text" : "password"}
                  required
                  placeholder="••••••••••"
                  value={form.code}
                  onChange={set("code")}
                  className="input-b2b pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowCode((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/78 hover:text-white/95 transition-colors"
                >
                  {showCode ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
              <p className="text-[10px] text-white/78 mt-1.5">
                Vous n'avez pas encore de code ?{" "}
                <a href="mailto:b2b@moneclipsesolaire.fr" className="text-[#FFB800]/60 hover:text-[#FFB800] underline transition-colors">
                  Contactez notre équipe commerciale
                </a>
              </p>
            </Field>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400"
              >
                <Lock size={13} className="flex-shrink-0" />
                {error}
              </motion.div>
            )}

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={loading}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#22D3EE] text-white font-bold text-sm hover:bg-[#3D8FFF] transition-colors glow-blue disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : (
                <>
                  Accéder au catalogue B2B
                  <ArrowRight size={15} />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Demo hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-4 p-3 rounded-xl bg-[#22D3EE]/05 border border-[#22D3EE]/10 text-center"
        >
          <p className="text-[10px] text-white/72">
            Demo — code d'accès : <span className="text-[#FFB800]/50 font-mono">ECLIPSE2026</span>
          </p>
        </motion.div>

        {/* ISO reminder */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {[
            { label: "ISO 12312-2", href: "https://www.iso.org/standard/59289.html" },
            { label: "CE 2797", href: "https://ec.europa.eu/growth/single-market/ce-marking_en" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[10px] text-white/72 hover:text-[#FFB800]/60 transition-colors"
            >
              <ShieldCheck size={10} />
              {c.label}
              <ExternalLink size={8} />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .input-b2b {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #DCE8FF;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-b2b::placeholder { color: rgba(220,232,255,0.25); }
        .input-b2b:focus { border-color: rgba(30,127,255,0.5); }
      `}</style>
    </div>
  );
}

function Field({ label, icon: Icon, children }: { label: string; icon: React.ComponentType<{ size?: number; className?: string }>; children: React.ReactNode }) {
  return (
    <div>
      <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-white/85 mb-1.5">
        <Icon size={10} className="text-[#22D3EE]" />
        {label}
      </label>
      {children}
    </div>
  );
}
