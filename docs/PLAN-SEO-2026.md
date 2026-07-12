# Plan SEO — moneclipsesolaire.fr

**Objectif** : devenir la référence française sur toutes les recherches liées aux lunettes d'observation de l'éclipse du 12 août 2026, et dépasser Amazon, les marketplaces et les grandes enseignes sur ces requêtes.

**Contexte technique réel** (important, ça change les recommandations) : le site n'est PAS un thème Shopify. C'est un front **Next.js 16 (App Router) sur Vercel** ; Shopify ne sert qu'au checkout (`shop.moneclipsesolaire.fr`). On a donc la main totale sur le HTML, les Core Web Vitals, le sitemap, les données structurées — un avantage énorme sur les concurrents sous Shopify/marketplace.

**Fenêtre de tir** : l'essentiel du volume de recherche va exploser entre mai et le 12 août 2026, avec un pic dans les 2 dernières semaines. Tout contenu doit être indexé **avant fin mai 2026** pour avoir le temps de ranker. Priorité absolue = publier vite, enrichir ensuite.

**État des lieux (12/7/2026)** :
- ✅ Home avec H1 sr-only, AggregateOffer + FAQPage JSON-LD
- ✅ 3 articles : guide éclipse, où acheter, vérifier ISO 12312-2
- ✅ Pages /eclipse, /certifications, /qui-sommes-nous
- ✅ sitemap.ts, robots.ts
- ❌ Pas de pages villes, pas de pages enseignes, pas de Product/Organization/BreadcrumbList/WebSite JSON-LD, maillage interne faible, ~17 articles manquants

---

## 1. Stratégie éditoriale — cocon sémantique

### Architecture du cocon

```
                    HOME (page produit lunettes)
                          ▲
        ┌─────────────────┼──────────────────┐
   PILIER 1           PILIER 2           PILIER 3
   /eclipse           /securite          /eclipse/villes
   (guide 2026)       (à créer :         (hub SEO local)
                      hub sécurité/         │
                      certifications)    21 pages villes
        ▲                 ▲
   satellites         satellites
   (villes, photo,    (ISO, CE, DIN CERTCO,
   enfants, agenda)   dangers, vérification,
                      Amazon/enseignes)
```

Règle : chaque satellite → son pilier + home (ancre commerciale). Chaque pilier → home + 3-6 satellites. Jamais de page orpheline.

### Les 24 articles, classés par priorité

Volumes = estimations qualitatives (les outils sous-estiment massivement les requêtes événementielles ; « eclipse 2026 » suivra la courbe de « eclipse 2024 » aux US : ×100 dans les 30 derniers jours). Difficulté = concurrence réelle attendue en France.

**P0 = publier en juillet 2026 (immédiatement), P1 = avant fin juillet, P2 = début août (fraîcheur maximale).**

---

