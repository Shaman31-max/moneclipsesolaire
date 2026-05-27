import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ClientShell from "@/components/ClientShell";

// Below-fold: lazy loaded → not in initial JS bundle
const EclipseInfo      = dynamic(() => import("@/components/EclipseInfo"));
const IsoCertification = dynamic(() => import("@/components/IsoCertification"));
const BatchSystem      = dynamic(() => import("@/components/BatchSystem"));
const Products         = dynamic(() => import("@/components/Products"));
const B2BTeaser        = dynamic(() => import("@/components/B2BTeaser"));
const FAQ              = dynamic(() => import("@/components/FAQ"));
const Footer           = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "MonEclipseSolaire.fr — Lunettes & Filtres pour l'Éclipse du 12 Août 2026",
  description: "Protégez vos yeux lors de l'éclipse solaire du 12 août 2026 en France. Lunettes certifiées ISO 12312-2, filtres téléphone, livraison gratuite.",
  alternates: { canonical: "https://moneclipsesolaire.fr" },
};

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FFB800]/20 to-transparent" />
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://moneclipsesolaire.fr/#organization",
      "name": "MonEclipseSolaire.fr",
      "url": "https://moneclipsesolaire.fr",
      "logo": {
        "@type": "ImageObject",
        "url": "https://moneclipsesolaire.fr/lunette-eclipse.png",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@moneclipsesolaire.fr",
        "contactType": "customer service",
        "availableLanguage": "French",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://moneclipsesolaire.fr/#website",
      "url": "https://moneclipsesolaire.fr",
      "name": "MonEclipseSolaire.fr",
      "description": "Lunettes et filtres certifiés ISO 12312-2 pour observer l'éclipse solaire du 12 août 2026 en France.",
      "publisher": { "@id": "https://moneclipsesolaire.fr/#organization" },
      "inLanguage": "fr-FR",
    },
    {
      "@type": "Product",
      "name": "Lunettes Éclipse Solaire Certifiées ISO 12312-2",
      "description": "Lunettes d'observation solaire certifiées ISO 12312-2 et CE pour l'éclipse du 12 août 2026. Filtre ND 5.0, sécurité maximale, livraison gratuite en France.",
      "brand": { "@type": "Brand", "name": "MonEclipseSolaire.fr" },
      "image": "https://moneclipsesolaire.fr/lunette-eclipse.png",
      "url": "https://moneclipsesolaire.fr/#produits",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "lowPrice": "4.99",
        "highPrice": "34.99",
        "offerCount": "11",
        "availability": "https://schema.org/InStock",
        "seller": { "@id": "https://moneclipsesolaire.fr/#organization" },
      },
      "award": "Certifié ISO 12312-2 — DIN CERTCO Europe",
    },
    {
      "@type": "Event",
      "name": "Éclipse Solaire du 12 Août 2026 en France",
      "startDate": "2026-08-12",
      "endDate": "2026-08-12",
      "description": "Éclipse solaire partielle visible depuis la France le 12 août 2026. La plus impressionnante depuis 1999.",
      "location": {
        "@type": "Place",
        "name": "France",
        "address": { "@type": "PostalAddress", "addressCountry": "FR" },
      },
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    },
  ],
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060412]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
