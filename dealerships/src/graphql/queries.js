/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDealership = /* GraphQL */ `
  query GetDealership($id: ID!) {
    getDealership(id: $id) {
      id
      name
      telephone
      contactName
      streetAddress
      city
      state
      postalCode
      clientId
      createdAt
      updatedAt
    }
  }
`;
export const listDealerships = /* GraphQL */ `
  query ListDealerships(
    $filter: ModelDealershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDealerships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        telephone
        contactName
        streetAddress
        city
        state
        postalCode
        clientId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
