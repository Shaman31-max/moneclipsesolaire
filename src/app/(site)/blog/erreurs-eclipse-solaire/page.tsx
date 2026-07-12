import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "erreurs-eclipse-solaire")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        Le 12 août 2026, la France vivra sa plus belle éclipse solaire depuis 1999. La quasi-totalité
        des accidents oculaires liés aux éclipses tiennent à <strong>une poignée d&apos;erreurs
        connues et évitables</strong>. Les voici, de la plus fréquente à la plus sournoise — avec,
        pour chacune, le bon réflexe à adopter.
      </p>

      <h2>1. Regarder à l&apos;œil nu « juste une seconde »</h2>
      <p>
        C&apos;est l&apos;erreur numéro un. La rétine n&apos;a <strong>aucun récepteur de
        douleur</strong> : la brûlure commence sans que rien ne vous alerte. Quelques secondes de
        fixation suffisent à endommager la macula, la zone de la vision centrale. Il n&apos;y a pas
        de durée « sans risque » : les lunettes se portent <strong>avant</strong> de lever les yeux,
        et jusqu&apos;à ce qu&apos;on les baisse.
      </p>

      <h2>2. Utiliser des lunettes de soleil</h2>
      <p>
        Même de catégorie&nbsp;4, des lunettes de soleil laissent passer{" "}
        <strong>des milliers de fois trop de lumière</strong> et ne bloquent pas les infrarouges.
        Nous avons consacré un article complet à cette question :{" "}
        <a href="/blog/lunettes-de-soleil-eclipse-danger">peut-on regarder une éclipse avec des
        lunettes de soleil&nbsp;?</a> Réponse courte : non, jamais.
      </p>

      <h2>3. Réutiliser des lunettes rayées ou percées</h2>
      <p>
        Un filtre certifié mais <strong>rayé, plié, perforé ou décollé</strong> laisse passer la
        lumière par le défaut — précisément là où votre œil regarde. Inspectez chaque paire face à
        une lampe avant le jour J. Les lunettes de l&apos;éclipse de 1999 retrouvées dans un tiroir
        sont à jeter : les filtres en polymère se dégradent avec le temps.
      </p>

      <h2>4. Viser le Soleil avec des jumelles ou un téléobjectif sans filtre</h2>
      <p>
        Un instrument optique <strong>concentre la lumière solaire</strong> comme une loupe : le
        danger est décuplé. Des jumelles pointées vers le Soleil peuvent brûler la rétine en une
        fraction de seconde — et détruire instantanément des lunettes d&apos;éclipse placées
        derrière l&apos;oculaire. Seul un <strong>filtre solaire dédié, monté à l&apos;avant de
        l&apos;instrument</strong>, rend l&apos;observation possible.
      </p>

      <h2>5. Mettre le filtre côté oculaire d&apos;un télescope</h2>
      <p>
        Variante du point précédent, encore plus vicieuse : certains filtres « oculaires » vendus
        avec des télescopes d&apos;entrée de gamme se vissent près de l&apos;œil. À cet endroit, la
        lumière concentrée par le tube <strong>chauffe le filtre jusqu&apos;à le fissurer</strong> —
        avec l&apos;œil juste derrière. Le filtre solaire se place toujours{" "}
        <strong>à l&apos;entrée du tube</strong>, jamais à la sortie.
      </p>

      <h2>6. Improviser un filtre : CD, radiographie, verre fumé</h2>
      <p>
        Un CD, une radiographie, un négatif photo ou un verre noirci à la bougie paraissent opaques
        à l&apos;œil… mais <strong>laissent passer les infrarouges</strong>, invisibles et
        brûlants. Aucun de ces bricolages n&apos;a la densité optique requise. La seule exception
        reconnue est le verre de soudeur de grade&nbsp;14, rare dans le commerce.
      </p>

      <h2>7. Acheter des lunettes non certifiées à la dernière minute</h2>
      <p>
        À l&apos;approche du 12 août, les contrefaçons se multiplieront sur les marketplaces, avec
        de faux marquages ISO et CE. Achetez tôt, auprès d&apos;un vendeur identifiable, et
        contrôlez vos paires avec notre{" "}
        <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">checklist de vérification en 5
        points</a> : mention ISO 12312-2, certificat de laboratoire, test visuel en intérieur.
      </p>

      <h2>8. Laisser un enfant sans surveillance</h2>
      <p>
        Un enfant ne mesure pas le danger et peut retirer ses lunettes à tout moment, ou regarder
        par-dessus. Prévoyez <strong>un adulte pour deux à trois enfants</strong>, des lunettes
        bien plaquées sur le visage, et un briefing clair avant l&apos;événement. Le cristallin des
        enfants, plus transparent, laisse passer davantage d&apos;énergie vers la rétine.
      </p>

      <h2>9. Regarder dans le viseur optique d&apos;un appareil photo</h2>
      <p>
        Le viseur optique d&apos;un reflex transmet la lumière du Soleil directement à
        l&apos;œil — amplifiée par l&apos;objectif si vous utilisez un téléobjectif. Pour
        photographier l&apos;éclipse : <strong>filtre solaire sur l&apos;objectif</strong> et
        cadrage sur l&apos;écran arrière, jamais dans le viseur optique.
      </p>

      <h2>10. Retirer ses lunettes pendant les phases partielles</h2>
      <p>
        « Le Soleil est presque caché, je peux regarder » : faux, et c&apos;est l&apos;erreur qui
        piégera le plus de monde en 2026. En France, l&apos;éclipse sera <strong>partielle
        partout</strong> — environ 88 à 96&nbsp;% du disque occulté selon les villes. Or{" "}
        <strong>même 1&nbsp;% de Soleil visible reste dangereux</strong> : le croissant restant
        brûle la rétine aussi sûrement que le Soleil entier. Les lunettes restent donc sur le nez{" "}
        <strong>à 100&nbsp;% du temps</strong>, du début à la fin. Retrouvez les taux
        d&apos;occultation ville par ville dans notre{" "}
        <a href="/blog/eclipse-solaire-12-aout-2026-guide">guide de l&apos;éclipse du 12 août
        2026</a>.
      </p>

      <h2>Que faire en cas d&apos;exposition accidentelle</h2>
      <p>
        Si vous — ou votre enfant — avez regardé le Soleil sans protection, surveillez ces
        symptômes : <strong>tache sombre ou floue au centre de la vision</strong>, lignes droites
        qui paraissent déformées, couleurs délavées, gêne à la lecture. Ils apparaissent souvent{" "}
        <strong>12 à 48&nbsp;heures après</strong> l&apos;exposition, rarement sur le moment. Au
        moindre signe, consultez <strong>rapidement un ophtalmologiste</strong> en mentionnant
        l&apos;exposition solaire : un fond d&apos;œil permettra d&apos;évaluer la lésion. Il
        n&apos;existe pas de traitement curatif de la rétinopathie solaire, mais un suivi précoce
        reste essentiel.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Une seconde à l&apos;œil nu, c&apos;est grave&nbsp;?</h3>
      <p>
        Un regard bref et involontaire — le réflexe de détourner les yeux fait le reste — cause
        rarement une lésion durable. Le vrai danger, c&apos;est la <strong>fixation volontaire de
        plusieurs secondes</strong>, répétée pendant l&apos;éclipse, sans la douleur qui
        alerterait. Ne testez pas la limite : elle ne se signale pas.
      </p>

      <h3>Les symptômes sont-ils immédiats&nbsp;?</h3>
      <p>
        Non, et c&apos;est le piège. La brûlure rétinienne est <strong>indolore</strong> et les
        symptômes apparaissent le plus souvent <strong>dans les 12 à 48&nbsp;heures</strong>. Se
        dire « je ne sens rien, tout va bien » pendant l&apos;éclipse ne prouve strictement rien.
        En cas d&apos;exposition, surveillez votre vision les deux jours suivants et consultez au
        moindre doute.
      </p>
    </BlogArticle>
  );
}
