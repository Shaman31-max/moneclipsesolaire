import type { Metadata } from "next";
import EclipseInfo from "@/components/EclipseInfo";

export const metadata: Metadata = {
  title: "L'Éclipse du 12 Août 2026 — MonEclipseSolaire.fr",
  description:
    "Tout savoir sur l'éclipse solaire du 12 août 2026 en France : horaires, taux d'occultation par ville (jusqu'à 99,5 % à Biarritz), et comment l'observer en toute sécurité.",
  alternates: { canonical: "https://moneclipsesolaire.fr/eclipse" },
};

export default function EclipsePage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-16 pb-12">
      <EclipseInfo />
    </main>
  );
}
