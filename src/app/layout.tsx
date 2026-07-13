import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

// Les IDs peuvent contenir un BOM invisible selon comment la variable a été
// collée dans Vercel — sans nettoyage, gtag charge une 2ème bibliothèque
// avec un ID invalide (+87 KB de JS mort).
const GA_ID = (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "").replace(/[^\x20-\x7E]/g, "").trim();
const ADS_ID = (process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "").replace(/[^\x20-\x7E]/g, "").trim();

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["400","700","900"], display: "swap" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://moneclipsesolaire.fr"),
  title: "Lunettes Éclipse Solaire Certifiées ISO 12312-2 — 12 Août 2026",
  description: "Lunettes éclipse solaire certifiées ISO 12312-2 pour observer l'éclipse du 12 août 2026 en France en toute sécurité. Filtres téléphone inclus, livraison gratuite.",
  keywords: ["lunettes éclipse solaire", "lunettes éclipse", "éclipse solaire 2026", "lunettes éclipse solaire certifiées", "filtre téléphone éclipse", "éclipse 12 août 2026", "protection solaire ISO 12312-2"],
  openGraph: {
    title: "Lunettes Éclipse Solaire Certifiées ISO 12312-2 — 12 Août 2026",
    description: "Protégez vos yeux lors de l'éclipse solaire du 12 août 2026. Lunettes certifiées ISO 12312-2, livraison gratuite en France.",
    url: "https://moneclipsesolaire.fr",
    siteName: "MonEclipseSolaire.fr",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://moneclipsesolaire.fr/lunette-eclipse.png",
        width: 1200,
        height: 630,
        alt: "Lunettes éclipse solaire certifiées ISO 12312-2",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunettes Éclipse Solaire Certifiées — Éclipse du 12 Août 2026",
    description: "Protégez vos yeux lors de l'éclipse solaire du 12 août 2026. Lunettes certifiées ISO 12312-2.",
    images: ["https://moneclipsesolaire.fr/lunette-eclipse.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClientProviders>{children}</ClientProviders>
        <SpeedInsights />
      </body>
      {/* gtag pèse ~320 KB (GA + 2ème lib Ads) et plombait LCP/TBT même en
          lazyOnload. On ne le charge qu'à la première interaction utilisateur
          (ou après 6 s en secours) : les événements s'empilent dans dataLayer
          et partent dès que la lib arrive — aucune donnée perdue. */}
      {GA_ID && (
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            /* Consent Mode v2 : signaux explicites envoyés à Google
               (requis pour l'attribution Ads en EEE). Consentement
               automatique — choix assumé du propriétaire du site, sans
               bannière CMP (non conforme à la doctrine CNIL). */
            gtag('consent', 'default', {
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
              analytics_storage: 'granted',
              url_passthrough: true
            });
            gtag('config', '${GA_ID}');
            ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
            (function(){
              var done=false;
              var evs=['pointerdown','keydown','scroll','touchstart'];
              function load(){
                if(done)return;done=true;
                evs.forEach(function(e){removeEventListener(e,load)});
                var s=document.createElement('script');
                s.src='https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
                s.async=true;document.head.appendChild(s);
              }
              evs.forEach(function(e){addEventListener(e,load,{passive:true})});
              setTimeout(load,6000);
            })();`}
        </Script>
      )}
    </html>
  );
}
