import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "difference-ce-iso-12312-2")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Le marquage CE seul ne suffit pas pour observer une éclipse : il faut la
        mention ISO 12312-2, adossée à un certificat de laboratoire vérifiable.</strong> CE et
        ISO 12312-2 ne disent pas la même chose — le premier est une déclaration de conformité
        réglementaire, la seconde une norme technique aux exigences chiffrées. Confondre les
        deux est l&apos;un des pièges les plus courants à l&apos;approche du 12 août 2026. Voici
        ce que chacun garantit, et la combinaison à exiger.
      </p>

      <h2>Le marquage CE : une déclaration de conformité</h2>
      <p>
        Le marquage CE signifie que le produit est <strong>déclaré conforme aux règlements
        européens</strong> qui lui sont applicables. Pour les lunettes d&apos;éclipse, il
        s&apos;agit du <strong>règlement EPI 2016/425</strong> sur les équipements de protection
        individuelle. Les filtres d&apos;observation solaire relèvent des EPI de{" "}
        <strong>catégorie II</strong> : un <strong>organisme notifié</strong> — un laboratoire
        désigné par un État membre — doit intervenir dans l&apos;évaluation avant la mise sur le
        marché. Sur le papier, le dispositif est donc sérieux.
      </p>
      <p>
        Le problème n&apos;est pas le cadre réglementaire, c&apos;est sa contrefaçon : les deux
        lettres « CE » imprimées sur une monture <strong>ne coûtent rien à reproduire</strong>.
        Un marquage imprimé, seul, ne prouve ni qu&apos;un organisme notifié est réellement
        intervenu, ni que le produit testé est celui que vous tenez entre les mains. Le CE est
        nécessaire — il n&apos;est pas suffisant.
      </p>

      <h2>ISO 12312-2 : une norme technique précise</h2>
      <p>
        L&apos;ISO 12312-2 est la <strong>norme internationale des filtres d&apos;observation
        directe du Soleil</strong>. Contrairement au marquage CE, qui renvoie à un cadre
        réglementaire général, elle fixe des <strong>exigences chiffrées</strong> : une
        transmission de la lumière visible inférieure à 0,0032&nbsp;% — soit une{" "}
        <strong>densité optique d&apos;au moins 5</strong> —, le blocage des ultraviolets et des
        infrarouges dans des limites définies, ainsi que des exigences sur la qualité du filtre
        et les marquages d&apos;usage. C&apos;est cette norme, et elle seule, qui définit ce
        qu&apos;est un filtre d&apos;éclipse sûr.
      </p>

      <h2>Le piège : CE sans ISO 12312-2</h2>
      <p>
        Des lunettes de soleil ordinaires portent un marquage CE parfaitement légitime — au
        titre de la réglementation des lunettes de soleil, pas des filtres solaires. Elles sont
        conformes pour la plage, et <strong>totalement inadaptées à l&apos;observation du
        Soleil</strong> : elles laissent passer des milliers de fois trop de lumière et ne
        bloquent pas correctement les infrarouges. Un « CE » sur la branche ne vous autorise
        donc jamais à fixer le Soleil — nous l&apos;expliquons en détail dans notre article{" "}
        <a href="/blog/lunettes-de-soleil-eclipse-danger">lunettes de soleil et éclipse : le
        danger</a>. Le piège est là : un produit peut être CE <em>et</em> dangereux pour
        l&apos;éclipse, si sa conformité porte sur autre chose que la norme ISO 12312-2.
      </p>

      <h2>La combinaison à exiger</h2>
      <p>
        Pour des lunettes d&apos;éclipse, aucun des éléments ne suffit isolément. Exigez les
        quatre ensemble :
      </p>
      <ol>
        <li>
          <strong>Le marquage CE</strong>, au titre du règlement EPI 2016/425.
        </li>
        <li>
          <strong>La mention ISO 12312-2</strong> imprimée sur la monture, avec le nom du
          fabricant ou du distributeur.
        </li>
        <li>
          <strong>Un certificat de laboratoire vérifiable</strong> : un organisme nommé, un
          document consultable, idéalement un registre public — comme celui de{" "}
          <a href="/blog/din-certco-certification">DIN CERTCO</a>, qui certifie nos filtres.
        </li>
        <li>
          <strong>Un vendeur identifiable</strong>, avec une raison sociale et une adresse, qui
          répond du produit qu&apos;il met sur le marché.
        </li>
      </ol>
      <p>
        C&apos;est la combinaison que nous appliquons à nos propres produits : notre certificat
        est publié sur la <a href="/certifications">page certifications</a>, et nos{" "}
        <a href="/#produits">lunettes certifiées CE et ISO 12312-2 sont disponibles dès
        3,99&nbsp;€</a>, livrées en 72&nbsp;h.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Des lunettes CE sans mention ISO sont-elles sûres pour l&apos;éclipse ?</h3>
      <p>
        <strong>Non.</strong> Le CE seul indique une conformité réglementaire qui peut porter
        sur tout autre chose — des lunettes de soleil classiques, par exemple. Sans la mention
        ISO 12312-2 et un certificat qui l&apos;atteste, le produit ne doit jamais servir à
        regarder le Soleil, même partiellement éclipsé.
      </p>

      <h3>Que vaut le marquage UKCA ?</h3>
      <p>
        L&apos;UKCA est l&apos;<strong>équivalent britannique du marquage CE</strong>, mis en
        place après le Brexit pour les produits vendus en Grande-Bretagne. La logique est la
        même : c&apos;est une déclaration de conformité réglementaire, pas une preuve technique.
        Les mêmes réflexes s&apos;appliquent — mention ISO 12312-2 et certificat de laboratoire
        vérifiable.
      </p>

      <h3>Qui contrôle réellement ?</h3>
      <p>
        Trois niveaux se complètent. L&apos;<strong>organisme notifié</strong> (ou le
        laboratoire certificateur) évalue le produit avant sa mise sur le marché. Les{" "}
        <strong>autorités de surveillance du marché</strong> — en France, la DGCCRF — peuvent
        contrôler les produits en vente et ordonner des retraits. Et en bout de chaîne, le{" "}
        <strong>consommateur</strong> reste le dernier filtre : vérifier le certificat et tester
        les lunettes à réception, c&apos;est le contrôle que personne ne fera à votre place.
      </p>
    </BlogArticle>
  );
}
