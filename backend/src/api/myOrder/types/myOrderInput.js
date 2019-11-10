const schema = `
  input MyOrderInput {
    apiKeyRestaurant: String
    restaurantName: String
    apiKeysFood: String
    foodName: String
    quantity: Int
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
