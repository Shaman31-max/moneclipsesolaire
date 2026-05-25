import { defineField, defineType } from "sanity";

export const batchSchema = defineType({
  name: "batch",
  title: "Série de livraison",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Nom (ex: 1ère série)", type: "string" }),
    defineField({ name: "orderDeadline", title: "Date de clôture des commandes", type: "date" }),
    defineField({ name: "deliveryDate", title: "Date de livraison", type: "date" }),
    defineField({ name: "desc", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "color", title: "Couleur accent (hex)", type: "string" }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number" }),
  ],
});
