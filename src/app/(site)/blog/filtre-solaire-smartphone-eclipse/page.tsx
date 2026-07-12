import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "filtre-solaire-smartphone-eclipse")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Oui, vous pouvez photographier l&apos;éclipse du 12 août 2026 avec votre
        smartphone — à condition de placer un filtre solaire certifié devant l&apos;objectif.</strong>{" "}
        Et la solution la plus simple tient dans votre poche : une lunette d&apos;éclipse
        ISO&nbsp;12312-2, fixée devant les modules photo. Voici le risque réel pour votre
        téléphone, le tuto en trois étapes, et les réglages qui font la différence.
      </p>

      <h2>Le risque réel pour votre smartphone</h2>
      <p>
        Un smartphone pointé quelques instants vers le Soleil ne meurt pas sur le coup — et
        c&apos;est bien le piège. Le vrai danger, c&apos;est l&apos;<strong>exposition
        prolongée</strong> : cadrer, filmer, suivre l&apos;éclipse pendant de longues minutes
        avec un capteur qui reçoit en continu la lumière solaire non filtrée. Résultat possible :{" "}
        <strong>échauffement du capteur, pixels endommagés de façon permanente</strong>, taches
        ou traînées visibles sur toutes vos photos suivantes. Le risque augmente nettement{" "}
        <strong>en zoom</strong> : le module téléobjectif concentre davantage de lumière sur une
        zone plus petite du capteur. Une éclipse se déroule sur près de deux heures — exactement
        le scénario d&apos;exposition prolongée à éviter.
      </p>

      <h2>La solution la plus simple : une lunette d&apos;éclipse devant l&apos;objectif</h2>
      <p>
        Le film qui protège vos yeux protège aussi votre capteur. Pas besoin d&apos;accessoire
        spécialisé : une lunette d&apos;éclipse certifiée fait un excellent filtre de
        smartphone. Le montage prend une minute :
      </p>
      <ol>
        <li>
          <strong>Positionnez le filtre sur tous les objectifs arrière.</strong> Les smartphones
          récents ont deux, trois ou quatre modules photo : le film doit couvrir
          l&apos;ensemble du bloc, car vous ne savez pas toujours quel module l&apos;appareil
          utilise à un instant donné.
        </li>
        <li>
          <strong>Fixez avec un élastique ou du ruban adhésif</strong> posé sur la monture en
          carton — jamais de colle ni d&apos;adhésif directement sur le film filtrant, qui ne
          doit être ni plié, ni rayé, ni percé.
        </li>
        <li>
          <strong>Vérifiez qu&apos;aucun interstice ne laisse passer la lumière.</strong>{" "}
          Regardez l&apos;écran : si un halo ou un voile lumineux apparaît sur le bord de
          l&apos;image, de la lumière directe contourne le filtre. Repositionnez jusqu&apos;à
          obtenir un fond noir avec le seul disque solaire visible.
        </li>
      </ol>
      <p>
        C&apos;est d&apos;ailleurs l&apos;un des usages que nous montrons sur notre{" "}
        <a href="/#produits">fiche produit</a> : une paire sur le nez, une paire devant
        l&apos;objectif.
      </p>

      <h2>Les réglages qui changent tout</h2>
      <p>
        Une fois le filtre en place, l&apos;automatique de votre téléphone reste déboussolé par
        ce point brillant sur fond noir. Cinq réglages corrigent le tir :
      </p>
      <ul>
        <li>
          <strong>Verrouillez AE/AF</strong> : appui long sur le Soleil à l&apos;écran pour
          bloquer exposition et mise au point.
        </li>
        <li>
          <strong>Baissez l&apos;exposition</strong> avec le curseur (soleil ou ±) jusqu&apos;à
          voir un disque net et détaillé, pas une tache blanche cramée.
        </li>
        <li>
          <strong>Mode pro et RAW</strong> si votre téléphone les propose : vous récupérerez
          bien plus de détail au traitement.
        </li>
        <li>
          <strong>Zoom optique ×2 à ×5</strong>, jamais le zoom numérique au-delà : il
          n&apos;ajoute aucun détail, seulement du bruit.
        </li>
        <li>
          <strong>Trépied + retardateur 3&nbsp;s</strong> : image stable, mains libres pour
          observer avec vos lunettes pendant que le téléphone travaille.
        </li>
      </ul>
      <p>
        Pour les compositions avec paysage et le Soleil bas de 20&nbsp;h&nbsp;30 — le grand
        atout de 2026 — consultez notre{" "}
        <a href="/blog/photographier-eclipse-solaire">guide complet de la photo
        d&apos;éclipse</a>.
      </p>

      <h2>Les accessoires inutiles ou risqués</h2>
      <ul>
        <li>
          <strong>Les filtres ND photo classiques</strong> (y compris ND&nbsp;1000) :
          insuffisants. Ils assombrissent la lumière visible mais ne sont pas certifiés pour
          bloquer les UV et les infrarouges. Bons pour les poses longues, pas pour le Soleil.
        </li>
        <li>
          <strong>Les films non certifiés</strong> vendus comme « filtres solaires » sans
          mention ISO&nbsp;12312-2 vérifiable : impossible de savoir ce qu&apos;ils bloquent
          réellement.
        </li>
        <li>
          <strong>Les applications « filtre solaire »</strong> : un logiciel assombrit
          l&apos;image affichée, pas la lumière qui frappe le capteur. Ces applications ne
          protègent <strong>rien du tout</strong>.
        </li>
      </ul>
      <p>
        Les autres pièges du jour J sont listés dans notre article sur{" "}
        <a href="/blog/erreurs-eclipse-solaire">les 10 erreurs à ne jamais commettre</a>.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Puis-je filmer toute l&apos;éclipse en vidéo ?</h3>
      <p>
        <strong>Oui, avec le filtre en place du début à la fin.</strong> Deux précautions : un
        trépied (près de deux heures de captation) et un œil sur la température du téléphone —
        en plein mois d&apos;août, un smartphone qui filme en 4K au soleil chauffe vite. Prévoyez
        de l&apos;ombre pour l&apos;appareil entre deux séquences, et une batterie externe.
      </p>

      <h3>Faut-il une application spéciale ?</h3>
      <p>
        <strong>Non.</strong> L&apos;application photo native suffit largement dès lors que vous
        verrouillez l&apos;exposition et utilisez le mode pro ou RAW si disponible. Aucune
        application ne remplace le filtre physique devant l&apos;objectif.
      </p>

      <h3>Une seule paire suffit-elle pour mes yeux ET mon téléphone ?</h3>
      <p>
        En alternant, c&apos;est possible, mais peu pratique : vous passerez l&apos;éclipse à
        monter et démonter le filtre. L&apos;idéal est simplement de prévoir{" "}
        <strong>deux paires : une pour observer, une dédiée au téléphone</strong> — d&apos;autant
        que les tarifs dégressifs rendent la seconde paire presque symbolique.
      </p>
    </BlogArticle>
  );
}
