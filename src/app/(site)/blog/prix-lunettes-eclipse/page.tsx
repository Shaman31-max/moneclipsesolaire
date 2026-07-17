import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "prix-lunettes-eclipse")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Une paire de lunettes d&apos;éclipse certifiée ISO&nbsp;12312-2 peut
        honnêtement coûter moins de 5&nbsp;€ — et pourtant, à l&apos;approche du 12 août 2026,
        vous en verrez à 15 ou 20&nbsp;€.</strong> L&apos;écart ne vient pas de la qualité du
        filtre : la norme est la même pour tous. Il vient du moment et du canal d&apos;achat.
        Voici ce qui compose réellement le prix, et pourquoi il vaut mieux commander tôt.
      </p>

      <h2>De quoi est fait le prix d&apos;une paire</h2>
      <p>
        Une lunette d&apos;éclipse est un objet simple, mais pas trivial : un{" "}
        <strong>film filtrant certifié</strong> — le composant clé, celui qui bloque la lumière
        visible, les UV et les infrarouges —, une <strong>monture en carton</strong> imprimée et
        découpée, des <strong>tests en laboratoire</strong> pour obtenir et maintenir la
        certification ISO&nbsp;12312-2, puis la logistique : emballage, transport, stockage. À
        l&apos;échelle industrielle, tout cela reste modeste : <strong>une paire honnête peut
        coûter moins de 5&nbsp;€</strong>, marge comprise. Un prix bas n&apos;est donc pas en
        soi un signal de mauvaise qualité — à condition que la certification soit réelle et
        vérifiable, comme l&apos;explique notre{" "}
        <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">checklist de vérification</a>.
      </p>

      <h2>Pourquoi certains vendent 15-20&nbsp;€</h2>
      <p>
        Trois mécanismes expliquent les prix élevés. D&apos;abord les{" "}
        <strong>marges d&apos;opportunité</strong> : un événement rare, une demande concentrée
        sur quelques semaines, des acheteurs pressés — certains vendeurs ajustent simplement
        leurs prix à ce que le moment permet. Ensuite les <strong>packs</strong> : lunettes
        vendues avec livret, carte souvenir ou étui, qui gonflent le panier sans changer la
        protection. Enfin la <strong>revente spéculative</strong> : des particuliers ou des
        vendeurs tiers achètent des stocks tôt pour les revendre au prix fort quand les canaux
        classiques sont épuisés. Dans les trois cas, vous payez le contexte,{" "}
        <strong>pas un meilleur filtre</strong>.
      </p>

      <h2>Le scénario qui se répète : la flambée des derniers jours</h2>
      <p>
        Ce n&apos;est pas une hypothèse, c&apos;est un scénario documenté à chaque grande
        éclipse. En Europe lors de l&apos;éclipse du <strong>11 août 1999</strong>, comme aux
        États-Unis en <strong>2017</strong> puis en <strong>avril 2024</strong>, la dernière
        semaine a vu se combiner <strong>ruptures de stock généralisées</strong> — pharmacies,
        enseignes, sites spécialisés — et <strong>prix multipliés</strong> sur les canaux encore
        approvisionnés, marketplaces en tête. Les acheteurs de dernière minute se sont retrouvés
        face à un choix inconfortable : payer très cher, se rabattre sur des produits à la
        certification douteuse, ou renoncer à l&apos;observation directe. Il n&apos;y a aucune
        raison que l&apos;été 2026 échappe à la règle.
      </p>

      <h2>Bien acheter : tôt, certifié, en quantité adaptée</h2>
      <p>
        La stratégie gagnante tient en trois mots. <strong>Tôt</strong> : commander plusieurs
        semaines avant l&apos;éclipse, c&apos;est payer le prix normal et éviter la loterie des
        derniers jours. <strong>Certifié</strong> : marquage ISO&nbsp;12312-2 vérifiable, point
        final. <strong>En quantité adaptée</strong> : une paire par personne — les lunettes ne
        se prêtent pas au moment du maximum — plus une ou deux de secours, car un film rayé ou
        percé se jette. Les <strong>tarifs dégressifs</strong> rendent la commande groupée
        logique : équiper toute la famille, les grands-parents et les voisins en une fois
        revient moins cher que trois commandes séparées. Pour les enfants, notre{" "}
        <a href="/blog/eclipse-enfants-securite">guide famille</a> détaille les points de
        vigilance spécifiques.
      </p>
      <p>
        Transparence sur nos prix : nos lunettes certifiées sont à partir de{" "}
        <strong>2,99&nbsp;€ la paire</strong>, avec un <strong>tarif dégressif
        jusqu&apos;à 24 paires</strong> — le détail est sur{" "}
        <a href="/#produits">la fiche produit</a>. Pas de pack gonflé, pas de supplément
        « événement » : le prix d&apos;un objet simple, bien fait, certifié.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Pourquoi si peu cher chez vous ?</h3>
      <p>
        Parce que nous vendons en <strong>direct, sans intermédiaire</strong> : pas de
        distributeur, pas de commission de marketplace, pas de marge de revendeur empilée sur la
        nôtre. Le film filtrant est certifié ISO&nbsp;12312-2 comme celui des paires vendues
        quatre fois plus cher — c&apos;est le circuit qui change, pas la protection.
      </p>

      <h3>Les lunettes chères protègent-elles mieux ?</h3>
      <p>
        <strong>Non. La norme ISO&nbsp;12312-2 est binaire : un filtre est conforme ou il ne
        l&apos;est pas.</strong> Il n&apos;existe pas de « conformité premium ». Une paire à
        20&nbsp;€ certifiée et une paire à 3&nbsp;€ certifiée offrent exactement la même
        sécurité pour vos yeux. Au-delà, vous payez la monture, le packaging ou le contexte.
      </p>

      <h3>Jusqu&apos;à quand peut-on commander ?</h3>
      <p>
        Nous livrons en <strong>72&nbsp;h</strong> : techniquement, une commande dans la
        première semaine d&apos;août peut encore arriver à temps. Mais entre les aléas
        logistiques d&apos;août et le risque de rupture de stock, la sérénité a une date :{" "}
        <strong>commandez avant le 8 août</strong> — et idéalement bien avant, tant que les
        tarifs dégressifs et les stocks sont là.
      </p>
    </BlogArticle>
  );
}
