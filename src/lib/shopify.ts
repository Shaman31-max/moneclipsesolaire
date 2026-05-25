import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export const shopifyClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!,
  apiVersion: '2026-04',
  publicAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
});

export const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
          tags
        }
      }
    }
  }
`;

export const CREATE_CART_MUTATION = `
  mutation CreateCart($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export async function getProducts(first = 12) {
  const { data } = await shopifyClient.request(PRODUCTS_QUERY, {
    variables: { first },
  });
  return data?.products?.edges?.map((e: any) => e.node) ?? [];
}

export async function createCart(variantId: string, quantity = 1) {
  const { data } = await shopifyClient.request(CREATE_CART_MUTATION, {
    variables: {
      lines: [{ merchandiseId: variantId, quantity }],
    },
  });
  return data?.cartCreate?.cart;
}
