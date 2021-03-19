/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDealership = /* GraphQL */ `
  mutation CreateDealership(
    $input: CreateDealershipInput!
    $condition: ModelDealershipConditionInput
  ) {
    createDealership(input: $input, condition: $condition) {
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
export const updateDealership = /* GraphQL */ `
  mutation UpdateDealership(
    $input: UpdateDealershipInput!
    $condition: ModelDealershipConditionInput
  ) {
    updateDealership(input: $input, condition: $condition) {
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
export const deleteDealership = /* GraphQL */ `
  mutation DeleteDealership(
    $input: DeleteDealershipInput!
    $condition: ModelDealershipConditionInput
  ) {
    deleteDealership(input: $input, condition: $condition) {
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
