import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["300","400","500","600","700","800","900"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "MonEclipseSolaire.fr — Lunettes & Filtres pour l'Éclipse du 12 Août 2026",
  description: "Protégez vos yeux et votre appareil photo lors de l'éclipse solaire du 12 août 2026 en France. Lunettes certifiées ISO et filtres professionnels.",
  keywords: ["éclipse solaire", "lunettes éclipse", "filtre téléphone", "éclipse 2026", "protection solaire"],
  openGraph: {
    title: "MonEclipseSolaire.fr — Lunettes pour l'Éclipse du 12 Août 2026",
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
    title: "MonEclipseSolaire.fr — Lunettes pour l'Éclipse 2026",
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
    </html>
  );
}
