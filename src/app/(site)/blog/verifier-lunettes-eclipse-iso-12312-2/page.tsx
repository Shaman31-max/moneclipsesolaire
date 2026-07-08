import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "verifier-lunettes-eclipse-iso-12312-2")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        À chaque grande éclipse, des lunettes non conformes inondent le marché — avec un vrai risque
        de <strong>lésions oculaires irréversibles</strong> pour ceux qui les portent. Le danger est
        d&apos;autant plus sournois qu&apos;un filtre défaillant ne fait pas mal : les infrarouges
        brûlent la rétine sans aucune douleur. Voici comment vérifier vos lunettes en 5 points, que
        vous les ayez achetées chez nous ou ailleurs.
      </p>

      <h2>1. La mention ISO 12312-2 imprimée sur la monture</h2>
      <p>
        La norme <strong>ISO 12312-2:2015</strong> est la référence internationale pour les filtres
        d&apos;observation directe du Soleil. Elle doit être imprimée sur la monture, avec le nom du
        fabricant ou du distributeur. Pas de mention = pas d&apos;observation. Attention toutefois :
        une simple inscription ne suffit pas, les contrefacteurs l&apos;impriment aussi — d&apos;où
        les points suivants.
      </p>

      <h2>2. Un certificat de test consultable</h2>
      <p>
        Un vendeur sérieux peut produire le <strong>rapport de test d&apos;un laboratoire
        accrédité</strong> mentionnant la transmission lumineuse mesurée. La norme impose une
        transmission inférieure à 0,003&nbsp;% de la lumière visible (densité optique ≥ 5,0) et le
        blocage des UV et infrarouges. Nos rapports de test sont présentés sur notre{" "}
        <a href="/certifications">page certifications</a>, avec le lien de vérification du
        certificat.
      </p>

      <h2>3. Le test visuel : vous ne devez RIEN voir</h2>
      <p>
        Mettez les lunettes dans une pièce éclairée : vous ne devez <strong>absolument rien
        voir</strong>, ni lampe, ni fenêtre, ni écran de téléphone à pleine luminosité. Seuls le
        Soleil ou un filament très puissant (ampoule halogène nue) doivent être perceptibles, sous
        forme d&apos;un disque net et confortable. Si vous distinguez quoi que ce soit d&apos;autre,
        le filtre n&apos;est pas conforme.
      </p>

      <h2>4. L&apos;état du filtre</h2>
      <p>
        Même certifié, un filtre <strong>rayé, plié, perforé ou décollé</strong> est dangereux.
        Inspectez chaque paire face à une lampe avant le jour J, surtout si elles ont voyagé dans un
        sac ou entre les mains d&apos;enfants. En cas de doute, remplacez-les — c&apos;est le prix
        d&apos;un café.
      </p>

      <h2>5. La date et les conditions d&apos;utilisation</h2>
      <p>
        Les filtres en polymère se dégradent avec le temps et l&apos;exposition. Des lunettes
        stockées depuis l&apos;éclipse de 1999 ne doivent plus être utilisées. Respectez aussi les
        consignes d&apos;usage : observation par périodes de quelques minutes, surveillance des
        enfants par un adulte, et jamais d&apos;utilisation derrière des jumelles, une lunette
        astronomique ou un téléobjectif sans filtre dédié — ces instruments concentrent la lumière
        et détruisent le filtre instantanément.
      </p>

      <h2>En résumé : la checklist</h2>
      <ol>
        <li>Mention ISO 12312-2 + nom du fabricant sur la monture</li>
        <li>Certificat de laboratoire accrédité consultable</li>
        <li>Rien de visible à travers le filtre en intérieur</li>
        <li>Filtre intact : ni rayure, ni pli, ni perforation</li>
        <li>Lunettes récentes, utilisées selon les consignes</li>
      </ol>
      <p>
        Nos <a href="/#produits">lunettes d&apos;éclipse MonEclipseSolaire.fr</a> cochent ces cinq
        cases : certifiées ISO 12312-2 et CE, testées par un laboratoire européen accrédité, avec
        certificat consultable en ligne, et expédiées <a href="/qui-sommes-nous">par nos soins depuis
        Toulouse</a> dans un emballage protecteur.
      </p>
    </BlogArticle>
  );
}
