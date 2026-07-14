import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "eclipse-2-aout-2027")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Le 2 août 2027, un an à peine après l&apos;éclipse du 12 août 2026, une
        nouvelle éclipse solaire traversera le sud de l&apos;Espagne et l&apos;Afrique du
        Nord — avec l&apos;une des totalités les plus longues du siècle.</strong> Bonne
        nouvelle pour les observateurs français : le sud du pays sera de nouveau aux
        premières loges d&apos;une belle éclipse partielle, et vos lunettes de 2026
        peuvent resservir si vous en prenez soin.
      </p>

      <h2>Une éclipse encore plus exceptionnelle</h2>
      <p>
        L&apos;éclipse du 2 août 2027 sera <strong>totale</strong>, et pas
        n&apos;importe comment : la durée de la totalité comptera{" "}
        <strong>parmi les plus longues du XXIᵉ siècle</strong>, jusqu&apos;à environ{" "}
        <strong>6&nbsp;min&nbsp;23&nbsp;s</strong> près de Louxor, en Égypte. À titre de
        comparaison, la plupart des éclipses totales offrent deux à trois minutes de
        nuit en plein jour — 2027 en promet plus du double au meilleur endroit.
      </p>
      <p>
        La bande de totalité traversera le <strong>sud de l&apos;Espagne</strong> —
        Cadix et Malaga sont dans la bande —, le <strong>détroit de Gibraltar</strong>,
        puis l&apos;<strong>Afrique du Nord</strong>. Pour un Français, la totalité de
        2027 sera donc encore plus accessible que celle de 2026 : l&apos;Andalousie se
        rejoint en avion en moins de deux heures depuis la plupart des grandes villes,
        et en voiture depuis le Sud-Ouest. Deux étés de suite, l&apos;Espagne sera la
        destination éclipse de l&apos;Europe.
      </p>

      <h2>Ce qu&apos;on verra depuis la France</h2>
      <p>
        En France métropolitaine, l&apos;éclipse du 2 août 2027 sera{" "}
        <strong>partielle, de nouveau forte dans le sud du pays</strong> : plus on
        descend vers la Méditerranée et l&apos;Espagne, plus la Lune masquera une part
        importante du Soleil. Le scénario rappellera celui de 2026, avec une différence
        notable : le phénomène n&apos;aura pas lieu au ras de l&apos;horizon, ce qui
        simplifiera le choix du point d&apos;observation.
      </p>
      <p>
        La règle de sécurité, elle, ne change pas d&apos;un iota : une éclipse
        partielle, même très avancée, impose des{" "}
        <a href="/#produits">lunettes d&apos;éclipse certifiées ISO 12312-2</a> pendant
        toute l&apos;observation. Seuls les observateurs situés dans la bande de
        totalité, en Espagne ou ailleurs, pourront retirer leurs lunettes — uniquement
        pendant les quelques minutes de totalité.
      </p>

      <h2>Le bon plan : une seule paire pour les trois éclipses</h2>
      <p>
        Voici l&apos;information que peu de gens ont en tête : la France vit une{" "}
        <strong>série de trois rendez-vous rapprochés</strong> — l&apos;éclipse partielle
        du <strong>12 août 2026</strong>, celle du <strong>2 août 2027</strong>, puis une
        nouvelle éclipse le <strong>26 janvier 2028</strong>. Trois occasions
        d&apos;observer le Soleil en moins de dix-huit mois.
      </p>
      <p>
        Or des <strong>lunettes ISO 12312-2 bien conservées restent utilisables
        d&apos;une éclipse à l&apos;autre</strong> : le filtre ne « périme » pas de
        lui-même, à condition que les lunettes soient restées intactes — sans rayure,
        trou ni pliure du filtre — et stockées à plat, à l&apos;abri. Une paire achetée
        dès 3,99&nbsp;€ pour 2026 (livraison 72&nbsp;h) peut donc couvrir les trois
        événements, à condition d&apos;un contrôle sérieux avant chaque réutilisation.
        C&apos;est aussi un argument pour équiper toute la famille dès maintenant,
        plutôt que de racheter dans l&apos;urgence — et au prix fort — à chaque éclipse.
      </p>

      <h2>Comment conserver ses lunettes d&apos;ici là</h2>
      <p>Quatre gestes simples pour retrouver des lunettes sûres en août 2027 :</p>
      <ul>
        <li>
          <strong>Rangez-les dans une pochette</strong> (enveloppe rigide, boîte, pochette
          d&apos;origine) dès la fin de l&apos;observation, à l&apos;abri de la lumière,
          de l&apos;humidité et de la chaleur.
        </li>
        <li>
          <strong>Stockez-les à plat, sans pliure</strong> : le point faible des lunettes
          en carton est le filtre, qui ne doit jamais être plié, froissé ni rayé.
        </li>
        <li>
          <strong>Tenez-les hors de portée des enfants</strong> entre deux éclipses : une
          paire qui a servi de jouet ne doit plus servir d&apos;instrument
          d&apos;observation.
        </li>
        <li>
          <strong>Contrôlez-les avant chaque réutilisation</strong> : filtre intact,
          aucune piqûre de lumière visible, marquages lisibles. En cas de doute, la paire
          part à la poubelle — suivez notre{" "}
          <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">checklist de
          vérification en 5&nbsp;points</a>.
        </li>
      </ul>

      <h2>Questions fréquentes</h2>

      <h3>Où la totalité sera-t-elle visible en 2027 ?</h3>
      <p>
        La bande de totalité du 2 août 2027 passera par le <strong>sud de
        l&apos;Espagne</strong> (Cadix, Malaga), le <strong>détroit de Gibraltar</strong>{" "}
        et l&apos;<strong>Afrique du Nord</strong>, avant de poursuivre vers
        l&apos;Égypte — où la totalité culminera à environ 6&nbsp;min&nbsp;23&nbsp;s près
        de Louxor — puis la péninsule Arabique. Depuis la France, il faudra se contenter
        d&apos;une éclipse partielle, forte dans le sud.
      </p>

      <h3>Mes lunettes de 2026 seront-elles encore bonnes ?</h3>
      <p>
        Oui, <strong>si elles sont restées intactes et bien stockées</strong> : filtre
        sans rayure, trou ni pliure, conservation à plat et à l&apos;abri. Le filtre
        d&apos;une paire conforme ISO 12312-2 ne se dégrade pas spontanément en un an.
        Le réflexe indispensable : un contrôle complet avant le 2 août 2027, et le
        remplacement immédiat de toute paire douteuse.
      </p>

      <h3>Quand aura lieu la prochaine éclipse totale en France métropolitaine ?</h3>
      <p>
        Il faudra être patient : la prochaine éclipse <strong>totale</strong> visible
        depuis la France métropolitaine aura lieu le <strong>3 septembre 2081</strong>.
        D&apos;ici là, les éclipses partielles de 2026, 2027 et 2028 — et un saut en
        Espagne pour vivre une totalité — sont les meilleures occasions de la
        génération.
      </p>
    </BlogArticle>
  );
}