#### A1 — P0 · Éclipse solaire 12 août 2026 : horaires ville par ville
- **URL** : `/blog/horaires-eclipse-12-aout-2026` · **MC** : `eclipse 12 août 2026 heure` · Intention : informationnelle · Volume : très élevé au pic · Difficulté : moyenne (IMCCE, médias)
- **H1** : Éclipse solaire du 12 août 2026 : horaires exacts ville par ville en France
- H2 À quelle heure a lieu l'éclipse le 12 août 2026 ? (réponse directe en 2 phrases — position 0)
- H2 Tableau des horaires pour 30 villes françaises (H3 début / maximum / fin / % occultation — données IMCCE)
- H2 Pourquoi l'éclipse a lieu au coucher du soleil (H3 conséquences pour l'observation : horizon ouest dégagé obligatoire)
- H2 Comment se préparer (H3 checklist, H3 lunettes certifiées → CTA)
- **FAQ** : L'éclipse sera-t-elle totale en France ? · Que voit-on si le ciel est couvert ? · Peut-on la voir depuis Paris ?
- **Liens internes** : → chaque page ville (c'est le hub de distribution du SEO local), → `/eclipse`, → home (« lunettes éclipse certifiées ISO 12312-2 »)
- **CTA** : bandeau après le tableau d'horaires : « Il vous reste X jours — commandez vos lunettes certifiées, livraison 72 h » + CTA fin d'article

#### A2 — P0 · Peut-on regarder une éclipse avec des lunettes de soleil ?
- **URL** : `/blog/lunettes-de-soleil-eclipse-danger` · **MC** : `regarder eclipse lunettes de soleil` · Intention : info (question directe) · Volume : élevé · Difficulté : faible — **quick win n°1**
- **H1** : Peut-on regarder une éclipse avec des lunettes de soleil ? (Non, et voici pourquoi)
- H2 La réponse courte : non, jamais (encadré réponse directe)
- H2 Pourquoi les lunettes de soleil ne protègent pas (H3 ~80 % de filtration vs 99,997 % requis, H3 UV et infrarouges invisibles, H3 catégorie 3/4 vs ND 5.0)
- H2 La rétinopathie solaire : des lésions sans douleur et irréversibles (H3 témoignages/cas documentés éclipse 1999)
- H2 Les seules protections valables (H3 lunettes ISO 12312-2 → CTA, H3 méthodes indirectes : sténopé, projection)
- **FAQ** : Et avec deux paires superposées ? · Et des lunettes de ski/soudeur ? (soudeur grade 14 uniquement) · Un enfant risque-t-il plus ?
- **Liens** : → A3 (ISO obligatoire), → A16 (erreurs), → home
- **CTA** : après « la réponse courte » (le lecteur est convaincu dès le début) + fin

#### A3 — P0 · Pourquoi les lunettes ISO 12312-2 sont-elles obligatoires ?
- **URL** : `/blog/lunettes-iso-12312-2-obligatoires` · **MC** : `lunettes éclipse ISO 12312-2` · Intention : info → commerciale · Volume : moyen, croissance forte · Difficulté : faible
- **H1** : Lunettes ISO 12312-2 : pourquoi cette norme est indispensable pour l'éclipse
- H2 Ce que garantit la norme ISO 12312-2 (H3 transmission lumineuse max 0,0032 %, H3 UV/IR, H3 résistance mécanique)
- H2 Comment la certification est obtenue (H3 laboratoires accrédités, H3 → lien /certifications)
- H2 Comment reconnaître une vraie paire certifiée (H3 marquages obligatoires, H3 → A11 vérification)
- H2 Nos lunettes : certification DIN CERTCO (preuve, n° de certificat)
- **FAQ** : ISO 12312-2 est-elle obligatoire légalement ? · Une paire de 2015 est-elle encore bonne ? · CE suffit-il ?
- **Liens** : → /certifications, → A9 (DIN CERTCO), → A10 (CE vs ISO), → home
- **CTA** : « Nos lunettes sont certifiées ISO 12312-2 par DIN CERTCO — voir le certificat » (double CTA confiance + achat)

#### A4 — P0 · Où voir l'éclipse du 12 août 2026 en France ?
- **URL** : `/blog/ou-voir-eclipse-2026-france` · **MC** : `où voir eclipse 2026 france` · Intention : info · Volume : très élevé au pic · Difficulté : moyenne
- **H1** : Où voir l'éclipse solaire du 12 août 2026 en France ? Carte et meilleurs spots
- H2 Carte de l'occultation en France (visuel propriétaire = backlinks)
- H2 Le grand gagnant : le Sud-Ouest (H3 Pays basque ~96 %, H3 Pyrénées)
- H2 Région par région (H3 par grande région avec % et liens vers pages villes)
- H2 Et pour voir la totalité ? Direction l'Espagne (H3 Bilbao/Saragosse/Valence, H3 conseils voyage — capte aussi la requête « voir eclipse totale 2026 »)
- H2 Critères d'un bon spot (H3 horizon ouest dégagé, H3 altitude, H3 météo août)
- **FAQ** : Où l'éclipse est-elle totale ? · Faut-il réserver ? · Quel temps fera-t-il ?
- **Liens** : → toutes les pages villes, → A5, → A1 (horaires), → home
- **CTA** : « Où que vous soyez, il vous faut des lunettes certifiées » + bloc quantités famille

#### A5 — P1 · Les 10 meilleures villes pour observer l'éclipse
- **URL** : `/blog/meilleures-villes-eclipse-2026` · **MC** : `meilleure ville voir eclipse 2026` · Intention : info · Volume : moyen · Difficulté : faible
- **H1** : Top 10 des meilleures villes françaises pour l'éclipse du 12 août 2026
- H2 Notre classement (méthodologie : % occultation × météo statistique × horizon ouest) ; H3 par ville (1. Biarritz… ) avec lien vers chaque page ville
- H2 Mentions spéciales (H3 spots nature : Pic du Midi, dune du Pilat, cap Ferret)
- **FAQ** : Paris est-elle bien placée ? · Vaut-il mieux la montagne ou la mer ?
- **Liens** : → pages villes du top, → A4, → home · **CTA** : standard fin + encart « pack famille »

#### A6 — P1 · Comment photographier une éclipse solaire
- **URL** : `/blog/photographier-eclipse-solaire` · **MC** : `photographier eclipse solaire` · Intention : info · Volume : moyen-élevé · Difficulté : moyenne (sites photo généralistes)
- **H1** : Comment photographier l'éclipse solaire du 12 août 2026 (smartphone et reflex)
- H2 La règle n°1 : filtrer l'objectif, pas seulement vos yeux
- H2 Au smartphone (H3 le filtre : une lunette éclipse devant l'objectif — notre visuel produit-photo-7 existe déjà, H3 réglages iOS/Android, H3 trépied)
- H2 Au reflex/hybride (H3 filtre ND 5.0, H3 focale/expo, H3 bracketing)
- H2 Cas particulier 2026 : le soleil sera bas → compositions avec paysage (H3 golden hour + éclipse = photos exceptionnelles)
- H2 Ce qu'il ne faut jamais faire (viser sans filtre, viseur optique)
- **FAQ** : Une lunette éclipse suffit-elle pour mon iPhone ? · Le capteur peut-il griller ? · Et les jumelles ?
- **Liens** : → A12 (smartphone), → A13 (appareil photo), → A16, → home
- **CTA** : « 1 paire pour vos yeux + 1 paire pour votre smartphone » — argument quantité ×2, très bon pour l'AOV

#### A7 — P0 · Les erreurs à ne jamais faire pendant une éclipse
- **URL** : `/blog/erreurs-eclipse-solaire` · **MC** : `eclipse solaire danger yeux` · Intention : info · Volume : élevé · Difficulté : faible
- **H1** : Éclipse du 12 août 2026 : les 10 erreurs à ne jamais commettre
- H2 par erreur (regarder à l'œil nu « juste une seconde », lunettes de soleil, lunettes rayées/percées, jumelles ou zoom sans filtre, filtre côté oculaire d'un télescope, radiographies/CD/verre fumé, lunettes non certifiées achetées à la va-vite, laisser un enfant sans surveillance, viseur d'appareil photo, retirer les lunettes pendant les phases partielles)
- H2 Que faire en cas d'exposition accidentelle (H3 symptômes, H3 consulter un ophtalmo)
- **FAQ** : Une seconde à l'œil nu est-elle grave ? · Les symptômes sont-ils immédiats ? (non — c'est le piège)
- **Liens** : → A2, → A15 (lunettes dangereuses), → A14 (enfants), → home · **CTA** : après l'erreur n°1

#### A8 — P1 · Les lunettes vendues sur Amazon sont-elles fiables ?
- **URL** : `/blog/lunettes-eclipse-amazon-fiables` · **MC** : `lunettes eclipse amazon avis` · Intention : commerciale — **article stratégique anti-marketplace** · Volume : élevé · Difficulté : moyenne
- **H1** : Lunettes éclipse sur Amazon : comment vérifier ce que vous achetez vraiment
- Ton : factuel, jamais dénigrant. On explique le fonctionnement d'une marketplace (vendeurs tiers, provenance variable), les rappels produits documentés lors des éclipses US 2017/2024 (sources : AAS, presse), et on donne une checklist de vérification qui s'applique partout, y compris chez nous.
- H2 Le vrai sujet : qui est le vendeur ? (H3 marketplace vs vente directe, H3 comment identifier le vendeur tiers)
- H2 Les précédents documentés (H3 rappels AAS 2017, H3 contrefaçons de marquage ISO)
- H2 Checklist avant d'acheter, où que ce soit (H3 certificat consultable, H3 laboratoire nommé, H3 vendeur identifiable, H3 test visuel à réception → A11)
- H2 Notre transparence (certificat DIN CERTCO publié, société française identifiée)
- **FAQ** : Amazon vend-il de fausses lunettes ? (réponse nuancée : la plateforme héberge des vendeurs de qualité inégale) · Comment tester à réception ?
- **Liens** : → A11, → /certifications, → page enseigne Amazon (section 4), → home
- **CTA** : « Acheter en direct auprès d'un vendeur français identifié — certificat consultable »

#### A9 — P1 · Que signifie DIN CERTCO ?
- **URL** : `/blog/din-certco-certification` · **MC** : `DIN CERTCO lunettes eclipse` · Intention : info (vérification pré-achat) · Volume : faible mais ultra-qualifié · Difficulté : très faible
- **H1** : DIN CERTCO : que garantit ce laboratoire pour vos lunettes d'éclipse ?
- H2 Qui est DIN CERTCO (organisme allemand, accréditations) · H2 Le processus de certification (tests, échantillonnage) · H2 Comment vérifier un certificat DIN CERTCO (registre public — tuto pas à pas) · H2 Notre certificat (numéro, lien registre)
- **FAQ** : DIN CERTCO = ISO 12312-2 ? · Où vérifier un numéro de certificat ?
- **Liens** : → /certifications, → A3, → A11, → home · **CTA** : « Vérifiez notre certificat vous-même » (CTA confiance) puis achat

#### A10 — P1 · Différence entre marquage CE et ISO 12312-2
- **URL** : `/blog/difference-ce-iso-12312-2` · **MC** : `lunettes eclipse CE ou ISO` · Intention : info · Volume : faible-moyen · Difficulté : très faible
- **H1** : Marquage CE et norme ISO 12312-2 : quelle différence pour vos lunettes d'éclipse ?
- H2 Le CE : une auto-déclaration du fabricant (H3 ce que ça couvre, H3 les limites) · H2 ISO 12312-2 : une norme technique précise · H2 Le piège : CE seul ne suffit PAS pour une éclipse · H2 La combinaison gagnante : CE + ISO 12312-2 + certificat de laboratoire
- **FAQ** : Des lunettes CE sans ISO sont-elles sûres ? · Que vaut UKCA ?
- **Liens** : → A3, → A9, → A11, → home · **CTA** : standard

#### A11 — P0 · Comment vérifier l'authenticité de lunettes d'éclipse
- **URL existante à enrichir** : `/blog/verifier-lunettes-eclipse-iso-12312-2` · **MC** : `vérifier lunettes eclipse` · Intention : info · Volume : moyen, pic fin juillet-août · Difficulté : faible
- Enrichir l'article existant : H2 Test visuel en 5 étapes (seules des sources intenses doivent être visibles), H2 Vérifier les marquages, H2 Vérifier le certificat en ligne (tuto DIN CERTCO), H2 Les signes d'une contrefaçon, H2 Quand jeter des lunettes (rayures, trous, âge)
- **FAQ** : Comment tester sans attendre l'éclipse ? · Les lunettes de 2015 (éclipse précédente) sont-elles réutilisables ?
- **Liens** : → A3, → A9, → A15, → home · **CTA** : « Nos lunettes passent tous ces tests — certificat à l'appui »

#### A12 — P1 · Protéger son smartphone pendant l'éclipse
- **URL** : `/blog/filtre-solaire-smartphone-eclipse` · **MC** : `filtre solaire smartphone eclipse` · Volume : moyen · Difficulté : très faible
- **H1** : Photographier l'éclipse au smartphone sans abîmer le capteur : le guide
- H2 Le risque réel pour le capteur · H2 La solution à 3 € : une lunette éclipse devant l'objectif (tuto 3 étapes — le visuel produit-photo-7.webp existe) · H2 Réglages recommandés · H2 Les accessoires inutiles
- **FAQ** : Mon téléphone risque-t-il vraiment ? · Faut-il une app spéciale ?
- **Liens** : → A6, → A13, → home · **CTA** : quantité ×2 (yeux + téléphone)

#### A13 — P2 · Protéger un appareil photo pendant l'éclipse
- **URL** : `/blog/filtre-appareil-photo-eclipse` · **MC** : `filtre appareil photo eclipse` · Volume : faible-moyen · Difficulté : faible
- **H1** : Protéger son appareil photo pendant l'éclipse : filtres et méthodes
- H2 Pourquoi le capteur et l'obturateur risquent gros · H2 Filtre ND 5.0 vissant vs feuille de Baader vs lunette éclipse adaptée · H2 Montage et vérifications · H2 Le viseur optique : danger absolu
- **FAQ** : Un ND 1000 suffit-il ? (non) · Et un drone ?
- **Liens** : → A6, → A12, → home · **CTA** : standard

#### A14 — P0 · Observer une éclipse avec des enfants
- **URL** : `/blog/eclipse-enfants-securite` · **MC** : `eclipse enfant protection` · Intention : info, très fort émotionnellement · Volume : élevé (parents) · Difficulté : faible
- **H1** : Observer l'éclipse du 12 août 2026 avec des enfants : le guide des parents
- H2 À partir de quel âge ? · H2 Les règles d'or (lunettes à taille enfant, surveillance constante, technique de l'élastique) · H2 Préparer l'événement en famille (activités pédagogiques, H3 notre album « Luna et l'éclipse magique » → cross-sell ebook) · H2 Alternatives sans risque (projection sténopé — atelier DIY) · H2 21h heure du coucher ? Conseils pratiques (l'éclipse est tard pour les petits)
- **FAQ** : Les lunettes adultes vont-elles aux enfants ? · Que faire s'il a regardé sans protection ?
- **Liens** : → A2, → A7, → home, → ebook (fiche produit)
- **CTA** : pack famille (4-6 paires) + ebook à 0,99 € en cross-sell — **article à plus fort potentiel de conversion**

#### A15 — P1 · Pourquoi certaines lunettes d'éclipse sont dangereuses
- **URL** : `/blog/lunettes-eclipse-dangereuses` · **MC** : `lunettes eclipse contrefaçon danger` · Volume : moyen, pic en août (articles presse) · Difficulté : faible
- **H1** : Fausses lunettes d'éclipse : pourquoi certaines paires sont dangereuses
- H2 Anatomie d'une lunette sûre (film polymère/Mylar ND 5.0) · H2 Ce qu'on trouve dans les contrefaçons (films photo, plastique teinté) · H2 Les rappels produits historiques (2017 US, 1999 Europe) · H2 Comment s'en prémunir → checklist A11
- **FAQ** : Comment reconnaître une contrefaçon à l'œil ? · Un site .fr est-il une garantie ? (non — critères réels)
- **Liens** : → A11, → A8, → A3, → home · **CTA** : transparence + achat

#### A16 — P2 · Que faire après l'éclipse ?
- **URL** : `/blog/apres-eclipse-2026` · **MC** : `prochaine eclipse solaire france` · Volume : fort APRÈS le 12 août — **capte le trafic post-événement** · Difficulté : faible
- **H1** : Après l'éclipse du 12 août 2026 : prochaines éclipses et que faire de vos lunettes
- H2 Les prochaines éclipses visibles en France (H3 2 août 2027 — encore mieux !, H3 26 janvier 2028) → argument « gardez vos lunettes, elles resservent 2 fois »
- H2 Conserver ses lunettes correctement · H2 Symptômes à surveiller après observation · H2 Revoir l'éclipse (liens replays/photos)
- **FAQ** : Mes lunettes seront-elles encore bonnes en 2027 ? · Quand la prochaine totale en France ? (2081 !)
- **Liens** : → A17, → home · **CTA** : « une paire = 3 éclipses » (déjà un visuel produit là-dessus)

#### A17 — P1 · Éclipse du 2 août 2027 : la suivante sera encore plus belle
- **URL** : `/blog/eclipse-2-aout-2027` · **MC** : `eclipse 2 aout 2027` · Volume : moyen, croît déjà · Difficulté : faible — **prend date tôt = avantage durable**
- Structure similaire à A1/A4 pour 2027 (plus longue totalité du siècle en Afrique du Nord/Espagne du Sud). Argument : achetez une fois, observez 3 fois.

#### A18 — P1 · Éclipse 12 août 2026 : que verra-t-on exactement ? (simulation)
- **URL** : `/blog/a-quoi-ressemble-eclipse-90-pourcent` · **MC** : `eclipse 90% visible` / `eclipse partielle a quoi ça ressemble` · Volume : moyen · Difficulté : très faible
- H2 90 % d'occultation : ce que ça change (lumière, température, ombres) · H2 Simulation heure par heure · H2 Pourquoi même à 90 % les lunettes restent obligatoires à 100 % du temps
- **Liens** : → A1, → A4, → home

#### A19 — P2 · Météo du 12 août 2026 : quelles chances de ciel dégagé ?
- **URL** : `/blog/meteo-eclipse-12-aout-2026` · **MC** : `meteo 12 aout 2026` · Volume : explose la dernière semaine · Difficulté : faible
- Statistiques d'ennuagement août par région, mise à jour J-7/J-2 (fraîcheur = boost). Liens → pages villes, A4.

#### A20 — P1 · Sténopé, projection : observer l'éclipse sans lunettes
- **URL** : `/blog/observer-eclipse-sans-lunettes` · **MC** : `observer eclipse sans lunettes` · Volume : moyen · Difficulté : faible
- Requête défensive : celui qui cherche ça est un acheteur potentiel qu'on éduque. H2 Le sténopé (tuto), H2 La passoire/feuillage, H2 Les limites de ces méthodes (on ne VOIT pas le soleil), H2 Pour vraiment observer : lunettes certifiées.
- **CTA** fort ici — la conversion « je voulais éviter d'acheter → ok j'achète » est réelle.

#### A21 — P2 · L'éclipse du 11 août 1999 : souvenirs et leçons
- **URL** : `/blog/eclipse-11-aout-1999` · **MC** : `eclipse 1999 france` · Volume : moyen (nostalgie, presse) · Difficulté : faible
- Contenu émotionnel/linkbait (backlinks presse locale). Parallèles 1999/2026, accidents oculaires documentés en 1999 → pédagogie sécurité.

#### A22 — P1 · Lunettes éclipse : pourquoi un tel prix ? (2,99 € vs 15 €)
- **URL** : `/blog/prix-lunettes-eclipse` · **MC** : `prix lunettes eclipse` · Volume : moyen · Difficulté : très faible
- Transparence sur les coûts, pourquoi les prix explosent à l'approche de l'événement (pénurie 2017/2024 documentée), pourquoi commander tôt. **Argument urgence naturel et honnête.**

#### A23 — P2 · Entreprises, écoles, mairies : commander des lunettes en volume
- **URL** : `/blog/lunettes-eclipse-entreprises-collectivites` · **MC** : `lunettes eclipse en gros` · Volume : faible, panier énorme · Difficulté : nulle
- Cible B2B (le projet a déjà des fichiers pharmacies/tabacs-presse !). H2 Pourquoi équiper vos équipes/élèves, H2 Tarifs dégressifs, H2 Facturation, H2 Délais. CTA : contact direct + palier 24.

#### A24 — P1 · Éclipse 2026 en Espagne : guide pour les Français qui font le déplacement
- **URL** : `/blog/voir-eclipse-totale-espagne-2026` · **MC** : `eclipse totale 2026 espagne` · Volume : élevé · Difficulté : moyenne
- H2 Où la totalité passe (carte), H2 Meilleures villes accessibles depuis la France, H2 Logistique (route, hébergement), H2 La totalité : le seul moment où on retire les lunettes (pédagogie précise). Lien croisé → mieclipsesolar.es (hreflang, cf. §7).

---

## 2. Maillage interne

### Pages piliers et satellites

| Niveau | Page | Rôle |
|---|---|---|
| **Money page** | `/` (home = fiche produit) | Conversion. Reçoit un lien de CHAQUE page du site |
| Pilier 1 | `/eclipse` (guide événement) | Hub info éclipse : A1, A4, A5, A18, A19, A24 + pages villes |
| Pilier 2 | `/certifications` → enrichir en hub sécurité | Hub confiance : A2, A3, A7, A9, A10, A11, A15, A20 |
| Pilier 3 | `/eclipse/villes` (à créer) | Hub SEO local : 21 pages villes |
| Pilier 4 | `/blog` | Index chronologique (secondaire) |
| Satellites | 24 articles + 21 villes + 7 enseignes | Captation de trafic → poussent piliers et home |

### Matrice de liens (règles)

| De → Vers | Ancre type | Position |
|---|---|---|
| Tout article → Home | « lunettes éclipse certifiées ISO 12312-2 » / « lunettes éclipse solaire » (varier : « commander vos lunettes d'éclipse », « paire certifiée DIN CERTCO ») | 1er tiers du texte + CTA fin |
| Article sécurité → Pilier 2 | « norme ISO 12312-2 », « nos certifications » | corps de texte |
| Article événement → Pilier 1 | « guide complet de l'éclipse du 12 août 2026 » | intro ou conclusion |
| Page ville → Home | « lunettes éclipse livrées en 72 h à {Ville} » | CTA principal |
| Page ville → A1 | « horaires détaillés ville par ville » | corps |
| Page ville ↔ 2-3 villes voisines | « l'éclipse à {Ville voisine} » | bloc « à proximité » |
| Pilier → satellites | ancres exactes descriptives (jamais « cliquez ici ») | listes thématiques |
| Page enseigne → A8, A11 | « vérifier des lunettes d'éclipse avant achat » | corps |
| Home → piliers | nav + footer | permanent |

**Ancres vers la home — répartition saine** : ~40 % « lunettes éclipse solaire (certifiées) », ~25 % marque « MonEclipseSolaire », ~20 % variantes longues (« commander des lunettes pour l'éclipse du 12 août »), ~15 % neutres (« notre boutique », URL). Ne jamais dépasser ~50 % d'ancre exacte.

### Pages qui doivent pointer vers la home

Toutes — mais avec une ancre commerciale forte depuis : les 21 pages villes, A2, A3, A7, A11, A14, A15, A20, A22, les 7 pages enseignes (ce sont les pages à plus forte intention). Les pages légales/compte gardent le lien logo/nav uniquement.

### CTA standardisés (3 blocs réutilisables à créer en composants)

1. **CTA urgence** (`<CtaCountdown/>`) : compte à rebours + « livraison 72 h » — pages villes, A1, A19, A22
2. **CTA confiance** (`<CtaCertificat/>`) : visuel certificat + « vérifiez notre certification DIN CERTCO » — articles sécurité, pages enseignes
3. **CTA famille** (`<CtaPack/>`) : slider quantité pré-réglé 4 paires + ebook — A5, A14, pages villes

---

## 3. SEO local — 21 pages villes

### Architecture

- URL : `/eclipse/{ville}` (ex. `/eclipse/toulouse`) + hub `/eclipse/villes`
- **Implémentation Next.js** : une seule route dynamique `src/app/(site)/eclipse/[ville]/page.tsx` + un fichier de données `src/lib/villes.ts` (horaires, %, spots, FAQ par ville) + `generateStaticParams` → 21 pages statiques générées d'un coup. `generateMetadata` pour title/description dynamiques. Ajouter les URLs dans `sitemap.ts`.
- Title type : `Éclipse solaire du 12 août 2026 à {Ville} : heure, % et où l'observer`
- **≥ 40 % de contenu réellement unique par ville** (spots locaux, géographie, météo locale) sinon Google les traitera en quasi-doublons.

### Structure type (identique pour les 21, contenu unique)

- **H1** : Éclipse solaire du 12 août 2026 à {Ville} : horaires et conseils d'observation
- Encadré réponse directe : heure du maximum, % d'occultation, hauteur du soleil
- H2 Les horaires précis à {Ville} (tableau début/max/fin + source IMCCE)
- H2 Que verra-t-on depuis {Ville} ? ({%} d'occultation : description sensorielle)
- H2 Les meilleurs spots d'observation à {Ville} et alentours (3-5 lieux réels avec orientation ouest — le cœur du contenu unique)
- H2 Conseils spécifiques ({météo locale août, relief, marée pour les côtières})
- H2 Se protéger les yeux (bref + lien pilier sécurité) → **CTA livraison 72 h à {Ville}**
- FAQ locale (3-4 questions) + bloc « villes à proximité » (maillage) + BreadcrumbList & FAQPage JSON-LD

### Données par ville

⚠️ **Les % et horaires ci-dessous sont des ordres de grandeur à VALIDER avec les données IMCCE/Xavier Jubier avant publication** (l'éclipse a lieu en fin de journée, soleil bas sur l'horizon ouest ; maximum entre ~20 h 10 et 20 h 40 CEST selon la ville). Le % exact est un argument de précision face aux pages génériques des médias.

| Ville | MC principal | MC secondaires | Occultation ~ | Spots à documenter |
|---|---|---|---|---|
| Biarritz | eclipse 2026 biarritz | eclipse pays basque, plage | ~96 % (top FR) | Grande Plage, phare, Côte des Basques (horizon océan idéal) |
| Bayonne | eclipse 12 aout 2026 bayonne | heure eclipse bayonne | ~96 % | Rives de l'Adour, remparts |
| Pau | eclipse 2026 pau | eclipse pyrénées | ~95 % | Boulevard des Pyrénées (mais regarder à l'OUEST), coteaux Jurançon |
| Perpignan | eclipse 2026 perpignan | eclipse pyrénées orientales | ~95 % | Château d'eau, Força Real, plages Canet |
| Toulouse | eclipse 2026 toulouse | heure eclipse toulouse, cité de l'espace | ~94 % | Cité de l'espace (événement probable), Pech David, prairie des Filtres |
| Montpellier | eclipse 2026 montpellier | | ~93 % | Pic Saint-Loup, plages Palavas, place Peyrou |
| Bordeaux | eclipse 2026 bordeaux | dune du pilat eclipse | ~93 % | Dune du Pilat (spot n°1 France ?), quais, parc bordelais |
| Limoges | eclipse 2026 limoges | | ~91 % | Mont Gargan, bords de Vienne |
| Marseille | eclipse 2026 marseille | | ~91 % | Notre-Dame de la Garde, calanques côté ouest, plages Prado |
| Nantes | eclipse 2026 nantes | | ~90 % | Bords de Loire, Butte Sainte-Anne |
| Clermont-Ferrand | eclipse 2026 clermont | puy de dome eclipse | ~90 % | Puy de Dôme (train panoramique — événement), plateau de Gergovie |
| Brest | eclipse 2026 brest | eclipse bretagne | ~90 % | Pointe du Petit Minou, Cornouaille (horizon Atlantique) |
| Lyon | eclipse 2026 lyon | | ~89 % | Fourvière (esplanade ouest), parc de la Tête d'Or, monts du Lyonnais |
| Rennes | eclipse 2026 rennes | | ~89 % | Parc des Gayeulles, campagne ouest |
| Nice | eclipse 2026 nice | eclipse cote d'azur | ~88 % | Colline du Château, promenade (attention : mer à l'EST — pédagogie), arrière-pays |
| Grenoble | eclipse 2026 grenoble | | ~88 % | Bastille, Vercors balcon ouest (relief masque l'horizon — conseil clé) |
| Paris | eclipse 2026 paris | heure eclipse paris | ~88 % | Sacré-Cœur, parc de Saint-Cloud, toits/terrasses ouest — **volume n°1, à soigner** |
| Dijon | eclipse 2026 dijon | | ~85 % | Mont Afrique, lac Kir |
| Reims | eclipse 2026 reims | | ~84 % | Montagne de Reims (côté ouest), vignobles |
| Lille | eclipse 2026 lille | eclipse nord | ~83 % | Terrils du Nord (Loos-en-Gohelle), citadelle |
| Strasbourg | eclipse 2026 strasbourg | eclipse alsace | ~81 % | Hautes-Vosges (Champ du Feu — l'horizon ouest y est dégagé), terrasse Vauban |

FAQ locale type : « À quelle heure exactement à {Ville} ? » · « Où acheter des lunettes d'éclipse à {Ville} ? » (réponse : livraison 72 h + magasins génériques — capte la requête locale transactionnelle) · « Que faire s'il y a des nuages ? » · « L'éclipse sera-t-elle totale à {Ville} ? »

---

## 4. Pages transactionnelles « enseignes »

**Principe de conformité** : ces requêtes (`lunettes éclipse solaire leclerc`…) sont des recherches de disponibilité. On y répond avec une page **guide d'achat honnête** : oui, on peut en trouver dans ces enseignes ; voici comment vérifier la certification quel que soit le point de vente ; et voici notre alternative en ligne avec certificat publié. Zéro dénigrement, zéro fausse allégation de rupture, usage nominatif des marques uniquement pour les désigner (licite), et un disclaimer « site indépendant, non affilié à {Enseigne} ».

- URL : `/acheter/lunettes-eclipse-{enseigne}` (amazon, carrefour, leclerc, decathlon, cultura, pharmacie, fnac) — même modèle Next.js que les villes : route dynamique + fichier de données.
- Title : `Lunettes éclipse solaire chez {Enseigne} : ce qu'il faut vérifier avant d'acheter (2026)`

**Structure commune** :
- H1 : Lunettes éclipse solaire chez {Enseigne} : le guide d'achat 2026
- H2 Trouve-t-on des lunettes d'éclipse chez {Enseigne} ? (réponse honnête : disponibilité variable selon magasins/périodes, souvent en rayon à l'approche de l'événement)
- H2 Les 5 points à vérifier en rayon (ou en ligne) — checklist ISO/marquages/certificat, adaptée au contexte de l'enseigne
- H2 Ce qui est spécifique à {Enseigne} (contenu unique par page, voir ci-dessous)
- H2 L'alternative en ligne : commander en direct avec certificat vérifiable (H3 livraison 72 h, H3 prix dès 2,99 €) → **CTA confiance + achat**
- FAQ (3-4 questions) + disclaimer non-affiliation + FAQPage JSON-LD
- Liens internes : → A8, → A11, → A22, → home ; le hub `/acheter` (index) → les 7 pages

**Angle unique par enseigne** (pour éviter le contenu dupliqué) :
| Page | Angle spécifique |
|---|---|
| Amazon | marketplace = vendeurs tiers ; comment lire la fiche vendeur ; historique rappels US ; renvoi vers A8 |
| Carrefour / Leclerc | grande distribution : arrivages saisonniers, opérations presse locales, vérifier en caisse le marquage |
| Decathlon | l'enseigne vend de l'optique solaire sportive : bien distinguer catégorie 4 ≠ ISO 12312-2 (pédagogie clé) |
| Cultura | rayon sciences/loisirs, souvent kits pédagogiques enfants → lien A14 + cross-sell ebook Luna |
| Pharmacie | canal historique 1999 ; le pharmacien peut montrer le certificat ; disponibilité très variable (le projet a déjà un fichier pharmacies B2B — opportunité de partenariat/PDV réels) |
| Fnac | fnac.com = aussi une marketplace ; mêmes réflexes qu'Amazon ; rayon optique/astronomie |

---

## 5. Optimisation des images

**Convention de nommage** : `{sujet}-{qualificatif}-{contexte}.webp`, en minuscules, tirets, français sans accents. Renommer les fichiers actuels :
- `produit-photo-1.webp` → `lunettes-eclipse-solaire-iso-12312-2.webp`
- `produit-photo-3.webp` → `observation-eclipse-famille-lunettes-certifiees.webp`
- `produit-photo-7.webp` → `filtre-solaire-smartphone-lunettes-eclipse.webp`
- Pages villes : `eclipse-12-aout-2026-toulouse-horaires.webp`
- (mettre à jour les références dans `Products.tsx` — c'est un front local, un rename est trivial ; garder les anciens noms en redirect n'est pas nécessaire tant que les pages ne rankent pas en image search)

**ALT** : décrire l'image pour un non-voyant, avec le mot-clé s'il est naturel, < 125 caractères. Les ALT actuels de la galerie sont déjà bons. Exemples :
- ✅ `alt="Enfant observant l'éclipse solaire avec des lunettes certifiées ISO 12312-2"`
- ❌ `alt="lunettes eclipse solaire pas cher ISO CE achat"` (keyword stuffing)
- Image décorative → `alt=""` (jamais d'ALT absent)

**Dimensions/formats** : source 2× la taille d'affichage max (galerie affichée ~600 px → source 1200 px). `next/image` gère déjà le responsive via `sizes` — vérifier que chaque `sizes` reflète la vraie largeur affichée (la galerie utilise `90vw/45vw` : correct). Format : **WebP partout** (déjà le cas), AVIF en bonus via `next.config.ts` → `images: { formats: ['image/avif', 'image/webp'] }`. Hero/LCP : `priority` + `fetchPriority="high"` (déjà en place via `eager`).

**Compression** : cible < 80 Ko pour une image produit 1200 px (qualité WebP 70-75, déjà `quality={70}` dans la galerie — bien). Outil batch : `npx sharp-cli` ou Squoosh. OG images : 1200×630, < 150 Ko, une par article (title en surimpression — générables avec `next/og`).

**Performances** : lazy par défaut avec `next/image` (ne PAS mettre priority ailleurs que sur le LCP), `placeholder="blur"` sur les images produits pour le CLS perçu, largeur/hauteur toujours définies (fill + aspect-ratio conteneur : déjà le cas).

---

## 6. Données structurées (JSON-LD)

Existant : AggregateOffer + FAQPage sur la home. À compléter ainsi — un composant `<JsonLd data={...}/>` réutilisable, injecté par page. **Graph unifié sur la home** (`@graph` reliant Organization, WebSite, Product) :

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://moneclipsesolaire.fr/#org",
      "name": "MonEclipseSolaire",
      "url": "https://moneclipsesolaire.fr",
      "logo": { "@type": "ImageObject", "url": "https://moneclipsesolaire.fr/logo.png" },
      "email": "contact@moneclipsesolaire.fr",
      "address": { "@type": "PostalAddress", "addressCountry": "FR" },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://moneclipsesolaire.fr/#website",
      "url": "https://moneclipsesolaire.fr",
      "name": "MonEclipseSolaire",
      "publisher": { "@id": "https://moneclipsesolaire.fr/#org" },
      "inLanguage": "fr-FR",
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://moneclipsesolaire.fr/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Product",
      "@id": "https://moneclipsesolaire.fr/#product-lunettes",
      "name": "Lunettes Éclipse Solaire certifiées ISO 12312-2",
      "description": "Lunettes d'observation d'éclipse solaire certifiées ISO 12312-2 et CE (certification DIN CERTCO). Filtre ND 5.0 bloquant plus de 99,999 % de la lumière solaire, UV et infrarouges. Adultes et enfants.",
      "image": [
        "https://moneclipsesolaire.fr/produit-photo-1.webp",
        "https://moneclipsesolaire.fr/produit-photo-2.webp"
      ],
      "brand": { "@type": "Brand", "name": "MonEclipseSolaire" },
      "sku": "LUNETTES-ECLIPSE-ISO",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "2.99",
        "highPrice": "22.99",
        "priceCurrency": "EUR",
        "offerCount": "9",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-08-12",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "EUR" },
          "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "FR" },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "DAY" },
            "transitTime": { "@type": "QuantitativeValue", "minValue": 2, "maxValue": 3, "unitCode": "DAY" }
          }
        },
        "seller": { "@id": "https://moneclipsesolaire.fr/#org" }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.88",
        "reviewCount": "128",
        "bestRating": "5"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "— prénom réel d'un avis vérifié —" },
          "datePublished": "2026-06-15",
          "reviewBody": "— texte réel de l'avis —",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ]
    }
  ]
}
```

⚠️ `aggregateRating` et `review` doivent refléter des avis **réels et vérifiables affichés sur la page** (les 128 avis affichés doivent exister quelque part de consultable), sinon risque d'action manuelle « avis auto-attribués ». Si les avis viennent d'un tiers (Trustpilot…), utiliser leurs données exactes.

**BreadcrumbList** (chaque article/ville/enseigne) :
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://moneclipsesolaire.fr" },
    { "@type": "ListItem", "position": 2, "name": "Éclipse 2026", "item": "https://moneclipsesolaire.fr/eclipse" },
    { "@type": "ListItem", "position": 3, "name": "Éclipse à Toulouse" }
  ]
}
```

