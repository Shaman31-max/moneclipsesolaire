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
    <main className="min-h-screen bg-[#060412] pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white">
          L&apos;éclipse solaire du 12 août 2026 en France
        </h1>
        <p className="text-white/70 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          Horaires, taux d&apos;occultation ville par ville et conseils d&apos;observation pour ne rien
          manquer de la plus impressionnante éclipse visible en France depuis 1999.
        </p>
      </div>
      <EclipseInfo />
    </main>
  );
}
