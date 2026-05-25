import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