**FAQPage** (modèle par page — home : déjà en place ; à générer depuis les données FAQ de chaque ville/article) :
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "À quelle heure a lieu l'éclipse du 12 août 2026 à Toulouse ?",
      "acceptedAnswer": { "@type": "Answer", "text": "Le maximum de l'éclipse est attendu vers 20 h 30 (heure locale), avec environ 94 % du Soleil occulté. Données précises : IMCCE." }
    }
  ]
}
```

**Article** (bonus, sur chaque billet de blog) : `@type: Article` avec `headline`, `datePublished`, `dateModified` (fraîcheur !), `author` → `@id` Organization, `image` (OG 1200×630).

---

## 7. SEO technique (Next.js 16 / Vercel — pas Shopify)

### Vitesse & Core Web Vitals

- **LCP** (cible < 2,5 s) : le LCP mobile est l'image active de la galerie. Déjà bien : `priority` sur l'image 1, montage différé des 6 autres, `quality={70}`. À faire : `placeholder="blur"`, activer AVIF, `<link rel="preconnect">` vers les domaines tiers effectivement utilisés (GA/GTM), vérifier que les polices sont via `next/font` (zéro requête bloquante, `display: swap`).
- **CLS** (cible < 0,1) : conteneurs image en `aspect-square` → OK. Points de vigilance : le bandeau compte à rebours de la navbar et les blocs `Reveal` (les animations d'apparition ne doivent pas déplacer le contenu — animer `opacity/transform` uniquement, jamais `height`). Réserver la hauteur de la barre panier mobile.
- **INP** (cible < 200 ms) : chasser les gros composants client. Tout ce qui n'a pas d'interactivité doit être Server Component (SeoContent, FAQ statique, footer). Les handlers du slider quantité et de la galerie sont légers → OK. GA4 : charger via `@next/third-parties` (déjà en dépendance — vérifier l'usage) qui diffère les scripts tiers.
- **JavaScript** : `next build` + analyse (`ANALYZE=true` avec `@next/bundle-analyzer`) ; lucide-react est tree-shaké par import nommé → OK ; éviter d'embarquer les 3 xlsx du dossier racine (hors `src`, non bundlés → juste les sortir du repo).
- **CSS** : Tailwind v4 purge automatiquement → rien à faire. Inline critical CSS géré par Next.
- **Cache** : Vercel met en cache les pages statiques à l'edge. S'assurer que toutes les pages contenu sont **statiques** (pas de `dynamic = 'force-dynamic'`, pas de lecture de cookies/headers dans les pages SEO). Les pages villes en `generateStaticParams` = servies depuis le CDN. Assets : immutable par défaut sur Vercel.
- **Lazy loading** : `next/image` par défaut ; ne PAS lazy-loader l'image LCP (géré) ; lazy pour les sections sous la ligne de flottaison via composants (les `Reveal` actuels ne doivent pas masquer le contenu au crawl — le texte doit être dans le HTML initial, animation en CSS seulement).

### Indexation

- **sitemap.ts** : ajouter dynamiquement les 21 villes + 7 enseignes + tous les articles, avec `lastModified` réels (dates de vraie mise à jour — signal de fraîcheur). Vérifier la soumission dans Search Console.
- **robots.ts** : Allow tout sauf `/compte`, `/suivi` (pages sans valeur SEO) ; référencer le sitemap. Ne PAS bloquer les ressources _next/static.
- **Canonical** : `alternates: { canonical }` dans `generateMetadata` de chaque page (absolu, self-referencing). Vital pour les pages villes/enseignes (proches structurellement).
- **Pagination** : le blog aura ~24 articles → une seule page d'index suffit (pas de pagination = pas de problème). Si pagination un jour : `?page=2` avec canonical self, pas de noindex.
- **Hreflang** : lier FR ↔ ES : `alternates: { languages: { 'fr-FR': 'https://moneclipsesolaire.fr', 'es-ES': 'https://mieclipsesolar.es' } }` sur les pages équivalentes (quand le domaine ES sera actif).
- **404/redirections** : toute URL supprimée → redirect 301 dans `next.config.ts`.
- **Search Console** : suivre l'indexation des 50+ nouvelles URLs ; demander l'indexation manuelle des pages stratégiques à la publication.

### Netlinking (hors périmètre demandé mais indispensable pour battre Amazon)

Le contenu seul ne suffira pas contre les DR 90+. Pistes à fort ROI : communiqué + carte occultation libre de droits vers la presse quotidienne régionale (chaque PQR fera un article « l'éclipse à {ville} ») ; partenariats clubs d'astronomie (AFA, SAF) ; le fichier pharmacies/tabacs B2B existant = points de vente physiques → pages « revendeurs » et liens locaux ; HARO français (Relations Presse : réponse experte « dangers éclipse » aux journalistes en août).

### Calendrier récapitulatif

| Quand | Quoi |
|---|---|
| Semaine 1 (mi-juillet) | JSON-LD complet, canonicals, sitemap dynamique, composants CTA, articles P0 (A1, A2, A3, A4, A7, A11, A14) |
| Semaines 2-3 | Route `/eclipse/[ville]` + 21 pages villes (données IMCCE validées), hub villes, articles P1 |
| Semaine 4 (début août) | 7 pages enseignes, articles P2, campagne presse/PQR, mise à jour météo |
| 5-12 août | Fraîcheur : maj quotidienne A19 (météo), monitoring Search Console, stock/prix |
| Après le 12 août | Pivot A16/A17 (éclipses 2027/2028) — le site devient une rente SEO multi-éclipses |
