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
    slug: "meteo-eclipse-12-aout-2026",
    title: "Météo du 12 août 2026 : quelles chances de ciel dégagé pour l'éclipse ?",
    description:
      "Statistiques d'ensoleillement d'août région par région, risques de brume en soirée et plans B : comment maximiser vos chances de voir l'éclipse.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "a-quoi-ressemble-eclipse-90-pourcent",
    title: "Éclipse à 90 % : à quoi ressemblera vraiment le 12 août 2026 ?",
    description:
      "Lumière, température, ombres, comportement des animaux : ce qui change concrètement pendant une éclipse partielle profonde, heure par heure.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "voir-eclipse-totale-espagne-2026",
    title: "Éclipse totale 2026 en Espagne : le guide pour les Français qui font le déplacement",
    description:
      "Où passe la bande de totalité du 12 août 2026, quelles villes espagnoles viser depuis la France, et comment vivre la totalité en toute sécurité.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 7,
  },
  {
    slug: "eclipse-11-aout-1999",
    title: "L'éclipse du 11 août 1999 : souvenirs, leçons et parallèles avec 2026",
    description:
      "27 ans après la dernière grande éclipse française, ce que 1999 nous a appris — sur l'émotion collective comme sur les accidents oculaires évitables.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "apres-eclipse-2026",
    title: "Après l'éclipse du 12 août 2026 : prochaines éclipses et que faire de vos lunettes",
    description:
      "2 août 2027, 26 janvier 2028 : vos lunettes resserviront vite. Comment les conserver, vérifier vos yeux et préparer les prochains rendez-vous.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 4,
  },
  {
    slug: "filtre-appareil-photo-eclipse",
    title: "Protéger son appareil photo pendant l'éclipse : filtres et méthodes",
    description:
      "Filtre ND 5.0, feuille solaire ou lunette d'éclipse adaptée : comment protéger capteur et optique le 12 août 2026, et les erreurs qui coûtent cher.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "lunettes-eclipse-entreprises-collectivites",
    title: "Entreprises, écoles, mairies : commander des lunettes d'éclipse en volume",
    description:
      "Équiper une équipe, une classe ou un événement public pour le 12 août 2026 : tarifs dégressifs, délais, facturation et conseils d'organisation.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 4,
  },
  {
    slug: "horaires-eclipse-12-aout-2026",
    title: "Éclipse solaire du 12 août 2026 : horaires exacts ville par ville en France",
    description:
      "À quelle heure commence l'éclipse du 12 août 2026 dans votre ville ? Tableau des horaires et taux d'occultation pour 21 grandes villes françaises.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "meilleures-villes-eclipse-2026",
    title: "Top 10 des meilleures villes françaises pour l'éclipse du 12 août 2026",
    description:
      "Occultation, météo d'août, horizon ouest : notre classement des meilleures villes de France pour observer l'éclipse solaire du 12 août 2026.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 6,
  },
  {
    slug: "eclipse-2-aout-2027",
    title: "Éclipse du 2 août 2027 : pourquoi la prochaine sera encore plus spectaculaire",
    description:
      "Un an après le 12 août 2026, l'éclipse du 2 août 2027 offrira l'une des plus longues totalités du siècle. Ce qui attend la France et où aller.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "lunettes-eclipse-amazon-fiables",
    title: "Lunettes éclipse sur Amazon : comment vérifier ce que vous achetez vraiment",
    description:
      "Vendeurs tiers, certifications invérifiables, précédents de 2017 : la checklist pour acheter des lunettes d'éclipse fiables sur une marketplace.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 6,
  },
  {
    slug: "din-certco-certification",
    title: "DIN CERTCO : que garantit ce laboratoire pour vos lunettes d'éclipse ?",
    description:
      "DIN CERTCO certifie les filtres d'observation solaire selon l'ISO 12312-2. Qui est cet organisme, comment il teste, et comment vérifier un certificat.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 4,
  },
  {
    slug: "difference-ce-iso-12312-2",
    title: "Marquage CE et norme ISO 12312-2 : quelle différence pour vos lunettes d'éclipse ?",
    description:
      "Le CE seul ne suffit pas pour observer une éclipse. Ce que couvre le marquage CE, ce qu'impose l'ISO 12312-2, et la combinaison à exiger.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 4,
  },
  {
    slug: "photographier-eclipse-solaire",
    title: "Comment photographier l'éclipse solaire du 12 août 2026 (smartphone et reflex)",
    description:
      "Filtres, réglages, compositions avec un Soleil bas sur l'horizon : le guide complet pour photographier l'éclipse du 12 août 2026 sans risque.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 7,
  },
  {
    slug: "filtre-solaire-smartphone-eclipse",
    title: "Photographier l'éclipse au smartphone sans abîmer le capteur : le guide",
    description:
      "Une lunette d'éclipse devant l'objectif, trois réglages, un trépied : comment réussir vos photos de l'éclipse du 12 août 2026 avec un smartphone.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "observer-eclipse-sans-lunettes",
    title: "Observer l'éclipse sans lunettes : sténopé, projection et leurs limites",
    description:
      "Sténopé, passoire, projection : les méthodes indirectes pour suivre l'éclipse du 12 août 2026 sans lunettes — et ce qu'elles ne permettent pas.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 5,
  },
  {
    slug: "prix-lunettes-eclipse",
    title: "Lunettes d'éclipse : pourquoi de tels écarts de prix (et pourquoi commander tôt)",
    description:
      "De 2,99 € à 20 € la paire : ce qui explique les écarts de prix des lunettes d'éclipse, et pourquoi les prix flambent toujours avant l'événement.",
    date: "2026-07-12",
    dateLabel: "12 juillet 2026",
    readingMinutes: 4,
  },
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
