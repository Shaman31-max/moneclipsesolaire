import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "eclipse-solaire-12-aout-2026-guide")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        Le <strong>mercredi 12 août 2026</strong> en fin de journée, la Lune viendra masquer une très
        grande partie du Soleil au-dessus de la France. C&apos;est l&apos;éclipse la plus
        impressionnante visible depuis notre pays depuis le 11 août 1999 — et la prochaine
        comparable n&apos;aura pas lieu avant 2081. Voici tout ce qu&apos;il faut savoir pour ne pas
        la manquer.
      </p>

      <h2>Une éclipse historique pour la France</h2>
      <p>
        L&apos;éclipse du 12 août 2026 sera <strong>totale</strong> en Espagne du nord et en Islande,
        et <strong>partielle très profonde</strong> sur l&apos;ensemble de la France. Plus vous êtes
        au sud-ouest, plus le spectacle sera saisissant : le ciel s&apos;assombrira nettement, la
        température baissera et la lumière prendra cette teinte étrange que seuls connaissent ceux
        qui ont vécu 1999.
      </p>

      <h3>Taux d&apos;occultation ville par ville</h3>
      <ul>
        <li><strong>Biarritz</strong> : 99,5&nbsp;%</li>
        <li><strong>Bayonne</strong> : 99,3&nbsp;%</li>
        <li><strong>Bordeaux</strong> : 98,5&nbsp;%</li>
        <li><strong>Toulouse</strong> : 97&nbsp;%</li>
        <li><strong>Paris</strong> : 92&nbsp;%</li>
      </ul>
      <p>
        Même à Paris ou Lille, plus de 90&nbsp;% du Soleil sera masqué — un phénomène remarquable
        partout en métropole. Retrouvez le détail complet sur notre page{" "}
        <a href="/eclipse">dédiée à l&apos;éclipse du 12 août 2026</a>.
      </p>

      <h2>À quelle heure observer ?</h2>
      <p>
        L&apos;éclipse se déroulera <strong>en fin de journée</strong>, heure française :
      </p>
      <ul>
        <li><strong>Début</strong> : vers 19h00</li>
        <li><strong>Maximum</strong> : vers 20h30</li>
        <li><strong>Fin</strong> : après 21h00</li>
      </ul>
      <p>
        Particularité importante : le Soleil sera <strong>bas sur l&apos;horizon</strong> au moment du
        maximum. Choisissez dès maintenant un lieu avec une <strong>vue bien dégagée vers
        l&apos;ouest</strong> — colline, littoral, plaine, toit-terrasse. Un horizon urbain encombré
        peut vous faire manquer le maximum.
      </p>

      <h2>Comment l&apos;observer en toute sécurité</h2>
      <p>
        Règle absolue : <strong>ne jamais regarder le Soleil sans protection certifiée</strong>, même
        masqué à 99&nbsp;%. Le 1&nbsp;% restant suffit à provoquer des lésions irréversibles de la
        rétine, sans douleur sur le moment. Les lunettes de soleil, les radiographies, les verres
        fumés : aucune de ces protections improvisées ne filtre les UV et infrarouges.
      </p>
      <p>
        La seule protection reconnue pour l&apos;observation directe est une paire de{" "}
        <a href="/#produits">lunettes d&apos;éclipse certifiées ISO 12312-2</a>, dont le filtre bloque
        plus de 99,997&nbsp;% de la lumière. Pour photographier l&apos;éclipse avec un smartphone, un
        filtre solaire dédié protège aussi le capteur. Et si vous achetez vos lunettes ailleurs,
        apprenez à <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">vérifier leur
        certification</a>.
      </p>

      <h2>Préparez-vous dès maintenant</h2>
      <p>
        Des millions de Français observeront cette éclipse, et l&apos;histoire se répète à chaque
        fois : les lunettes certifiées sont introuvables les derniers jours. Commandez les vôtres en
        avance, prévoyez-en pour toute la famille (et les curieux du voisinage), choisissez votre
        spot d&apos;observation avec vue à l&apos;ouest, et croisez les doigts pour un ciel dégagé.
        Rendez-vous le 12 août à 19h.
      </p>
    </BlogArticle>
  );
}
