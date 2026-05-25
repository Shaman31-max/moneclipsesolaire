import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BatchSystem from "@/components/BatchSystem";
import EclipseInfo from "@/components/EclipseInfo";
import IsoCertification from "@/components/IsoCertification";
import B2BTeaser from "@/components/B2BTeaser";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ClientShell from "@/components/ClientShell";

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1E7FFF]/20 to-transparent" />
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#000510]">
      <ClientShell />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#010C2E]/60 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#010B28]/60 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1E7FFF] opacity-[0.015] blur-[200px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Divider />
        <EclipseInfo />
        <Divider />
        <BatchSystem />
        <Divider />
        <IsoCertification />
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
