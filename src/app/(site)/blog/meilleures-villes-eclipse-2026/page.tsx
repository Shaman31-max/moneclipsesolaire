import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "meilleures-villes-eclipse-2026")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Biarritz est la meilleure ville de France pour observer l&apos;éclipse du
        12 août 2026 : environ 99,5&nbsp;% d&apos;occultation et un horizon océanique
        plein ouest.</strong> Derrière elle, tout le grand Sud-Ouest tire son épingle du
        jeu, mais quelques villes moins attendues méritent aussi le détour. Voici notre
        top&nbsp;10, avec la méthode qui le justifie.
      </p>

      <h2>Notre méthodologie</h2>
      <p>
        Ce classement croise trois critères, dans cet ordre d&apos;importance : le{" "}
        <strong>taux d&apos;occultation</strong> (plus la Lune masque le Soleil, plus la
        pénombre est spectaculaire), les <strong>statistiques d&apos;ensoleillement du
        mois d&apos;août</strong> (une éclipse sous les nuages perd beaucoup de son
        intérêt), et la <strong>qualité de l&apos;horizon ouest</strong> — critère
        décisif cette fois-ci, puisque le maximum survient avec un Soleil à quelques
        degrés au-dessus de l&apos;horizon. Une ville très occultée mais cernée de
        reliefs à l&apos;ouest peut ainsi reculer au profit d&apos;une côte dégagée.
      </p>

      <h2>Le top 10 des villes françaises</h2>

      <h3>1. Biarritz — la quasi-totalité au-dessus de l&apos;Atlantique</h3>
      <p>
        Environ 99,5&nbsp;% d&apos;occultation, l&apos;océan exactement dans l&apos;axe
        du Soleil couchant et des soirées d&apos;août généralement clémentes : Biarritz
        coche toutes les cases. C&apos;est le point de France métropolitaine où
        l&apos;expérience se rapprochera le plus d&apos;une vraie totalité. Notre guide
        complet : <a href="/eclipse/biarritz">l&apos;éclipse à Biarritz</a>.
      </p>

      <h3>2. Bayonne — les premières loges, version fleuve</h3>
      <p>
        À quelques kilomètres de sa voisine, Bayonne partage le même privilège
        géographique avec environ 99,3&nbsp;% d&apos;occultation, et l&apos;Adour ouvre
        de belles trouées vers l&apos;ouest en plein centre. Une alternative un peu moins
        courue que le front de mer. Détails : <a href="/eclipse/bayonne">l&apos;éclipse à
        Bayonne</a>.
      </p>

      <h3>3. Pau — 99 % face aux coteaux du Béarn</h3>
      <p>
        Le Béarn frôle lui aussi la totalité, à environ 99&nbsp;%. Le piège local est
        connu : le panorama emblématique regarde le sud, alors que tout se joue à
        l&apos;ouest — les coteaux et la plaine feront la différence. Nos spots :{" "}
        <a href="/eclipse/pau">l&apos;éclipse à Pau</a>.
      </p>

      <h3>4. Bordeaux — et la dune du Pilat à une heure</h3>
      <p>
        Environ 98,5&nbsp;% d&apos;occultation pour la métropole girondine, qui possède
        en prime un joker exceptionnel : la dune du Pilat, perchée au-dessus de
        l&apos;Atlantique, à une heure de route. En ville, la Garonne dégage déjà de
        larges horizons. À lire : <a href="/eclipse/bordeaux">l&apos;éclipse à
        Bordeaux</a>.
      </p>

      <h3>5. Toulouse — la ville de l&apos;espace au rendez-vous</h3>
      <p>
        Environ 97&nbsp;% d&apos;occultation pour la capitale du spatial, où la Cité de
        l&apos;espace devrait faire de la soirée un événement. Climat d&apos;août
        favorable et vallée de la Garonne plutôt ouverte vers l&apos;ouest complètent le
        tableau. Notre guide : <a href="/eclipse/toulouse">l&apos;éclipse à Toulouse</a>.
      </p>

      <h3>6. Perpignan — le soleil statistique du Roussillon</h3>
      <p>
        Environ 96&nbsp;% d&apos;occultation et l&apos;un des ciels d&apos;août les plus
        fiables de France : les probabilités météo jouent clairement pour le Roussillon.
        Seule subtilité, la mer est à l&apos;est — il faudra lui tourner le dos et viser
        les hauteurs. Détails : <a href="/eclipse/perpignan">l&apos;éclipse à
        Perpignan</a>.
      </p>

      <h3>7. Montpellier — un belvédère taillé pour l&apos;occasion</h3>
      <p>
        Environ 95&nbsp;% d&apos;occultation, un excellent ensoleillement d&apos;août et
        un atout urbain rare : un belvédère historique orienté exactement dans la bonne
        direction. La garrigue offre des plans B à profusion. À lire :{" "}
        <a href="/eclipse/montpellier">l&apos;éclipse à Montpellier</a>.
      </p>

      <h3>8. Marseille — le pari gagnant de la côte Bleue</h3>
      <p>
        Environ 93&nbsp;% d&apos;occultation, mais un ciel d&apos;août parmi les plus
        sûrs du pays et, au nord-ouest, la côte Bleue : l&apos;un des rares littoraux de
        Méditerranée où l&apos;horizon marin se trouve dans l&apos;axe du couchant. Nos
        spots : <a href="/eclipse/marseille">l&apos;éclipse à Marseille</a>.
      </p>

      <h3>9. Brest — l&apos;horizon Atlantique absolu</h3>
      <p>
        Environ 93&nbsp;% d&apos;occultation seulement, mais un argument que personne
        d&apos;autre n&apos;a : depuis la pointe Saint-Mathieu, rien entre vous et
        l&apos;Amérique. Le croissant solaire finira sa course au-dessus de la mer
        d&apos;Iroise — si la météo bretonne joue le jeu. Détails :{" "}
        <a href="/eclipse/brest">l&apos;éclipse à Brest</a>.
      </p>

      <h3>10. Clermont-Ferrand — l&apos;éclipse vue d&apos;un volcan</h3>
      <p>
        Environ 93&nbsp;% d&apos;occultation et un observatoire naturel unique : le puy
        de Dôme, à 1&nbsp;465&nbsp;m au-dessus de la Limagne. Être <em>sur</em> le relief
        plutôt que derrière, voilà toute la stratégie locale. Notre guide :{" "}
        <a href="/eclipse/clermont-ferrand">l&apos;éclipse à Clermont-Ferrand</a>.
      </p>

      <h2>Mentions spéciales : les spots nature</h2>
      <p>
        Hors des villes, quatre sites naturels promettent des images d&apos;anthologie :
      </p>
      <ul>
        <li>
          <strong>La dune du Pilat</strong> (Gironde) : 100&nbsp;m de sable au-dessus de
          l&apos;océan, horizon ouest parfait — sans doute le spot le plus spectaculaire
          de France.
        </li>
        <li>
          <strong>La pointe Saint-Mathieu</strong> (Finistère) : abbaye en ruine, phare
          et Atlantique à perte de vue pour le premier plan le plus photogénique du pays.
        </li>
        <li>
          <strong>Le puy de Dôme</strong> (Auvergne) : un coucher de Soleil éclipsé
          au-dessus de la chaîne des Puys, à 1&nbsp;465&nbsp;m d&apos;altitude.
        </li>
        <li>
          <strong>La Rhune</strong> (Pays basque) : à 905&nbsp;m au-dessus de la côte
          basque, dans la zone des 99&nbsp;% d&apos;occultation, avec l&apos;océan en
          contrebas.
        </li>
      </ul>
      <p>
        Où que vous soyez, la règle ne change pas : l&apos;éclipse reste partielle
        partout en France, et des <a href="/#produits">lunettes d&apos;éclipse
        certifiées ISO 12312-2</a> (dès 3,99&nbsp;€, livraison 72&nbsp;h) sont
        obligatoires pour chaque observateur, du début à la fin.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Paris est-elle bien placée ?</h3>
      <p>
        Très bien, sans être dans le top : environ <strong>92&nbsp;%
        d&apos;occultation</strong>, une baisse de lumière saisissante et un maximum vers
        20&nbsp;h&nbsp;32. Le vrai défi parisien est de dégager l&apos;horizon ouest
        au-dessus des immeubles — buttes, parcs en hauteur et toits font toute la
        différence. Nos conseils : <a href="/eclipse/paris">l&apos;éclipse à Paris</a>.
      </p>

      <h3>Mer ou montagne ?</h3>
      <p>
        Ni l&apos;une ni l&apos;autre en soi : <strong>c&apos;est l&apos;horizon ouest
        dégagé qui prime</strong>. Une côte atlantique orientée plein ouest est idéale ;
        une plage tournée vers l&apos;est ne sert à rien. En montagne, un sommet dominant
        l&apos;ouest est superbe, mais un fond de vallée verra le Soleil disparaître
        derrière les crêtes bien avant la fin. Choisissez la direction avant le décor.
      </p>
    </BlogArticle>
  );
}
