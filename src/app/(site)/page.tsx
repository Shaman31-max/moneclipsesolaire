import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ClientShell from "@/components/ClientShell";
import SeoContent from "@/components/SeoContent";

// Below-fold: lazy loaded → not in initial JS bundle
const EclipseInfo      = dynamic(() => import("@/components/EclipseInfo"));
const IsoCertification = dynamic(() => import("@/components/IsoCertification"));
const Products         = dynamic(() => import("@/components/Products"));
const FAQ              = dynamic(() => import("@/components/FAQ"));
const Footer           = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Lunettes Éclipse Solaire Certifiées ISO 12312-2 — 12 Août 2026",
  description: "Achetez vos lunettes éclipse solaire certifiées ISO 12312-2 pour l'éclipse du 12 août 2026 en France. Filtres téléphone, livraison gratuite, dès 3,99 €.",
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
      "@type": "FAQPage",
      "@id": "https://moneclipsesolaire.fr/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Pourquoi faut-il des lunettes spéciales pour observer l'éclipse solaire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regarder directement le soleil, même partiellement éclipsé, provoque des lésions irréversibles de la rétine. Les lunettes de soleil ordinaires ne protègent pas : elles bloquent environ 80 % de la lumière alors qu'il en faut 99,997 %. Seules des lunettes éclipse solaire certifiées ISO 12312-2 permettent une observation sans danger.",
          },
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la certification ISO 12312-2 pour les lunettes éclipse solaire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'ISO 12312-2:2015 est la norme internationale de sécurité des filtres d'observation solaire. Elle impose une transmission lumineuse inférieure à 0,003 % (densité optique ≥ 5,0), le blocage total des UV et des infrarouges jusqu'à 1400 nm. Nos lunettes sont testées par DIN CERTCO, laboratoire européen accrédité.",
          },
        },
        {
          "@type": "Question",
          "name": "Quand aura lieu l'éclipse solaire en France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'éclipse solaire aura lieu le 12 août 2026. Ce sera la plus impressionnante éclipse visible en France depuis 1999, et la prochaine comparable n'aura pas lieu avant 2081.",
          },
        },
        {
          "@type": "Question",
          "name": "La livraison des lunettes éclipse est-elle garantie avant le 12 août 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, à condition de commander avant la clôture d'une des deux séries de production : 1ère série close le 15 juin 2026 (livraison le 20 juillet), 2ème série close le 7 juillet 2026 (livraison le 7 août). La livraison est gratuite en France métropolitaine.",
          },
        },
      ],
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
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] " style={{ background: "radial-gradient(closest-side, rgba(255,184,0,0.04), transparent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] " style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.03), transparent)" }} />
      </div>

      <div className="relative z-10">
        <Hero />
        <Divider />
        <Products />
        <Divider />
        <EclipseInfo />
        <Divider />
        <IsoCertification />
        <Divider />
        <FAQ />
        <Divider />
        <SeoContent />
        <Footer />
      </div>
    </main>
  );
}
