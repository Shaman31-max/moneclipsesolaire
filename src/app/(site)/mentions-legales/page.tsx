export const metadata = { title: "Mentions légales — MonEclipseSolaire.fr" };

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Mentions légales</h1>
        <p className="text-sm text-white/50 mb-12">Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>

        <div className="space-y-10 text-sm text-white/80 leading-relaxed">

          <Section title="1. Éditeur du site">
            <p>Le site <strong className="text-white">MonEclipseSolaire.fr</strong> est édité par une entité de droit français.</p>
            <p className="mt-2">Email : <a href="mailto:postmaster@moneclipsesolaire.fr" className="text-[#FFB800] underline">postmaster@moneclipsesolaire.fr</a></p>
          </Section>

          <Section title="2. Hébergement">
            <p>Le site est hébergé par :</p>
            <p className="mt-2">
              <strong className="text-white">Vercel Inc.</strong><br />
              340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#FFB800] underline">vercel.com</a>
            </p>
          </Section>

          <Section title="3. Propriété intellectuelle">
            <p>L'ensemble des contenus présents sur le site MonEclipseSolaire.fr (textes, images, logos, graphismes, etc.) est la propriété exclusive de l'éditeur ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de l'éditeur.</p>
          </Section>

          <Section title="4. Données personnelles">
            <p>Les données personnelles collectées sur ce site (nom, adresse email, adresse postale) sont utilisées exclusivement pour le traitement des commandes et la livraison des produits. Elles ne sont en aucun cas cédées, vendues ou louées à des tiers.</p>
            <p className="mt-2">Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p className="mt-2">Pour exercer ces droits, contactez-nous à : <a href="mailto:postmaster@moneclipsesolaire.fr" className="text-[#FFB800] underline">postmaster@moneclipsesolaire.fr</a>.</p>
          </Section>

          <Section title="5. Cookies">
            <p>Le site peut utiliser des cookies techniques nécessaires au bon fonctionnement du site (session, panier). Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre consentement.</p>
          </Section>

          <Section title="6. Responsabilité">
            <p>L'éditeur s'efforce de maintenir les informations du site à jour et exactes. Toutefois, il ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'éditeur décline toute responsabilité pour tout dommage résultant de l'utilisation du site ou de l'impossibilité d'y accéder.</p>
          </Section>

          <Section title="7. Droit applicable et juridiction">
            <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </Section>

        </div>
      </div>
    </main>
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
