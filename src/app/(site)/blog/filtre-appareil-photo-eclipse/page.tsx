import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "filtre-appareil-photo-eclipse")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Pour photographier l&apos;éclipse du 12 août 2026 sans détruire votre matériel,
        un filtre solaire certifié placé à l&apos;avant de l&apos;objectif est obligatoire pendant
        toutes les phases partielles.</strong> Un simple filtre ND de photographe ne suffit pas,
        et cadrer le Soleil « juste deux secondes » sans protection peut coûter un capteur — ou
        pire, un œil derrière un viseur optique. Voici les solutions qui fonctionnent, et les
        erreurs à ne jamais commettre.
      </p>

      <h2>Pourquoi votre boîtier risque gros</h2>
      <p>
        Un objectif photo est, littéralement, une <strong>loupe</strong> : il concentre la lumière
        du Soleil en un point minuscule. Pointé vers le Soleil sans filtre, il peut{" "}
        <strong>brûler le capteur</strong>, faire fondre les lamelles d&apos;obturateur, endommager
        le diaphragme et même marquer les lentilles internes. Quelques secondes suffisent, et la
        réparation dépasse souvent le prix d&apos;un boîtier d&apos;entrée de gamme.
      </p>
      <p>
        Le pire scénario n&apos;est pourtant pas matériel : sur un reflex, le{" "}
        <strong>viseur optique</strong> renvoie la lumière concentrée par l&apos;objectif
        directement vers votre œil. <strong>Regarder le Soleil dans un viseur non filtré, c&apos;est
        regarder le Soleil à travers une loupe</strong> — la brûlure rétinienne est quasi
        instantanée et irréversible. C&apos;est la raison pour laquelle le filtre se monte toujours
        à l&apos;avant, avant même de lever l&apos;appareil vers le ciel.
      </p>

      <h2>Les trois solutions de filtrage</h2>

      <h3>Le filtre solaire vissant certifié</h3>
      <p>
        La solution de référence pour reflex et hybrides : un <strong>filtre solaire vissant</strong>{" "}
        au diamètre de votre objectif, conçu spécifiquement pour l&apos;observation et la
        photographie du Soleil. Attention : ce n&apos;est <strong>pas</strong> un simple filtre ND
        de photographe. Un ND1000, très courant pour les poses longues, est{" "}
        <strong>largement insuffisant</strong> face au Soleil — il faut l&apos;équivalent
        d&apos;une densité optique&nbsp;5, soit une atténuation cent fois plus forte. Exigez un
        filtre explicitement vendu pour l&apos;usage solaire.
      </p>

      <h3>La feuille de film solaire à monter soi-même</h3>
      <p>
        Le <strong>film solaire en feuille</strong> (type polymère ou Mylar spécialisé) se découpe
        et se monte dans un porte-filtre ou dans un cache maison en carton ajusté au pare-soleil.
        C&apos;est la solution la plus économique pour les grands diamètres et les jumelles. La
        règle d&apos;or : un montage <strong>rigide, sans pli et sans le moindre interstice</strong>{" "}
        par lequel la lumière directe pourrait passer.
      </p>

      <h3>La lunette d&apos;éclipse devant l&apos;objectif</h3>
      <p>
        Pour un <strong>smartphone ou un compact à focale courte</strong>, une lunette
        d&apos;éclipse certifiée ISO 12312-2 fixée devant l&apos;objectif fait parfaitement
        l&apos;affaire : le filtre est le même que celui qui protège vos yeux. Nous avons détaillé
        la méthode dans notre guide{" "}
        <a href="/blog/filtre-solaire-smartphone-eclipse">photographier l&apos;éclipse au
        smartphone</a>. Nos lunettes certifiées, disponibles{" "}
        <a href="/#produits">dès 2,99&nbsp;€</a>, servent donc à la fois à vos yeux et à votre
        téléphone.
      </p>

      <h2>Montage et vérifications</h2>
      <p>
        Trois règles valent pour toutes les solutions :
      </p>
      <ul>
        <li>
          <strong>Toujours à l&apos;avant de l&apos;optique</strong>, jamais côté oculaire. Un
          filtre placé près du viseur ou de l&apos;oculaire reçoit une lumière déjà concentrée : il
          peut chauffer, se fissurer et céder d&apos;un coup.
        </li>
        <li>
          <strong>Contrôler l&apos;absence d&apos;interstice</strong> : à contre-jour, aucune fuite
          de lumière ne doit passer entre le filtre et l&apos;objectif. Fixation solide, testée
          avant le jour J.
        </li>
        <li>
          <strong>Ne retirer le filtre que si l&apos;appareil ne vise plus le Soleil</strong>. En
          France, l&apos;éclipse du 12 août 2026 reste partielle du début à la fin : le filtre
          reste en place en permanence.
        </li>
      </ul>

      <h2>Les erreurs qui coûtent un capteur</h2>
      <ul>
        <li>
          <strong>Cadrer sans filtre « juste 2 secondes »</strong> : le temps de composer votre
          image, la lumière concentrée travaille déjà. C&apos;est l&apos;erreur la plus fréquente —
          et la plus chère.
        </li>
        <li>
          <strong>Laisser l&apos;appareil sur trépied pointé vers le Soleil sans filtre</strong>,
          même éteint : l&apos;optique concentre la lumière en continu, obturateur et rideaux en
          première ligne.
        </li>
        <li>
          <strong>Envoyer un drone face au Soleil</strong> : la petite caméra fixe encaisse la
          lumière directe sans aucune protection possible, et le pilote perd souvent l&apos;image
          au pire moment.
        </li>
      </ul>
      <p>
        Nous avons rassemblé toutes les fautes classiques du jour J dans notre article sur{" "}
        <a href="/blog/erreurs-eclipse-solaire">les 10 erreurs à ne jamais commettre</a>. Et pour
        les réglages — exposition, mise au point, composition avec un Soleil bas sur
        l&apos;horizon — consultez notre{" "}
        <a href="/blog/photographier-eclipse-solaire">guide complet de la photo
        d&apos;éclipse</a>.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Un filtre ND1000 suffit-il ?</h3>
      <p>
        <strong>Non.</strong> Un ND1000 atténue la lumière d&apos;un facteur mille, ce qui est très
        loin du compte : la photographie solaire exige l&apos;équivalent d&apos;une{" "}
        <strong>densité optique&nbsp;5</strong>, soit une atténuation d&apos;un facteur cent mille.
        Un ND1000 laisse passer assez d&apos;énergie pour endommager le capteur — et il ne filtre
        pas correctement les infrarouges.
      </p>

      <h3>Et pour des jumelles ou une lunette astronomique ?</h3>
      <p>
        Même principe, encore plus critique : des <strong>filtres pleine ouverture montés à
        l&apos;avant</strong> de chaque objectif, jamais un simple oculaire filtrant seul. Un
        filtre placé à l&apos;oculaire reçoit toute la lumière déjà concentrée par
        l&apos;instrument : il peut éclater pendant l&apos;observation, l&apos;œil collé derrière.
      </p>

      <h3>Une lunette d&apos;éclipse en carton tient-elle sur un reflex ?</h3>
      <p>
        En dépannage, oui — <strong>pour une focale courte uniquement</strong>, et à condition que
        la lunette soit parfaitement fixée devant l&apos;objectif, sans le moindre interstice. Pour
        un téléobjectif, le filtre d&apos;une lunette est trop petit face au diamètre de la
        lentille frontale : préférez un <strong>vrai filtre solaire pleine ouverture</strong> au
        bon diamètre.
      </p>
    </BlogArticle>
  );
}
