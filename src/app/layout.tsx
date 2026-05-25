import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

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
    title: "MonEclipseSolaire.fr",
    description: "La référence française pour observer l'éclipse solaire du 12 août 2026",
    url: "https://moneclipsesolaire.fr",
    siteName: "MonEclipseSolaire.fr",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
