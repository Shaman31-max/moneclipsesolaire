import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "lunettes-eclipse-amazon-fiables")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Oui, on peut trouver des lunettes d&apos;éclipse fiables sur Amazon — à condition
        de savoir qui vous les vend réellement et de vérifier le certificat avant
        d&apos;acheter.</strong> La question n&apos;est pas la plateforme, mais le vendeur qui se
        trouve derrière la fiche produit. Cet article n&apos;est pas un procès d&apos;Amazon :
        c&apos;est un mode d&apos;emploi pour comprendre comment fonctionne une marketplace et
        appliquer une méthode de vérification qui vaut partout — chez nous compris.
      </p>

      <h2>Le vrai sujet : qui est le vendeur ?</h2>
      <p>
        Amazon n&apos;est pas un magasin unique : c&apos;est une <strong>marketplace</strong>, une
        place de marché qui héberge des milliers de vendeurs tiers aux côtés de ses propres
        ventes. Quand vous achetez « sur Amazon », vous achetez en réalité auprès de
        l&apos;un de ces vendeurs — qui peut être un distributeur sérieux disposant de tous les
        certificats, comme un revendeur opportuniste apparu trois semaines avant
        l&apos;éclipse. La plateforme est la même ; la fiabilité, elle, dépend du vendeur.
      </p>
      <p>
        Pour savoir à qui vous avez affaire, regardez l&apos;encart{" "}
        <strong>« Expédié par / Vendu par »</strong>, affiché sur chaque fiche produit près du
        bouton d&apos;achat. Trois cas de figure :
      </p>
      <ul>
        <li>
          <strong>Vendu et expédié par Amazon</strong> : Amazon est le vendeur direct.
        </li>
        <li>
          <strong>Vendu par un tiers, expédié par Amazon</strong> : le produit vient d&apos;un
          vendeur tiers, Amazon n&apos;assure que la logistique. Le « Expédié par Amazon » ne dit
          rien de la qualité du produit lui-même.
        </li>
        <li>
          <strong>Vendu et expédié par un tiers</strong> : Amazon n&apos;intervient que comme
          vitrine.
        </li>
      </ul>
      <p>
        Dans les deux derniers cas, cliquez sur le nom du vendeur : sa page doit afficher une{" "}
        <strong>raison sociale, une adresse et un numéro d&apos;immatriculation</strong>. Un
        vendeur introuvable ou domicilié à une adresse invérifiable est un signal
        d&apos;alerte — quel que soit le nombre d&apos;étoiles de la fiche.
      </p>

      <h2>Les précédents documentés</h2>
      <p>
        Ce sujet n&apos;est pas théorique. Lors de l&apos;éclipse américaine du 21 août 2017,
        l&apos;<strong>American Astronomical Society</strong> (AAS) a constaté que des lunettes
        non conformes portant de <strong>faux marquages ISO 12312-2</strong> circulaient sur les
        marketplaces. L&apos;association a alors changé de méthode : plutôt que d&apos;expliquer
        comment lire les marquages — puisque les contrefacteurs les imprimaient aussi —, elle a
        publié une <strong>liste de fournisseurs vérifiés</strong>, dont elle avait pu contrôler
        la chaîne d&apos;approvisionnement et les rapports de test.
      </p>
      <p>
        Amazon a de son côté procédé à des <strong>rappels et remboursements</strong> de lunettes
        d&apos;éclipse dont la conformité ne pouvait pas être confirmée, quelques jours avant
        l&apos;événement. Il faut lire cet épisode pour ce qu&apos;il est : un fait neutre, pas
        une accusation. Il démontre deux choses. D&apos;abord, qu&apos;une plateforme peut réagir
        et protéger ses clients. Ensuite — et c&apos;est la leçon essentielle —, qu&apos;un{" "}
        <strong>marquage imprimé sur une monture ne prouve rien à lui seul</strong> : seule la
        traçabilité jusqu&apos;à un certificat de laboratoire fait foi.
      </p>

      <h2>La checklist avant d&apos;acheter, où que ce soit</h2>
      <p>
        Cette méthode vaut sur Amazon, sur n&apos;importe quelle marketplace, en pharmacie ou sur
        notre propre site. Cinq points, dans l&apos;ordre :
      </p>
      <ol>
        <li>
          <strong>Un certificat de laboratoire consultable.</strong> Le vendeur doit pouvoir
          présenter le certificat ou le rapport de test attestant la conformité ISO 12312-2 —
          pas seulement l&apos;affirmer dans le descriptif.
        </li>
        <li>
          <strong>Un laboratoire nommé et vérifiable.</strong> Le certificat doit émaner
          d&apos;un organisme identifiable (DIN CERTCO par exemple), dont vous pouvez vérifier
          l&apos;existence et, idéalement, le registre public.
        </li>
        <li>
          <strong>Un vendeur identifiable, avec une adresse en Europe.</strong> Raison sociale,
          adresse, immatriculation : en cas de problème, un interlocuteur européen répond du
          produit qu&apos;il met sur le marché.
        </li>
        <li>
          <strong>Un test visuel à réception.</strong> Dans une pièce éclairée, vous ne devez
          rien voir à travers le filtre. La procédure complète est dans notre{" "}
          <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">checklist de vérification en 5
          points</a>.
        </li>
        <li>
          <strong>De la méfiance sur les délais à l&apos;approche du 12 août.</strong> Plus la
          date approche, plus les stocks sérieux s&apos;épuisent et plus les offres de dernière
          minute se multiplient. Un délai de livraison qui vous fait recevoir les lunettes la
          veille ne vous laisse aucune marge pour les tester — ni pour les remplacer si elles ne
          passent pas le test.
        </li>
      </ol>

      <h2>Notre transparence</h2>
      <p>
        Puisque nous demandons cette transparence aux autres, appliquons-nous la règle. Nous
        vendons <strong>en direct, sans intermédiaire</strong> : vous savez exactement qui vous
        vend vos lunettes. Nous sommes une <strong>société française</strong>, identifiable, avec
        une adresse en France. Et notre certificat <strong>DIN CERTCO</strong>, attestant la
        conformité de nos filtres à la norme ISO 12312-2, est publié en intégralité sur notre{" "}
        <a href="/certifications">page certifications</a> — vous pouvez le consulter avant même
        de commander nos <a href="/#produits">lunettes d&apos;éclipse dès 2,99&nbsp;€</a>,
        expédiées sous 72&nbsp;h. C&apos;est exactement ce que la checklist ci-dessus vous invite
        à exiger de tout vendeur, nous y compris.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Amazon vend-il de fausses lunettes d&apos;éclipse ?</h3>
      <p>
        La question mérite une réponse nuancée. Amazon héberge des milliers de vendeurs tiers,
        de qualité inégale : certains distribuent des produits parfaitement certifiés,
        d&apos;autres non. La plateforme a d&apos;ailleurs déjà rappelé et remboursé des lunettes
        dont la conformité n&apos;était pas démontrée. La bonne attitude n&apos;est ni la
        confiance aveugle ni le rejet en bloc : <strong>appliquez la checklist</strong> —
        vendeur identifié, certificat consultable, laboratoire vérifiable, test à réception.
      </p>

      <h3>Comment tester des lunettes reçues ?</h3>
      <p>
        Dans une pièce normalement éclairée, mettez les lunettes : vous ne devez{" "}
        <strong>strictement rien voir</strong> — ni lampe, ni fenêtre, ni écran de téléphone.
        Vérifiez aussi l&apos;état du filtre : aucune rayure, aucun pli, aucune perforation. La
        procédure détaillée est expliquée dans notre{" "}
        <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">article de vérification</a>.
      </p>

      <h3>Un prix élevé garantit-il la qualité ?</h3>
      <p>
        Non. Le prix ne mesure ni la conformité ni la sécurité : des lunettes correctement
        certifiées se vendent quelques euros, et un produit cher peut très bien être dépourvu de
        certificat vérifiable. Le seul critère qui compte est la <strong>traçabilité</strong> :
        un certificat de laboratoire consultable et un vendeur identifiable. À l&apos;inverse,
        un prix anormalement bas assorti de délais flous à l&apos;approche du 12 août doit
        éveiller la prudence.
      </p>

      <p>
        <em>MonEclipseSolaire.fr est un site indépendant, sans aucune affiliation avec Amazon.
        Les éléments cités (liste de fournisseurs de l&apos;AAS en 2017, rappels et
        remboursements) sont des faits publics rapportés à titre d&apos;information.</em>
      </p>
    </BlogArticle>
  );
}
