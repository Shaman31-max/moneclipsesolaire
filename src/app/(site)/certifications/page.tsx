import type { Metadata } from "next";
import IsoCertification from "@/components/IsoCertification";

export const metadata: Metadata = {
  title: "Nos certifications — MonEclipseSolaire.fr",
  description:
    "Lunettes éclipse certifiées ISO 12312-2 et CE 2797, testées par un laboratoire européen accrédité (DIN CERTCO). Transmission lumineuse < 0,003 %, UV et infrarouges bloqués à 100 %.",
  alternates: { canonical: "https://moneclipsesolaire.fr/certifications" },
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-24 pb-12">
      <IsoCertification />
    </main>
  );
}
