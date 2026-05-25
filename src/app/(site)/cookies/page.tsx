export const metadata = { title: "Politique de cookies — MonEclipseSolaire.fr" };

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Politique de cookies</h1>
        <p className="text-sm text-white/50 mb-12">Dernière mise à jour : juin 2026</p>

        <div className="space-y-10 text-sm text-white/80 leading-relaxed">

          <Section title="Qu'est-ce qu'un cookie ?">
            <p>Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, tablette) lors de votre visite sur un site web. Il permet au site de mémoriser certaines informations vous concernant, comme vos préférences ou le contenu de votre panier.</p>
          </Section>

          <Section title="Cookies utilisés sur ce site">
            <p>MonEclipseSolaire.fr utilise uniquement des cookies strictement nécessaires au fonctionnement du site :</p>
            <div className="mt-3 space-y-3">
              <CookieRow name="Session Shopify" purpose="Gestion du panier et de la session d'achat" duration="Session" />
              <CookieRow name="Authentification B2B" purpose="Maintien de la connexion à l'espace partenaires" duration="Session" />
              <CookieRow name="Préférences" purpose="Mémorisation de vos choix de navigation" duration="30 jours" />
            </div>
            <p className="mt-4">Nous n'utilisons <strong className="text-white">aucun cookie publicitaire, de tracking ou de réseaux sociaux</strong> sans votre consentement préalable.</p>
          </Section>

          <Section title="Comment gérer les cookies ?">
            <p>Vous pouvez à tout moment modifier vos préférences en matière de cookies directement depuis les paramètres de votre navigateur :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-white">Chrome</strong> : Paramètres → Confidentialité et sécurité → Cookies</li>
              <li><strong className="text-white">Firefox</strong> : Préférences → Vie privée et sécurité</li>
              <li><strong className="text-white">Safari</strong> : Préférences → Confidentialité</li>
              <li><strong className="text-white">Edge</strong> : Paramètres → Cookies et autorisations de site</li>
            </ul>
            <p className="mt-2">La désactivation des cookies techniques peut affecter le bon fonctionnement du site (panier, connexion).</p>
          </Section>

          <Section title="Contact">
            <p>Pour toute question relative à notre utilisation des cookies : <a href="mailto:contact@moneclipsesolaire.fr" className="text-[#FFB800] underline">contact@moneclipsesolaire.fr</a></p>
          </Section>

        </div>
      </div>
    </main>
  );
}

function CookieRow({ name, purpose, duration }: { name: string; purpose: string; duration: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 p-3 rounded-xl bg-white/04 border border-white/08">
      <span className="font-bold text-white w-48 flex-shrink-0">{name}</span>
      <span className="text-white/70 flex-1">{purpose}</span>
      <span className="text-[#FFB800] text-xs flex-shrink-0">{duration}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-black text-white mb-3 pb-2 border-b border-white/10">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
