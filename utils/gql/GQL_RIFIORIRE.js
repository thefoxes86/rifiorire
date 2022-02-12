import { gql } from "@apollo/client";

export const GQL_RIFIORIRECASA = gql`
  query MyQuery {
    page(id: "61", idType: DATABASE_ID) {
      id
      title(format: RENDERED)
      content(format: RENDERED)
    }
    firstCategory: products(first: 2, where: { categoryId: 18 }) {
      nodes {
        id
        databaseId
        onSale
        averageRating
        slug
        description
        image {
          id
          uri
          title
          srcSet
          sourceUrl
        }
        name
        ... on SimpleProduct {
          salePrice
          regularPrice
          onSale
          price
          id
        }
        ... on VariableProduct {
          salePrice
          regularPrice
          onSale
          price
          id
        }
        ... on ExternalProduct {
          price
          id
          externalUrl
        }
        ... on GroupProduct {
          products {
            nodes {
              ... on SimpleProduct {
                id
                price
              }
            }
          }
          id
        }
      }
    }
    secondCategory: products(first: 2, where: { categoryId: 19 }) {
      nodes {
        id
        databaseId
        onSale
        averageRating
        slug
        description
        image {
          id
          uri
          title
          srcSet
          sourceUrl
        }
        name
        ... on SimpleProduct {
          salePrice
          regularPrice
          onSale
          price
          id
        }
        ... on VariableProduct {
          salePrice
          regularPrice
          onSale
          price
          id
        }
        ... on ExternalProduct {
          price
          id
          externalUrl
        }
        ... on GroupProduct {
          products {
            nodes {
              ... on SimpleProduct {
                id
                price
              }
            }
          }
          id
        }
      }
    }
  }
`;
