const schema = `
  enum CheckoutOrderByEnum {
    id_ASC
    id_DESC
    userName_ASC
    userName_DESC
    orderList_ASC
    orderList_DESC
    apiKeyRestaurant_ASC
    apiKeyRestaurant_DESC
    apiKeysFood_ASC
    apiKeysFood_DESC
    foodName_ASC
    foodName_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
