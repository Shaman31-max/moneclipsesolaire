// Métadonnées des articles du blog — utilisées par l'index /blog et le sitemap.
// Le contenu de chaque article vit dans src/app/(site)/blog/<slug>/page.tsx.

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  dateLabel: string;
  readingMinutes: number;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "lunettes-de-soleil-eclipse-danger",
    title: "Peut-on regarder une éclipse avec des lunettes de soleil ? (Non, et voici pourquoi)",
    description:
      "Les lunettes de soleil ne protègent pas des éclipses : elles laissent passer 1 000 fois trop de lumière. Explications, dangers réels et seules protections valables.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "erreurs-eclipse-solaire",
    title: "Éclipse du 12 août 2026 : les 10 erreurs à ne jamais commettre",
    description:
      "Œil nu, lunettes de soleil, jumelles sans filtre, filtres improvisés : les 10 erreurs qui abîment les yeux le jour d'une éclipse, et comment les éviter.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 6,
  },
  {
    slug: "eclipse-enfants-securite",
    title: "Observer l'éclipse du 12 août 2026 avec des enfants : le guide des parents",
    description:
      "Âge minimum, lunettes adaptées, surveillance, activités et alternatives sans risque : le guide complet pour vivre l'éclipse du 12 août 2026 en famille.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "ou-acheter-lunettes-eclipse-solaire",
    title: "Où acheter des lunettes d'éclipse solaire certifiées en 2026 ?",
    description:
      "Pharmacies, marketplaces, sites spécialisés : où trouver des lunettes éclipse certifiées ISO 12312-2 pour le 12 août 2026, et les pièges à éviter.",
    date: "2026-07-08",
    dateLabel: "8 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "eclipse-solaire-12-aout-2026-guide",
    title: "Éclipse solaire du 12 août 2026 : horaires, villes et guide d'observation",
    description:
      "Le guide complet de l'éclipse du 12 août 2026 en France : horaires précis, taux d'occultation ville par ville, où l'observer et comment s'y préparer.",
    date: "2026-07-08",
    dateLabel: "8 juillet 2026",
    readingMinutes: 6,
  },
  {
    slug: "verifier-lunettes-eclipse-iso-12312-2",
    title: "Comment vérifier que vos lunettes d'éclipse sont vraiment certifiées ISO 12312-2",
    description:
      "Contrefaçons, faux marquages CE, filtres non conformes : la checklist en 5 points pour vérifier vos lunettes d'éclipse avant le 12 août 2026.",
    date: "2026-07-08",
    dateLabel: "8 juillet 2026",
    readingMinutes: 4,
  },
];
