export const metadata = { title: "Politique de confidentialité — MonEclipseSolaire.fr" };

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[#060412] pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-2">Politique de confidentialité</h1>
        <p className="text-sm text-white/50 mb-12">Dernière mise à jour : juin 2026 — Conformément au RGPD (UE 2016/679)</p>

        <div className="space-y-10 text-sm text-white/80 leading-relaxed">

          <Section title="1. Responsable du traitement">
            <p>Le responsable du traitement des données personnelles est l'éditeur du site MonEclipseSolaire.fr.</p>
            <p className="mt-2">Contact DPO : <a href="mailto:contact@moneclipsesolaire.fr" className="text-[#FFB800] underline">contact@moneclipsesolaire.fr</a></p>
          </Section>

          <Section title="2. Données collectées">
            <p>Lors d'une commande ou d'une utilisation de notre site, nous collectons les données suivantes :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Adresse de livraison</li>
              <li>Données de paiement (traitées par Shopify Payments — nous n'avons pas accès aux données bancaires brutes)</li>
              <li>Adresse IP et données de navigation (logs serveur)</li>
            </ul>
          </Section>

          <Section title="3. Finalités du traitement">
            <p>Vos données sont collectées pour les finalités suivantes :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Traitement et suivi de votre commande</li>
              <li>Livraison de vos produits</li>
              <li>Gestion du service client et des réclamations</li>
              <li>Respect des obligations légales (comptabilité, fiscalité)</li>
              <li>Amélioration de nos services (données anonymisées)</li>
            </ul>
          </Section>

          <Section title="4. Base légale">
            <p>Le traitement de vos données repose sur :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-white">Exécution d'un contrat</strong> : traitement de la commande et livraison</li>
              <li><strong className="text-white">Obligation légale</strong> : conservation des données de facturation</li>
              <li><strong className="text-white">Intérêt légitime</strong> : sécurité du site et prévention de la fraude</li>
            </ul>
          </Section>

          <Section title="5. Durée de conservation">
            <p>Vos données sont conservées pendant les durées suivantes :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Données de commande : 3 ans à compter de la commande</li>
              <li>Données de facturation : 10 ans (obligation légale)</li>
              <li>Données de navigation : 13 mois maximum</li>
            </ul>
          </Section>

          <Section title="6. Partage des données">
            <p>Vos données peuvent être transmises aux prestataires suivants, dans le strict cadre de l'exécution de votre commande :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-white">Shopify</strong> : plateforme e-commerce et paiement (certifiée PCI DSS niveau 1)</li>
              <li><strong className="text-white">La Poste</strong> : transporteur pour la livraison</li>
              <li><strong className="text-white">Vercel</strong> : hébergement du site</li>
            </ul>
            <p className="mt-2">Aucune donnée n'est vendue ou cédée à des tiers à des fins commerciales.</p>
          </Section>

          <Section title="7. Vos droits">
            <p>Conformément au RGPD, vous disposez des droits suivants sur vos données :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-white">Accès</strong> : obtenir une copie de vos données</li>
              <li><strong className="text-white">Rectification</strong> : corriger des données inexactes</li>
              <li><strong className="text-white">Effacement</strong> : demander la suppression de vos données</li>
              <li><strong className="text-white">Opposition</strong> : vous opposer à un traitement</li>
              <li><strong className="text-white">Portabilité</strong> : recevoir vos données dans un format structuré</li>
            </ul>
            <p className="mt-2">Pour exercer ces droits : <a href="mailto:contact@moneclipsesolaire.fr" className="text-[#FFB800] underline">contact@moneclipsesolaire.fr</a>. Vous pouvez également introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#FFB800] underline">CNIL</a>.</p>
          </Section>

          <Section title="8. Sécurité">
            <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation (chiffrement HTTPS, accès restreints, hébergement sécurisé).</p>
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
