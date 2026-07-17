import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "voir-eclipse-totale-espagne-2026")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Le 12 août 2026, la France verra une éclipse partielle très profonde — mais la
        totalité, elle, se joue de l&apos;autre côté des Pyrénées, dans une bande qui traverse le
        nord de l&apos;Espagne en tout début de soirée.</strong> Depuis la côte basque française,
        la bande de totalité est à une poignée d&apos;heures de route : c&apos;est
        l&apos;occasion d&apos;un des plus beaux spectacles naturels qui existent. Voici où
        aller, comment s&apos;organiser et comment vivre la totalité en toute sécurité.
      </p>

      <h2>Pourquoi traverser la frontière</h2>
      <p>
        En France, l&apos;éclipse atteindra entre <strong>85 et 99,5&nbsp;% d&apos;occultation
        selon la ville</strong> — un spectacle magnifique, mais qui reste une éclipse partielle du
        début à la fin. La totalité est une <strong>expérience d&apos;une autre nature</strong> :
        pendant quelques instants, la <strong>nuit tombe en plein jour</strong>, les étoiles et
        les planètes apparaissent, la température chute, et la <strong>couronne solaire</strong> —
        cette auréole de plasma invisible en temps normal — se déploie autour du disque noir de
        la Lune.
      </p>
      <p>
        C&apos;est aussi <strong>le seul moment où l&apos;on peut retirer les lunettes</strong> et
        regarder le phénomène à l&apos;œil nu. Même à 99&nbsp;%, ce moment n&apos;existe pas : la
        différence entre une éclipse partielle profonde et la totalité, tous les témoins vous le
        diront, est celle qui sépare le crépuscule de la nuit. Pour beaucoup, elle justifie à elle
        seule le déplacement.
      </p>

      <h2>Où passe la bande de totalité</h2>
      <p>
        La bande de totalité entre par l&apos;Atlantique et traverse le nord de
        l&apos;Espagne d&apos;ouest en est :
      </p>
      <ul>
        <li><strong>La Galice</strong>, avec A&nbsp;Coruña dans ou près de la bande ;</li>
        <li><strong>Les Asturies</strong>, autour d&apos;Oviedo ;</li>
        <li><strong>La Cantabrie</strong> et sa côte ;</li>
        <li><strong>Le Pays basque espagnol</strong>, dont Bilbao ;</li>
        <li><strong>L&apos;Aragon</strong>, avec Saragosse ;</li>
        <li><strong>Le sud de la Catalogne</strong> ;</li>
        <li><strong>Les Baléares</strong>, dont Palma de Majorque, avec Valence proche de la bande sur la côte.</li>
      </ul>
      <p>
        Madrid et Barcelone se trouvent <strong>en bordure de la bande</strong> : selon
        l&apos;endroit exact, la totalité y sera très brève ou manquée de peu. La{" "}
        <strong>durée de totalité varie selon la position dans la bande</strong> : maximale près
        de la ligne centrale, elle se réduit à mesure qu&apos;on s&apos;approche des bords.
        Vérifiez votre site d&apos;observation sur une carte précise avant de réserver.
      </p>
      <p>
        Détail crucial : l&apos;éclipse a lieu en tout début de soirée et le{" "}
        <strong>Soleil sera bas sur l&apos;horizon</strong>. Choisir un site avec un{" "}
        <strong>horizon ouest parfaitement dégagé</strong> — mer, plaine, hauteur — est encore
        plus critique qu&apos;en France : une colline ou un immeuble mal placé peut masquer la
        totalité elle-même.
      </p>

      <h2>Les destinations pratiques depuis la France</h2>

      <h3>Bilbao et San Sebastián : l&apos;option la plus proche</h3>
      <p>
        Depuis la côte basque française, le Pays basque espagnol se rejoint en{" "}
        <strong>une à deux heures de route</strong>. San Sebastián puis Bilbao offrent la
        totalité à une distance record pour les Français du Sud-Ouest — avec la réserve
        météo propre à la côte atlantique et la nécessité d&apos;un horizon ouest dégagé,
        idéalement face à la mer.
      </p>

      <h3>Saragosse : la cible naturelle depuis Toulouse et Perpignan</h3>
      <p>
        Depuis Toulouse ou Perpignan, l&apos;Aragon est la destination logique : Saragosse se
        trouve dans la bande, et les plateaux aragonais offrent des horizons largement dégagés
        avec un climat d&apos;août généralement sec — un vrai atout pour les chasseurs
        d&apos;éclipse.
      </p>

      <h3>La côte valencienne et les Baléares : l&apos;option vacances</h3>
      <p>
        Si vous passez de toute façon vos vacances en Espagne, la région de Valence et les
        Baléares permettent de combiner séjour d&apos;été et totalité en début de soirée,
        potentiellement face à la mer. Palma de Majorque est proche de la bande ; là encore,
        vérifiez la position exacte de votre hébergement par rapport à la ligne de totalité.
      </p>

      <h2>Logistique : anticipez sérieusement</h2>
      <p>
        Une éclipse totale traversant des régions touristiques <strong>en plein mois
        d&apos;août</strong> : attendez-vous à une <strong>affluence exceptionnelle</strong>. Les
        hébergements dans et près de la bande se réservent <strong>très tôt</strong> — souvent
        des mois, voire plus d&apos;un an à l&apos;avance pour les sites les plus convoités.
        Prévoyez d&apos;<strong>arriver au moins la veille</strong> : le jour J, les routes vers
        la bande seront chargées, et un bouchon peut vous faire manquer un rendez-vous qui ne se
        rattrape pas. Août étant la haute saison espagnole, réservez aussi vos restaurants et
        anticipez le carburant dans les zones rurales.
      </p>
      <p>
        Pour nos lecteurs hispanophones — ou vos amis espagnols —, notre boutique sœur{" "}
        <a href="https://mieclipsesolar.es">mieclipsesolar.es</a> propose les mêmes lunettes
        certifiées, avec un contenu entièrement en espagnol.
      </p>

      <h2>Sécurité pendant la totalité</h2>
      <p>
        La règle absolue ne change pas d&apos;un côté ou de l&apos;autre de la frontière : les{" "}
        <strong>lunettes certifiées ISO 12312-2 sont obligatoires pendant toutes les phases
        partielles</strong>, avant et après la totalité. Elles ne se retirent{" "}
        <strong>que pendant la totalité elle-même</strong> — quelques dizaines de secondes à
        quelques minutes selon votre position dans la bande — et se remettent{" "}
        <strong>dès le premier rayon de Soleil</strong> qui réapparaît derrière la Lune.
      </p>
      <p>
        Et non, les lunettes de soleil ne remplacent rien du tout, pas même « le temps de trouver
        les vraies » : notre article{" "}
        <a href="/blog/lunettes-de-soleil-eclipse-danger">lunettes de soleil et éclipse</a>{" "}
        explique pourquoi. Que vous restiez en France ou traversiez la frontière, équipez toute
        la voiture avant le départ : nos lunettes certifiées sont disponibles{" "}
        <a href="/#produits">dès 2,99&nbsp;€</a>, avec tarifs dégressifs et livraison en
        72&nbsp;h — de quoi partir l&apos;esprit tranquille.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Faut-il des lunettes même pour la totalité ?</h3>
      <p>
        Il faut des lunettes pour <strong>toutes les phases partielles</strong>, avant et après la
        totalité — soit la quasi-totalité de l&apos;événement. Seule la totalité elle-même,
        lorsque la Lune couvre entièrement le disque solaire, s&apos;observe à l&apos;œil nu.
        Au premier rayon qui réapparaît, les lunettes se remettent immédiatement.
      </p>

      <h3>Combien de temps dure la totalité ?</h3>
      <p>
        Cela dépend entièrement de votre position dans la bande : <strong>de quelques secondes en
        bordure à plus d&apos;une minute près de la ligne centrale</strong>. C&apos;est court —
        raison de plus pour choisir son site avec soin, vérifier l&apos;horizon ouest et être en
        place bien à l&apos;avance.
      </p>

      <h3>Peut-on faire l&apos;aller-retour dans la journée depuis la France ?</h3>
      <p>
        Depuis le Sud-Ouest, <strong>oui</strong> : Bilbao, San Sebastián ou même Saragosse sont
        atteignables dans la journée. Mais anticipez sérieusement les bouchons — à
        l&apos;aller comme au retour, des dizaines de milliers de personnes feront le même
        trajet le même jour. Partir très tôt, viser un site précis repéré à l&apos;avance et
        prévoir un retour tardif est le minimum ; arriver la veille reste la solution sereine.
      </p>
    </BlogArticle>
  );
}
