import type { Metadata } from "next";
import IsoCertification from "@/components/IsoCertification";
import CommanderCTA from "@/components/CommanderCTA";

export const metadata: Metadata = {
  title: "Nos certifications — MonEclipseSolaire.fr",
  description:
    "Lunettes éclipse certifiées ISO 12312-2 et CE 2797, testées par un laboratoire européen accrédité (DIN CERTCO). Transmission lumineuse < 0,003 %, UV et infrarouges bloqués à 100 %.",
  alternates: { canonical: "https://moneclipsesolaire.fr/certifications" },
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white">
          Lunettes éclipse certifiées ISO 12312-2 et CE
        </h1>
        <p className="text-white/70 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Nos lunettes et filtres sont testés par un laboratoire européen accrédité. Voici les
          certifications, les contrôles réalisés et comment vérifier le certificat vous-même.
        </p>
      </div>
      <IsoCertification />
      <CommanderCTA />
    </main>
  );
}
