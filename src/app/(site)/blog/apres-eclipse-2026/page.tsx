import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "apres-eclipse-2026")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Bonne nouvelle : le 12 août 2026 n&apos;est pas une fin, c&apos;est un début —
        une nouvelle éclipse traversera la France dès le 2 août 2027, et vos lunettes bien
        conservées resserviront.</strong> Voici quoi faire après l&apos;éclipse : ranger son
        matériel, surveiller ses yeux et cocher les prochains rendez-vous célestes.
      </p>

      <h2>Les prochains rendez-vous</h2>
      <p>
        Le calendrier des années à venir est exceptionnellement généreux pour la France :
      </p>
      <ul>
        <li>
          <strong>2 août 2027</strong> — presque un an jour pour jour après 2026, une nouvelle
          éclipse partielle forte en France, avec une totalité passant par le sud de
          l&apos;Espagne et l&apos;Afrique du Nord, parmi les plus longues du siècle. Notre{" "}
          <a href="/blog/eclipse-2-aout-2027">article dédié au 2 août 2027</a> détaille ce qui
          nous attend.
        </li>
        <li>
          <strong>26 janvier 2028</strong> — une nouvelle éclipse partielle visible en France,
          hivernale cette fois.
        </li>
        <li>
          <strong>3 septembre 2081</strong> — la prochaine éclipse <strong>totale</strong> en
          France métropolitaine. Les enfants qui observeront l&apos;éclipse de 2026 avec vous
          pourront la raconter à leurs petits-enfants ce jour-là.
        </li>
      </ul>

      <h2>Conserver ses lunettes</h2>
      <p>
        Des lunettes d&apos;éclipse en bon état n&apos;ont pas de date de péremption
        officielle, mais leur film filtrant est fragile. Pour qu&apos;elles soient prêtes pour
        2027 :
      </p>
      <ul>
        <li>
          Rangez-les <strong>dans une pochette ou une enveloppe, à plat</strong>, sans rien
          poser dessus — le moindre pli ou frottement peut endommager le filtre.
        </li>
        <li>
          Stockez-les <strong>à l&apos;abri de la chaleur et de l&apos;humidité</strong> : un
          tiroir de bureau plutôt que la boîte à gants de la voiture ou le grenier.
        </li>
        <li>
          <strong>Contrôlez-les avant chaque réutilisation</strong> : aucune rayure, aucun trou
          d&apos;épingle, aucune décollure du film. Notre{" "}
          <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">checklist de vérification en 5
          points</a> vous guide pas à pas.
        </li>
      </ul>

      <h2>Vérifier ses yeux</h2>
      <p>
        Si vous — ou un proche — avez regardé le Soleil sans protection, même brièvement,
        restez attentif dans les <strong>12 à 48 heures</strong> qui suivent
        l&apos;éclipse. Les symptômes d&apos;une rétinopathie solaire :{" "}
        <strong>tache sombre ou floue au centre de la vision, lignes droites qui paraissent
        déformées, couleurs délavées</strong>, gêne persistante à la lecture. La brûlure
        rétinienne étant indolore, l&apos;absence de douleur ne signifie rien. Au moindre de
        ces signes, <strong>consultez un ophtalmologiste sans attendre</strong> — et en cas de
        doute, consultez quand même : un contrôle pour rien vaut mieux qu&apos;une lésion
        ignorée.
      </p>

      <h2>Prolonger l&apos;expérience</h2>
      <p>
        Une éclipse ne s&apos;arrête pas quand la Lune s&apos;en va. <strong>Partagez vos
        photos</strong> du croissant solaire et du coucher de Soleil éclipsé — les images
        prises en France ce soir-là seront uniques. <strong>Revoyez les images de la totalité
        espagnole</strong> : couronne solaire, nuit en plein jour, elles donnent une idée de ce
        qui attend ceux qui feront le déplacement en 2027. Et justement :{" "}
        <strong>préparez 2027 dès maintenant</strong>. Repérage du lieu, organisation du
        voyage vers le sud de l&apos;Espagne pour les plus motivés, et matériel vérifié. Si
        vos lunettes n&apos;ont pas survécu à 2026 ou qu&apos;il en faut pour toute la
        famille, une paire certifiée ISO 12312-2 se trouve{" "}
        <a href="/#produits">dès 2,99&nbsp;€, livrée en 72&nbsp;h</a> — autant s&apos;équiper
        avant la ruée de l&apos;été prochain.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Mes lunettes de 2026 seront-elles encore bonnes pour 2027 ?</h3>
      <p>
        <strong>Oui, si elles sont intactes et bien conservées</strong> : film sans rayure ni
        trou, monture en bon état, stockage à plat, au sec et à l&apos;abri de la chaleur. Un
        an de tiroir ne pose aucun problème — à condition de refaire le contrôle visuel complet
        avant de les réutiliser.
      </p>

      <h3>Que faire de lunettes abîmées ?</h3>
      <p>
        <strong>Les jeter, sans hésiter.</strong> Une paire rayée, percée ou pliée ne se
        répare pas et ne se « teste » pas en regardant le Soleil. Côté tri : la monture en
        carton part au <strong>recyclage papier</strong>, mais le film filtrant, lui,
        n&apos;est pas recyclable — détachez-le si possible et jetez-le avec les ordures
        ménagères.
      </p>

      <h3>Quand aura lieu la prochaine éclipse visible en France ?</h3>
      <p>
        Très vite : <strong>le 2 août 2027</strong>, une éclipse partielle forte en France
        (avec totalité au sud de l&apos;Espagne et en Afrique du Nord), puis le{" "}
        <strong>26 janvier 2028</strong>. Pour la prochaine éclipse <strong>totale</strong> en
        métropole, il faudra en revanche patienter jusqu&apos;au{" "}
        <strong>3 septembre 2081</strong>.
      </p>
    </BlogArticle>
  );
}
