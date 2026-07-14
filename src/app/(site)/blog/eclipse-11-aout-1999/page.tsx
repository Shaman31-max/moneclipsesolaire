import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "eclipse-11-aout-1999")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Le 11 août 1999, la France vivait sa dernière éclipse totale de Soleil — et le
        12 août 2026, presque 27 ans jour pour jour plus tard, une nouvelle grande éclipse
        traversera le pays.</strong> Pour ceux qui étaient dehors ce jour-là, le souvenir ne
        s&apos;est jamais effacé. Pour les autres, voici ce qui s&apos;est passé — et pourquoi
        2026 est l&apos;occasion de vivre enfin la vôtre.
      </p>

      <h2>Le 11 août 1999, 12&nbsp;h&nbsp;23</h2>
      <p>
        C&apos;était un mercredi de plein été. Vers midi, la Lune a commencé à grignoter le
        Soleil, et à <strong>12&nbsp;h&nbsp;23</strong>, l&apos;ombre a touché la France. La{" "}
        <strong>bande de totalité traversait la Normandie, la Picardie, la Champagne et
        l&apos;Alsace</strong> : Fécamp, Dieppe, Amiens, Compiègne, Reims, Metz, Strasbourg —
        une écharpe d&apos;ombre d&apos;une centaine de kilomètres de large, filant
        d&apos;ouest en est à une vitesse vertigineuse.
      </p>
      <p>
        <strong>Des millions de personnes étaient dehors.</strong> Sur les parkings
        d&apos;autoroute, dans les champs, sur les plages de la Manche, aux fenêtres des
        bureaux. La météo, capricieuse ce jour-là, a joué avec les nerfs de tout le monde :
        nuages menaçants sur une bonne partie de la bande, et puis, ici et là, des{" "}
        <strong>trouées de dernière minute</strong> — deux minutes de nuit en plein jour, la
        couronne solaire dévoilée, des cris, des applaudissements, des larmes. Ceux qui
        l&apos;ont vue en parlent encore. Ceux qui ont eu un nuage aussi.
      </p>

      <h2>Ce que 1999 a laissé</h2>
      <p>
        L&apos;éclipse de 1999 reste un <strong>souvenir collectif</strong> d&apos;une rare
        intensité : un pays entier le nez en l&apos;air au même moment, une génération
        d&apos;enfants marqués à vie, des cassettes vidéo familiales pieusement conservées.
        Elle a aussi laissé des images plus prosaïques : des{" "}
        <strong>millions de paires de lunettes en carton distribuées</strong>, notamment en
        pharmacie, arborées comme un signe de ralliement national. Et des{" "}
        <strong>embouteillages historiques</strong> sur les routes menant vers la bande de
        totalité, quand la France entière a semblé converger vers la Normandie et la Picardie
        en une seule matinée.
      </p>
      <p>
        Beaucoup de ces lunettes de 1999 dorment encore dans des tiroirs. Gardez-les en
        souvenir — mais surtout, ne les ressortez pas pour 2026. On y revient plus bas.
      </p>

      <h2>La leçon qu&apos;on préfère oublier</h2>
      <p>
        Derrière la fête, 1999 a laissé une trace plus sombre. Dans les semaines qui ont suivi,
        les <strong>services d&apos;ophtalmologie européens ont documenté des dizaines de cas
        de rétinopathie solaire</strong> — des brûlures de la rétine, indolores sur le moment,
        aux séquelles souvent définitives. La grande majorité concernait des{" "}
        <strong>personnes ayant regardé l&apos;éclipse sans protection adaptée</strong> : à
        l&apos;œil nu « juste quelques secondes », avec des lunettes de soleil, à travers des
        bricolages improvisés.
      </p>
      <p>
        C&apos;est la leçon que chaque éclipse doit rappeler : le danger ne prévient pas, ne
        fait pas mal, et ne pardonne pas. Avant le 12 août 2026, relisez{" "}
        <a href="/blog/erreurs-eclipse-solaire">les 10 erreurs à ne jamais commettre le jour
        d&apos;une éclipse</a> — la plupart des accidents de 1999 y figurent, et tous étaient
        évitables.
      </p>

      <h2>1999 → 2026 : ce qui change</h2>
      <p>Deux grandes éclipses françaises, deux expériences très différentes :</p>
      <ul>
        <li>
          <strong>La phase maximale</strong> : totale en 1999 (dans une bande étroite au nord
          du pays), <strong>partielle mais très profonde en 2026</strong> — de 85&nbsp;% à
          Strasbourg à 99,5&nbsp;% à Biarritz. Pas de nuit noire, mais une pénombre
          spectaculaire partout.
        </li>
        <li>
          <strong>L&apos;heure</strong> : la mi-journée en 1999, la{" "}
          <strong>fin de soirée en 2026</strong> (maximum entre 20&nbsp;h&nbsp;18 et
          20&nbsp;h&nbsp;37), avec un Soleil bas sur l&apos;horizon ouest — et la perspective
          rare d&apos;un coucher de Soleil encore éclipsé.
        </li>
        <li>
          <strong>Le déplacement</strong> : en 1999, il fallait monter en Normandie ou en
          Picardie pour la totalité. En 2026, <strong>pas besoin de bouger</strong> :
          l&apos;éclipse est profonde partout en France — vérifiez simplement{" "}
          <a href="/eclipse/villes">les horaires et l&apos;occultation de votre ville</a>. La
          totalité, elle, se joue au nord de l&apos;Espagne.
        </li>
        <li>
          <strong>La protection</strong> : la même règle qu&apos;en 1999, inchangée — des
          lunettes d&apos;éclipse certifiées (aujourd&apos;hui ISO 12312-2), portées pendant
          toute l&apos;observation. Elles sont disponibles{" "}
          <a href="/#produits">dès 3,99&nbsp;€, livrées en 72&nbsp;h</a>.
        </li>
      </ul>

      <h2>Pour ceux qui l&apos;ont vécue</h2>
      <p>
        Si vous aviez dix, vingt ou quarante ans en 1999, le 12 août 2026 a une saveur
        particulière : c&apos;est <strong>l&apos;occasion de transmettre</strong>. Raconter la
        nuit en plein jour à vos enfants ou petits-enfants, leur montrer les lunettes en carton
        gardées en souvenir, puis vivre ensemble, cette fois, un crépuscule éclipsé
        d&apos;été. Pour préparer l&apos;observation en famille dans de bonnes conditions,
        notre <a href="/blog/eclipse-enfants-securite">guide des parents</a> couvre tout :
        âge, lunettes adaptées, surveillance, activités. Les éclipses se vivent mieux à
        plusieurs — 1999 l&apos;a prouvé à l&apos;échelle d&apos;un pays.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>L&apos;éclipse de 2026 sera-t-elle aussi belle que celle de 1999 ?</h3>
      <p>
        Elle sera <strong>différente</strong>. Pas de totalité en France cette fois — pas de
        couronne solaire ni de nuit noire —, mais une éclipse très profonde partout, et
        surtout un phénomène que 1999 n&apos;offrait pas : un{" "}
        <strong>Soleil éclipsé au ras de l&apos;horizon, en pleine lumière du soir</strong>.
        Pour les photographes comme pour les curieux, c&apos;est une rareté à part entière. Et
        ceux qui veulent revivre la totalité peuvent passer en Espagne.
      </p>

      <h3>Puis-je réutiliser mes lunettes de 1999 ?</h3>
      <p>
        <strong>Non, catégoriquement.</strong> Après 27 ans, les films filtrants sont
        dégradés : micro-rayures, piqûres, colle desséchée, montures fatiguées. Même
        d&apos;apparence intacte, une paire de 1999 n&apos;offre plus aucune garantie.
        Gardez-la comme souvenir et <strong>rachetez une paire certifiée ISO 12312-2
        récente</strong> — et vérifiez-la avec notre{" "}
        <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">checklist en 5 points</a> avant
        le jour J.
      </p>
    </BlogArticle>
  );
}
