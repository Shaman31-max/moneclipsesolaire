import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Package, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Qui sommes-nous ? — MonEclipseSolaire.fr",
  description:
    "Julien et Estelle, deux entrepreneurs toulousains passionnés d'e-commerce. Toutes les commandes sont vérifiées, emballées et expédiées par nos soins depuis Toulouse.",
  alternates: { canonical: "https://moneclipsesolaire.fr/qui-sommes-nous" },
};

export default function QuiSommesNousPage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-[calc(0.75rem+3px)] uppercase tracking-[0.3em] text-[#FFB800] mb-3 font-black">
          Notre histoire
        </p>
        <h1 className="text-4xl font-black text-white mb-12">Qui sommes-nous ?</h1>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Photo */}
          <div className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-[#FFB800]/20 shadow-[0_0_40px_rgba(255,184,0,0.08)]">
              <Image
                src="/julien-estelle.webp"
                alt="Julien et Estelle, fondateurs de MonEclipseSolaire.fr"
                width={800}
                height={1067}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm text-white/70">
              <MapPin size={14} className="text-[#22D3EE] flex-shrink-0" />
              <span>Toulouse, France</span>
            </div>
          </div>

          {/* Texte */}
          <div className="md:col-span-3 space-y-5 text-[15px] text-white/85 leading-relaxed">
            <p className="text-lg text-white font-bold">
              Bonjour ! Nous sommes Julien et Estelle, deux entrepreneurs toulousains passionnés
              par le e-commerce depuis de nombreuses années maintenant.
            </p>
            <p>
              Pour cette éclipse, nous avons souhaité mettre notre expérience au service d&apos;un
              produit indispensable, des lunettes d&apos;éclipse conformes aux normes de sécurité,
              afin que chacun puisse profiter de cet événement exceptionnel en toute sérénité.
            </p>
            <p>
              Toutes les commandes sont préparées par nos soins, directement depuis Toulouse.
              Nous vérifions chaque commande, l&apos;emballons avec attention, puis l&apos;expédions
              rapidement via La Poste.
            </p>
            <p>
              Notre priorité est simple : vous proposer un produit fiable, une expédition rapide
              et un service client réactif.
            </p>
            <p>
              N&apos;hésitez pas à nous contacter par e-mail si vous avez la moindre question avant
              ou après votre commande. Nous nous ferons un plaisir de vous répondre dans les plus
              brefs délais.
            </p>
            <p className="text-white font-bold">
              Merci pour votre confiance !
              <br />
              <span className="text-[#FFB800]">Julien &amp; Estelle</span>
            </p>

            {/* Points clés */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="glass rounded-2xl p-4 border border-white/8 flex items-start gap-3">
                <Package size={18} className="text-[#FFB800] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-black text-white">Préparé par nos soins</div>
                  <div className="text-xs text-white/70 mt-0.5">
                    Chaque commande vérifiée et emballée à Toulouse
                  </div>
                </div>
              </div>
              <a
                href="mailto:postmaster@moneclipsesolaire.fr"
                className="glass rounded-2xl p-4 border border-white/8 flex items-start gap-3 hover:border-[#22D3EE]/30 transition-colors"
              >
                <Mail size={18} className="text-[#22D3EE] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-black text-white">Une question ?</div>
                  <div className="text-xs text-white/70 mt-0.5">postmaster@moneclipsesolaire.fr</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
