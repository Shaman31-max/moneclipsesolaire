// Section de contenu SEO — server component (aucun JS client), texte indexable
// ciblant « lunettes éclipse solaire » et ses variantes.
export default function SeoContent() {
  return (
    <section aria-label="En savoir plus sur les lunettes éclipse solaire" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10 text-sm leading-relaxed text-white/80">
        <div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Lunettes éclipse solaire certifiées : pourquoi c'est indispensable
          </h2>
          <p className="mb-3">
            Le <strong className="text-white">12 août 2026</strong>, la France vivra sa plus belle éclipse solaire
            depuis 1999. Mais observer le soleil à l'œil nu, même partiellement masqué, provoque des lésions
            irréversibles de la rétine. Des <strong className="text-white">lunettes éclipse solaire certifiées
            ISO 12312-2</strong> sont le seul moyen sûr d'observer directement le phénomène : leur filtre ND 5.0
            bloque plus de 99,997&nbsp;% de la lumière visible ainsi que la totalité des rayonnements UV et
            infrarouges.
          </p>
          <p>
            Toutes nos lunettes d'éclipse sont testées par <strong className="text-white">DIN CERTCO</strong>,
            laboratoire européen accrédité, et portent le marquage CE. Elles conviennent aux adultes comme aux
            enfants, et sont expédiées gratuitement partout en France métropolitaine.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-black text-white mb-4">
            Comment choisir ses lunettes pour l'éclipse du 12 août 2026 ?
          </h2>
          <p className="mb-3">
            Vérifiez trois points avant tout achat de lunettes d'éclipse solaire&nbsp;: la mention de la norme{" "}
            <a href="/certifications" className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors">
              ISO 12312-2
            </a>{" "}
            imprimée sur la monture, le nom du laboratoire ayant certifié le filtre, et l'absence de rayure ou de
            perforation sur le film filtrant. Méfiez-vous des lunettes non certifiées vendues sur les marketplaces :
            en 1999, de nombreuses lésions oculaires avaient été causées par des filtres non conformes.
          </p>
          <p>
            Pour photographier ou filmer l'éclipse avec un smartphone, un{" "}
            <a href="#produits" className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors">
              filtre solaire pour téléphone
            </a>{" "}
            est également nécessaire afin de protéger le capteur de l'appareil.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-black text-white mb-4">
            Commandez vos lunettes d'éclipse solaire à temps
          </h2>
          <p>
            À l'approche du 12 août 2026, la demande de lunettes d'éclipse explose et les ruptures de stock sont
            fréquentes — en 1999, des millions de Français avaient cherché des lunettes au dernier moment.{" "}
            <a href="#produits" className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors">
              Commandez vos lunettes éclipse solaire dès maintenant
            </a>{" "}
            à partir de 3,99&nbsp;€, livraison gratuite et suivie partout en France métropolitaine, directement
            en boîte aux lettres. Chaque commande est vérifiée et expédiée depuis Toulouse par{" "}
            <a href="/qui-sommes-nous" className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors">
              Julien &amp; Estelle
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
