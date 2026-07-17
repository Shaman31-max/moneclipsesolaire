// Paliers de prix des lunettes et variants Shopify associés (1 variant par
// palier — la « quantité » d'un article panier est encodée dans le variant).
// Partagé entre la fiche produit (Products.tsx) et le panier (MobileCartBar).

export const PRICE_STEPS = [
  { qty: 1,  total: 2.99,  mention: "Solo" },
  { qty: 2,  total: 4.99,  mention: "Duo" },
  { qty: 3,  total: 5.99,  mention: null },
  { qty: 4,  total: 6.99,  mention: "Famille" },
  { qty: 6,  total: 7.99,  mention: null },
  { qty: 8,  total: 9.99,  mention: "⭐ Meilleure offre" },
  { qty: 12, total: 13.99, mention: null },
  { qty: 14, total: 14.99, mention: null },
  { qty: 24, total: 22.99, mention: "🎉 Événement" },
];

export const GLASSES_PRODUCT_ID = "glasses";

// Même ordre que PRICE_STEPS.
export const GLASSES_VARIANT_IDS = [
  "gid://shopify/ProductVariant/58137193283929",
  "gid://shopify/ProductVariant/58137193316697",
  "gid://shopify/ProductVariant/58137193349465",
  "gid://shopify/ProductVariant/58137193382233",
  "gid://shopify/ProductVariant/58137193447769",
  "gid://shopify/ProductVariant/58137193480537",
  "gid://shopify/ProductVariant/58137193513305",
  "gid://shopify/ProductVariant/58137193546073",
  "gid://shopify/ProductVariant/58137193578841",
];

export const GLASSES_VARIANT_NUMERIC_IDS = GLASSES_VARIANT_IDS.map(
  (gid) => gid.split("/").pop()!
);
