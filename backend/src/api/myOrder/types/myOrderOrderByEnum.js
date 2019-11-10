const schema = `
  enum MyOrderOrderByEnum {
    id_ASC
    id_DESC
    apiKeyRestaurant_ASC
    apiKeyRestaurant_DESC
    foodName_ASC
    foodName_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
