import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class CheckoutService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CHECKOUT_UPDATE(
          $id: String!
          $data: CheckoutInput!
        ) {
          checkoutUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.checkoutUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CHECKOUT_DESTROY($ids: [String!]!) {
          checkoutDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.checkoutDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CHECKOUT_CREATE($data: CheckoutInput!) {
          checkoutCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.checkoutCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CHECKOUT_IMPORT(
          $data: CheckoutInput!
          $importHash: String!
        ) {
          checkoutImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.checkoutImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query CHECKOUT_FIND($id: String!) {
          checkoutFind(id: $id) {
            id
            userName
            pictures {
              id
              name
              sizeInBytes
              publicUrl
              privateUrl
            }
            orderList
            apiKeyRestaurant
            apiKeysFood
            foodName
            foodDesc
            foodCount
            baseCost
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.checkoutFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query CHECKOUT_LIST(
          $filter: CheckoutFilterInput
          $orderBy: CheckoutOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          checkoutList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              userName
              orderList
              apiKeyRestaurant
              apiKeysFood
              foodName
              foodCount
              baseCost
              updatedAt
              createdAt
            }
          }
        }
      `,

      variables: {
        filter,
        orderBy,
        limit,
        offset,
      },
    });

    return response.data.checkoutList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query CHECKOUT_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          checkoutAutocomplete(query: $query, limit: $limit) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        limit,
      },
    });

    return response.data.checkoutAutocomplete;
  }
}
