import { gql } from "@apollo/client";

export const GET_ALL_CAROUSAL = gql`
  query getAllCarousal {
    carousals {
      data {
        attributes {
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query getAllCategory {
    categories {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

export const GET_ALL_PRODUCTS_BY_CATEGORY = gql`
  query getProductByCategory($categoryId: ID) {
    category(id: $categoryId) {
      data {
        attributes {
          products {
            data {
              id
              attributes {
                name
                price
                stars
                description
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_TOP_10_PRODUCTS = gql`
  query TOP10Products {
    topproduct: products(
      pagination: { page: 1, pageSize: 10 }
      sort: "stars:desc"
    ) {
      data {
        attributes {
          name
          description
          stars
          price
          images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;
