// Données des pages SEO locales /eclipse/[ville].
// ⚠️ Horaires et taux d'occultation : valeurs indicatives arrondies, à
// affiner avec les données IMCCE (https://www.imcce.fr) — l'éclipse du
// 12 août 2026 a lieu en fin de journée, Soleil bas sur l'horizon ouest.

export type VilleSpot = {
  name: string;
  desc: string;
};

export type VilleFaq = {
  q: string;
  a: string;
};

export type Ville = {
  slug: string;
  name: string;
  /** « à Toulouse », « au Havre »… pour les tournures de phrases */
  in: string;
  region: string;
  /** Taux d'occultation approximatif, ex. "94" (en %) */
  occultation: string;
  /** Heure locale approximative du maximum, ex. "20 h 30" */
  maxTime: string;
  /** Début approximatif de l'éclipse partielle */
  startTime: string;
  /** Fin (ou coucher du Soleil si l'éclipse se termine après) */
  endTime: string;
  /** Paragraphe d'intro unique à la ville (2-3 phrases, géographie réelle) */
  intro: string;
  /** Description sensorielle de ce qu'on verra (2-3 phrases uniques) */
  experience: string;
  /** 3 à 5 lieux d'observation réels, orientés ouest de préférence */
  spots: VilleSpot[];
  /** Conseils spécifiques : météo locale d'août, relief, marée… (2-3 phrases) */
  conseils: string;
  faq: VilleFaq[];
  /** Slugs des villes proches pour le bloc de maillage interne */
  nearby: string[];
};

