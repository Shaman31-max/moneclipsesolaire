import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "lunettes-de-soleil-eclipse-danger")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Non. Les lunettes de soleil ne permettent jamais de regarder une éclipse
        solaire, même quelques secondes, même avec des verres de catégorie&nbsp;4.</strong> Elles
        laissent passer des milliers de fois trop de lumière et ne bloquent pas correctement les
        infrarouges. La question revient à chaque éclipse — et elle mérite une vraie réponse,
        car l&apos;erreur coûte parfois une partie de la vue. Voici pourquoi, point par point.
      </p>

      <h2>Pourquoi les lunettes de soleil ne protègent pas</h2>

      <h3>~80&nbsp;% de filtration, quand il en faut 99,997&nbsp;%</h3>
      <p>
        Des lunettes de soleil classiques filtrent environ <strong>80 à 90&nbsp;% de la lumière
        visible</strong>. C&apos;est parfait pour la plage, dérisoire face au Soleil. Un filtre
        d&apos;éclipse conforme à la norme ISO 12312-2 doit bloquer au moins{" "}
        <strong>99,997&nbsp;% de la lumière visible</strong> — soit une transmission inférieure à
        0,003&nbsp;%. Autrement dit, des lunettes de soleil laissent passer{" "}
        <strong>plusieurs milliers de fois plus de lumière</strong> qu&apos;un filtre
        d&apos;éclipse. L&apos;écart n&apos;est pas une nuance : c&apos;est un gouffre.
      </p>

      <h3>Les UV et infrarouges invisibles qui brûlent sans douleur</h3>
      <p>
        Le danger ne se limite pas à la lumière visible. Le Soleil émet des{" "}
        <strong>ultraviolets et des infrarouges</strong> que l&apos;œil ne perçoit pas, mais qui
        traversent en partie les verres solaires ordinaires. Les infrarouges chauffent la rétine
        et la détruisent par photocoagulation. Pire : <strong>la rétine ne possède aucun
        récepteur de douleur</strong>. La brûlure se fait sans aucune sensation d&apos;alerte.
        Vous ne sentez rien pendant que la lésion s&apos;installe.
      </p>

      <h3>Catégorie 3 ou 4 n&apos;a rien à voir avec la densité optique 5</h3>
      <p>
        Les catégories 0 à 4 des lunettes de soleil mesurent le confort face à
        l&apos;éblouissement, pas la sécurité face à l&apos;observation solaire directe. Une
        catégorie&nbsp;4 (verres très foncés, glacier ou mer) transmet encore{" "}
        <strong>3 à 8&nbsp;% de la lumière visible</strong>. Un filtre d&apos;éclipse affiche une{" "}
        <strong>densité optique d&apos;au moins 5</strong>, c&apos;est-à-dire une transmission
        100&nbsp;000 fois plus faible que la lumière incidente. Les deux échelles ne se comparent
        même pas. La mention « catégorie&nbsp;4 » ou « UV400 » ne vous autorise donc{" "}
        <strong>jamais</strong> à fixer le Soleil.
      </p>

      <h2>La rétinopathie solaire : indolore et irréversible</h2>
      <p>
        Fixer le Soleil, même partiellement éclipsé, peut provoquer une{" "}
        <strong>rétinopathie solaire</strong> : une brûlure de la macula, la zone de la rétine
        responsable de la vision fine et centrale. Les symptômes — tache sombre au centre de la
        vision, couleurs délavées, lignes déformées — apparaissent souvent{" "}
        <strong>12 à 48&nbsp;heures après</strong> l&apos;exposition, quand il est trop tard pour
        agir. Il n&apos;existe <strong>aucun traitement</strong> : la récupération est partielle
        au mieux, nulle au pire. Après l&apos;éclipse du 11 août 1999, les ophtalmologistes
        européens ont recensé <strong>des dizaines de cas documentés</strong> de lésions
        rétiniennes, dont une partie chez des personnes qui portaient… des lunettes de soleil.
        Pour la chronologie et les horaires de la prochaine éclipse, consultez notre{" "}
        <a href="/blog/eclipse-solaire-12-aout-2026-guide">guide de l&apos;éclipse du 12 août
        2026</a>.
      </p>

      <h2>Les fausses bonnes idées</h2>
      <p>
        À chaque éclipse, les mêmes bricolages ressurgissent. <strong>Tous sont dangereux</strong> :
      </p>
      <ul>
        <li>
          <strong>Deux paires de lunettes de soleil superposées</strong> : deux fois 85&nbsp;% de
          filtration reste des centaines de fois insuffisant, et les infrarouges passent toujours.
        </li>
        <li>
          <strong>Lunettes de ski ou de glacier</strong> : catégorie&nbsp;4 au maximum, voir
          ci-dessus. Conçues pour la réverbération, pas pour l&apos;observation directe.
        </li>
        <li>
          <strong>Verre fumé à la bougie</strong> : la suie se dépose de façon irrégulière et ne
          filtre pas les infrarouges. Une méthode de grand-père à oublier définitivement.
        </li>
        <li>
          <strong>Radiographies médicales</strong> : le film radiographique laisse passer les
          infrarouges même quand il paraît opaque. Idem pour les négatifs photo et les CD.
        </li>
      </ul>
      <p>
        Une seule exception reconnue : le <strong>verre de soudeur de grade&nbsp;14</strong> (pas
        13, pas 12), qui atteint une densité suffisante. Il est toutefois difficile à trouver —
        la plupart des masques de soudure vendus en magasin sont de grade 9 à 12, insuffisants.
      </p>

      <h2>Les seules protections valables</h2>
      <p>
        Pour l&apos;observation directe, une seule solution : des{" "}
        <strong>lunettes d&apos;éclipse certifiées ISO 12312-2</strong>, en bon état, portées
        pendant toute la durée des phases partielles. La norme garantit le blocage de la lumière
        visible, des UV et des infrarouges — le détail est expliqué sur notre{" "}
        <a href="/certifications">page certifications</a>. Avant le jour J, vérifiez vos paires
        avec notre <a href="/blog/verifier-lunettes-eclipse-iso-12312-2">checklist en 5
        points</a> : marquage, certificat, test visuel, état du filtre.
      </p>
      <p>
        L&apos;alternative sans aucun risque : l&apos;<strong>observation indirecte</strong>. Un
        sténopé (une feuille percée d&apos;un petit trou qui projette l&apos;image du Soleil sur
        une seconde feuille) ou la projection à travers une passoire permettent de suivre
        l&apos;éclipse en tournant le dos au Soleil. Zéro danger, et un vrai plaisir avec des
        enfants.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Et avec deux paires de lunettes de soleil superposées ?</h3>
      <p>
        Non. La filtration se multiplie mais reste très loin du compte : deux paires à
        85&nbsp;% laissent encore passer environ 2&nbsp;% de la lumière — des centaines de fois
        trop. Et les infrarouges, eux, ne sont presque pas atténués. <strong>Superposer des
        verres ne crée pas un filtre d&apos;éclipse.</strong>
      </p>

      <h3>Les lunettes de soudeur protègent-elles ?</h3>
      <p>
        Uniquement le <strong>verre de grade&nbsp;14</strong>, rare dans le commerce. Les grades
        inférieurs (9 à 13), les plus courants, sont insuffisants pour une observation
        prolongée. Dans le doute, des lunettes ISO 12312-2 restent la solution la plus simple et
        la moins chère.
      </p>

      <h3>Un enfant risque-t-il plus qu&apos;un adulte ?</h3>
      <p>
        Oui. Le <strong>cristallin d&apos;un enfant est plus transparent</strong> que celui
        d&apos;un adulte et laisse davantage d&apos;énergie atteindre la rétine. Les enfants ont
        aussi tendance à fixer plus longtemps, sans mesurer le danger. Surveillance permanente et
        lunettes certifiées bien plaquées sur le visage sont indispensables — ou observation
        indirecte pour les plus petits.
      </p>
    </BlogArticle>
  );
}
