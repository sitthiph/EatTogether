const schema = `
  type Checkout {
    id: String!
    userName: String
    pictures: [ File! ]
    orderList: String
    apiKeyRestaurant: String
    apiKeysFood: String
    foodName: String
    foodDesc: String
    foodCount: Int
    baseCost: Float
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
