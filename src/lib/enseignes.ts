// Données des pages transactionnelles /acheter/lunettes-eclipse-{enseigne}.
// Principe : guide d'achat honnête et informatif. Usage nominatif des marques
// uniquement pour les désigner, zéro dénigrement, zéro fausse allégation de
// rupture. Chaque page porte un disclaimer de non-affiliation.

export type EnseigneFaq = {
  q: string;
  a: string;
};

export type Enseigne = {
  slug: string;
  name: string;
  /** « chez Amazon », « en pharmacie »… */
  chez: string;
  /** Réponse honnête à « en trouve-t-on ? » (2-3 phrases) */
  dispo: string;
  /** Titre du H2 spécifique à l'enseigne */
  angleTitle: string;
  /** Paragraphes du contenu unique (2-3) */
  angle: string[];
  faq: EnseigneFaq[];
};

export const ENSEIGNES: Enseigne[] = [
  {
    slug: "amazon",
    name: "Amazon",
    chez: "sur Amazon",
    dispo:
      "Oui, on trouve de nombreuses lunettes d'éclipse sur Amazon, à tous les prix. La vraie question n'est pas la disponibilité mais l'identité du vendeur : sur une marketplace, des centaines de vendeurs tiers proposent des produits de provenance très variable sous des fiches qui se ressemblent.",
    angleTitle: "Ce qu'il faut savoir spécifiquement sur une marketplace",
    angle: [
      "Sur Amazon, regardez systématiquement l'encart « Expédié par / Vendu par » : c'est lui qui vous dit qui vend réellement le produit. Un vendeur établi en Europe, identifiable, avec un historique d'avis cohérent, est un premier filtre — mais pas une garantie de conformité du filtre optique.",
      "Le précédent de l'éclipse américaine de 2017 est instructif : l'American Astronomical Society avait dû publier une liste de fournisseurs vérifiés après la découverte, sur plusieurs marketplaces, de lunettes portant un marquage ISO imprimé mais jamais testées en laboratoire. Amazon avait alors procédé à des rappels et remboursements préventifs. La leçon : un marquage imprimé ne prouve rien, seul un certificat de laboratoire vérifiable compte.",
      "Enfin, à l'approche du 12 août, vérifiez la date de livraison réelle affichée au panier : certaines offres marketplace partent de l'étranger avec des délais incompatibles avec l'événement.",
    ],
    faq: [
      {
        q: "Les lunettes d'éclipse vendues sur Amazon sont-elles fiables ?",
        a: "Certaines oui, d'autres non : la plateforme héberge des vendeurs de qualité très inégale. Appliquez la checklist : certificat de laboratoire consultable, laboratoire nommé (ex. DIN CERTCO), vendeur identifiable, test visuel à réception.",
      },
      {
        q: "Comment reconnaître le vendeur réel sur Amazon ?",
        a: "Sur la fiche produit, l'encart « Expédié par / Vendu par » indique le vendeur réel. Cliquez sur son nom pour voir sa raison sociale, son adresse et son historique d'évaluations.",
      },
      {
        q: "Que faire si je doute des lunettes reçues ?",
        a: "Faites le test visuel : portées en intérieur éclairé, vous ne devez strictement rien voir (ni lampe, ni fenêtre). Au moindre doute, ne les utilisez pas et demandez le remboursement.",
      },
    ],
  },
  {
    slug: "carrefour",
    name: "Carrefour",
    chez: "chez Carrefour",
    dispo:
      "À l'approche d'une éclipse, les hypermarchés référencent souvent des lunettes d'observation en opération saisonnière — en tête de gondole, au rayon presse ou aux caisses. La disponibilité varie fortement d'un magasin Carrefour à l'autre et les stocks partent vite dans les derniers jours.",
    angleTitle: "Acheter en hypermarché : les bons réflexes en rayon",
    angle: [
      "En grande surface, vous achetez sans conseil spécialisé : c'est à vous de vérifier le produit en main. Cherchez sur la monture la mention ISO 12312-2, le nom du fabricant ou de l'importateur et le marquage CE. Un blister vide de toute information technique est un signal d'alarme.",
      "Les opérations saisonnières s'appuient parfois sur la presse (magazines avec lunettes en cadeau). Ces lunettes peuvent être parfaitement conformes — le magazine cite alors le laboratoire ayant testé le filtre. Sans cette information, prudence.",
      "Si votre magasin n'a pas encore reçu de stock, inutile de multiplier les visites : les arrivages sont centralisés et souvent tardifs. Commander en ligne à l'avance reste le moyen le plus sûr d'être équipé avant le 12 août.",
    ],
    faq: [
      {
        q: "Carrefour vend-il des lunettes d'éclipse ?",
        a: "Souvent, oui, en opération saisonnière à l'approche de l'événement — mais la disponibilité dépend du magasin et du moment. Appelez votre magasin avant de vous déplacer.",
      },
      {
        q: "Que vérifier sur des lunettes achetées en hypermarché ?",
        a: "La mention ISO 12312-2 sur la monture, le nom du fabricant, le marquage CE, l'état parfait du filtre — et à la maison, le test visuel : vous ne devez rien voir d'autre qu'une source très intense.",
      },
      {
        q: "Quel est le prix en grande surface ?",
        a: "Généralement entre 2 et 6 € la paire à l'unité. Les tarifs dégressifs par quantité, utiles pour équiper une famille, sont plutôt l'apanage de la vente en ligne.",
      },
    ],
  },
  {
    slug: "leclerc",
    name: "E.Leclerc",
    chez: "chez E.Leclerc",
    dispo:
      "Comme les autres enseignes de grande distribution, les centres E.Leclerc peuvent proposer des lunettes d'éclipse en opération événementielle, souvent via leur Espace Culturel ou le rayon presse. Chaque magasin étant géré de façon indépendante, la disponibilité varie encore plus qu'ailleurs d'un point de vente à l'autre.",
    angleTitle: "La particularité Leclerc : des magasins indépendants",
    angle: [
      "Le réseau E.Leclerc fonctionne en magasins indépendants : chaque adhérent décide d'une partie de ses références. Concrètement, un centre peut avoir un stock de lunettes d'éclipse quand celui de la ville voisine n'en a jamais commandé. Le réflexe utile : appeler l'accueil ou l'Espace Culturel de votre magasin avant de vous déplacer.",
      "Les Espaces Culturels, qui gèrent livres et loisirs scientifiques, sont le point de vente le plus probable — parfois avec des kits d'observation pédagogiques pour enfants.",
      "Les règles de vérification restent identiques partout : mention ISO 12312-2 sur la monture, fabricant identifié, filtre intact, et test visuel avant utilisation.",
    ],
    faq: [
      {
        q: "Mon E.Leclerc aura-t-il des lunettes d'éclipse ?",
        a: "Impossible à garantir : les magasins E.Leclerc sont indépendants et chacun décide de ses commandes. Téléphonez à votre centre (rayon presse ou Espace Culturel) pour le savoir.",
      },
      {
        q: "Les lunettes vendues en grande distribution sont-elles certifiées ?",
        a: "Les enseignes sérieuses référencent des produits conformes, mais vérifiez toujours vous-même : mention ISO 12312-2, fabricant nommé, et test visuel à la maison.",
      },
      {
        q: "Et si mon magasin est en rupture ?",
        a: "C'est le scénario classique des derniers jours avant une éclipse. En commandant en ligne dès maintenant (livraison 72 h), vous évitez la course aux magasins de la dernière semaine.",
      },
    ],
  },
  {
    slug: "decathlon",
    name: "Decathlon",
    chez: "chez Decathlon",
    dispo:
      "Decathlon est une référence pour l'optique solaire sportive, mais attention à une confusion fréquente : des lunettes de sport « catégorie 4 », même excellentes en montagne, ne permettent JAMAIS d'observer une éclipse. La présence de lunettes d'éclipse dédiées (ISO 12312-2) en rayon dépend des magasins et des périodes.",
    angleTitle: "Catégorie 4 n'est pas ISO 12312-2 : la confusion à éviter absolument",
    angle: [
      "C'est LE piège spécifique aux enseignes de sport. Les catégories 0 à 4 des lunettes de soleil mesurent la protection contre l'éblouissement : une catégorie 4 « glacier » transmet encore 3 à 8 % de la lumière visible. Un filtre d'éclipse ISO 12312-2 transmet moins de 0,0032 % — soit environ mille fois moins. Les deux produits ne jouent pas dans la même catégorie, au sens propre.",
      "Si un vendeur vous oriente vers des lunettes de glacier pour « regarder l'éclipse », c'est une erreur : elles protègent sur la neige, pas face au disque solaire. Seules des lunettes portant explicitement la mention ISO 12312-2 conviennent.",
      "Pour les activités outdoor du 12 août (randonnée au sommet, soirée plage), le combo idéal : vos lunettes de sport habituelles pour le confort général, et une paire ISO 12312-2 dans la poche pour chaque regard vers le Soleil.",
    ],
    faq: [
      {
        q: "Les lunettes catégorie 4 de Decathlon protègent-elles pour l'éclipse ?",
        a: "Non, jamais. La catégorie 4 concerne l'éblouissement (neige, mer, haute montagne) et transmet encore des milliers de fois trop de lumière pour fixer le Soleil. Il faut la norme ISO 12312-2, spécifique à l'observation solaire.",
      },
      {
        q: "Decathlon vend-il de vraies lunettes d'éclipse ?",
        a: "L'enseigne peut en référencer à l'approche de l'événement, selon les magasins. Vérifiez la mention ISO 12312-2 sur le produit — pas seulement « UV400 » ou « catégorie 4 ».",
      },
      {
        q: "Je pars en randonnée le 12 août, que prévoir ?",
        a: "Un sommet avec un horizon ouest dégagé est un spot idéal. Emportez des lunettes ISO 12312-2 (quelques grammes) en plus de votre équipement habituel, et redescendez avant la nuit : l'éclipse se termine au coucher du Soleil.",
      },
    ],
  },
  {
    slug: "cultura",
    name: "Cultura",
    chez: "chez Cultura",
    dispo:
      "Les enseignes culturelles comme Cultura proposent régulièrement des produits d'astronomie au rayon sciences et loisirs éducatifs : cartes du ciel, kits pédagogiques, parfois des lunettes d'éclipse à l'approche des grands rendez-vous astronomiques. La disponibilité reste variable selon les magasins.",
    angleTitle: "Le rayon sciences : une bonne porte d'entrée pour les familles",
    angle: [
      "L'angle intéressant chez Cultura, c'est la préparation pédagogique de l'événement : livres d'astronomie jeunesse, kits d'expériences, matériel de projection. Une éclipse est une occasion en or d'intéresser les enfants au ciel — à condition de préparer l'observation en toute sécurité.",
      "Si vous y trouvez des lunettes d'éclipse, appliquez les vérifications habituelles : mention ISO 12312-2, fabricant identifié, filtre intact. Pour les enfants, vérifiez aussi que la monture peut être ajustée à un petit visage (un élastique fait très bien l'affaire).",
      "Et pour prolonger l'expérience à la maison, notre album illustré « Luna et l'éclipse magique » (dès 3 ans) prépare les plus petits à l'événement — disponible en téléchargement instantané sur notre boutique.",
    ],
    faq: [
      {
        q: "Cultura vend-il des lunettes d'éclipse ?",
        a: "Parfois, au rayon sciences/loisirs éducatifs, surtout à l'approche de l'événement. Appelez votre magasin pour vérifier le stock avant de vous déplacer.",
      },
      {
        q: "Quelles activités pour préparer l'éclipse avec des enfants ?",
        a: "Fabriquer un sténopé, lire une histoire sur les éclipses, répéter le geste « lunettes sur les yeux avant de lever la tête ». Notre guide dédié aux parents détaille tout, et notre album « Luna et l'éclipse magique » est parfait dès 3 ans.",
      },
      {
        q: "Les kits d'observation pour enfants sont-ils sûrs ?",
        a: "Un kit sérieux contient des lunettes ISO 12312-2 et des activités de projection indirecte. Vérifiez la norme sur les lunettes du kit comme pour n'importe quel achat.",
      },
    ],
  },
  {
    slug: "pharmacie",
    name: "pharmacie",
    chez: "en pharmacie",
    dispo:
      "La pharmacie est le canal historique des lunettes d'éclipse en France : en 1999, des millions de paires y avaient été distribuées. Pour 2026, de nombreuses officines en proposeront à nouveau — avec un vrai atout : un professionnel de santé en face de vous, et souvent la documentation du fournisseur consultable sur demande.",
    angleTitle: "L'atout pharmacie : le conseil et la traçabilité",
    angle: [
      "Contrairement à un rayon libre-service, votre pharmacien peut généralement vous montrer la documentation du produit : fournisseur, certificat de conformité, laboratoire de test. N'hésitez pas à la demander — c'est exactement le réflexe qui protège vos yeux.",
      "Le point de vigilance : les stocks. Les officines commandent des quantités limitées et l'expérience de 1999 comme celle des éclipses américaines récentes montre que la demande explose dans la dernière semaine, laissant beaucoup de monde sans protection le jour J.",
      "Notre conseil : si votre pharmacie est déjà équipée, c'est un excellent canal. Si elle attend un réapprovisionnement à quelques jours de l'éclipse, sécurisez plutôt votre commande en ligne dès maintenant — livraison 72 h, directement en boîte aux lettres.",
    ],
    faq: [
      {
        q: "Toutes les pharmacies vendront-elles des lunettes d'éclipse ?",
        a: "Non : chaque officine décide de commander ou non, et en quelle quantité. Appelez la vôtre pour connaître la disponibilité et, le cas échéant, demandez la documentation de conformité du produit.",
      },
      {
        q: "Les lunettes vendues en pharmacie sont-elles plus sûres ?",
        a: "Le circuit pharmaceutique est sérieux sur la traçabilité, mais la règle reste la même partout : mention ISO 12312-2, laboratoire de test identifiable, filtre intact, test visuel avant usage.",
      },
      {
        q: "Combien coûtent-elles en pharmacie ?",
        a: "Généralement entre 3 et 8 € la paire. Pour équiper toute une famille, les tarifs dégressifs de la vente en ligne sont souvent plus avantageux.",
      },
    ],
  },
  {
    slug: "fnac",
    name: "Fnac",
    chez: "à la Fnac",
    dispo:
      "La Fnac peut proposer des lunettes d'éclipse via son rayon optique/astronomie (jumelles, télescopes) et surtout via fnac.com — en gardant à l'esprit que fnac.com est aussi une marketplace : une partie des offres émane de vendeurs tiers, comme sur Amazon.",
    angleTitle: "Fnac.com : les mêmes réflexes que sur toute marketplace",
    angle: [
      "Sur fnac.com, distinguez les produits « vendus et expédiés par Fnac » des offres de vendeurs partenaires : l'information figure sur chaque fiche produit. Pour un vendeur tiers, appliquez la même checklist que sur n'importe quelle marketplace : identité du vendeur, certificat de laboratoire consultable, délais de livraison réalistes avant le 12 août.",
      "En magasin, le rayon astronomie est tenu par des vendeurs qui connaissent l'optique : c'est l'occasion de demander si le produit dispose d'un certificat ISO 12312-2 et de quel laboratoire il émane.",
      "Astuce pour les photographes : si vous cherchez aussi un filtre pour votre appareil, une lunette d'éclipse certifiée peut servir de filtre d'appoint pour un smartphone — notre guide photo détaille la méthode.",
    ],
    faq: [
      {
        q: "La Fnac vend-elle des lunettes d'éclipse ?",
        a: "Ponctuellement, au rayon astronomie ou sur fnac.com. En ligne, vérifiez si l'offre est vendue par Fnac ou par un vendeur partenaire, et appliquez la checklist de vérification dans ce second cas.",
      },
      {
        q: "Comment reconnaître une offre marketplace sur fnac.com ?",
        a: "Chaque fiche indique « Vendu et expédié par… ». Si ce n'est pas Fnac, consultez le profil du vendeur : raison sociale, localisation, historique d'avis.",
      },
      {
        q: "Puis-je utiliser une lunette d'éclipse comme filtre photo ?",
        a: "Oui, devant l'objectif d'un smartphone ou d'un compact : c'est même la méthode la plus simple. Voir notre guide « Photographier l'éclipse au smartphone ».",
      },
    ],
  },
];

export function getEnseigne(slug: string): Enseigne | undefined {
  return ENSEIGNES.find((e) => e.slug === slug);
}
