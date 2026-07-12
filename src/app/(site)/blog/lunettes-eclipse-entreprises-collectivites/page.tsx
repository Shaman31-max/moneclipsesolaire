import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "lunettes-eclipse-entreprises-collectivites")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Pour équiper une équipe, un événement ou une structure d&apos;accueil pour
        l&apos;éclipse du 12 août 2026, la seule option responsable est une paire de lunettes
        certifiées ISO 12312-2 par participant.</strong> Nos tarifs dégressifs s&apos;appliquent
        directement en ligne jusqu&apos;à 24 paires, et au-delà nous établissons un devis sur
        simple email, avec facture et livraison en 72&nbsp;h depuis la France. Voici comment
        organiser l&apos;opération sans faux pas.
      </p>

      <h2>Le 12 août 2026 tombe un mercredi soir : un moment collectif à organiser</h2>
      <p>
        L&apos;éclipse atteindra son maximum <strong>en fin de journée, vers 20&nbsp;h&nbsp;30</strong>,
        avec un Soleil bas sur l&apos;horizon ouest. Un mercredi soir d&apos;août : le créneau
        idéal pour un moment collectif. Événement d&apos;équipe en terrasse ou afterwork
        d&apos;entreprise, animation de <strong>camping, d&apos;hôtel ou de restaurant</strong> en
        pleine saison touristique, événement municipal sur une place ou un point de vue dégagé —
        les occasions ne manquent pas.
      </p>
      <p>
        L&apos;éclipse a lieu hors temps scolaire, mais les <strong>centres de loisirs, centres
        aérés, colonies de vacances et clubs d&apos;été</strong> sont en première ligne : mi-août,
        ils accueillent des milliers d&apos;enfants qui voudront tous lever les yeux. Pour ces
        structures, anticiper l&apos;équipement n&apos;est pas une option.
      </p>

      <h2>La responsabilité de l&apos;organisateur</h2>
      <p>
        Organiser une observation collective engage votre responsabilité. Trois obligations de bon
        sens :
      </p>
      <ul>
        <li>
          <strong>Fournir une protection certifiée ISO 12312-2 à chaque participant</strong> — pas
          une paire pour deux, pas de lunettes de soleil « en dépannage ».
        </li>
        <li>
          <strong>Briefer avant l&apos;événement</strong> : lunettes portées pendant toute
          l&apos;observation, jamais de regard direct, jamais de jumelles ou de smartphone sans
          filtre.
        </li>
        <li>
          <strong>Encadrer les enfants</strong> en permanence : un adulte dédié par petit groupe,
          et des consignes adaptées à l&apos;âge. Notre guide{" "}
          <a href="/blog/eclipse-enfants-securite">observer l&apos;éclipse avec des enfants</a>{" "}
          détaille les bonnes pratiques.
        </li>
      </ul>
      <p>
        Conservez également la <strong>documentation de conformité de votre fournisseur</strong> :
        certificat, référence de la norme, identité du fabricant. En cas de question d&apos;un
        parent, d&apos;un élu ou d&apos;un assureur, vous devez pouvoir prouver que la protection
        fournie était conforme. Toutes nos pièces justificatives sont présentées sur notre{" "}
        <a href="/certifications">page certifications</a>.
      </p>

      <h2>Commander en volume</h2>
      <p>
        Notre boutique applique des <strong>tarifs dégressifs directement en ligne
        jusqu&apos;à 24 paires</strong> : plus la quantité augmente, plus le prix unitaire baisse,
        dès 2,99&nbsp;€ la paire. Pour une équipe, un petit événement ou une classe de centre aéré,
        la commande se passe en quelques clics sur{" "}
        <a href="/#produits">notre page produits</a>.
      </p>
      <p>
        Au-delà de 24 paires — <strong>collectivités, CSE, offices de tourisme, revendeurs</strong>{" "}
        (pharmacies, tabacs-presse) — contactez-nous par email à{" "}
        <a href="mailto:postmaster@moneclipsesolaire.fr">postmaster@moneclipsesolaire.fr</a> pour
        un <strong>devis personnalisé</strong>. Une <strong>facture est fournie</strong> avec
        chaque commande, et la <strong>livraison s&apos;effectue en 72&nbsp;h depuis la
        France</strong> : pas de délai douanier, pas de mauvaise surprise à l&apos;approche du
        jour J.
      </p>

      <h2>Check-list de l&apos;organisateur</h2>
      <ol>
        <li>
          <strong>Une paire par participant, plus une marge</strong> : prévoyez quelques paires
          supplémentaires pour les casses, les oublis et les invités de dernière minute.
        </li>
        <li>
          <strong>Un briefing sécurité</strong> de quelques minutes avant le début de
          l&apos;éclipse : quand porter les lunettes (en permanence), ce qui est interdit, qui
          surveille qui.
        </li>
        <li>
          <strong>Une zone d&apos;observation avec horizon ouest dégagé</strong> : le Soleil sera
          bas en fin de journée ; un bâtiment ou une colline à l&apos;ouest peut gâcher
          l&apos;événement.
        </li>
        <li>
          <strong>Un plan B en cas de nuages</strong> : retransmission en direct sur écran,
          animation en intérieur, report du temps fort.
        </li>
        <li>
          <strong>Une animation sténopé pour les enfants</strong> : simple, sans risque et très
          ludique — notre article{" "}
          <a href="/blog/observer-eclipse-sans-lunettes">observer l&apos;éclipse sans lunettes</a>{" "}
          explique comment la préparer.
        </li>
      </ol>

      <h2>Questions fréquentes</h2>

      <h3>Peut-on avoir une facture ?</h3>
      <p>
        <strong>Oui.</strong> Une facture est fournie pour chaque commande, en ligne comme sur
        devis. Pour les besoins spécifiques (bon de commande administratif, mandat de collectivité),
        précisez-le dans votre email : nous nous adaptons aux procédures des structures publiques.
      </p>

      <h3>Quel délai pour une grosse commande ?</h3>
      <p>
        La livraison standard s&apos;effectue en <strong>72&nbsp;h depuis la France</strong>, mais
        pour les gros volumes, <strong>contactez-nous tôt</strong> : à l&apos;approche du 12 août,
        les stocks nationaux de lunettes certifiées se tendent, comme à chaque éclipse. Les
        organisateurs qui commandent au dernier moment risquent de ne plus trouver de quantités
        suffisantes, chez nous comme ailleurs.
      </p>

      <h3>Les lunettes conviennent-elles aux enfants ?</h3>
      <p>
        <strong>Oui, dès 5-6 ans environ, avec surveillance</strong>. En dessous, un enfant tient
        rarement les lunettes correctement plaquées sur le visage : privilégiez
        l&apos;observation indirecte. Dans tous les cas, un adulte doit vérifier le port des
        lunettes en continu pendant toute l&apos;observation.
      </p>
    </BlogArticle>
  );
}
