import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "a-quoi-ressemble-eclipse-90-pourcent")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Une éclipse à 90&nbsp;% ne fait pas nuit, mais elle transforme la fin de
        journée en un crépuscule étrange que vous n&apos;oublierez pas : lumière métallique,
        fraîcheur soudaine, ombres bizarres.</strong> Le 12 août 2026, la France vivra entre
        85&nbsp;% et 99,5&nbsp;% d&apos;occultation selon les villes — voici, sensation par
        sensation, ce qui vous attend.
      </p>

      <h2>Ce qui change autour de vous</h2>
      <p>
        Le plus surprenant dans une éclipse profonde, ce n&apos;est pas ce qu&apos;on voit dans
        le ciel — c&apos;est ce qui change autour de soi.
      </p>
      <ul>
        <li>
          <strong>La lumière baisse</strong> de façon perceptible à partir d&apos;environ
          70&nbsp;% d&apos;occultation. Vers 90&nbsp;%, elle prend une teinte
          « métallique », presque argentée, avec des <strong>contrastes étranges</strong> :
          tout paraît net et terne à la fois, comme si quelqu&apos;un avait baissé la
          saturation du monde.
        </li>
        <li>
          <strong>La température chute de quelques degrés</strong>, sensation renforcée par un
          léger « vent d&apos;éclipse » que provoque le refroidissement de l&apos;air. En plein
          mois d&apos;août, ce coup de frais soudain est saisissant.
        </li>
        <li>
          <strong>Les animaux se laissent tromper</strong> : les oiseaux entament leur chorale
          du soir, les poules regagnent le poulailler, les insectes crépusculaires
          s&apos;activent. Un comportement de tombée de la nuit… en avance sur
          l&apos;horaire.
        </li>
      </ul>

      <h2>Heure par heure</h2>
      <p>
        Le déroulé du 12 août 2026, en heure de Paris (les minutes exactes varient légèrement
        selon votre ville — consultez <a href="/eclipse/villes">nos horaires ville par
        ville</a>) :
      </p>
      <ul>
        <li>
          <strong>Vers 19&nbsp;h&nbsp;30 — premier contact.</strong> La Lune commence à mordre
          le disque solaire. À l&apos;œil… rien de visible, évidemment — mais à travers vos
          lunettes d&apos;éclipse, une petite encoche noire apparaît sur le bord du Soleil.
          C&apos;est parti.
        </li>
        <li>
          <strong>Vers 20&nbsp;h — le croissant se creuse.</strong> Le Soleil n&apos;est plus
          qu&apos;un croissant de plus en plus fin. La lumière ambiante commence à faiblir, la
          température amorce sa baisse.
        </li>
        <li>
          <strong>20&nbsp;h&nbsp;18 à 20&nbsp;h&nbsp;37 selon la ville — le maximum.</strong>{" "}
          Le moment le plus spectaculaire : pénombre irréelle, croissant réduit à un fil dans
          les lunettes, animaux désorientés. Le Soleil est alors bas sur
          l&apos;horizon ouest.
        </li>
        <li>
          <strong>Jusqu&apos;au coucher du Soleil.</strong> La Lune se retire progressivement,
          mais dans une grande partie de la France, le Soleil se couchera encore partiellement
          éclipsé — un <strong>coucher de Soleil échancré</strong>, rarissime en photo comme en
          souvenir.
        </li>
      </ul>

      <h2>Les ombres et les croissants projetés</h2>
      <p>
        Baissez aussi les yeux : le sol devient un spectacle. Sous les arbres, chaque
        interstice entre les feuilles agit comme un <strong>sténopé naturel</strong> et projette
        une petite image du croissant solaire — le sol se couvre de dizaines de croissants
        lumineux. Autre curiosité : <strong>les ombres deviennent plus nettes</strong> sur un de
        leurs bords, car la source de lumière, réduite à un fin croissant, se rapproche
        d&apos;un point. Passoire, feuille perforée, doigts croisés : toutes les techniques de
        projection sont détaillées dans notre guide de{" "}
        <a href="/blog/observer-eclipse-sans-lunettes">l&apos;observation sans lunettes</a>.
      </p>

      <h2>Pourquoi 90&nbsp;% ne veut PAS dire qu&apos;on peut regarder</h2>
      <p>
        C&apos;est le piège le plus dangereux des éclipses partielles profondes. À 90&nbsp;%
        d&apos;occultation, les 10&nbsp;% de Soleil restants représentent encore une{" "}
        <strong>luminosité largement suffisante pour brûler la rétine</strong> — sans douleur,
        sans signe d&apos;alerte, avec des lésions souvent irréversibles. La pénombre ambiante
        donne l&apos;illusion trompeuse que le Soleil est devenu inoffensif : il ne l&apos;est
        à aucun moment. <strong>Jamais d&apos;œil nu, du premier au dernier contact</strong>, et
        les lunettes de soleil ne changent rien à l&apos;affaire, comme nous
        l&apos;expliquons dans{" "}
        <a href="/blog/lunettes-de-soleil-eclipse-danger">cet article dédié</a>. Seules des
        lunettes certifiées ISO 12312-2 permettent l&apos;observation directe — elles sont
        disponibles <a href="/#produits">dès 2,99&nbsp;€, livrées en 72&nbsp;h</a>.
      </p>

      <h2>90 vs 99,5 vs 100&nbsp;% : trois expériences différentes</h2>
      <p>
        Tous les pourcentages ne se valent pas. À <strong>90&nbsp;%</strong>, vous vivez le
        crépuscule métallique décrit plus haut. À <strong>99,5&nbsp;%, comme au Pays
        basque</strong>, l&apos;ambiance bascule vers une quasi-nuit : la lumière
        s&apos;effondre dans les dernières minutes et <strong>Vénus peut devenir visible</strong>{" "}
        près du Soleil — voyez notre page dédiée à{" "}
        <a href="/eclipse/biarritz">l&apos;éclipse à Biarritz</a>. Quant à la{" "}
        <strong>totalité (100&nbsp;%)</strong>, c&apos;est une expérience d&apos;une autre
        nature — couronne solaire, nuit en plein jour, étoiles — qui se jouera cette fois au
        nord de l&apos;Espagne : notre <a href="/blog/voir-eclipse-totale-espagne-2026">guide
        du déplacement en Espagne</a> est là pour ceux qui veulent franchir le pas.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Fera-t-il nuit pendant l&apos;éclipse ?</h3>
      <p>
        <strong>Non, pas en France.</strong> Même à 95&nbsp;% d&apos;occultation, il fait
        encore « jour » — mais un jour anormal, une pénombre étrange aux couleurs délavées,
        renforcée par le Soleil déjà bas sur l&apos;horizon. La vraie nuit en plein jour est
        réservée à la bande de totalité, en Espagne et en Islande.
      </p>

      <h3>Verra-t-on les étoiles ?</h3>
      <p>
        Les étoiles, non. Mais <strong>Vénus pourrait devenir visible dans le Sud-Ouest</strong>,
        là où l&apos;occultation frôle les 99,5&nbsp;% : la planète la plus brillante du ciel
        perce dès que la luminosité chute fortement. Cherchez-la à l&apos;œil nu, loin du
        Soleil — jamais en balayant la zone proche du disque solaire sans protection.
      </p>

      <h3>Les animaux réagissent-ils vraiment ?</h3>
      <p>
        <strong>Oui, et c&apos;est l&apos;un des moments les plus émouvants.</strong> Oiseaux
        qui se mettent à chanter comme au crépuscule puis se taisent, poules qui rentrent se
        percher, chiens intrigués, insectes du soir qui s&apos;activent : le monde animal se
        cale sur la lumière, pas sur l&apos;horloge. Tendez l&apos;oreille autour du maximum —
        le silence soudain des oiseaux est saisissant.
      </p>
    </BlogArticle>
  );
}
