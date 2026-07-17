import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "din-certco-certification")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>DIN CERTCO est l&apos;organisme de certification allemand qui teste et certifie
        la conformité des lunettes d&apos;éclipse à la norme ISO 12312-2.</strong> Un certificat
        DIN CERTCO signifie que les filtres ont été mesurés en laboratoire — transmission
        lumineuse, UV, infrarouges — et pas seulement déclarés conformes par le fabricant. Voici
        qui est cet organisme, ce que son processus implique concrètement, et comment vérifier
        vous-même un certificat.
      </p>

      <h2>Qui est DIN CERTCO ?</h2>
      <p>
        DIN CERTCO est un <strong>organisme de certification allemand</strong> rattaché au groupe{" "}
        <strong>TÜV Rheinland</strong> et lié au <strong>DIN</strong>, l&apos;institut allemand de
        normalisation — l&apos;équivalent de l&apos;AFNOR en France. Sa mission : certifier que
        des produits respectent des normes précises, en s&apos;appuyant sur des essais de
        laboratoire indépendants du fabricant. L&apos;organisme certifie de longue date les{" "}
        <strong>équipements de protection oculaire</strong>, dont les filtres d&apos;observation
        solaire directe. Dans ce domaine, son nom fait référence : c&apos;est l&apos;un des
        organismes les plus cités par les fabricants sérieux de lunettes d&apos;éclipse en
        Europe.
      </p>

      <h2>Ce que le processus de certification implique</h2>
      <p>
        Obtenir un certificat ne consiste pas à remplir un formulaire. Les filtres sont soumis à
        des <strong>essais en laboratoire</strong> qui vérifient point par point les exigences de
        l&apos;ISO 12312-2 :
      </p>
      <ul>
        <li>
          <strong>Transmission de la lumière visible</strong> : elle doit rester inférieure à
          0,0032&nbsp;%, soit une <strong>densité optique d&apos;au moins 5</strong>. C&apos;est
          la mesure centrale — celle qui sépare un filtre d&apos;éclipse de n&apos;importe quel
          verre foncé.
        </li>
        <li>
          <strong>Blocage des ultraviolets et des infrarouges</strong> : les rayonnements
          invisibles, responsables de brûlures rétiniennes indolores, doivent être filtrés dans
          les limites fixées par la norme.
        </li>
        <li>
          <strong>Tenue mécanique du film</strong> : le filtre doit résister aux manipulations
          normales sans se déchirer ni se décoller de la monture.
        </li>
        <li>
          <strong>Contrôle des marquages</strong> : les mentions imprimées (norme, fabricant,
          avertissements d&apos;usage) doivent être présentes et exactes.
        </li>
      </ul>
      <p>
        C&apos;est toute la différence avec un simple logo imprimé : le certificat atteste que{" "}
        <strong>des échantillons réels ont été mesurés</strong> par un tiers indépendant. Pour
        comprendre ce que recouvre — et ne recouvre pas — le marquage CE, lisez notre article
        sur la <a href="/blog/difference-ce-iso-12312-2">différence entre CE et
        ISO&nbsp;12312-2</a>.
      </p>

      <h2>Comment vérifier un certificat DIN CERTCO</h2>
      <p>
        Le grand avantage de DIN CERTCO : son registre est <strong>public et consultable en
        ligne</strong>. La vérification prend deux minutes :
      </p>
      <ol>
        <li>
          <strong>Demandez le numéro de certificat</strong> au vendeur. Un vendeur sérieux le
          communique sans difficulté — il figure généralement sur le certificat lui-même.
        </li>
        <li>
          <strong>Recherchez ce numéro dans le registre public</strong> de DIN CERTCO, accessible
          sur <strong>dincertco.tuv.com</strong>. Si le certificat est authentique et valide, il
          y apparaît.
        </li>
        <li>
          <strong>Vérifiez que le titulaire correspond</strong> : le nom du fabricant ou du
          distributeur inscrit au registre doit être cohérent avec le produit que l&apos;on vous
          vend. Un numéro valide mais délivré à une autre société pour un autre produit ne
          prouve rien.
        </li>
      </ol>
      <p>
        Ce réflexe désamorce l&apos;essentiel du problème des contrefaçons : un faux marquage
        s&apos;imprime facilement, <strong>une entrée dans un registre public ne se falsifie
        pas</strong>. Complétez ensuite par le test visuel à réception, détaillé dans notre{" "}
        <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">checklist de vérification</a>.
      </p>

      <h2>Notre certificat</h2>
      <p>
        Nos lunettes d&apos;éclipse sont certifiées par DIN CERTCO, et nous appliquons la règle
        de transparence que nous recommandons : le certificat est{" "}
        <strong>publié en intégralité</strong> sur notre{" "}
        <a href="/certifications">page certifications</a>, où vous pouvez le consulter et le
        vérifier avant de commander. Nos{" "}
        <a href="/#produits">lunettes certifiées sont disponibles dès 2,99&nbsp;€</a>, livrées
        en 72&nbsp;h.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>DIN CERTCO est-il équivalent à ISO 12312-2 ?</h3>
      <p>
        Non, ce sont deux choses différentes et complémentaires. <strong>ISO 12312-2 est la
        norme</strong> : le texte technique qui fixe les exigences (transmission, UV,
        infrarouges, marquages). <strong>DIN CERTCO est l&apos;organisme qui certifie</strong> la
        conformité d&apos;un produit à cette norme, après essais en laboratoire. La norme dit ce
        qu&apos;il faut atteindre ; le certificateur atteste que c&apos;est atteint.
      </p>

      <h3>Une paire sans certificat DIN CERTCO est-elle forcément dangereuse ?</h3>
      <p>
        Non. DIN CERTCO n&apos;est pas le seul acteur : <strong>d&apos;autres laboratoires
        accrédités</strong> testent et certifient des filtres d&apos;observation solaire en
        Europe et ailleurs. Ce qui compte n&apos;est pas le nom de l&apos;organisme, mais
        l&apos;existence d&apos;un <strong>certificat vérifiable</strong> : un laboratoire
        nommé, identifiable, et un document que le vendeur peut produire. Une paire sans aucun
        certificat consultable, en revanche, ne devrait jamais servir à regarder le Soleil.
      </p>
    </BlogArticle>
  );
}
