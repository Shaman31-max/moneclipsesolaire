import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import { BLOG_POSTS } from "@/lib/blog";

const post = BLOG_POSTS.find((p) => p.slug === "observer-eclipse-sans-lunettes")!;

export const metadata: Metadata = {
  title: `${post.title} | MonEclipseSolaire.fr`,
  description: post.description,
  alternates: { canonical: `https://moneclipsesolaire.fr/blog/${post.slug}` },
};

export default function Page() {
  return (
    <BlogArticle post={post}>
      <p>
        <strong>Oui, on peut suivre l&apos;éclipse du 12 août 2026 sans lunettes, grâce aux
        méthodes de projection : sténopé, passoire, feuillage ou jumelles sur trépied.</strong>{" "}
        Ces techniques sont gratuites, sûres et amusantes — mais il faut être honnête sur ce
        qu&apos;elles permettent : on observe une <strong>image projetée</strong> du Soleil, pas
        le Soleil lui-même. Voici comment les mettre en œuvre, et où passent leurs limites.
      </p>

      <h2>Le sténopé : la méthode classique</h2>
      <p>
        Le sténopé est une chambre noire miniature : un petit trou qui projette l&apos;image du
        Soleil sur une surface. Fabrication en cinq minutes :
      </p>
      <ol>
        <li>Prenez une boîte ou une feuille de <strong>carton rigide</strong>.</li>
        <li>
          Découpez une petite fenêtre et recouvrez-la de <strong>papier aluminium</strong> bien
          tendu.
        </li>
        <li>
          Percez l&apos;aluminium d&apos;un trou net avec une <strong>aiguille</strong> —
          1&nbsp;mm environ, sans déchirer le bord.
        </li>
        <li>
          Placez-vous <strong>dos au Soleil</strong>, laissez sa lumière traverser le trou et
          recueillez l&apos;image sur une feuille blanche posée un mètre plus loin.
        </li>
      </ol>
      <p>
        Sur la feuille apparaît un petit disque lumineux : c&apos;est l&apos;image{" "}
        <strong>projetée</strong> du Soleil. Pendant l&apos;éclipse, ce disque se creusera en
        croissant, minute après minute. Plus la distance trou-écran est grande, plus
        l&apos;image est grande (et pâle). On regarde la feuille, <strong>jamais à travers le
        trou</strong>.
      </p>

      <h2>La passoire et le feuillage</h2>
      <p>
        Variante encore plus simple : chaque trou d&apos;une <strong>passoire de cuisine</strong>{" "}
        agit comme un sténopé. Tenez-la dos au Soleil au-dessus d&apos;une feuille blanche ou
        d&apos;un sol clair : des <strong>dizaines de petits croissants lumineux</strong>{" "}
        apparaissent d&apos;un coup. La nature fait la même chose gratuitement : sous un arbre,
        les interstices entre les feuilles projettent au sol une pluie de croissants. C&apos;est
        l&apos;activité la plus magique à partager avec des enfants — nous lui consacrons une
        place de choix dans notre{" "}
        <a href="/blog/eclipse-enfants-securite">guide de l&apos;éclipse en famille</a>.
      </p>

      <h2>La projection avec jumelles sur trépied</h2>
      <p>
        Méthode plus avancée : fixez des jumelles sur un trépied, pointez-les vers le Soleil{" "}
        <strong>sans jamais mettre l&apos;œil derrière les oculaires</strong> — on vise en
        ajustant l&apos;ombre des jumelles au sol, la plus petite possible. Placez une feuille
        blanche à 30-50&nbsp;cm derrière les oculaires : une image du Soleil, grande et
        détaillée, s&apos;y projette. Bouchez l&apos;un des deux tubes, faites la mise au point
        sur la feuille, et accordez des pauses au matériel : la lumière concentrée chauffe les
        jumelles. Cette méthode demande un adulte dédié à la surveillance — personne, jamais, ne
        doit approcher l&apos;œil des oculaires.
      </p>

      <h2>Ce que ces méthodes ne permettent PAS</h2>
      <p>
        Soyons clairs, car c&apos;est là que se joue votre choix : avec toutes ces techniques,{" "}
        <strong>on ne voit pas le Soleil — on voit une projection</strong>. Un petit disque
        lumineux sur une feuille, aussi fidèle soit-il, n&apos;est pas le spectacle du Soleil
        qui se fait grignoter dans le ciel. Et surtout : <strong>aucune méthode indirecte ne
        vous autorise à lever les yeux</strong>. Le sténopé ne protège que tant que vous tournez
        le dos au Soleil ; le ciel, lui, reste exactement aussi dangereux à regarder.
      </p>
      <p>
        Pour vivre l&apos;éclipse en direct, les yeux vers le ciel, il n&apos;existe qu&apos;une
        seule solution sûre : des <strong>lunettes certifiées ISO&nbsp;12312-2</strong>. Ni
        lunettes de soleil, ni films improvisés — notre article sur{" "}
        <a href="/blog/lunettes-de-soleil-eclipse-danger">les lunettes de soleil face à une
        éclipse</a> explique pourquoi en détail.
      </p>

      <h2>Le compromis malin</h2>
      <p>
        Les deux approches ne s&apos;opposent pas, elles se complètent. Le scénario idéal du
        12 août : <strong>l&apos;atelier sténopé en famille</strong> pendant la montée de
        l&apos;éclipse — fabrication, projections, croissants sous les arbres — puis, au moment
        du maximum vers 20&nbsp;h&nbsp;30, <strong>chacun chausse ses lunettes</strong> pour
        voir de ses yeux le Soleil réduit à un mince croissant au-dessus de l&apos;horizon. À
        partir de <strong>3,99&nbsp;€ la paire</strong>, l&apos;expérience directe reste
        accessible à tous les budgets — les nôtres sont{" "}
        <a href="/#produits">disponibles ici</a>, avec tarifs dégressifs pour équiper toute la
        famille.
      </p>

      <h2>Questions fréquentes</h2>

      <h3>Le sténopé est-il vraiment sans danger ?</h3>
      <p>
        <strong>Oui, à une condition simple : rester dos au Soleil.</strong> On regarde
        l&apos;image projetée sur la feuille, jamais le ciel, jamais à travers le trou. Ainsi
        utilisé, le sténopé est la méthode d&apos;observation la plus sûre qui existe — aucun
        rayonnement direct n&apos;atteint les yeux.
      </p>

      <h3>Peut-on regarder à travers un CD ou une radiographie ?</h3>
      <p>
        <strong>Non, jamais.</strong> Un CD, une radiographie, un négatif photo ou un verre
        fumé peuvent paraître très sombres tout en laissant passer les{" "}
        <strong>infrarouges qui brûlent la rétine sans douleur</strong>. L&apos;obscurité
        apparente ne dit rien de la protection réelle. Ces bricolages figurent parmi les causes
        classiques de lésions oculaires après chaque éclipse.
      </p>

      <h3>Et les lunettes 3D du cinéma ?</h3>
      <p>
        <strong>Non plus.</strong> Les lunettes 3D polarisent ou colorent la lumière, elles ne
        la bloquent presque pas — et ne filtrent ni UV ni infrarouges. Elles ne protègent pas
        plus que des lunettes de lecture. Seul le marquage ISO&nbsp;12312-2 garantit un filtre
        conçu pour l&apos;observation solaire directe.
      </p>
    </BlogArticle>
  );
}
