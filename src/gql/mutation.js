import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        username
        email
      }
    }
  }
`;

export const GET_USER_CART = gql`
  query UsersPermissionsRoles {
    usersPermissionsRoles {
      data {
        attributes {
          users {
            data {
              attributes {
                products {
                  data {
                    attributes {
                      categories {
                        data {
                          attributes {
                            name
                          }
                        }
                      }
                      name
                      description
                      price
                      stars
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
      }
    }
  }
`;

export const SIGN_UP_USER = gql`
  mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        email
        username
      }
    }
  }
`;
