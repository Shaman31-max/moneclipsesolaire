import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BatchSystem from "@/components/BatchSystem";
import EclipseInfo from "@/components/EclipseInfo";
import IsoCertification from "@/components/IsoCertification";
import B2BTeaser from "@/components/B2BTeaser";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "MonEclipseSolaire.fr — Lunettes & Filtres pour l'Éclipse du 12 Août 2026",
  description: "Protégez vos yeux lors de l'éclipse solaire du 12 août 2026 en France. Lunettes certifiées ISO 12312-2, filtres téléphone, livraison gratuite.",
};

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FFB800]/20 to-transparent" />
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060412]">
      <ClientShell />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#FFB800] opacity-[0.04] blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#22D3EE] opacity-[0.03] blur-[140px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Divider />
        <EclipseInfo />
        <Divider />
        <IsoCertification />
        <Divider />
        <BatchSystem />
        <Divider />
        <Products />
        <Divider />
        <B2BTeaser />
        <Divider />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
