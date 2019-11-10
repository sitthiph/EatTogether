const schema = `
  type MyOrder {
    id: String!
    apiKeyRestaurant: String
    restaurantName: String
    apiKeysFood: String
    foodName: String
    quantity: Int
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
