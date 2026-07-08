export const metadata = { title: "CGV — MonEclipseSolaire.fr" };

export default function CGVPage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Conditions Générales de Vente</h1>
        <p className="text-sm text-white/50 mb-12">Dernière mise à jour : juin 2026</p>

        <div className="space-y-10 text-sm text-white/80 leading-relaxed">

          <Section title="Article 1 — Identification du vendeur">
            <p>Le site MonEclipseSolaire.fr est édité par une entité dont le siège social est en France. Pour toute question, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:postmaster@moneclipsesolaire.fr" className="text-[#FFB800] underline">postmaster@moneclipsesolaire.fr</a>.</p>
          </Section>

          <Section title="Article 2 — Objet">
            <p>Les présentes conditions générales de vente régissent les ventes de produits proposés sur le site MonEclipseSolaire.fr, à savoir :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Lunettes certifiées ISO 12312-2 pour l'observation de l'éclipse solaire</li>
              <li>Filtres solaires ND 5.0 pour smartphones et tablettes</li>
              <li>Ebook numérique pédagogique</li>
            </ul>
          </Section>

          <Section title="Article 3 — Acceptation des conditions">
            <p>Toute commande passée sur le site implique l'acceptation pleine et entière des présentes CGV. Le client déclare en avoir pris connaissance avant de finaliser son achat.</p>
          </Section>

          <Section title="Article 4 — Prix">
            <p>Les prix sont indiqués en euros TTC, livraison incluse. MonEclipseSolaire.fr se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix applicable est celui en vigueur au moment de la commande.</p>
          </Section>

          <Section title="Article 5 — Production à la demande et délais">
            <p>Les produits physiques sont fabriqués à la demande, en séries fermées :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-white">Série 1</strong> : commandes closes le 15 juin 2026, livraison à partir du 20 juillet 2026.</li>
              <li><strong className="text-white">Série 2</strong> : commandes closes le 24 juin 2026, livraison à partir du 1er août 2026.</li>
            </ul>
            <p className="mt-2">Passé ces dates, aucune commande ne pourra être traitée. Ces délais sont donnés à titre indicatif et peuvent varier en cas de force majeure ou d'aléas de production.</p>
          </Section>

          <Section title="Article 6 — Livraison">
            <p>La livraison est effectuée uniquement en <strong className="text-white">France métropolitaine</strong>, par La Poste, en enveloppe déposée directement dans votre boîte aux lettres. Aucun déplacement en point relais n'est nécessaire. La livraison est incluse dans le prix.</p>
            <p className="mt-2">MonEclipseSolaire.fr ne saurait être tenu responsable des retards imputables à La Poste.</p>
          </Section>

          <Section title="Article 7 — Paiement">
            <p>Le paiement s'effectue en ligne par carte bancaire (Visa, Mastercard, CB), PayPal, Apple Pay ou Google Pay, via la plateforme sécurisée Shopify Payments (certifiée PCI DSS niveau 1). Aucune donnée bancaire n'est conservée par MonEclipseSolaire.fr.</p>
          </Section>

          <Section title="Article 8 — Droit de rétractation">
            <p>Conformément à l'article L221-18 du Code de la consommation, le client dispose d'un délai de <strong className="text-white">14 jours</strong> à compter de la réception du colis pour exercer son droit de rétractation, sans avoir à justifier de motifs. Les produits doivent être retournés non utilisés, dans leur emballage d'origine.</p>
            <p className="mt-2">Les biens descellés ou utilisés ne peuvent pas être retournés pour des raisons d'hygiène et de sécurité. Les produits numériques (ebook) ne sont pas soumis au droit de rétractation dès lors que le téléchargement a commencé.</p>
          </Section>

          <Section title="Article 9 — Garanties et sécurité">
            <p>Les lunettes et filtres sont conformes à la norme <strong className="text-white">ISO 12312-2</strong> et portent le marquage CE. Ne pas utiliser si le filtre présente des rayures ou dommages. La surveillance d'un adulte est obligatoire pour les enfants.</p>
          </Section>

          <Section title="Article 10 — Responsabilité">
            <p>MonEclipseSolaire.fr ne pourra être tenu responsable en cas de mauvaise utilisation des produits, de dommages résultant du non-respect des consignes de sécurité, ou de force majeure (catastrophe naturelle, grève, pandémie, etc.).</p>
          </Section>

          <Section title="Article 11 — Données personnelles">
            <p>Les données collectées lors de la commande (nom, adresse, email) sont utilisées exclusivement pour le traitement et la livraison de la commande. Elles ne sont pas cédées à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant : <a href="mailto:postmaster@moneclipsesolaire.fr" className="text-[#FFB800] underline">postmaster@moneclipsesolaire.fr</a>.</p>
          </Section>

          <Section title="Article 12 — Litiges et droit applicable">
            <p>En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux français seront seuls compétents. Les présentes CGV sont soumises au droit français.</p>
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