export const VILLES: Ville[] = [
  {
    slug: "biarritz",
    name: "Biarritz",
    in: "à Biarritz",
    region: "Pays basque",
    occultation: "99,5",
    maxTime: "20 h 27",
    startTime: "19 h 29",
    endTime: "21 h 19 (au coucher du Soleil)",
    intro:
      "Biarritz est tout simplement l'une des meilleures villes de France métropolitaine pour observer l'éclipse du 12 août 2026 : à quelques dizaines de kilomètres seulement de la bande de totalité qui traverse le nord de l'Espagne, la côte basque verra le Soleil occulté à environ 99,5 %. Cerise sur le gâteau : l'océan offre un horizon ouest parfaitement dégagé, exactement là où se jouera le spectacle.",
    experience:
      "À 99,5 % d'occultation, la nuit tombera presque : lumière crépusculaire irréelle, chute de température nette, et peut-être Vénus visible à l'œil nu pendant que l'ultime filet solaire plongera vers l'Atlantique. Le Soleil sera très bas sur l'horizon au maximum de l'éclipse — un coucher de soleil éclipsé au-dessus de l'océan, une configuration exceptionnelle pour les photographes.",
    spots: [
      {
        name: "La Grande Plage",
        desc: "Horizon océanique plein ouest, accès facile — mais attendez-vous à une foule dense : arrivez avant 19 h.",
      },
      {
        name: "Le plateau du Phare (pointe Saint-Martin)",
        desc: "En hauteur, vue dégagée sur tout le golfe de Gascogne. Le spot le plus photogénique de la ville.",
      },
      {
        name: "La Côte des Basques",
        desc: "L'esplanade au-dessus de la plage mythique des surfeurs, orientée sud-ouest, idéale pour suivre toute la descente du Soleil.",
      },
      {
        name: "Le rocher de la Vierge",
        desc: "Panorama à 180° sur l'océan ; attention, l'espace est restreint, à réserver aux plus matinaux… du soir.",
      },
    ],
    conseils:
      "En août, la côte basque bénéficie d'un bon taux d'ensoleillement en soirée, mais la brume océanique de fin de journée peut voiler l'horizon : si c'est le cas, prenez de la hauteur (phare, La Rhune à 30 min). Marée : consultez l'horaire du jour, la Grande Plage se réduit fortement à marée haute.",
    faq: [
      {
        q: "L'éclipse sera-t-elle totale à Biarritz ?",
        a: "Non, mais presque : environ 99,5 % du disque solaire sera occulté — à un souffle de la totalité, l'un des taux les plus élevés de France. Pour vivre la totalité, il faut descendre en Espagne (Bilbao est à 1 h 40 de route). Même à 99,5 %, les lunettes certifiées ISO 12312-2 restent obligatoires du début à la fin.",
      },
      {
        q: "À quelle heure regarder le ciel à Biarritz ?",
        a: "L'éclipse commence vers 19 h 29, atteint son maximum vers 20 h 27 et se poursuit jusqu'au coucher du Soleil vers 21 h 19 (horaires indicatifs, données précises IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Biarritz ?",
        a: "Certaines pharmacies et magasins en proposent à l'approche de l'événement, avec des stocks très variables. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 avec certificat vérifiable — nous livrons Biarritz en 72 h.",
      },
    ],
    nearby: ["bayonne", "pau", "bordeaux"],
  },
  {
    slug: "paris",
    name: "Paris",
    in: "à Paris",
    region: "Île-de-France",
    occultation: "92",
    maxTime: "20 h 32",
    startTime: "19 h 37",
    endTime: "21 h 15 (Soleil très bas)",
    intro:
      "Le 12 août 2026 au soir, Paris vivra sa plus grande éclipse solaire depuis 1999 : environ 92 % du Soleil sera masqué par la Lune, en plein cœur de la soirée d'été. Particularité francilienne : le maximum aura lieu alors que le Soleil sera déjà très bas sur l'horizon ouest — le choix du point d'observation fera toute la différence.",
    experience:
      "À 92 % d'occultation, la baisse de luminosité sera saisissante : lumière rasante et cendrée, ombres étrangement contrastées, fraîcheur soudaine. Le croissant solaire descendra lentement vers l'horizon ouest-nord-ouest — depuis un toit ou une butte, le spectacle du croissant au-dessus de la ville promet des images uniques.",
    spots: [
      {
        name: "La butte Montmartre (parvis du Sacré-Cœur, côté ouest)",
        desc: "Le point haut emblématique de Paris. Placez-vous côté ouest de la butte (square Louise-Michel déborde vite — visez la rue Azaïs ou le square Marcel-Bleustein-Blanchet).",
      },
      {
        name: "Le parc de Saint-Cloud",
        desc: "La terrasse offre l'un des horizons ouest les plus dégagés d'Île-de-France, au-dessus de la Seine. Notre recommandation n°1 pour les familles.",
      },
      {
        name: "Le parc de Belleville",
        desc: "Moins connu que Montmartre, orienté plein ouest, avec une vue panoramique sur tout Paris.",
      },
      {
        name: "Les toits et terrasses (rooftops, derniers étages)",
        desc: "En ville dense, la hauteur est reine : un balcon orienté ouest au-dessus des toits vaut mieux qu'un grand parc entouré d'immeubles.",
      },
      {
        name: "La colline d'Élancourt (78)",
        desc: "Le point culminant d'Île-de-France (231 m), réaménagé pour les JO 2024 : horizon totalement dégagé pour les Franciliens motorisés.",
      },
    ],
    conseils:
      "Le piège parisien : les immeubles. À 20 h 30 le Soleil ne sera qu'à quelques degrés au-dessus de l'horizon — repérez votre spot quelques jours avant à la même heure pour vérifier que rien ne masque l'ouest. Le métro ligne 2/12 dessert Montmartre, mais prévoyez une affluence exceptionnelle partout.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Paris ?",
        a: "Environ 92 % au maximum de l'éclipse, vers 20 h 32. C'est beaucoup — la baisse de lumière sera très perceptible — mais cela reste une éclipse partielle : les lunettes certifiées ISO 12312-2 sont indispensables en permanence.",
      },
      {
        q: "Peut-on voir l'éclipse depuis la tour Eiffel ou Montparnasse ?",
        a: "Oui, les points hauts sont parfaits pour dégager l'horizon ouest — mais les créneaux du 12 août seront pris d'assaut. Réservez très en avance, ou préférez les buttes gratuites (Montmartre, Belleville, parc de Saint-Cloud).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Paris ?",
        a: "Pharmacies, enseignes culturelles et boutiques d'astronomie en proposeront, avec un risque réel de rupture de stock dans les derniers jours — le scénario de 1999 et de 2024 aux États-Unis. Commandez en ligne dès maintenant : livraison en 72 h partout en France.",
      },
      {
        q: "Que faire s'il y a des nuages le 12 août à Paris ?",
        a: "La baisse de luminosité restera spectaculaire même sous les nuages. Consultez la météo la veille : un déplacement d'une heure (vers la Beauce ou la vallée de Chevreuse, horizons dégagés) peut tout changer.",
      },
    ],
    nearby: ["reims", "dijon", "lille"],
  },
  {
    slug: "bayonne",
    name: "Bayonne",
    in: "à Bayonne",
    region: "Pays basque",
    occultation: "99,3",
    maxTime: "20 h 26",
    startTime: "19 h 28",
    endTime: "21 h 18 (au coucher du Soleil)",
    intro:
      "Au confluent de l'Adour et de la Nive, Bayonne partage avec sa voisine Biarritz un privilège rare : environ 99,3 % du Soleil y sera occulté le 12 août 2026 — un souffle sous la totalité, l'un des taux les plus élevés de France métropolitaine. La bande de totalité passe juste au sud, dans le nord de l'Espagne : le Pays basque est aux premières loges.",
    experience:
      "À 99,3 % d'occultation, ce sera presque la nuit : une pénombre crépusculaire irréelle enveloppera les quais de la Nive, la température chutera nettement et Vénus pourrait apparaître à l'œil nu. Il ne restera du Soleil qu'un ultime filet lumineux descendant vers l'ouest, du côté de l'océan tout proche — un moment que les Bayonnais n'oublieront pas.",
    spots: [
      {
        name: "Les rives de l'Adour (quais de l'avenue des Allées Marines)",
        desc: "Le fleuve ouvre une large trouée vers l'ouest en direction de l'embouchure : l'un des rares horizons dégagés en centre-ville.",
      },
      {
        name: "Les remparts de Vauban (bastions côté ouest)",
        desc: "En hauteur au-dessus des toits du Grand Bayonne, avec de la place pour s'installer en famille sur les glacis.",
      },
      {
        name: "La plage d'Anglet (Chambre d'Amour, la Barre)",
        desc: "À 15 minutes du centre, l'océan plein ouest : l'option la plus spectaculaire, mais attendez-vous à une affluence record.",
      },
      {
        name: "Les hauteurs de Saint-Étienne / Saint-Esprit",
        desc: "Le coteau rive droite de l'Adour offre plusieurs points de vue dominant la ville, orientés sud-ouest.",
      },
    ],
    conseils:
      "Les soirées d'août sont généralement dégagées au Pays basque, mais surveillez la brume océanique qui peut voiler l'horizon en fin de journée : dans ce cas, prenez de la hauteur plutôt que la plage. Si vous visez Anglet, anticipez : circulation et stationnement seront saturés bien avant 19 h.",
    faq: [
      {
        q: "L'éclipse sera-t-elle totale à Bayonne ?",
        a: "Non, mais on frôle littéralement la totalité : environ 99,3 % du disque solaire sera masqué et l'obscurité crépusculaire sera saisissante. Pour vivre les quelques minutes de nuit complète, il faut passer en Espagne, à moins de 2 h de route. Même à 99,3 %, les lunettes certifiées ISO 12312-2 restent obligatoires en permanence.",
      },
      {
        q: "À quelle heure regarder le ciel à Bayonne ?",
        a: "L'éclipse débute vers 19 h 28, culmine vers 20 h 26 et se poursuit jusqu'au coucher du Soleil vers 21 h 18 (horaires indicatifs, à confirmer avec les données IMCCE).",
      },
      {
        q: "Vaut-il mieux observer depuis Bayonne ou depuis la côte ?",
        a: "Le taux d'occultation est identique. La côte (Anglet, Biarritz) offre un horizon océanique imbattable, mais une foule dense ; les remparts et les coteaux bayonnais sont une excellente alternative plus tranquille, à condition de vérifier que l'ouest est bien dégagé.",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Bayonne ?",
        a: "Quelques pharmacies et enseignes locales en proposeront à l'approche du 12 août, avec des stocks limités. Le plus sûr reste de commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Bayonne en 72 h.",
      },
    ],
    nearby: ["biarritz", "pau", "bordeaux"],
  },
  {
    slug: "pau",
    name: "Pau",
    in: "à Pau",
    region: "Béarn",
    occultation: "99",
    maxTime: "20 h 27",
    startTime: "19 h 29",
    endTime: "21 h 15 (au coucher du Soleil)",
    intro:
      "Perchée sur son gave face à la chaîne des Pyrénées, Pau profitera d'une occultation d'environ 99 % le 12 août 2026 : le Béarn est à un cheveu de la bande de totalité, qui passe juste derrière la montagne, dans le nord de l'Espagne. Le défi palois sera ailleurs : trouver un horizon ouest dégagé, car le panorama emblématique de la ville regarde… le sud.",
    experience:
      "À 99 % d'occultation, Pau basculera dans une quasi-obscurité crépusculaire en pleine soirée d'été : les Pyrénées se fondront dans la pénombre, la température chutera de plusieurs degrés et Vénus pourrait percer le ciel assombri. Du Soleil ne subsistera qu'un mince filet incandescent, très bas, glissant vers les coteaux de l'ouest.",
    spots: [
      {
        name: "Le boulevard des Pyrénées (extrémité ouest)",
        desc: "Attention : le célèbre balcon palois est orienté plein sud, vers la montagne. Placez-vous à son extrémité occidentale, vers le château et le parc, pour dégager la vue vers l'ouest.",
      },
      {
        name: "Les coteaux du Jurançon",
        desc: "Au sud-ouest de la ville, les vignes en balcon offrent des horizons ouest superbes et de l'espace pour s'installer. Le meilleur choix pour les photographes.",
      },
      {
        name: "La plaine du Pont-Long (nord de Pau)",
        desc: "Vaste plaine agricole totalement plate au nord de l'agglomération : horizon bas garanti dans toutes les directions.",
      },
      {
        name: "Le parc du château et la basse plante",
        desc: "En contrebas du château, côté gave, l'ouverture de la vallée laisse filer le regard vers l'ouest — pratique à pied depuis le centre.",
      },
    ],
    conseils:
      "En août, les soirées paloises sont souvent claires, mais les orages de chaleur venus des Pyrénées éclatent volontiers en fin de journée : consultez la météo l'après-midi même et gardez un plan B en plaine. Le piège local : instinctivement, tout le monde regardera vers la montagne au sud — l'éclipse, elle, se joue à l'ouest.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Pau ?",
        a: "Environ 99 % au maximum, vers 20 h 27 : l'un des meilleurs taux de France, à la limite de la totalité. L'obscurité crépusculaire sera spectaculaire, mais les lunettes certifiées ISO 12312-2 restent indispensables du début à la fin.",
      },
      {
        q: "Le boulevard des Pyrénées est-il un bon spot ?",
        a: "Pas idéalement : il est orienté au sud, face à la chaîne, alors que le Soleil sera bas à l'ouest. Restez à son extrémité ouest près du château, ou préférez les coteaux du Jurançon qui regardent dans la bonne direction.",
      },
      {
        q: "Faut-il monter en altitude dans les Pyrénées ?",
        a: "Ce n'est pas nécessaire — et c'est même risqué : depuis les vallées, le relief masque l'horizon ouest très tôt. La plaine du Pont-Long ou les coteaux du Jurançon sont de bien meilleurs choix. Pour la totalité elle-même, il faut franchir la frontière espagnole.",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Pau ?",
        a: "Des pharmacies du centre en proposeront probablement à l'approche de l'événement, avec un fort risque de rupture. Commandez en ligne des lunettes certifiées ISO 12312-2 — nous livrons Pau en 72 h.",
      },
    ],
    nearby: ["bayonne", "biarritz", "toulouse"],
  },
  {
    slug: "perpignan",
    name: "Perpignan",
    in: "à Perpignan",
    region: "Pyrénées-Orientales",
    occultation: "96",
    maxTime: "20 h 32",
    startTime: "19 h 34",
    endTime: "21 h 08 (Soleil très bas)",
    intro:
      "Aux portes de la Catalogne, Perpignan bénéficiera d'une occultation d'environ 96 % le 12 août 2026 : la bande de totalité passe juste de l'autre côté des Pyrénées, dans le nord de l'Espagne. Entre le massif du Canigou à l'ouest et la Méditerranée à l'est, le choix du point d'observation demandera un peu de réflexion — car cette fois, la mer regarde du mauvais côté.",
    experience:
      "À 96 % d'occultation, la plaine du Roussillon plongera dans une pénombre crépusculaire saisissante en pleine soirée d'été : lumière d'un autre monde, chute nette de la température, et peut-être Vénus visible dans le ciel assombri. Le fin croissant solaire descendra vers les Corbières et les contreforts pyrénéens, avec la silhouette du Canigou en toile de fond.",
    spots: [
      {
        name: "L'ermitage de Força Real",
        desc: "À 507 m au-dessus de la vallée de la Têt, panorama à 360° sur toute la plaine : le spot roi du Roussillon, à 25 minutes de Perpignan. Arrivez tôt, l'accès est étroit.",
      },
      {
        name: "Le Serrat d'en Vaquer",
        desc: "L'ancienne redoute au sud de la ville, point haut de Perpignan même : vue dégagée vers l'ouest sur la plaine et les Albères, accessible à pied ou en bus.",
      },
      {
        name: "Le palais des rois de Majorque (terrasses)",
        desc: "En hauteur au cœur de la ville, si des ouvertures exceptionnelles sont organisées en soirée — renseignez-vous à l'approche de la date.",
      },
      {
        name: "Les plages de Canet-en-Roussillon",
        desc: "Attention au piège : la mer est à l'EST, le Soleil se couchera dans votre dos côté terre. La plage reste praticable si l'arrière-pays est dégagé, mais les hauteurs à l'ouest sont un bien meilleur choix.",
      },
    ],
    conseils:
      "Le Roussillon est l'une des régions les plus ensoleillées de France en août : les statistiques jouent pour vous. Méfiez-vous en revanche de la tramontane, qui peut souffler fort sur les points hauts comme Força Real — lestez trépieds et chaises. Et retenez la règle locale : à Perpignan, on tourne le dos à la mer pour regarder l'éclipse.",
    faq: [
      {
        q: "L'éclipse sera-t-elle totale à Perpignan ?",
        a: "Non : environ 96 % du Soleil sera occulté — assez pour une pénombre crépusculaire impressionnante, mais toujours partiel. La totalité passe dans le nord de l'Espagne : Saragosse est à environ 3 h de route par le Perthus. Même à 96 %, les lunettes certifiées ISO 12312-2 sont obligatoires en permanence.",
      },
      {
        q: "Peut-on observer l'éclipse depuis la plage à Canet ou Argelès ?",
        a: "Oui, mais la mer est à l'est alors que l'éclipse se joue à l'ouest, au-dessus des terres : vous perdez l'atout de l'horizon marin. Les hauteurs de l'arrière-pays (Força Real, Serrat d'en Vaquer) offrent une bien meilleure vue sur la fin de l'éclipse.",
      },
      {
        q: "À quelle heure a lieu le maximum à Perpignan ?",
        a: "Vers 20 h 32, avec un début vers 19 h 34 et une fin vers 21 h 08, Soleil très bas sur les Corbières (horaires indicatifs, données précises IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Perpignan ?",
        a: "Pharmacies et grandes surfaces en proposeront sans doute à l'approche du 12 août, avec des ruptures probables. Le plus simple : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Perpignan en 72 h.",
      },
    ],
    nearby: ["montpellier", "toulouse"],
  },
  {
    slug: "toulouse",
    name: "Toulouse",
    in: "à Toulouse",
    region: "Occitanie",
    occultation: "97",
    maxTime: "20 h 29",
    startTime: "19 h 31",
    endTime: "21 h 12 (au coucher du Soleil)",
    intro:
      "Capitale européenne de l'aéronautique et du spatial, Toulouse ne pouvait rêver meilleur rendez-vous : le 12 août 2026, environ 97 % du Soleil sera occulté au-dessus de la Ville rose, en pleine soirée d'été. Dans la vallée de la Garonne, l'horizon ouest est globalement dégagé — restera à choisir entre les quais, les coteaux et les événements publics.",
    experience:
      "À 97 % d'occultation, la fameuse lumière rose des briques toulousaines s'éteindra dans une pénombre crépusculaire spectaculaire : les martinets se tairont, la fraîcheur tombera d'un coup sur les quais et Vénus pourrait s'allumer dans le ciel assombri. L'ultime croissant solaire descendra lentement vers les coteaux de Gascogne — un crépuscule éclipsé au-dessus de la Garonne.",
    spots: [
      {
        name: "La Cité de l'espace",
        desc: "Le lieu toulousain par excellence pour un tel événement : animations et observations encadrées y sont très probables le 12 août — surveillez la programmation et réservez tôt.",
      },
      {
        name: "La côte de Pech David",
        desc: "Le balcon sud de Toulouse, à 100 m au-dessus de la Garonne : large panorama vers l'ouest et le sud-ouest, pelouses spacieuses, accès facile en voiture ou à vélo.",
      },
      {
        name: "La prairie des Filtres",
        desc: "Au bord de la Garonne face aux façades de Saint-Cyprien : le fleuve ouvre l'horizon vers l'ouest en plein centre-ville. Ambiance garantie, foule aussi.",
      },
      {
        name: "Les coteaux de Pech-Palat et du Calvel (Vieille-Toulouse)",
        desc: "Dans le prolongement de Pech David, des points de vue plus confidentiels sur la vallée de la Garonne, côté sud de l'agglomération.",
      },
    ],
    conseils:
      "Les soirées d'août sont majoritairement dégagées à Toulouse, mais gare aux orages de chaleur venus des Pyrénées ou de Gascogne en fin de journée : vérifiez la météo l'après-midi même. Le vent d'autan, s'il souffle, apporte souvent un ciel voilé — dans ce cas, les coteaux au-dessus de la brume de vallée sont un bon réflexe.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Toulouse ?",
        a: "Environ 97 % au maximum, vers 20 h 29. La ville plongera dans une pénombre crépusculaire impressionnante, mais il s'agit toujours d'une éclipse partielle : les lunettes certifiées ISO 12312-2 sont indispensables du début à la fin.",
      },
      {
        q: "La Cité de l'espace organisera-t-elle quelque chose ?",
        a: "Un événement d'observation y est très probable, comme pour les précédents rendez-vous astronomiques — instruments filtrés, médiateurs scientifiques. Consultez leur site à l'approche du 12 août et réservez sans tarder, les places partiront vite.",
      },
      {
        q: "Faut-il quitter Toulouse pour mieux voir l'éclipse ?",
        a: "Non : le taux d'occultation est quasiment identique dans toute la région. En revanche, si la météo est incertaine, une heure de route vers le sud-ouest (Gers, piémont) peut vous placer sous un ciel plus dégagé — décidez le jour même.",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Toulouse ?",
        a: "Pharmacies, boutiques d'astronomie et la Cité de l'espace en proposeront, avec un risque réel de rupture dans les derniers jours. Commandez en ligne des lunettes certifiées ISO 12312-2 dès maintenant — nous livrons Toulouse en 72 h.",
      },
    ],
    nearby: ["pau", "montpellier", "bordeaux"],
  },
  {
    slug: "montpellier",
    name: "Montpellier",
    in: "à Montpellier",
    region: "Hérault",
    occultation: "95",
    maxTime: "20 h 33",
    startTime: "19 h 36",
    endTime: "21 h 09 (Soleil très bas)",
    intro:
      "Entre garrigue et Méditerranée, Montpellier verra environ 95 % du Soleil disparaître derrière la Lune le 12 août 2026, en pleine soirée d'été languedocienne. Bonne nouvelle pour les Montpelliérains : la ville possède l'un des rares belvédères urbains de France orienté exactement dans la bonne direction.",
    experience:
      "À 95 % d'occultation, la lumière blanche et crue du Midi s'effacera dans une pénombre crépusculaire étonnante : les cigales marqueront une pause, l'air fraîchira d'un coup et le ciel prendra des teintes de tombée de nuit en avance. Le fin croissant solaire glissera vers les reliefs de la garrigue, à l'ouest — avec, par temps clair, la silhouette du pic Saint-Loup en repère.",
    spots: [
      {
        name: "La place royale du Peyrou",
        desc: "L'esplanade historique et son château d'eau sont orientés plein ouest, au point haut de l'Écusson : le spot urbain parfait, littéralement dessiné pour l'occasion. Venez tôt, tout Montpellier y pensera.",
      },
      {
        name: "Le pic Saint-Loup et les hauteurs de la garrigue",
        desc: "À 30-40 minutes au nord, les reliefs du pic Saint-Loup et de l'Hortus dominent toute la plaine : horizon ouest immense pour les plus motivés (prévoyez la descente de nuit, lampe frontale obligatoire).",
      },
      {
        name: "Les plages de Palavas-les-Flots et de Villeneuve-lès-Maguelone",
        desc: "Le littoral est orienté au sud : le Soleil descendra sur votre droite, vers les terres et l'étang. Ambiance estivale garantie, mais l'horizon ouest peut être encombré — choisissez un secteur dégagé côté étangs.",
      },
      {
        name: "Le domaine de Méric et les berges du Lez",
        desc: "Les hauteurs du parc, chères à Frédéric Bazille, offrent des échappées vers l'ouest au-dessus de la vallée du Lez, à deux pas du centre.",
      },
    ],
    conseils:
      "Le Languedoc affiche en août l'un des meilleurs taux d'ensoleillement de France : les probabilités sont avec vous. Deux vigilances tout de même : les entrées maritimes qui peuvent voiler le littoral en soirée (dans ce cas, repliez-vous vers la garrigue) et le mistral ou la tramontane sur les points hauts exposés.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Montpellier ?",
        a: "Environ 95 % au maximum, vers 20 h 33. La pénombre crépusculaire sera spectaculaire, mais l'éclipse reste partielle : gardez vos lunettes certifiées ISO 12312-2 en permanence.",
      },
      {
        q: "Le Peyrou est-il vraiment le meilleur spot en ville ?",
        a: "Oui : l'esplanade est orientée plein ouest, en hauteur, avec un horizon dégagé au-dessus de l'aqueduc des Arceaux. C'est probablement le meilleur belvédère urbain de la région — d'où une affluence attendue exceptionnelle. Arrivez avant 19 h.",
      },
      {
        q: "Vaut-il mieux la plage ou la garrigue ?",
        a: "La plage pour l'ambiance, la garrigue pour la vue : le littoral montpelliérain regarde au sud, alors que le Soleil descendra à l'ouest au-dessus des terres. Les hauteurs (Peyrou, pic Saint-Loup) offrent le meilleur suivi de la fin de l'éclipse.",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Montpellier ?",
        a: "Pharmacies et enseignes du centre en proposeront à l'approche de l'événement, avec des stocks incertains. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Montpellier en 72 h.",
      },
    ],
    nearby: ["perpignan", "marseille", "toulouse"],
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    in: "à Bordeaux",
    region: "Gironde",
    occultation: "98,5",
    maxTime: "20 h 26",
    startTime: "19 h 28",
    endTime: "21 h 17 (au coucher du Soleil)",
    intro:
      "Le 12 août 2026 au soir, environ 98,5 % du Soleil sera occulté au-dessus de Bordeaux — à un cheveu de la totalité. Et les Girondins disposent, à une heure de route, de l'un des spots d'observation les plus spectaculaires d'Europe : la dune du Pilat et son horizon océanique plein ouest. En ville même, la Garonne et les parcs offrent déjà de très belles options.",
    experience:
      "À 98,5 % d'occultation, Bordeaux basculera dans une quasi-obscurité crépusculaire en pleine soirée d'été : la pierre blonde des façades s'éteindra dans la pénombre, la température chutera nettement et Vénus pourrait apparaître au-dessus de la Garonne. Il ne restera du Soleil qu'un ultime filet lumineux descendant vers le Médoc et l'océan.",
    spots: [
      {
        name: "La dune du Pilat",
        desc: "À environ 1 h de Bordeaux, 100 m de sable au-dessus de l'Atlantique, horizon océan parfait plein ouest : sans doute l'un des plus beaux points d'observation de France pour cette éclipse. Affluence historique à prévoir — arrivez très en avance.",
      },
      {
        name: "Les quais rive droite (quai des Queyries, parc aux Angéliques)",
        desc: "Face au centre historique, la Garonne dégage un large horizon ouest au-dessus de la façade des quais : le meilleur spot du centre, accessible à pied et à vélo.",
      },
      {
        name: "Le parc Bordelais",
        desc: "Grandes pelouses dans le quartier de Caudéran : pratique en famille, mais vérifiez depuis votre emplacement que les arbres ne masquent pas l'ouest en fin d'éclipse.",
      },
      {
        name: "Les coteaux de Lormont et de Cenon (parc de l'Ermitage)",
        desc: "Les hauteurs de la rive droite dominent toute la ville : panorama ouest imprenable sur Bordeaux et la Garonne, desservi par le tramway.",
      },
    ],
    conseils:
      "En août, les soirées bordelaises sont souvent claires, mais l'océan peut envoyer des voiles nuageux en fin de journée : consultez la météo le jour même avant de choisir entre ville et littoral. Si vous visez la dune du Pilat, partez tôt : la route d'Arcachon sera saturée, et la montée à pied prend du temps avec du matériel.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Bordeaux ?",
        a: "Environ 98,5 % au maximum, vers 20 h 26 : la quasi-totalité. La ville plongera dans une pénombre crépusculaire spectaculaire — mais l'éclipse reste partielle, et les lunettes certifiées ISO 12312-2 sont obligatoires en permanence.",
      },
      {
        q: "La dune du Pilat vaut-elle vraiment le déplacement ?",
        a: "Oui, si vous acceptez la foule : perchée à 100 m au-dessus de l'Atlantique, elle offre un horizon ouest parfait pour suivre l'ultime croissant solaire jusqu'à l'océan, dans une pénombre de fin du monde. Prévoyez d'arriver plusieurs heures avant, de l'eau et une lampe pour la redescente.",
      },
      {
        q: "Peut-on bien voir l'éclipse depuis le centre de Bordeaux ?",
        a: "Oui : les quais rive droite et les coteaux de Lormont-Cenon offrent de larges horizons ouest au-dessus de la Garonne. Évitez simplement les rues étroites du centre historique, où les façades masqueront le Soleil bien avant la fin.",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Bordeaux ?",
        a: "Pharmacies et enseignes culturelles en proposeront à l'approche du 12 août, avec un risque sérieux de rupture. Commandez en ligne des lunettes certifiées ISO 12312-2 dès maintenant — nous livrons Bordeaux en 72 h.",
      },
    ],
    nearby: ["bayonne", "limoges", "toulouse"],
  },
  {
    slug: "limoges",
    name: "Limoges",
    in: "à Limoges",
    region: "Haute-Vienne",
    occultation: "95",
    maxTime: "20 h 28",
    startTime: "19 h 31",
    endTime: "21 h 13 (au coucher du Soleil)",
    intro:
      "Au cœur du Limousin, Limoges verra environ 95 % du Soleil masqué par la Lune le 12 août 2026, en fin de journée. La ville de la porcelaine a un atout discret : sa campagne vallonnée offre, à quelques minutes du centre, des horizons ouest dégagés et des ciels parmi les moins pollués par la lumière de France.",
    experience:
      "À 95 % d'occultation, la lumière dorée du soir limousin s'éteindra dans une pénombre crépusculaire saisissante : prairies et haies bocagères se fondront dans une fausse tombée de nuit, la fraîcheur se fera sentir d'un coup et Vénus pourrait poindre dans le ciel assombri. Le fin croissant solaire descendra vers les collines de la Charente limousine, à l'ouest.",
    spots: [
      {
        name: "Le mont Gargan",
        desc: "À 731 m, l'un des sommets emblématiques du Limousin, à 40 minutes au sud-est de Limoges : panorama à 360° avec sa chapelle en ruine, horizon ouest superbe sur tout le plateau.",
      },
      {
        name: "Les monts de Blond",
        desc: "À une trentaine de minutes au nord-ouest, ces collines granitiques dominent la campagne : plusieurs points de vue dégagés vers l'ouest, fréquentation modérée.",
      },
      {
        name: "Les bords de Vienne (rive droite, vers le pont Saint-Martial)",
        desc: "En ville, la vallée de la Vienne ouvre une trouée vers l'ouest ; le Soleil très bas finira toutefois par passer derrière les coteaux — idéal pour le début et le maximum, moins pour la toute fin.",
      },
      {
        name: "Le puy de la Bastide et les hauteurs de Landouge",
        desc: "Les collines de l'ouest de l'agglomération offrent des horizons dégagés sur la campagne, à dix minutes du centre.",
      },
    ],
    conseils:
      "Le Limousin en août alterne belles soirées et passages nuageux venus de l'Atlantique : gardez deux spots en tête et décidez selon la météo du jour. Le relief vallonné est le vrai point de vigilance local : avec un Soleil à quelques degrés au-dessus de l'horizon, une simple colline suffit à écourter votre observation — privilégiez les points hauts.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Limoges ?",
        a: "Environ 95 % au maximum, vers 20 h 28. La pénombre crépusculaire sera impressionnante, mais l'éclipse reste partielle : les lunettes certifiées ISO 12312-2 doivent être portées en permanence.",
      },
      {
        q: "Peut-on observer l'éclipse depuis le centre de Limoges ?",
        a: "Le début et le maximum, oui, notamment depuis les bords de Vienne. Mais pour suivre le croissant jusqu'au bout, mieux vaut un point haut aux alentours (mont Gargan, monts de Blond, hauteurs de l'ouest de l'agglomération) : en fond de vallée, les coteaux masqueront le Soleil avant la fin.",
      },
      {
        q: "À quelle heure a lieu le maximum à Limoges ?",
        a: "Vers 20 h 28, avec un début vers 19 h 31 et une fin vers 21 h 13 au coucher du Soleil (horaires indicatifs, à confirmer avec les données IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Limoges ?",
        a: "Quelques pharmacies et grandes surfaces en proposeront à l'approche de l'événement, avec des stocks limités. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Limoges en 72 h.",
      },
    ],
    nearby: ["bordeaux", "clermont-ferrand"],
  },
  {
    slug: "marseille",
    name: "Marseille",
    in: "à Marseille",
    region: "Bouches-du-Rhône",
    occultation: "93",
    maxTime: "20 h 35",
    startTime: "19 h 38",
    endTime: "21 h 05 (Soleil très bas)",
    intro:
      "Le 12 août 2026 au soir, environ 93 % du Soleil sera occulté au-dessus de Marseille — et la cité phocéenne possède un atout que peu de grandes villes peuvent revendiquer : au nord-ouest, la côte Bleue offre un véritable horizon marin dans la direction exacte où se couchera le croissant solaire. Entre collines, îles et calanques, les options ne manquent pas.",
    experience:
      "À 93 % d'occultation, la lumière éclatante de la Méditerranée virera au gris argenté, le mistral éventuel semblera plus frais et la rade prendra des teintes de fin du monde — une forte pénombre, sans obscurité complète. Le croissant solaire descendra vers l'Estaque et la côte Bleue — vu depuis les hauteurs, il finira sa course au-dessus de la mer.",
    spots: [
      {
        name: "Notre-Dame de la Garde",
        desc: "Le belvédère absolu de Marseille : vue à 360° sur la rade, les îles et la chaîne de l'Estaque à l'ouest. Affluence maximale garantie — arrivez très tôt ou visez les abords de la colline.",
      },
      {
        name: "La côte Bleue (Niolon, Ensuès-la-Redonne, Carry-le-Rouet)",
        desc: "À 30-40 minutes du centre, la côte file vers l'ouest : horizon marin dans l'axe du Soleil couchant, la configuration idéale pour suivre l'éclipse jusqu'au bout. Le choix des connaisseurs.",
      },
      {
        name: "Les îles du Frioul",
        desc: "En pleine rade, horizon dégagé de tous côtés : embarquez tôt depuis le Vieux-Port et vérifiez l'horaire de la dernière navette retour.",
      },
      {
        name: "Le massif de l'Étoile et le Garlaban",
        desc: "Les hauteurs au nord de la ville dominent toute la rade : panoramas immenses vers l'ouest, mais vérifiez que les massifs ne sont pas fermés au public — en août, le risque incendie restreint souvent l'accès.",
      },
      {
        name: "La corniche Kennedy",
        desc: "Le front de mer historique : la vue porte au sud-ouest vers les îles. Pratique et accessible, mais le Soleil finira derrière les reliefs de l'Estaque plutôt que sur la mer.",
      },
    ],
    conseils:
      "Marseille offre en août l'un des ciels les plus fiables de France — le principal aléa est le mistral, qui garantit d'ailleurs une transparence exceptionnelle. Attention en revanche à l'accès aux massifs (Étoile, Garlaban, calanques) : en été, il est réglementé voire interdit selon le risque incendie — consultez la carte préfectorale le jour même. La côte Bleue est l'alternative sûre.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Marseille ?",
        a: "Environ 93 % au maximum, vers 20 h 35. La baisse de lumière sera saisissante sur la rade — sans aller jusqu'à l'obscurité — et l'éclipse reste partielle : lunettes certifiées ISO 12312-2 obligatoires en permanence.",
      },
      {
        q: "Où voir le Soleil éclipsé se coucher sur la mer ?",
        a: "Depuis la côte Bleue (Niolon, Carry-le-Rouet) ou les îles du Frioul : ce sont les rares secteurs de la région où l'horizon ouest est marin. Depuis les plages du Prado ou la corniche, le Soleil finira derrière les collines de l'Estaque.",
      },
      {
        q: "À quelle heure regarder le ciel à Marseille ?",
        a: "Début vers 19 h 38, maximum vers 20 h 35, fin vers 21 h 05 avec un Soleil très bas sur l'horizon (horaires indicatifs, données précises IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Marseille ?",
        a: "Pharmacies et enseignes en proposeront à l'approche du 12 août, avec des ruptures très probables vu la taille de la ville. Commandez en ligne des lunettes certifiées ISO 12312-2 dès maintenant — nous livrons Marseille en 72 h.",
      },
    ],
    nearby: ["montpellier", "nice", "grenoble"],
  },
  {
    slug: "nantes",
    name: "Nantes",
    in: "à Nantes",
    region: "Loire-Atlantique",
    occultation: "94",
    maxTime: "20 h 22",
    startTime: "19 h 25",
    endTime: "21 h 18 (au coucher du Soleil)",
    intro:
      "Aux portes de l'estuaire de la Loire, Nantes verra environ 94 % du Soleil occulté le 12 août 2026, en fin de journée. La géographie nantaise joue en faveur des observateurs : la Loire ouvre de larges perspectives vers l'ouest, et l'océan n'est qu'à trois quarts d'heure pour qui veut un horizon marin parfait.",
    experience:
      "À 94 % d'occultation, la lumière du soir ligérien s'affaissera dans une pénombre grise très marquée : reflets métalliques sur la Loire, fraîcheur océane soudaine, ambiance de crépuscule en avance — sans obscurité complète toutefois. Le fin croissant solaire descendra dans l'axe de l'estuaire, vers l'ouest — une composition toute trouvée pour les photographes.",
    spots: [
      {
        name: "La butte Sainte-Anne",
        desc: "Le belvédère historique de Nantes, au-dessus de la Loire : la vue plonge vers l'ouest et l'aval du fleuve, exactement dans la bonne direction. Le meilleur spot du centre — espace limité, venez tôt.",
      },
      {
        name: "Les bords de Loire (quai de la Fosse, Trentemoult, île de Nantes côté ouest)",
        desc: "Le fleuve dégage l'horizon en plein cœur de ville ; le petit port coloré de Trentemoult, rive sud, offre une vue ouverte vers l'aval.",
      },
      {
        name: "Le lac de Grand-Lieu (Passay, la Chevrolière)",
        desc: "À 25 minutes au sud, l'un des plus grands lacs de plaine de France : horizon plat et dégagé au-dessus de l'eau, ambiance nature et fréquentation raisonnable.",
      },
      {
        name: "La côte de Pornic et la baie de Bourgneuf",
        desc: "À 45 minutes, l'Atlantique plein ouest : la corniche de Gourmalon ou la pointe Saint-Gildas permettent de suivre le croissant jusqu'à l'océan. L'option grand spectacle.",
      },
    ],
    conseils:
      "La proximité de l'Atlantique rend la météo nantaise changeante, même en août : surveillez les prévisions et gardez deux options — la côte peut être dégagée quand Nantes est voilée, et inversement. Si vous choisissez le littoral, partez tôt : la route de Pornic sera très chargée un soir d'été pareil.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Nantes ?",
        a: "Environ 94 % au maximum, vers 20 h 22. La baisse de luminosité sera spectaculaire — proche d'un crépuscule anticipé — mais l'éclipse reste partielle : les lunettes certifiées ISO 12312-2 sont indispensables en permanence.",
      },
      {
        q: "Vaut-il mieux rester à Nantes ou aller sur la côte ?",
        a: "Le taux d'occultation est quasi identique. La côte (Pornic, pointe Saint-Gildas) ajoute l'horizon océanique plein ouest, idéal pour la fin de l'éclipse ; la butte Sainte-Anne et les bords de Loire restent d'excellents choix sans voiture.",
      },
      {
        q: "À quelle heure a lieu le maximum à Nantes ?",
        a: "Vers 20 h 22, avec un début vers 19 h 25 et une fin vers 21 h 18 au coucher du Soleil (horaires indicatifs, à confirmer avec les données IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Nantes ?",
        a: "Pharmacies et enseignes culturelles en proposeront à l'approche de l'événement, avec des stocks incertains. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Nantes en 72 h.",
      },
    ],
    nearby: ["rennes", "bordeaux"],
  },
  {
    slug: "clermont-ferrand",
    name: "Clermont-Ferrand",
    in: "à Clermont-Ferrand",
    region: "Puy-de-Dôme",
    occultation: "93",
    maxTime: "20 h 31",
    startTime: "19 h 33",
    endTime: "21 h 10 (Soleil très bas)",
    intro:
      "Au pied de la chaîne des Puys, Clermont-Ferrand verra environ 93 % du Soleil masqué le 12 août 2026 — et peu de villes françaises peuvent proposer un observatoire naturel comme le puy de Dôme, à 1 465 m au-dessus de la plaine de la Limagne. Le relief volcanique, atout majestueux, sera aussi le principal paramètre à gérer.",
    experience:
      "À 93 % d'occultation, la pierre de Volvic de la cathédrale se fondra dans une pénombre grise très marquée, et depuis les hauteurs, la lumière étrange sur la Limagne donnera au paysage des airs d'un autre monde — forte pénombre, sans nuit complète. Le croissant solaire descendra derrière la chaîne des Puys, à l'ouest : un décor de volcans pour un coucher de Soleil éclipsé.",
    spots: [
      {
        name: "Le sommet du puy de Dôme",
        desc: "L'observatoire rêvé : à 1 465 m, l'horizon ouest porte jusqu'aux monts du Cantal. Le train panoramique des Dômes monte en 15 minutes ; un événement spécial en soirée est très probable — réservez dès l'ouverture des ventes.",
      },
      {
        name: "Le plateau de Gergovie",
        desc: "Le célèbre oppidum domine la plaine à 744 m : vaste, gratuit, accessible en voiture, avec une vue dégagée vers la chaîne des Puys à l'ouest. L'alternative parfaite au puy de Dôme.",
      },
      {
        name: "Le puy de Pariou et le col des Goules",
        desc: "Pour les marcheurs : le cratère emblématique de la chaîne offre un panorama superbe. Comptez 45 minutes de montée et prévoyez la redescente de nuit, lampe frontale obligatoire.",
      },
      {
        name: "Le parc de Montjuzet",
        desc: "En ville, la colline de Montjuzet offre des vues vers l'ouest au-dessus des toits — sachant que les Puys masqueront le Soleil un peu avant son coucher réel.",
      },
    ],
    conseils:
      "Le point clé à Clermont : la chaîne des Puys se dresse exactement à l'ouest et masquera le Soleil plus tôt qu'en plaine dégagée — pour profiter de la fin de l'éclipse, il faut être SUR le relief (puy de Dôme, Gergovie), pas derrière. Côté météo, les soirées d'août sont souvent belles en Limagne, mais des cumulus de fin de journée s'accrochent volontiers aux sommets : consultez le ciel avant de monter.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Clermont-Ferrand ?",
        a: "Environ 93 % au maximum, vers 20 h 31. Une baisse de lumière impressionnante, mais toujours partielle : les lunettes certifiées ISO 12312-2 restent obligatoires du début à la fin.",
      },
      {
        q: "Le puy de Dôme sera-t-il accessible le soir du 12 août ?",
        a: "Le train panoramique des Dômes fonctionne en soirée l'été, et un événement dédié est très probable pour l'occasion. Les places seront extrêmement demandées : surveillez le site du panoramique des Dômes et réservez le plus tôt possible.",
      },
      {
        q: "Peut-on voir la fin de l'éclipse depuis le centre-ville ?",
        a: "Partiellement : la chaîne des Puys, à l'ouest, masquera le Soleil avant son coucher astronomique. Depuis Clermont même, vous verrez le début et le maximum sans problème ; pour la fin, montez sur les hauteurs (Gergovie, puy de Dôme).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Clermont-Ferrand ?",
        a: "Pharmacies et boutiques en proposeront à l'approche de l'événement, avec des stocks variables. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Clermont-Ferrand en 72 h.",
      },
    ],
    nearby: ["limoges", "lyon"],
  },
  {
    slug: "brest",
    name: "Brest",
    in: "à Brest",
    region: "Finistère",
    occultation: "93",
    maxTime: "20 h 18",
    startTime: "19 h 22",
    endTime: "21 h 20 (au coucher du Soleil)",
    intro:
      "À la pointe du Finistère, Brest verra environ 93 % du Soleil occulté le 12 août 2026 — et la ville détient un privilège géographique unique en France : un horizon Atlantique plein ouest, sans aucune terre entre les pointes bretonnes et l'Amérique. Pour une éclipse qui se joue au ras de l'horizon occidental, difficile de rêver mieux.",
    experience:
      "À 93 % d'occultation, la lumière iodée de la rade virera au gris acier, les goélands se feront silencieux et le vent du large semblera soudain plus froid — une pénombre profonde, sans nuit complète. Le croissant solaire descendra droit vers l'Atlantique : depuis les pointes du bout du monde, il finira sa course au-dessus de la mer d'Iroise, un spectacle que le reste de la France enviera.",
    spots: [
      {
        name: "La pointe Saint-Mathieu",
        desc: "L'abbaye en ruine, le phare et l'océan à perte de vue plein ouest : probablement le plus beau premier plan de France pour cette éclipse. À 30 minutes de Brest — attendez-vous à une affluence exceptionnelle.",
      },
      {
        name: "La pointe du Petit Minou (Plouzané)",
        desc: "Le phare emblématique à l'entrée du goulet, à 20 minutes du centre : vue plein ouest sur l'Iroise, parking limité, venez tôt.",
      },
      {
        name: "Le jardin des Explorateurs et le cours Dajot",
        desc: "En ville, ces belvédères dominent la rade et le goulet : parfaits pour observer sans voiture, l'horizon ouest étant partiellement cadré par les rives du goulet.",
      },
      {
        name: "La presqu'île de Crozon (pointe de Pen-Hir)",
        desc: "De l'autre côté de la rade, les falaises de Pen-Hir et les Tas de Pois offrent un décor grandiose plein ouest — comptez 1 h de route et partez très en avance.",
      },
    ],
    conseils:
      "La vraie inconnue brestoise, c'est la météo : même en août, les entrées maritimes peuvent voiler le ciel en soirée. Consultez les prévisions le jour même — il arrive que la pointe Saint-Mathieu soit dégagée quand Brest est sous les nuages, et inversement. Prévoyez coupe-vent et polaire : face à l'Iroise, les soirées sont fraîches même en plein été.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Brest ?",
        a: "Environ 93 % au maximum, vers 20 h 18 — Brest sera l'une des premières grandes villes françaises à atteindre le maximum. Éclipse partielle : les lunettes certifiées ISO 12312-2 sont obligatoires en permanence.",
      },
      {
        q: "Pourquoi Brest est-elle si bien placée pour cette éclipse ?",
        a: "Parce que le Soleil sera très bas à l'ouest au maximum, et que le Finistère offre un horizon Atlantique parfaitement dégagé dans cette direction : le croissant solaire descendra au-dessus de la mer d'Iroise, sans aucun relief pour l'interrompre.",
      },
      {
        q: "Quel est le meilleur spot : Saint-Mathieu ou le Petit Minou ?",
        a: "Les deux sont exceptionnels. Saint-Mathieu offre le décor le plus grandiose (abbaye, phare, océan) mais attirera le plus de monde ; le Petit Minou est plus proche de Brest mais son parking est vite saturé. Dans les deux cas, arrivez très en avance.",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Brest ?",
        a: "Pharmacies et enseignes locales en proposeront à l'approche du 12 août, avec des stocks limités. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Brest en 72 h.",
      },
    ],
    nearby: ["rennes", "nantes"],
  },
  {
    slug: "lyon",
    name: "Lyon",
    in: "à Lyon",
    region: "Rhône",
    occultation: "92",
    maxTime: "20 h 34",
    startTime: "19 h 37",
    endTime: "21 h 08 (Soleil très bas)",
    intro:
      "Entre Rhône et Saône, Lyon verra environ 92 % du Soleil occulté le 12 août 2026, en pleine soirée d'été. La ville aux deux collines a une carte à jouer : Fourvière et les monts du Lyonnais offrent des positions dominantes vers l'ouest — indispensable, car en fond de vallée le Soleil très bas disparaîtra tôt derrière le relief.",
    experience:
      "À 92 % d'occultation, la lumière dorée sur les façades des quais de Saône virera au gris cendré, et la presqu'île plongera dans une pénombre marquée en plein mois d'août — forte baisse de lumière, sans obscurité. Le croissant solaire glissera vers les monts du Lyonnais : depuis les hauteurs, la ville éclipsée à vos pieds fera des images superbes.",
    spots: [
      {
        name: "L'esplanade de Fourvière et le parc des Hauteurs",
        desc: "La colline emblématique domine la ville — mais l'esplanade de la basilique regarde vers l'est ! Passez côté ouest de la colline (parc des Hauteurs, secteur de Loyasse) pour dégager l'horizon dans la bonne direction.",
      },
      {
        name: "Les monts du Lyonnais (col de la Luère, crêt d'Yzeron)",
        desc: "À 30-40 minutes à l'ouest, ces cols et crêtes offrent des horizons ouest francs au-dessus des vallons : le choix le plus sûr pour suivre l'éclipse jusqu'au bout.",
      },
      {
        name: "Le parc de la Tête d'Or (grandes pelouses)",
        desc: "Les vastes pelouses dégagent le ciel en pleine ville : très bien pour le début et le maximum, mais la fin sera masquée par les immeubles et la colline de Fourvière à l'ouest.",
      },
      {
        name: "Le belvédère de la Croix-Rousse (jardin des Chartreux, place Bellevue)",
        desc: "Les balcons de la Croix-Rousse offrent des échappées vers l'ouest au-dessus de la Saône — vérifiez votre angle quelques jours avant à la même heure.",
      },
    ],
    conseils:
      "Le point clé lyonnais : le relief. Le Soleil ne sera qu'à quelques degrés de hauteur au maximum, et les collines de l'Ouest lyonnais le masqueront tôt depuis le centre — plus vous êtes haut (Fourvière côté ouest, monts du Lyonnais), plus vous verrez longtemps. Côté ciel, les soirées d'août sont souvent dégagées, avec un risque d'orages de chaleur à surveiller l'après-midi même.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Lyon ?",
        a: "Environ 92 % au maximum, vers 20 h 34. La baisse de luminosité sera très nette, mais l'éclipse reste partielle : les lunettes certifiées ISO 12312-2 sont indispensables en permanence.",
      },
      {
        q: "Fourvière est-elle un bon spot ?",
        a: "Oui, à condition de se placer du bon côté : l'esplanade de la basilique regarde l'est (la ville), alors que l'éclipse se joue à l'ouest. Rejoignez le versant ouest de la colline, vers le parc des Hauteurs ou le plateau de Loyasse.",
      },
      {
        q: "Faut-il sortir de Lyon pour bien voir la fin de l'éclipse ?",
        a: "C'est recommandé si vous voulez suivre le croissant jusqu'au coucher : depuis le centre, le relief de l'Ouest lyonnais masquera le Soleil avant la fin. Le col de la Luère ou les crêtes d'Yzeron, à une demi-heure, règlent le problème.",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Lyon ?",
        a: "Pharmacies et enseignes en proposeront à l'approche de l'événement, avec un risque réel de rupture dans une ville de cette taille. Commandez en ligne des lunettes certifiées ISO 12312-2 dès maintenant — nous livrons Lyon en 72 h.",
      },
    ],
    nearby: ["grenoble", "clermont-ferrand", "dijon"],
  },
  {
    slug: "rennes",
    name: "Rennes",
    in: "à Rennes",
    region: "Ille-et-Vilaine",
    occultation: "93",
    maxTime: "20 h 21",
    startTime: "19 h 24",
    endTime: "21 h 17 (au coucher du Soleil)",
    intro:
      "Capitale bretonne posée au confluent de l'Ille et de la Vilaine, Rennes verra environ 93 % du Soleil occulté le 12 août 2026 en fin de journée. La ville est peu vallonnée et sa campagne occidentale, ouverte et bocagère, offre sans effort ce dont cette éclipse a besoin : un horizon ouest bien dégagé.",
    experience:
      "À 93 % d'occultation, la douceur dorée d'une soirée d'été rennaise laissera place à une pénombre grise très marquée, presque automnale, et la fraîcheur tombera d'un coup sur les parcs — forte baisse de lumière, sans nuit complète. Le croissant solaire descendra lentement au-dessus de la campagne de Brocéliande, à l'ouest de la ville.",
    spots: [
      {
        name: "Le parc des Gayeulles",
        desc: "Le plus grand parc de Rennes : ses vastes prairies dégagent le ciel, idéal en famille. Choisissez une pelouse dont l'ouest n'est pas fermé par les bois du parc.",
      },
      {
        name: "Les écluses du canal d'Ille-et-Rance (Saint-Grégoire, Betton)",
        desc: "Au nord de la ville, le canal et ses chemins de halage offrent des perspectives dégagées et une ambiance paisible au bord de l'eau.",
      },
      {
        name: "La campagne ouest vers Montfort-sur-Meu et Brocéliande",
        desc: "À 20-30 minutes, les plateaux agricoles entre Rennes et Montfort offrent des horizons ouest francs et sans obstacle : le choix le plus sûr pour la fin de l'éclipse.",
      },
      {
        name: "Le parc de Bréquigny et les prairies Saint-Martin",
        desc: "Deux grands espaces verts urbains avec de larges pelouses ; vérifiez sur place, quelques jours avant, que les arbres ne cadrent pas trop l'horizon ouest.",
      },
    ],
    conseils:
      "La météo bretonne d'août est changeante : les soirées peuvent être limpides comme voilées par une entrée maritime. Consultez les prévisions le jour même — un déplacement de 30 minutes vers l'intérieur ou la côte peut tout changer. L'avantage rennais : un relief quasi inexistant, donc pas de montagne pour écourter le spectacle, contrairement à bien des villes françaises.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Rennes ?",
        a: "Environ 93 % au maximum, vers 20 h 21. La baisse de luminosité sera très perceptible, mais l'éclipse reste partielle : les lunettes certifiées ISO 12312-2 doivent être portées en permanence.",
      },
      {
        q: "Faut-il aller jusqu'à la côte pour mieux voir ?",
        a: "Ce n'est pas indispensable : le taux d'occultation est quasi identique et la campagne rennaise offre déjà de bons horizons ouest. La côte (Saint-Malo à 45 min, ou le Finistère) ajoute surtout l'esthétique d'un horizon marin — et son propre aléa météo.",
      },
      {
        q: "À quelle heure a lieu le maximum à Rennes ?",
        a: "Vers 20 h 21, avec un début vers 19 h 24 et une fin vers 21 h 17 au coucher du Soleil (horaires indicatifs, à confirmer avec les données IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Rennes ?",
        a: "Pharmacies et enseignes du centre en proposeront à l'approche de l'événement, avec des stocks incertains. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Rennes en 72 h.",
      },
    ],
    nearby: ["brest", "nantes"],
  },
  {
    slug: "nice",
    name: "Nice",
    in: "à Nice",
    region: "Alpes-Maritimes",
    occultation: "91",
    maxTime: "20 h 37",
    startTime: "19 h 40",
    endTime: "21 h 02 (Soleil très bas)",
    intro:
      "Sur la Côte d'Azur, Nice verra environ 91 % du Soleil occulté le 12 août 2026, en pleine soirée d'été. Attention au réflexe trompeur : la baie des Anges regarde le sud-est, pas l'ouest — pour cette éclipse de fin de journée, ce sont les collines niçoises et l'arrière-pays qui offriront les meilleures loges, pas la promenade des Anglais.",
    experience:
      "À 91 % d'occultation, la lumière azuréenne si célèbre des peintres virera au gris argenté, la baie prendra des teintes crépusculaires en avance et l'air marin fraîchira sensiblement — forte pénombre, sans obscurité complète. Le croissant solaire descendra vers l'ouest, au-dessus des collines et de l'Esterel au loin : un spectacle à savourer depuis les hauteurs.",
    spots: [
      {
        name: "La colline du Château",
        desc: "Le belvédère historique au-dessus du Vieux-Nice : montez côté ouest de la colline pour dominer la ville et suivre le Soleil au-dessus des collines niçoises. Accès facile, affluence garantie.",
      },
      {
        name: "Le mont Boron",
        desc: "Le parc forestier à l'est de la ville culmine à 191 m : plusieurs points de vue portent vers l'ouest au-dessus de la rade et de la ville — repérez votre emplacement à l'avance, la végétation cadre certains angles.",
      },
      {
        name: "Le plateau de la Justice et les hauteurs de l'arrière-pays",
        desc: "Au-dessus de Nice, les plateaux et crêtes de l'arrière-pays (vers Falicon, Aspremont) dégagent de vrais horizons ouest, loin de la foule du littoral.",
      },
      {
        name: "L'observatoire de la Côte d'Azur (mont Gros)",
        desc: "Le site historique surplombe la ville : une soirée d'observation publique y est plausible pour l'occasion — surveillez leur programmation et réservez tôt le cas échéant.",
      },
    ],
    conseils:
      "Le piège niçois : instinctivement, tout le monde descendra vers la mer — or elle est au sud-est, et le Soleil éclipsé sera à l'opposé, bas au-dessus des collines de l'ouest. Prenez de la hauteur (colline du Château, mont Boron, arrière-pays). Côté ciel, août est très fiable sur la Côte d'Azur ; le seul aléa notable est la brume de chaleur en fin de journée, que l'altitude permet justement de dépasser.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Nice ?",
        a: "Environ 91 % au maximum, vers 20 h 37 — Nice sera parmi les dernières grandes villes françaises à atteindre le maximum. Éclipse partielle : les lunettes certifiées ISO 12312-2 sont obligatoires en permanence.",
      },
      {
        q: "Peut-on observer l'éclipse depuis la promenade des Anglais ?",
        a: "Le début et le maximum, oui, si l'ouest de votre position est dégagé. Mais la baie regarde le sud-est : le Soleil très bas finira derrière les immeubles et les collines. Les hauteurs (colline du Château côté ouest, mont Boron, arrière-pays) sont nettement préférables.",
      },
      {
        q: "À quelle heure regarder le ciel à Nice ?",
        a: "Début vers 19 h 40, maximum vers 20 h 37, fin vers 21 h 02 avec un Soleil très bas sur l'horizon (horaires indicatifs, données précises IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Nice ?",
        a: "Pharmacies et enseignes en proposeront à l'approche du 12 août, avec des ruptures probables en pleine saison touristique. Commandez en ligne des lunettes certifiées ISO 12312-2 dès maintenant — nous livrons Nice en 72 h.",
      },
    ],
    nearby: ["marseille", "grenoble"],
  },
  {
    slug: "grenoble",
    name: "Grenoble",
    in: "à Grenoble",
    region: "Isère",
    occultation: "91",
    maxTime: "20 h 35",
    startTime: "19 h 38",
    endTime: "21 h 05 (Soleil très bas)",
    intro:
      "Encaissée entre Vercors, Chartreuse et Belledonne, Grenoble verra environ 91 % du Soleil occulté le 12 août 2026 — mais la « capitale des Alpes » cumule un défi que peu de villes connaissent : le Soleil, déjà très bas au maximum, disparaîtra tôt derrière les falaises du Vercors qui barrent l'horizon ouest. Ici plus qu'ailleurs, le choix du spot décidera de tout.",
    experience:
      "À 91 % d'occultation, la cuvette grenobloise plongera dans une pénombre grise spectaculaire — forte baisse de lumière, sans nuit complète — avec les falaises du Vercors et les crêtes de Belledonne comme décor. Depuis les balcons du Vercors, le croissant solaire descendra au-dessus des plateaux de l'ouest : un panorama alpin éclipsé unique en France.",
    spots: [
      {
        name: "Saint-Nizier-du-Moucherotte (balcons du Vercors)",
        desc: "LE spot grenoblois : à 1 100 m, le belvédère regarde plein ouest au-dessus des plateaux, au-dessus du piège de la cuvette. À 30 minutes du centre — attendez-vous à du monde, montez tôt.",
      },
      {
        name: "La Bastille",
        desc: "Le fort au-dessus de la ville, accessible par les « bulles » : superbe pour le début et le maximum, mais les falaises du Vercors masqueront le Soleil avant la fin de l'éclipse. Vérifiez l'horaire de la dernière descente du téléphérique.",
      },
      {
        name: "Le plateau de Champagnier et les hauteurs de Comboire",
        desc: "Au sud de l'agglomération, ces plateaux dégagent partiellement l'horizon ouest sans grimper en montagne — un compromis pratique en voiture.",
      },
      {
        name: "Le col de Porte ou le Sappey-en-Chartreuse",
        desc: "Côté Chartreuse, certains points de vue portent vers l'ouest au-dessus de la vallée de l'Isère ; moins évident que le Vercors, mais utile si la route de Saint-Nizier sature.",
      },
    ],
    conseils:
      "Le conseil clé à Grenoble tient en une phrase : ne restez pas dans la cuvette. Au maximum, le Soleil ne sera qu'à quelques degrés au-dessus de l'horizon, et le Vercors le masquera depuis le centre-ville bien avant la fin — montez sur les balcons (Saint-Nizier) pour passer AU-DESSUS du relief au lieu d'être derrière. Côté météo, les soirées d'août sont souvent belles, avec un risque classique d'orages de chaleur sur les massifs à vérifier l'après-midi même.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Grenoble ?",
        a: "Environ 91 % au maximum, vers 20 h 35. La baisse de lumière sera saisissante dans la cuvette, mais l'éclipse reste partielle : les lunettes certifiées ISO 12312-2 sont obligatoires en permanence.",
      },
      {
        q: "Verra-t-on toute l'éclipse depuis le centre de Grenoble ?",
        a: "Non : les falaises du Vercors, plein ouest, masqueront le Soleil très bas avant la fin du phénomène. Le début et le maximum resteront visibles si votre rue ou votre parc dégage l'ouest, mais pour l'intégralité, montez à Saint-Nizier ou sur un plateau.",
      },
      {
        q: "La Bastille est-elle un bon choix ?",
        a: "C'est un beau spot urbain pour le début et le maximum, avec la ville en contrebas. Mais elle n'échappe pas au masque du Vercors pour la fin de l'éclipse — et pensez à vérifier l'horaire de la dernière descente du téléphérique.",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Grenoble ?",
        a: "Pharmacies et magasins de sport-outdoor en proposeront peut-être à l'approche de l'événement, avec des stocks incertains. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Grenoble en 72 h.",
      },
    ],
    nearby: ["lyon", "nice"],
  },
  {
    slug: "dijon",
    name: "Dijon",
    in: "à Dijon",
    region: "Côte-d'Or",
    occultation: "90",
    maxTime: "20 h 33",
    startTime: "19 h 36",
    endTime: "21 h 07 (Soleil très bas)",
    intro:
      "Aux portes des climats de Bourgogne, Dijon verra environ 90 % du Soleil occulté le 12 août 2026, en fin de journée. La capitale des ducs est adossée à l'ouest aux premiers reliefs de la « Montagne dijonnaise » : un atout pour prendre de la hauteur, mais aussi un paramètre à intégrer, car ces mêmes collines masqueront le Soleil très bas depuis le centre.",
    experience:
      "À 90 % d'occultation, les toits vernissés et les façades de pierre de Bourgogne se fondront dans une lumière grise et rasante très inhabituelle pour une soirée d'août — forte pénombre, sans obscurité. Le croissant solaire descendra au-dessus des combes et des plateaux de l'arrière-côte, à l'ouest de la ville.",
    spots: [
      {
        name: "Le mont Afrique",
        desc: "Le sommet emblématique de l'agglomération (600 m), à 20 minutes du centre : plateau dégagé dominant toute la plaine, avec un horizon ouest franc au-dessus de l'arrière-côte. Le meilleur spot dijonnais.",
      },
      {
        name: "Le lac Kir",
        desc: "Le plan d'eau à l'entrée ouest de la ville : les berges dégagent l'horizon au-dessus de l'eau dans l'axe de la combe de la vallée de l'Ouche — accessible à pied et à vélo depuis le centre.",
      },
      {
        name: "La combe à la Serpent",
        desc: "Le grand parc naturel périurbain à l'ouest de Dijon : ses plateaux sommitaux offrent des vues dégagées, avec une fréquentation plus douce que le lac Kir.",
      },
      {
        name: "La tour Philippe le Bon",
        desc: "En plein centre, 46 m au-dessus des toits : si des visites en soirée sont ouvertes le 12 août, la vue à 360° vaut le détour — places très limitées, réservation indispensable.",
      },
    ],
    conseils:
      "Depuis le centre-ville, les collines de l'ouest dijonnais masqueront le Soleil très bas avant la fin du phénomène : pour l'intégralité, montez au mont Afrique ou sur les plateaux de la combe à la Serpent. Côté ciel, les soirées d'août sont généralement clémentes en Bourgogne, avec un risque d'orages de chaleur à surveiller en fin de journée.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Dijon ?",
        a: "Environ 90 % au maximum, vers 20 h 33. La baisse de luminosité sera très nette, mais l'éclipse reste partielle : les lunettes certifiées ISO 12312-2 doivent être portées en permanence.",
      },
      {
        q: "Peut-on observer l'éclipse depuis le centre de Dijon ?",
        a: "Le début et le maximum, oui, depuis un lieu dégagé vers l'ouest (lac Kir, grandes places). Pour la fin, le Soleil très bas passera derrière les collines de l'ouest : le mont Afrique règle le problème en 20 minutes de route.",
      },
      {
        q: "À quelle heure a lieu le maximum à Dijon ?",
        a: "Vers 20 h 33, avec un début vers 19 h 36 et une fin vers 21 h 07, Soleil très bas sur l'horizon (horaires indicatifs, à confirmer avec les données IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Dijon ?",
        a: "Pharmacies et enseignes du centre en proposeront à l'approche de l'événement, avec des stocks variables. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Dijon en 72 h.",
      },
    ],
    nearby: ["lyon", "reims", "paris"],
  },
  {
    slug: "reims",
    name: "Reims",
    in: "à Reims",
    region: "Marne",
    occultation: "89",
    maxTime: "20 h 32",
    startTime: "19 h 35",
    endTime: "21 h 10 (Soleil très bas)",
    intro:
      "Au cœur de la Champagne, Reims verra environ 89 % du Soleil occulté le 12 août 2026, en fin de journée. La cité des sacres a la chance d'être entourée de coteaux viticoles doucement vallonnés : de quoi trouver facilement, à quelques minutes du centre, un balcon naturel tourné vers l'ouest au-dessus de la plaine champenoise.",
    experience:
      "À 89 % d'occultation, la craie champenoise et la façade de la cathédrale prendront une teinte grise et froide très inhabituelle pour un soir d'été, et la fraîcheur tombera d'un coup sur les vignes — forte baisse de lumière, sans obscurité. Le croissant solaire descendra lentement au-dessus de la plaine, à l'ouest, avec les rangs de vigne en premier plan pour les photographes.",
    spots: [
      {
        name: "La montagne de Reims côté ouest (Ville-Dommange, Sacy)",
        desc: "Les villages du versant nord-ouest de la Montagne de Reims dominent la plaine : la chapelle Saint-Lié à Ville-Dommange offre l'un des plus beaux panoramas ouest de la région, au milieu des vignes.",
      },
      {
        name: "Les coteaux de Champagne (Sermiers, Écueil, Chamery)",
        desc: "Tout le piémont viticole regorge de points de vue dégagés vers l'ouest et le nord-ouest, à 15-20 minutes de Reims — de quoi éviter la foule en choisissant son rang de vigne.",
      },
      {
        name: "Le parc de Champagne",
        desc: "Le grand parc historique au sud de la ville : pratique en famille et sans voiture, ses vastes pelouses dégagent bien le ciel — vérifiez que les grands arbres ne ferment pas votre horizon ouest.",
      },
      {
        name: "Le mont Saint-Pierre et la butte Saint-Nicaise",
        desc: "Les modestes hauteurs rémoises offrent quelques échappées au-dessus des toits ; en ville dense, un dernier étage ou un toit-terrasse orienté ouest reste une valeur sûre.",
      },
    ],
    conseils:
      "La plaine champenoise a un avantage décisif pour cette éclipse rasante : des horizons bas et ouverts, sans relief pour écourter le spectacle — les coteaux ne sont là que pour vous surélever. Côté météo, les soirées d'août sont souvent correctes en Champagne ; en cas de voile nuageux, la baisse de luminosité restera très perceptible.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Reims ?",
        a: "Environ 89 % au maximum, vers 20 h 32. C'est moins que dans le Sud-Ouest, mais la baisse de lumière restera spectaculaire — et les lunettes certifiées ISO 12312-2 sont tout aussi obligatoires, en permanence.",
      },
      {
        q: "Les coteaux de Champagne sont-ils un bon plan d'observation ?",
        a: "Excellent : les villages du versant ouest de la Montagne de Reims (Ville-Dommange, Sacy, Écueil) dominent la plaine exactement dans la direction du Soleil couchant, avec les vignes en premier plan. Arrivez avant 19 h 30 pour choisir votre point de vue.",
      },
      {
        q: "À quelle heure regarder le ciel à Reims ?",
        a: "Début vers 19 h 35, maximum vers 20 h 32, fin vers 21 h 10 avec un Soleil très bas sur l'horizon (horaires indicatifs, données précises IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Reims ?",
        a: "Pharmacies et enseignes en proposeront à l'approche du 12 août, avec des stocks incertains. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Reims en 72 h.",
      },
    ],
    nearby: ["paris", "lille", "dijon"],
  },
  {
    slug: "lille",
    name: "Lille",
    in: "à Lille",
    region: "Nord",
    occultation: "87",
    maxTime: "20 h 30",
    startTime: "19 h 33",
    endTime: "21 h 12 (Soleil très bas)",
    intro:
      "Capitale des Flandres, Lille verra environ 87 % du Soleil occulté le 12 août 2026, en fin de journée. Le plat pays joue ici en faveur des observateurs : sans relief pour barrer l'ouest, il suffit d'échapper aux façades urbaines — et la métropole dispose même, avec les terrils du bassin minier, de belvédères artificiels uniques en France.",
    experience:
      "À 87 % d'occultation, la lumière du soir flamand virera au gris plombé, les briques rouges perdront leurs teintes chaudes et la fraîcheur tombera sur les places — une forte pénombre, sans obscurité complète. Le croissant solaire descendra lentement au-dessus de la plaine des Weppes, à l'ouest : un long crépuscule éclipsé, typique de ces latitudes où le Soleil se couche en pente douce.",
    spots: [
      {
        name: "Les terrils jumeaux de Loos-en-Gohelle",
        desc: "À 30 minutes de Lille, les plus hauts terrils d'Europe (186 m) dominent tout le bassin minier : un panorama à 360° classé UNESCO, avec un horizon ouest parfaitement plat. Le spot le plus spectaculaire de la région.",
      },
      {
        name: "La Citadelle et le champ de Mars",
        desc: "Les glacis et les grandes pelouses autour de la Citadelle dégagent le ciel en pleine ville : l'option la plus simple sans voiture, à condition de choisir une zone ouverte vers l'ouest.",
      },
      {
        name: "Le mont des Cats et les monts de Flandre",
        desc: "À 40 minutes au nord-ouest, les collines flamandes (Cassel, mont des Cats, 164 m) dominent la plaine : horizon immense et estaminets pour patienter — difficile de faire plus local.",
      },
      {
        name: "Le parc du Héron (Villeneuve-d'Ascq)",
        desc: "Le grand lac de la métropole ouvre l'horizon au-dessus de l'eau ; placez-vous sur la rive est pour regarder vers l'ouest au-dessus du plan d'eau.",
      },
    ],
    conseils:
      "L'atout du Nord pour cette éclipse rasante : un horizon plat, qui laissera le croissant visible presque jusqu'au coucher réel du Soleil. L'aléa, c'est le ciel : même en août, les passages nuageux venus de la mer du Nord sont fréquents en soirée — surveillez les prévisions et gardez la possibilité de vous déplacer de 30 minutes vers la zone la plus dégagée.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Lille ?",
        a: "Environ 87 % au maximum, vers 20 h 30. C'est l'un des taux les plus modestes des grandes villes françaises — mais la baisse de luminosité restera nette, et les lunettes certifiées ISO 12312-2 sont obligatoires en permanence.",
      },
      {
        q: "Les terrils de Loos-en-Gohelle valent-ils le déplacement ?",
        a: "Oui : à 186 m au-dessus d'une plaine parfaitement plate, ce sont les meilleurs belvédères naturels (enfin, presque naturels) de la région, dans l'axe exact du Soleil couchant. Prévoyez de bonnes chaussures pour la montée et une lampe pour la descente.",
      },
      {
        q: "À quelle heure a lieu le maximum à Lille ?",
        a: "Vers 20 h 30, avec un début vers 19 h 33 et une fin vers 21 h 12, Soleil très bas sur l'horizon (horaires indicatifs, à confirmer avec les données IMCCE).",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Lille ?",
        a: "Pharmacies et enseignes de la métropole en proposeront à l'approche de l'événement, avec des ruptures possibles. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Lille en 72 h.",
      },
    ],
    nearby: ["reims", "paris"],
  },
  {
    slug: "strasbourg",
    name: "Strasbourg",
    in: "à Strasbourg",
    region: "Bas-Rhin",
    occultation: "85",
    maxTime: "20 h 37",
    startTime: "19 h 41",
    endTime: "21 h 00 (Soleil très bas)",
    intro:
      "Dans la plaine du Rhin, Strasbourg verra environ 85 % du Soleil occulté le 12 août 2026 — le taux le plus modeste des grandes villes françaises, mais un spectacle majeur malgré tout. La difficulté strasbourgeoise est ailleurs : à l'ouest, le massif des Vosges barre l'horizon et masquera le Soleil très bas bien avant la fin du phénomène depuis la plaine.",
    experience:
      "À 85 % d'occultation, la flèche de grès rose de la cathédrale se découpera dans une lumière grise et froide inhabituelle pour un soir d'août, et la plaine d'Alsace plongera dans une pénombre douce — forte baisse de lumière, sans obscurité. Le croissant solaire descendra vers la ligne bleue des Vosges : depuis les sommets, il restera visible bien plus longtemps qu'en ville.",
    spots: [
      {
        name: "Le Champ du Feu",
        desc: "Le point culminant du Bas-Rhin (1 099 m), à 50 minutes de Strasbourg : au-dessus du relief au lieu d'être derrière, avec un horizon ouest dégagé sur les crêtes vosgiennes. Le meilleur choix pour voir l'éclipse en entier.",
      },
      {
        name: "Le massif du Donon",
        desc: "Le sommet-sanctuaire des Vosges gréseuses (1 009 m) et ses cols environnants offrent de superbes horizons ouest ; comptez 1 h de route et une courte marche.",
      },
      {
        name: "La terrasse panoramique du barrage Vauban",
        desc: "En ville, la terrasse domine la Petite France et dégage une vue vers l'ouest au-dessus de l'Ill : parfaite pour le début et le maximum — la fin sera masquée par les Vosges au loin.",
      },
      {
        name: "Le jardin des Deux-Rives",
        desc: "Les grandes pelouses au bord du Rhin offrent un ciel ouvert et de la place pour tous ; comme partout en plaine, le relief vosgien écourtera la toute fin du spectacle.",
      },
    ],
    conseils:
      "Le conseil clé à Strasbourg : depuis la plaine, les Vosges masqueront le Soleil très bas avant la fin de l'éclipse — pour l'intégralité, prenez de l'altitude au Champ du Feu ou au Donon, où vous dominerez le relief au lieu de le subir. Côté météo, la plaine du Rhin connaît en août de belles soirées mais aussi des brumes de chaleur qui empâtent l'horizon : là encore, l'altitude est votre alliée.",
    faq: [
      {
        q: "Quel pourcentage du Soleil sera caché à Strasbourg ?",
        a: "Environ 85 % au maximum, vers 20 h 37. C'est le taux le plus faible de nos grandes villes — le Sud-Ouest frôle la totalité avec plus de 99 % — mais la baisse de luminosité restera bien visible, et les lunettes certifiées ISO 12312-2 sont obligatoires en permanence.",
      },
      {
        q: "Verra-t-on toute l'éclipse depuis le centre de Strasbourg ?",
        a: "Non : le Soleil, très bas en fin de phénomène, passera derrière la ligne des Vosges avant la fin. Le début et le maximum restent parfaitement observables depuis un lieu dégagé (barrage Vauban, jardin des Deux-Rives) ; pour l'intégralité, montez au Champ du Feu ou au Donon.",
      },
      {
        q: "Vaut-il le coup d'aller jusqu'au Champ du Feu ?",
        a: "Si vous voulez suivre le croissant jusqu'au bout, oui : à 1 099 m, l'horizon ouest se dégage au-dessus des crêtes et vous gagnez de précieuses minutes d'observation. Prévoyez une couche chaude, les soirées y sont fraîches même en août.",
      },
      {
        q: "Où acheter des lunettes d'éclipse à Strasbourg ?",
        a: "Pharmacies et enseignes en proposeront à l'approche du 12 août, avec des stocks incertains. Le plus sûr : commander en ligne des lunettes certifiées ISO 12312-2 — nous livrons Strasbourg en 72 h.",
      },
    ],
    nearby: ["dijon", "reims"],
  },
];

export function getVille(slug: string): Ville | undefined {
  return VILLES.find((v) => v.slug === slug);
}
