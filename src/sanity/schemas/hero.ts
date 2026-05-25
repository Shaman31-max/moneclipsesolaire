import { defineField, defineType } from "sanity";

export const heroSchema = defineType({
  name: "hero",
  title: "Section Hero",
  type: "document",
  fields: [
    defineField({ name: "badge", title: "Badge (texte en haut)", type: "string" }),
    defineField({ name: "title1", title: "Titre ligne 1", type: "string" }),
    defineField({ name: "titleHighlight", title: "Titre ligne 2 (en bleu)", type: "string" }),
    defineField({ name: "title3", title: "Titre ligne 3", type: "string" }),
    defineField({ name: "title4", title: "Titre ligne 4", type: "string" }),
    defineField({ name: "subtitle", title: "Sous-titre", type: "text", rows: 3 }),
    defineField({ name: "ctaPrimary", title: "Bouton principal (texte)", type: "string" }),
    defineField({ name: "ctaSecondary", title: "Bouton secondaire (texte)", type: "string" }),
  ],
});
