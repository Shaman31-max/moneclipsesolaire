import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "ou-acheter-lunettes-eclipse-solaire")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        Le 12 août 2026, la France vivra sa plus impressionnante éclipse solaire depuis 1999 —
        jusqu&apos;à <strong>99,5&nbsp;% du Soleil masqué à Biarritz</strong>. Pour l&apos;observer sans
        risque, une seule protection est reconnue : des lunettes d&apos;éclipse certifiées{" "}
        <a href="/certifications">ISO 12312-2</a>. Mais où les acheter, et comment éviter les
        contrefaçons qui inondent le marché à chaque éclipse ? Voici le tour d&apos;horizon.
      </p>

      <h2>Les pharmacies et bureaux de tabac</h2>
      <p>
        Comme en 1999, une partie des pharmacies et tabacs-presse proposeront des lunettes
        d&apos;éclipse à l&apos;approche du 12 août. C&apos;est une option fiable quand le produit est
        correctement certifié, avec deux limites : les stocks partent très vite dans les semaines
        précédant l&apos;événement, et les prix y sont souvent plus élevés qu&apos;en ligne. Si vous
        achetez en boutique, vérifiez la mention ISO 12312-2 imprimée sur la monture.
      </p>

      <h2>Les grandes marketplaces : prudence</h2>
      <p>
        Sur les grandes plateformes de e-commerce, le meilleur côtoie le pire. À chaque éclipse, des
        vendeurs opportunistes écoulent des lunettes au marquage CE fantaisiste ou aux filtres non
        conformes — l&apos;American Astronomical Society tient d&apos;ailleurs une liste noire de
        contrefaçons depuis l&apos;éclipse américaine de 2017. Le danger est réel : un filtre non
        conforme laisse passer les infrarouges qui brûlent la rétine <em>sans douleur immédiate</em>.
        Avant tout achat sur une marketplace, exigez le certificat du laboratoire et consultez notre
        guide pour <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">vérifier une certification
        ISO 12312-2</a>.
      </p>

      <h2>Les sites spécialisés</h2>
      <p>
        Les boutiques spécialisées dans l&apos;observation solaire offrent en général les meilleures
        garanties : certification vérifiable, filtres testés par des laboratoires accrédités, et un
        interlocuteur identifiable en cas de question. C&apos;est notre positionnement chez{" "}
        <strong>MonEclipseSolaire.fr</strong> : nos lunettes sont testées par un laboratoire européen
        accrédité, le certificat est consultable en ligne, et chaque commande est vérifiée et
        expédiée depuis Toulouse <a href="/qui-sommes-nous">par nos soins</a> — livraison gratuite et
        suivie, directement en boîte aux lettres, à partir de 2,99&nbsp;€ la paire avec des tarifs
        dégressifs pour les familles et les groupes.
      </p>

      <h2>Quand acheter ?</h2>
      <p>
        <strong>Maintenant.</strong> Ce n&apos;est pas un argument commercial mais un retour
        d&apos;expérience constant : à chaque éclipse majeure, les stocks mondiaux de filtres
        certifiés s&apos;épuisent dans les 2 à 3 semaines précédant le jour J, et les prix flambent.
        En commandant en juillet, vous payez le prix normal, vous recevez vos lunettes tranquillement
        et vous avez le temps de les vérifier avant le grand jour.
      </p>

      <h2>Ce qu&apos;il faut retenir</h2>
      <ul>
        <li>Seules les lunettes certifiées <strong>ISO 12312-2</strong> permettent l&apos;observation directe du Soleil.</li>
        <li>Les lunettes de soleil, même très foncées, ne protègent pas (elles bloquent ~80&nbsp;% de la lumière, il en faut 99,997&nbsp;%).</li>
        <li>Sur les marketplaces, exigez le certificat du laboratoire.</li>
        <li>Commandez tôt : les ruptures de stock sont systématiques à l&apos;approche d&apos;une éclipse.</li>
      </ul>
    </BlogArticle>
  );
}
