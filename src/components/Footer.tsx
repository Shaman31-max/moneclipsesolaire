"use client";

import { Share2, MessageCircle, Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6 overflow-hidden border-t border-[#22D3EE]/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] " style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.02), transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 relative">
                <div className="absolute inset-0 rounded-full bg-[#22D3EE] opacity-80 corona-pulse" />
                <div className="absolute inset-[3px] rounded-full bg-[#050510]" />
              </div>
              <span className="font-bold">
                <span style={{ background: "linear-gradient(135deg, #22D3EE, #FFB800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>MonEclipse</span>
                <span className="text-white">Solaire</span>
                <span style={{ background: "linear-gradient(135deg, #FFB800, #22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>.fr</span>
              </span>
            </div>
            <p className="text-xs text-[#E8F0FF]/65 leading-relaxed mb-4">
              La référence française pour l'observation de l'éclipse solaire du 12 août 2026.
            </p>
            <div className="flex gap-3">
              {[Share2, MessageCircle, Globe].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-[#E8F0FF]/65 hover:text-[#22D3EE] hover:border-[#22D3EE]/30 transition-all"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8F0FF]/82 mb-4">Produits</h4>
            <ul className="space-y-2">
              <li><a href="/#produits" className="text-xs text-[#E8F0FF]/65 hover:text-[#22D3EE] transition-colors">Lunettes Éclipse</a></li>
              <li><a href="/#produits" className="text-xs text-[#E8F0FF]/65 hover:text-[#22D3EE] transition-colors">Ebook</a></li>
            </ul>
          </div>
        </div>

        {/* Contact bar */}
        <div className="flex flex-wrap gap-4 justify-center mb-8 py-4 glass rounded-xl">
          <a href="mailto:postmaster@moneclipsesolaire.fr" className="flex items-center gap-2 text-xs text-[#E8F0FF]/75 hover:text-[#22D3EE] transition-colors">
            <Mail size={13} />
            postmaster@moneclipsesolaire.fr
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-white/5">
          <p className="text-xs text-[#E8F0FF]/45">
            © 2026 MonEclipseSolaire.fr — Tous droits réservés
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/qui-sommes-nous" className="text-xs text-[#E8F0FF]/45 hover:text-[#22D3EE]/60 transition-colors">Qui sommes-nous ?</a>
            <a href="/mentions-legales" className="text-xs text-[#E8F0FF]/45 hover:text-[#22D3EE]/60 transition-colors">Mentions légales</a>
            <a href="/cgv" className="text-xs text-[#E8F0FF]/45 hover:text-[#22D3EE]/60 transition-colors">CGV</a>
            <a href="/confidentialite" className="text-xs text-[#E8F0FF]/45 hover:text-[#22D3EE]/60 transition-colors">Confidentialité</a>
            <a href="/cookies" className="text-xs text-[#E8F0FF]/45 hover:text-[#22D3EE]/60 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
