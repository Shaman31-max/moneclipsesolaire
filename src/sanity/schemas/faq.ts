import { defineField, defineType } from "sanity";

export const faqSchema = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "category", title: "Catégorie", type: "string" }),
    defineField({ name: "question", title: "Question", type: "string" }),
    defineField({ name: "answer", title: "Réponse", type: "text", rows: 6 }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number" }),
  ],
});
