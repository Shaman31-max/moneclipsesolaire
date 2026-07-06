import type { Metadata } from "next";
import Script from "next/script";
import { Outfit } from "next/font/google";
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
      </body>
      {GA_ID && (
        <>
          {/* Init synchrone légère : les événements s'empilent dans dataLayer
              et partent quand gtag.js arrive. GA + Google Ads partagent la
              même bibliothèque (une seule requête). */}
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
              ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}`}
          </Script>
          {/* lazyOnload : gtag.js (~180 KB) ne concurrence plus le rendu */}
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
        </>
      )}
    </html>
  );
}
