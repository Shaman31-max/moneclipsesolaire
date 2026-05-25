"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, Package, Truck, CreditCard, Eye, Building2, CalendarClock } from "lucide-react";

const categories = [
  {
    icon: CalendarClock,
    label: "Séries & Livraisons",
    color: "#22D3EE",
    faqs: [
      {
        q: "Comment fonctionne le système de production à la demande ?",
        a: "Pour éviter tout gaspillage sur un événement unique et non renouvelable, nous produisons uniquement ce qui est commandé, en deux séries fermées. Une fois la clôture de chaque série passée, il n'est plus possible de passer commande dans ce batch. Les produits sont fabriqués après la clôture, contrôlés, puis expédiés à la date de livraison prévue.",
      },
      {
        q: "Quelles sont les dates exactes des deux séries ?",
        a: "1ère série : commandes closes le 15 juin 2026, livraison le 20 juillet 2026 (23 jours avant l'éclipse). 2ème série : commandes closes le 7 juillet 2026, livraison le 7 août 2026 (5 jours avant l'éclipse). Il n'y aura pas de 3ème série ni de vente après ces dates.",
      },
      {
        q: "Que se passe-t-il si je rate les deux séries ?",
        a: "Après la clôture de la 2ème série (7 juillet), il ne sera plus possible de commander sur notre site. Nous ne ferons aucune exception et aucune commande express ne sera acceptée après cette date, car le délai de production ne permet pas de garantir la livraison avant le 12 août.",
      },
      {
        q: "La livraison est-elle garantie avant l'éclipse ?",
        a: "Oui, sous réserve que vous commandiez avant la clôture de la série choisie et que vous fournissiez une adresse de livraison correcte. Nos dates de livraison intègrent une marge de sécurité avec nos transporteurs partenaires (Colissimo, Chronopost). En cas de problème exceptionnel, notre équipe vous contacte immédiatement.",
      },
      {
        q: "Puis-je commander dans les deux séries ?",
        a: "Oui, c'est possible.",
      },
    ],
  },
  {
    icon: Eye,
    label: "Sécurité & Certifications",
    color: "#FFB800",
    faqs: [
      {
        q: "Pourquoi faut-il des lunettes spéciales pour l'éclipse ?",
        a: "Regarder directement le soleil, même partiellement éclipsé, provoque des lésions irréversibles de la rétine (rétinopathie solaire). La lumière visible et les rayonnements UV/infrarouge non filtrés brûlent littéralement les cellules photo-réceptrices. Les lunettes de soleil ordinaires, même très foncées, ne protègent pas : elles bloquent ≈ 80% de la lumière alors qu'il en faut 99,997%.",
      },
      {
        q: "Qu'est-ce que la certification ISO 12312-2 ?",
        a: "L'ISO 12312-2:2015 est la norme internationale qui définit les exigences de sécurité pour les filtres solaires oculaires. Elle impose une transmission lumineuse inférieure à 0,003 % (densité optique ≥ 5,0), le blocage total des UV (290–380 nm) et des IR jusqu'à 1400 nm. Tous nos produits sont testés par DIN CERTCO, laboratoire européen accrédité.",
      },
      {
        q: "Mes lunettes portent un marquage CE. Est-ce suffisant ?",
        a: "Le marquage CE seul ne garantit pas la conformité eclipse. Il doit être accompagné de la référence ISO 12312-2 et du numéro de l'organisme notifié (ex : CE 2797). Nos lunettes portent ces deux indications et sont livrées avec un certificat de conformité.",
      },
      {
        q: "Peut-on utiliser les lunettes pour filmer avec son téléphone ?",
        a: "Non. Les lunettes sont conçues pour les yeux humains. Pour filmer, utilisez notre filtre téléphone universel (ND 5.0), positionné devant l'objectif de votre smartphone. Ne regardez jamais l'écran en direct sans protection si votre téléphone capte directement le soleil.",
      },
    ],
  },
  {
    icon: Truck,
    label: "Livraison & Retours",
    color: "#FFB800",
    faqs: [
      {
        q: "Quand ma commande sera-t-elle expédiée ?",
        a: "expédition-calendrier",
      },
      {
        q: "Livrez-vous en dehors de France métropolitaine ?",
        a: "Non, nous livrons uniquement en France métropolitaine.",
      },
    ],
  },
  {
    icon: CreditCard,
    label: "Paiement",
    color: "#22D3EE",
    faqs: [
      {
        q: "Quels moyens de paiement acceptez-vous ?",
        a: "Carte bancaire (Visa, Mastercard, CB), PayPal, Apple Pay et Google Pay. Les commandes B2B supérieures à 500 € HT peuvent régler par virement bancaire (30 jours fin de mois, sur devis signé).",
      },
      {
        q: "Mes données bancaires sont-elles sécurisées ?",
        a: "Oui. Nous utilisons Shopify Payments, certifié PCI DSS niveau 1 (le niveau le plus élevé). Aucune donnée de carte n'est stockée sur nos serveurs.",
      },
    ],
  },
  {
    icon: Building2,
    label: "Espace B2B",
    color: "#FFB800",
    faqs: [
      {
        q: "Comment obtenir un code d'accès partenaire B2B ?",
        a: "Envoyez un email à b2b@moneclipsesolaire.fr avec votre SIRET, votre secteur d'activité et le volume estimé. Notre équipe commerciale vous contacte sous 24h ouvrées avec votre code personnalisé.",
      },
    ],
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-[#22D3EE]/08 last:border-0 transition-colors ${isOpen ? "border-[#22D3EE]/15" : ""}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className={`text-sm font-semibold leading-snug transition-colors ${isOpen ? "text-[#FFB800]" : "text-[#FFB800]/80 group-hover:text-[#FFB800]"}`}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown size={16} className={`transition-colors ${isOpen ? "text-[#FFB800]" : "text-white/78"}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-sm text-white/90 leading-relaxed pb-5 pr-8">
              {a === "expédition-calendrier" ? (
                <>
                  L'expédition suit le{" "}
                  <a href="#commande" className="text-[#FFB800] underline underline-offset-2 hover:text-white transition-colors">
                    calendrier de production
                  </a>
                  {" "}— toutes les commandes sont expédiées en une seule vague, en enveloppe via La Poste, directement dans votre boîte aux lettres. Aucun déplacement en point relais n'est nécessaire.
                </>
              ) : a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openCat, setOpenCat] = useState(0);
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem((prev) => (prev === key ? null : key));

  return (
    <section id="faq" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/20 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-[#22D3EE] opacity-[0.03] blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[calc(0.75rem+3px)] uppercase tracking-[0.3em] text-[#FFB800] mb-3 font-medium">
            Questions fréquentes
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Tout ce que vous devez <span className="gradient-text-blue">savoir</span>
          </h2>
          <p className="text-white/88 max-w-xl mx-auto text-sm">
            Réponses complètes sur la sécurité, les produits, la livraison et nos offres professionnelles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-8 items-start">
          {/* Category sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0"
          >
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const active = openCat === i;
              return (
                <button
                  key={cat.label}
                  onClick={() => { setOpenCat(i); setOpenItem(null); }}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-left transition-all duration-200 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink border ${
                    active
                      ? "bg-[#22D3EE]/15 border-[#22D3EE]/30 text-[#FFB800]"
                      : "glass border-transparent text-white/88 hover:text-white/96 hover:border-[#22D3EE]/10"
                  }`}
                >
                  <Icon size={14} style={{ color: active ? cat.color : undefined }} className="flex-shrink-0" />
                  <span className="text-xs font-semibold">{cat.label}</span>
                </button>
              );
            })}
          </motion.div>

          {/* FAQ panel */}
          <motion.div
            key={openCat}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl px-6 border border-[#22D3EE]/10"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 py-5 border-b border-[#22D3EE]/10 mb-1">
              {(() => {
                const cat = categories[openCat];
                const Icon = cat.icon;
                return (
                  <>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${cat.color}18`, border: `1px solid ${cat.color}30` }}>
                      <Icon size={15} style={{ color: cat.color }} />
                    </div>
                    <span className="font-bold text-white text-sm">{cat.label}</span>
                    <span className="ml-auto text-xs text-white/72">
                      {categories[openCat].faqs.length} questions
                    </span>
                  </>
                );
              })()}
            </div>

            {categories[openCat].faqs.map((faq, i) => {
              const key = `${openCat}-${i}`;
              return (
                <FAQItem
                  key={key}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openItem === key}
                  onToggle={() => toggle(key)}
                />
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <p className="text-sm text-white/85">Vous n'avez pas trouvé votre réponse ?</p>
          <a
            href="mailto:contact@moneclipsesolaire.fr"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-[#22D3EE]/25 text-sm font-semibold text-[#FFB800] hover:border-[#22D3EE]/50 transition-all"
          >
            <ShieldCheck size={13} />
            Contactez notre équipe
          </a>
        </motion.div>
      </div>
    </section>
  );
}
