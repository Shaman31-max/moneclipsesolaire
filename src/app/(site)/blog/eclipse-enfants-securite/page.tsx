import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "eclipse-enfants-securite")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        Oui, un enfant peut observer l&apos;éclipse du 12 août 2026 en toute sécurité — à
        condition de <strong>lunettes certifiées ISO 12312-2 bien ajustées et d&apos;une
        surveillance constante</strong>. Une éclipse de cette ampleur ne repassera pas en France
        avant des décennies : c&apos;est un souvenir d&apos;enfance qui se prépare. Voici tout ce
        qu&apos;un parent doit savoir, sans dramatiser ni improviser.
      </p>

      <h2>À partir de quel âge&nbsp;?</h2>
      <p>
        Il n&apos;existe <strong>pas d&apos;âge légal minimum</strong> pour observer une éclipse
        avec des lunettes certifiées. La vraie question est celle de la maturité : l&apos;enfant
        comprend-il qu&apos;il ne doit jamais retirer ses lunettes face au Soleil, et
        saura-t-il s&apos;y tenir&nbsp;? En pratique, <strong>avant 5-6&nbsp;ans, préférez
        l&apos;observation indirecte</strong> (projection au sténopé, voir plus bas) : à cet âge,
        on ne peut pas garantir que les lunettes resteront en place. Et une règle absolue :{" "}
        <strong>jamais de lunettes d&apos;éclipse sur un bébé</strong> — un nourrisson ne doit
        tout simplement pas être orienté vers le Soleil.
      </p>

      <h2>Les règles d&apos;or</h2>

      <h3>Des lunettes adaptées à la taille du visage</h3>
      <p>
        Des lunettes trop grandes laissent des <strong>interstices sur les côtés et sous les
        filtres</strong>, par lesquels un rayon direct peut passer. Vérifiez que les filtres
        couvrent entièrement le champ de vision de l&apos;enfant et que la monture repose bien sur
        le nez. Faites l&apos;essayage à la maison, plusieurs jours avant, pour ajuster
        tranquillement.
      </p>

      <h3>L&apos;astuce de l&apos;élastique</h3>
      <p>
        Le point faible des lunettes en carton sur une petite tête : elles glissent. La parade est
        simple : <strong>un élastique (ou un cordon) agrafé ou noué aux branches</strong>, qui
        passe derrière la tête et plaque la monture sur le visage. L&apos;enfant peut bouger,
        sautiller, lever la tête : les lunettes ne bougent plus. Deux minutes de bricolage pour une
        vraie tranquillité d&apos;esprit.
      </p>

      <h3>Une surveillance constante : 1 adulte pour 2-3 enfants</h3>
      <p>
        Même équipé, un enfant reste un enfant : il peut soulever ses lunettes « pour voir en
        vrai », regarder par-dessus, ou les faire tomber. Prévoyez{" "}
        <strong>un adulte attentif pour deux à trois enfants maximum</strong>, qui ne fait rien
        d&apos;autre que surveiller pendant les phases d&apos;observation. Alternez les moments
        lunettes sur le nez et les pauses dos au Soleil.
      </p>

      <h3>Le briefing d&apos;avant-éclipse</h3>
      <p>
        Avant le jour J, posez la règle une bonne fois : <strong>on ne retire JAMAIS les lunettes
        tant qu&apos;on est tourné vers le Soleil</strong>. Pour les enlever, on baisse
        d&apos;abord la tête ou on tourne le dos. Faites répéter la consigne, transformez-la en
        jeu, entraînez-vous en famille quelques jours avant. Un enfant briefé est un enfant en
        sécurité — et fier de connaître la règle.
      </p>

      <h2>Préparer l&apos;événement en famille</h2>
      <p>
        Une éclipse se savoure d&apos;autant plus qu&apos;elle a été attendue. Quelques idées pour
        faire monter l&apos;impatience :
      </p>
      <ul>
        <li>
          <strong>Fabriquer un sténopé ensemble</strong> : une boîte à chaussures, un trou
          d&apos;épingle, une feuille blanche — et voilà un projecteur d&apos;éclipse fait maison
          (mode d&apos;emploi plus bas).
        </li>
        <li>
          <strong>Lire une histoire sur les éclipses</strong> : les images et les mots préparent
          bien mieux qu&apos;un exposé. Notre album illustré{" "}
          <a href="/#produits">« Luna et l&apos;éclipse magique »</a>, accessible dès
          3&nbsp;ans, raconte l&apos;éclipse à hauteur d&apos;enfant — parfait pour expliquer ce
          qui va se passer dans le ciel et pourquoi on porte de drôles de lunettes.
        </li>
        <li>
          <strong>Dessiner le Soleil et la Lune</strong>, suivre le compte à rebours sur un
          calendrier, choisir ensemble le lieu d&apos;observation.
        </li>
      </ul>

      <h2>L&apos;éclipse a lieu tard (20&nbsp;h-21&nbsp;h) : conseils pratiques</h2>
      <p>
        Particularité du 12 août 2026 : l&apos;éclipse se produira <strong>en début de soirée,
        entre 20&nbsp;h et 21&nbsp;h environ</strong>, avec un Soleil bas sur l&apos;horizon.
        C&apos;est tard pour les plus petits. Quelques astuces de parents :
      </p>
      <ul>
        <li><strong>Une sieste ou un temps calme</strong> en fin d&apos;après-midi pour tenir jusqu&apos;au soir sans crise de fatigue.</li>
        <li><strong>Un pique-nique du soir</strong> sur le lieu d&apos;observation : l&apos;attente devient un moment de fête plutôt qu&apos;une contrainte.</li>
        <li>Un <strong>horizon ouest bien dégagé</strong> (colline, plaine, bord de mer) puisque le Soleil sera bas.</li>
        <li>Appareil photo pour immortaliser les enfants à lunettes, plaid, pulls : en faire un <strong>souvenir familial</strong> autant qu&apos;un événement astronomique.</li>
      </ul>

      <h2>Alternatives 100&nbsp;% sans risque</h2>
      <p>
        Pour les moins de 5-6&nbsp;ans, ou en complément des lunettes,{" "}
        <strong>l&apos;observation indirecte</strong> est magique et sans aucun danger, puisque
        personne ne regarde le Soleil :
      </p>
      <ol>
        <li>
          <strong>Le sténopé pas à pas</strong> : percez un trou de 2-3&nbsp;mm avec une épingle
          dans une feuille de carton. Dos au Soleil, tenez le carton en l&apos;air et laissez la
          lumière passer par le trou jusqu&apos;à une feuille blanche posée au sol ou tenue par
          l&apos;enfant. L&apos;image projetée montre le croissant de Soleil se faire « croquer »
          en direct. Plus la distance entre les deux feuilles est grande, plus l&apos;image est
          grande.
        </li>
        <li>
          <strong>La passoire</strong> : chaque trou agit comme un sténopé et projette des dizaines
          de petits croissants au sol. Effet garanti auprès des enfants.
        </li>
        <li>
          <strong>Le feuillage d&apos;un arbre</strong> : les interstices entre les feuilles
          projettent naturellement des croissants lumineux sur le sol. Gratuit, poétique, et
          l&apos;occasion d&apos;un joli jeu de chasse aux croissants.
        </li>
      </ol>
      <p>
        Pour compléter votre préparation, relisez{" "}
        <a href="/blog/erreurs-eclipse-solaire">les 10 erreurs à ne jamais commettre</a> et
        pourquoi <a href="/blog/lunettes-de-soleil-eclipse-danger">les lunettes de soleil ne
        protègent pas</a>, même pour un adulte.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Les lunettes adultes conviennent-elles aux enfants&nbsp;?</h3>
      <p>
        Oui, <strong>à condition qu&apos;elles soient bien plaquées sur le visage</strong>, sans
        interstice sur les côtés ni sous les filtres. L&apos;astuce de l&apos;élastique derrière
        la tête règle le problème de maintien dans la plupart des cas. Nos montures en carton
        conviennent aux adultes comme aux enfants — ajustez, testez à la maison, et surveillez.
      </p>

      <h3>Mon enfant a regardé le Soleil sans protection, que faire&nbsp;?</h3>
      <p>
        <strong>Ne paniquez pas</strong> : un coup d&apos;œil très bref, suivi du réflexe naturel
        de détourner le regard, cause rarement une lésion. Surveillez en revanche sa vision
        pendant <strong>48&nbsp;heures</strong> : tache au centre de la vision, gêne pour lire,
        couleurs ternes, lignes déformées. Au moindre doute — ou si l&apos;exposition a duré
        plusieurs secondes — <strong>consultez un ophtalmologiste</strong> en mentionnant
        l&apos;exposition solaire.
      </p>

      <h3>L&apos;école peut-elle organiser une observation&nbsp;?</h3>
      <p>
        Le 12 août tombe pendant les vacances scolaires, mais les centres de loisirs et colonies
        pourront organiser des observations : c&apos;est possible et même formidable, avec le même
        cadre que pour une famille — <strong>lunettes certifiées pour chaque enfant, encadrement
        renforcé</strong> (un adulte pour un petit groupe), briefing préalable et ateliers de
        projection indirecte pour les plus jeunes. Les structures peuvent nous contacter pour des
        commandes groupées de lunettes certifiées, dès 3,99&nbsp;€.
      </p>
    </BlogArticle>
  );
}
