import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Espace Partenaires B2B — MonEclipseSolaire.fr",
  description: "Accès réservé aux professionnels et revendeurs. Commande minimum 500 unités.",
  alternates: { canonical: "https://moneclipsesolaire.fr/b2b" },
  robots: { index: false, follow: false },
};

export default function B2BLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
