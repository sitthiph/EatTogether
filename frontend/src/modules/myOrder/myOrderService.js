import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class MyOrderService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MYORDER_UPDATE(
          $id: String!
          $data: MyOrderInput!
        ) {
          myOrderUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.myOrderUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MYORDER_DESTROY($ids: [String!]!) {
          myOrderDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.myOrderDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MYORDER_CREATE($data: MyOrderInput!) {
          myOrderCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.myOrderCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MYORDER_IMPORT(
          $data: MyOrderInput!
          $importHash: String!
        ) {
          myOrderImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.myOrderImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query MYORDER_FIND($id: String!) {
          myOrderFind(id: $id) {
            id
            apiKeyRestaurant
            restaurantName
            apiKeysFood
            foodName
            quantity
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.myOrderFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query MYORDER_LIST(
          $filter: MyOrderFilterInput
          $orderBy: MyOrderOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          myOrderList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              apiKeyRestaurant
              restaurantName
              foodName
              quantity
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

    return response.data.myOrderList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query MYORDER_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          myOrderAutocomplete(query: $query, limit: $limit) {
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

    return response.data.myOrderAutocomplete;
  }
}
