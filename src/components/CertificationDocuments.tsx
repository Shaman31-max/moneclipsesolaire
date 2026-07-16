"use client";

import Reveal from "@/components/Reveal";
import { FileText, FileImage, FolderArchive, Download, Eye, ShieldCheck } from "lucide-react";

const documents = [
  {
    file: "/certifications/certificat-examen-ue.pdf",
    title: "Certificat d'examen UE de type",
    ref: "CE-PC-250805-404-01-9B",
    description:
      "Certificat officiel délivré par l'organisme notifié européen attestant la conformité du modèle au Règlement EPI (UE) 2016/425.",
    icon: FileText,
    color: "#FFB800",
  },
  {
    file: "/certifications/rapport-tests-iso-12312-2.pdf",
    title: "Rapport de tests EN ISO 12312-2:2015",
    ref: "Laboratoire accrédité",
    description:
      "Rapport complet des essais en laboratoire : transmission lumineuse, filtration UV et infrarouge, résistance et durabilité du filtre.",
    icon: FileText,
    color: "#22D3EE",
  },
  {
    file: "/certifications/declaration-conformite-ue.pdf",
    title: "Déclaration UE de conformité",
    ref: "Fabricant — juillet 2026",
    description:
      "Déclaration officielle du fabricant engageant sa responsabilité sur la conformité des lunettes aux exigences européennes.",
    icon: FileText,
    color: "#FFB800",
  },
  {
    file: "/certifications/notice-utilisation.pdf",
    title: "Notice d'utilisation (EN)",
    ref: "Instructions fabricant",
    description:
      "Instructions officielles du fabricant : conditions d'utilisation, durée d'observation, précautions et entretien.",
    icon: FileText,
    color: "#22D3EE",
  },
  {
    file: "/certifications/notice-francais.png",
    title: "Notice d'utilisation (FR)",
    ref: "Version française",
    description:
      "Notice en français fournie avec chaque paire : consignes de sécurité, vérifications avant usage et conseils d'observation.",
    icon: FileImage,
    color: "#22D3EE",
  },
];

export default function CertificationDocuments() {
  return (
    <section id="documents" className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060412]/60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB800]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <p className="text-[calc(0.75rem+3px)] uppercase tracking-[0.3em] text-[#FFB800] mb-3 font-black text-center">
          Documents officiels
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-white text-center mb-3">
          Consultez nos certificats, ne nous croyez pas sur parole
        </h2>
        <p className="text-white/70 text-sm md:text-base text-center max-w-2xl mx-auto mb-10">
          La sécurité de vos yeux ne se négocie pas. Chaque document ci-dessous est consultable en
          ligne et téléchargeable : certificat d'examen UE, rapport de tests ISO 12312-2 et
          déclaration de conformité du fabricant.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {documents.map((doc, i) => {
            const Icon = doc.icon;
            return (
              <Reveal key={doc.file} delay={i * 0.08}>
                <div
                  className="glass rounded-2xl p-5 border h-full flex flex-col transition-all duration-200 hover:scale-[1.02]"
                  style={{ borderColor: `${doc.color}25` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center border"
                      style={{ backgroundColor: `${doc.color}15`, borderColor: `${doc.color}30` }}
                    >
                      <Icon size={20} style={{ color: doc.color }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-white leading-snug">{doc.title}</h3>
                      <div
                        className="text-[10px] font-bold mt-1 px-1.5 py-0.5 rounded inline-block"
                        style={{ backgroundColor: `${doc.color}20`, color: doc.color }}
                      >
                        {doc.ref}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-white/75 leading-relaxed mb-4 flex-1">
                    {doc.description}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border transition-colors hover:bg-white/10"
                      style={{ borderColor: `${doc.color}40`, color: doc.color }}
                    >
                      <Eye size={13} />
                      Consulter
                    </a>
                    <a
                      href={doc.file}
                      download
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-white/8 text-white/85 border border-white/15 transition-colors hover:bg-white/15"
                    >
                      <Download size={13} />
                      Télécharger
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={documents.length * 0.08}>
            <div className="glass rounded-2xl p-5 border border-white/15 h-full flex flex-col justify-between">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <FolderArchive size={20} className="text-white/85" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white leading-snug">Dossier complet</h3>
                  <div className="text-[10px] font-bold mt-1 px-1.5 py-0.5 rounded inline-block bg-white/10 text-white/70">
                    Archive ZIP — 3,3 Mo
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/75 leading-relaxed mb-4 flex-1">
                Certificat et rapport de tests réunis dans une seule archive, à conserver ou à
                transmettre (écoles, mairies, associations, revendeurs).
              </p>
              <a
                href="/certifications/dossier-complet-certificats.zip"
                download
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-[#FFB800]/15 text-[#FFB800] border border-[#FFB800]/40 transition-colors hover:bg-[#FFB800]/25"
              >
                <Download size={13} />
                Tout télécharger
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60">
          <ShieldCheck size={14} className="text-[#22D3EE]" />
          <span>
            Authenticité vérifiable auprès de l'organisme certificateur —{" "}
            <a
              href="https://www.ccqs.com/eu/certificateverification/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors"
            >
              vérifier le certificat en ligne →
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
