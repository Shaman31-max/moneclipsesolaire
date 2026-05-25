import { defineField, defineType } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Produit",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom", type: "string" }),
    defineField({ name: "subtitle", title: "Sous-titre", type: "string" }),
    defineField({ name: "desc", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "basePrice", title: "Prix de base (€ HT)", type: "number" }),
    defineField({ name: "unit", title: "Unité (ex: paire, filtre)", type: "string" }),
    defineField({
      name: "features",
      title: "Caractéristiques",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "variantId", title: "Shopify Variant ID (GID)", type: "string" }),
    defineField({
      name: "color",
      title: "Couleur accent (hex)",
      type: "string",
      description: "Ex: #1E7FFF",
    }),
  ],
});
