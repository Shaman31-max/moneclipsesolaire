import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "photographier-eclipse-solaire")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Pour photographier l&apos;éclipse du 12 août 2026 sans risque, une seule règle
        absolue : placer un filtre solaire certifié devant l&apos;objectif, du début à la fin des
        phases partielles.</strong> Le reste — réglages, trépied, composition — se prépare en une
        soirée. Et cette éclipse a un atout rare : le maximum se produira vers 20&nbsp;h&nbsp;30,
        avec un Soleil bas sur l&apos;horizon ouest, en pleine lumière dorée. Un cadeau pour les
        photographes, à condition de respecter quelques règles simples. Voici le guide complet,
        du smartphone au reflex.
      </p>

      <h2>La règle n°1 : filtrer l&apos;objectif, pas seulement vos yeux</h2>
      <p>
        On pense d&apos;abord à protéger ses yeux — à raison. Mais un appareil photo pointé vers
        le Soleil sans filtre court le même danger, en accéléré. <strong>Un objectif est une
        loupe : il concentre la lumière du Soleil sur une surface minuscule</strong>, le capteur
        ou, pire, votre rétine si vous regardez dans un viseur optique. Sans filtre, les
        dommages peuvent survenir <strong>en quelques secondes</strong> : pixels brûlés, rideau
        d&apos;obturateur marqué, lamelles de diaphragme déformées par la chaleur. Et
        contrairement à une carte mémoire pleine, un capteur brûlé ne se vide pas.
      </p>
      <p>
        La conséquence pratique est simple : <strong>le filtre solaire se place toujours à
        l&apos;avant de l&apos;optique</strong>, avant que la lumière ne soit concentrée. Vos
        lunettes d&apos;éclipse protègent vos yeux ; votre matériel a besoin de sa propre
        protection.
      </p>

      <h2>Au smartphone</h2>
      <p>
        Bonne nouvelle : le smartphone est l&apos;appareil le plus simple à équiper, et le
        Soleil bas de 2026 lui convient parfaitement.
      </p>

      <h3>Le filtre : une lunette d&apos;éclipse devant l&apos;objectif</h3>
      <p>
        La solution la plus accessible consiste à <strong>fixer une lunette d&apos;éclipse
        ISO&nbsp;12312-2 devant les objectifs arrière</strong> de votre téléphone : le film
        filtrant qui protège vos yeux protège tout aussi bien un petit capteur. Positionnez le
        filtre pour couvrir <strong>tous</strong> les modules photo, maintenez-le avec un
        élastique ou un ruban adhésif posé sur la monture en carton, et vérifiez
        qu&apos;aucun interstice ne laisse passer de lumière directe. Nous avons consacré un{" "}
        <a href="/blog/filtre-solaire-smartphone-eclipse">guide détaillé au filtre solaire pour
        smartphone</a>, avec le tuto pas à pas et les réglages spécifiques.
      </p>

      <h3>Les réglages : verrouiller, pas laisser faire</h3>
      <p>
        Le mode automatique est perdu face à un point brillant sur fond sombre. Trois gestes
        changent tout : <strong>verrouillez l&apos;exposition et la mise au point</strong>{" "}
        (appui long sur le Soleil, puis baissez l&apos;exposition), activez le{" "}
        <strong>format RAW</strong> si votre téléphone le propose (mode Pro ou Expert) pour
        garder de la latitude au traitement, et préférez le <strong>zoom optique au zoom
        numérique</strong> : un ×3 ou ×5 optique donne un disque solaire net, quand le zoom
        numérique ne fait qu&apos;agrandir du flou.
      </p>

      <h3>Trépied et retardateur</h3>
      <p>
        Même un petit trépied de table transforme le résultat : plus de flou de bougé, un
        cadrage stable pendant près de deux heures d&apos;éclipse, et les mains libres pour
        observer avec vos lunettes. Ajoutez le <strong>retardateur de 3&nbsp;secondes</strong>{" "}
        pour éliminer la vibration du doigt au déclenchement. C&apos;est le duo le moins cher et
        le plus rentable de toute votre installation.
      </p>

      <h2>Au reflex ou hybride</h2>

      <h3>Un filtre certifié, toujours à l&apos;avant de l&apos;objectif</h3>
      <p>
        Pour un capteur de reflex ou d&apos;hybride, utilisez un <strong>filtre solaire vissant
        ND&nbsp;5.0 certifié pour l&apos;observation solaire</strong> ou une{" "}
        <strong>feuille de filtre solaire</strong> montée dans un porte-filtre ou un support
        artisanal soigné. Le point non négociable : le filtre se monte{" "}
        <strong>à l&apos;avant de l&apos;objectif, jamais entre le boîtier et
        l&apos;objectif</strong>. Placé derrière l&apos;optique, il reçoit une lumière déjà
        concentrée : il peut chauffer, se fissurer et laisser passer le faisceau d&apos;un coup.
        Attention également : un ND&nbsp;classique de photographe (ND&nbsp;1000 compris)
        n&apos;est <strong>pas</strong> un filtre solaire — il ne bloque ni les UV ni les
        infrarouges de façon certifiée.
      </p>

      <h3>Les réglages de départ</h3>
      <p>
        Avec le filtre en place, partez d&apos;une base simple : <strong>100 à 400&nbsp;ISO,
        ouverture f/8, vitesse entre 1/500 et 1/2000&nbsp;s</strong>. Faites une première série,
        contrôlez l&apos;histogramme, puis <strong>bracketez</strong> : trois à cinq vues à des
        vitesses différentes autour de votre exposition de référence. La luminosité du Soleil
        évoluera au fil de l&apos;éclipse et de sa descente vers l&apos;horizon — le bracketing
        vous garantit une image bien exposée à chaque étape.
      </p>

      <h3>Mise au point manuelle sur l&apos;infini, en live view</h3>
      <p>
        L&apos;autofocus patine souvent sur le disque solaire filtré. Passez en{" "}
        <strong>mise au point manuelle</strong>, activez le live view, zoomez à ×10 sur le bord
        du Soleil et ajustez jusqu&apos;à obtenir un liseré net. Ne vous fiez pas à la butée
        « infini » de la bague, souvent au-delà de l&apos;infini réel. Une fois la netteté
        trouvée, verrouillez la bague avec un morceau de ruban : vous n&apos;y toucherez plus.
      </p>

      <h2>L&apos;angle unique de 2026 : un Soleil éclipsé au ras de l&apos;horizon</h2>
      <p>
        La plupart des photos d&apos;éclipses se ressemblent : un disque échancré sur fond noir,
        au téléobjectif. Le 12 août 2026 offre autre chose. Avec un maximum vers{" "}
        <strong>20&nbsp;h&nbsp;30 et un Soleil bas sur l&apos;horizon ouest</strong>,
        l&apos;éclipse se déroule en pleine golden hour : le croissant solaire pourra être{" "}
        <strong>composé avec un paysage</strong> — ligne de crête, mer, monument, champ de
        tournesols — au lieu de flotter seul dans le ciel.
      </p>
      <p>
        Concrètement, cela signifie que <strong>les focales moyennes redeviennent
        intéressantes</strong> : un 50 ou un 85&nbsp;mm suffisent pour inscrire le Soleil
        éclipsé dans une scène, là où une éclipse haute dans le ciel n&apos;offre que le gros
        plan au téléobjectif. Pensez aussi aux <strong>silhouettes</strong> : observateurs de
        dos, lunettes sur le nez, face au couchant — l&apos;image qui raconte l&apos;événement
        mieux qu&apos;aucun gros plan. Repérez votre spot à l&apos;avance : il vous faut un{" "}
        <strong>horizon ouest parfaitement dégagé</strong>, et quelques degrés de hauteur
        peuvent faire la différence entre une éclipse visible et une éclipse cachée derrière
        les toits. Et pour être équipé le jour J, nos{" "}
        <a href="/#produits">lunettes certifiées ISO&nbsp;12312-2</a> servent à la fois à vos
        yeux et de filtre d&apos;appoint pour smartphone.
      </p>

      <h2>À ne jamais faire</h2>
      <ul>
        <li>
          <strong>Regarder dans un viseur optique sans filtre</strong> : le viseur d&apos;un
          reflex conduit la lumière concentrée par l&apos;objectif directement à votre œil.
          C&apos;est l&apos;erreur la plus dangereuse de toutes.
        </li>
        <li>
          <strong>Viser sans filtre « juste pour cadrer »</strong> : quelques secondes suffisent
          pour endommager un capteur. Le filtre se pose avant de lever l&apos;appareil vers le
          ciel, et ne se retire jamais tant que le Soleil est dans le cadre.
        </li>
        <li>
          <strong>Laisser l&apos;appareil pointé vers le Soleil sans surveillance</strong>, même
          filtré, en plein après-midi d&apos;août : la chauffe reste l&apos;ennemie du matériel.
        </li>
        <li>
          <strong>Envoyer un drone face au Soleil</strong> : la caméra n&apos;est pas filtrable
          facilement, et le pilotage face au couchant est risqué pour l&apos;appareil comme pour
          les personnes au sol.
        </li>
      </ul>
      <p>
        Ces pièges — et les autres — sont détaillés dans notre article sur{" "}
        <a href="/blog/erreurs-eclipse-solaire">les 10 erreurs à ne jamais commettre le jour de
        l&apos;éclipse</a>.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Une lunette d&apos;éclipse devant l&apos;objectif suffit-elle ?</h3>
      <p>
        <strong>Oui pour un smartphone et pour les focales modestes</strong> : le film certifié
        ISO&nbsp;12312-2 bloque la lumière visible, les UV et les infrarouges, ce qui protège un
        petit capteur sans difficulté. Pour un téléobjectif lumineux de reflex, préférez un
        filtre solaire dédié au bon diamètre, qui couvre toute la lentille frontale sans
        interstice.
      </p>

      <h3>Le capteur peut-il vraiment griller ?</h3>
      <p>
        Oui. Un objectif concentre l&apos;énergie solaire comme une loupe : sans filtre, la zone
        du capteur qui reçoit l&apos;image du Soleil peut chauffer au point de{" "}
        <strong>détruire des pixels de façon définitive</strong>, surtout en longue focale ou en
        mode vidéo où le capteur est exposé en continu. Les réparations coûtent souvent plus
        cher qu&apos;un filtre… quand elles sont possibles.
      </p>

      <h3>Et avec des jumelles ou une lunette astronomique ?</h3>
      <p>
        <strong>Jamais sans filtres solaires dédiés placés à l&apos;avant</strong> de chaque
        objectif. Des jumelles concentrent bien plus de lumière qu&apos;un œil nu : une fraction
        de seconde sans filtre suffit à causer une lésion grave. Et n&apos;utilisez jamais vos
        lunettes d&apos;éclipse <em>derrière</em> l&apos;oculaire : la lumière concentrée les
        détruirait instantanément.
      </p>
    </BlogArticle>
  );
}
