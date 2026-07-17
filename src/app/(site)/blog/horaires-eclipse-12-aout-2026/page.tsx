import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";
import { VILLES } from "@/lib/villes";

const post = BLOG_POSTS.find((p) => p.slug === "horaires-eclipse-12-aout-2026")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

const villesTriees = [...VILLES].sort(
  (a, b) => Number(b.occultation.replace(",", ".")) - Number(a.occultation.replace(",", "."))
);

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>L&apos;éclipse solaire a lieu le soir du mercredi 12 août 2026, entre
        environ 19&nbsp;h&nbsp;30 et le coucher du Soleil, avec un maximum vers
        20&nbsp;h&nbsp;30 selon votre ville.</strong> Partout en France, le spectacle se
        joue en fin de journée, Soleil très bas sur l&apos;horizon ouest — une
        configuration rare qui impose de bien choisir son heure… et son point
        d&apos;observation. Voici les horaires détaillés pour 21 grandes villes.
      </p>

      <h2>À quelle heure a lieu l&apos;éclipse ?</h2>
      <p>
        Le phénomène suit partout la même chronologie, décalée de quelques minutes selon
        la longitude. L&apos;éclipse partielle débute entre <strong>19&nbsp;h&nbsp;22
        (Brest)</strong> et <strong>19&nbsp;h&nbsp;44 environ (Strasbourg)</strong>. Le
        maximum — le moment où la Lune masque la plus grande partie du disque solaire —
        survient entre <strong>20&nbsp;h&nbsp;18 et 20&nbsp;h&nbsp;37</strong> selon la
        ville. La fin de l&apos;éclipse, elle, coïncide souvent avec le coucher du Soleil
        lui-même, vers 21&nbsp;h&nbsp;05 à 21&nbsp;h&nbsp;20 : dans une bonne partie du
        pays, le Soleil se couchera encore éclipsé.
      </p>
      <p>
        Concrètement, prévoyez d&apos;être installé <strong>au plus tard à
        19&nbsp;h&nbsp;15</strong> sur un site avec un horizon ouest bien dégagé, vos{" "}
        <a href="/#produits">lunettes certifiées ISO 12312-2</a> à portée de main : elles
        sont indispensables du premier au dernier instant, car l&apos;éclipse restera
        partielle partout en France.
      </p>

      <h2>Les horaires ville par ville</h2>
      <p>
        Le tableau ci-dessous récapitule le début, le maximum et le taux
        d&apos;occultation pour 21 grandes villes, classées de la plus à la moins
        occultée. Cliquez sur une ville pour accéder à son guide complet (meilleurs
        spots, météo locale, conseils).
      </p>
      <div className="overflow-x-auto -mx-1 px-1">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-white/20 text-left text-white">
              <th className="py-2 pr-3 font-black">Ville</th>
              <th className="py-2 pr-3 font-black">Début</th>
              <th className="py-2 pr-3 font-black">Maximum</th>
              <th className="py-2 font-black">Occultation&nbsp;≈</th>
            </tr>
          </thead>
          <tbody>
            {villesTriees.map((v) => (
              <tr key={v.slug} className="border-b border-white/10">
                <td className="py-2 pr-3">
                  <a href={`/eclipse/${v.slug}`}>{v.name}</a>
                </td>
                <td className="py-2 pr-3">{v.startTime}</td>
                <td className="py-2 pr-3">{v.maxTime}</td>
                <td className="py-2">{v.occultation}&nbsp;%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-white/50">
        Horaires indicatifs en heure locale, arrondis. Données de référence : IMCCE
        (Institut de mécanique céleste et de calcul des éphémérides).
      </p>

      <h2>Pourquoi l&apos;éclipse a lieu au coucher du Soleil</h2>
      <p>
        Une éclipse solaire se produit quand la Lune passe exactement entre la Terre et le
        Soleil. Le 12 août 2026, l&apos;ombre de la Lune balaie le globe d&apos;ouest en
        est et atteint l&apos;Europe de l&apos;Ouest en toute fin de parcours — au moment
        où, vu de France, le Soleil termine sa course quotidienne. Résultat : au maximum
        de l&apos;éclipse, le Soleil ne sera plus qu&apos;à{" "}
        <strong>quelques degrés au-dessus de l&apos;horizon ouest</strong>.
      </p>
      <p>
        La conséquence pratique est capitale : <strong>un horizon ouest parfaitement
        dégagé est obligatoire</strong>. Un immeuble, une colline ou une rangée
        d&apos;arbres suffit à masquer tout le spectacle. Les meilleurs spots seront les
        points hauts, les grandes plaines, et surtout les côtes atlantiques où le
        croissant solaire descendra au-dessus de la mer. Repérez votre emplacement
        quelques jours avant, à la même heure, pour vérifier que rien ne bouche la vue.
      </p>

      <h2>Comment se préparer</h2>
      <p>Votre checklist pour le 12 août au soir :</p>
      <ul>
        <li>
          <strong>Lunettes d&apos;éclipse certifiées ISO 12312-2</strong> pour chaque
          participant — commandées à l&apos;avance (dès 2,99&nbsp;€, livraison
          72&nbsp;h), les ruptures de dernière minute sont quasi certaines.
        </li>
        <li>
          <strong>Vérification des lunettes</strong> avant le jour J : marquage,
          certificat, état du filtre — suivez notre{" "}
          <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">checklist en
          5&nbsp;points</a>.
        </li>
        <li>
          <strong>Un spot avec horizon ouest dégagé</strong>, repéré à l&apos;avance à
          20&nbsp;h&nbsp;30.
        </li>
        <li>
          <strong>Arrivée avant 19&nbsp;h</strong> sur les sites populaires :
          l&apos;affluence sera exceptionnelle.
        </li>
        <li>
          <strong>Météo consultée l&apos;après-midi même</strong>, avec un plan B à une
          heure de route si le ciel se couvre.
        </li>
      </ul>

      <h2>Questions fréquentes</h2>

      <h3>L&apos;éclipse sera-t-elle totale en France ?</h3>
      <p>
        Non. En France métropolitaine, l&apos;éclipse sera <strong>partielle partout</strong>,
        avec une occultation allant d&apos;environ 85&nbsp;% dans le nord-est à
        99,5&nbsp;% sur la côte basque. La bande de totalité passe par le nord de
        l&apos;Espagne et l&apos;Islande. Conséquence : les lunettes certifiées doivent
        être portées <strong>du début à la fin</strong>, sans exception.
      </p>

      <h3>Que voit-on si le ciel est couvert ?</h3>
      <p>
        Pas le croissant solaire, mais l&apos;expérience n&apos;est pas nulle pour
        autant : la <strong>chute de luminosité restera spectaculaire</strong>, comme un
        crépuscule accéléré en pleine soirée, accompagnée d&apos;une baisse de
        température sensible. Si les prévisions sont mauvaises, un déplacement
        d&apos;une heure vers une zone dégagée peut tout changer — décidez le jour même.
      </p>

      <h3>Peut-on la voir depuis Paris ?</h3>
      <p>
        Oui, très bien : environ <strong>92&nbsp;% du Soleil</strong> sera masqué à
        Paris, avec un maximum vers 20&nbsp;h&nbsp;32. Le défi parisien est ailleurs :
        trouver un point de vue qui dégage l&apos;horizon ouest au-dessus des immeubles.
        Tous nos conseils et les meilleurs spots sont dans notre{" "}
        <a href="/eclipse/paris">guide de l&apos;éclipse à Paris</a>.
      </p>
    </BlogArticle>
  );
}
