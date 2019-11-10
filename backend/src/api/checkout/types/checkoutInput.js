const schema = `
  input CheckoutInput {
    userName: String
    pictures: [ FileInput! ]
    orderList: String
    apiKeyRestaurant: String
    apiKeysFood: String
    foodName: String
    foodDesc: String
    foodCount: Int
    baseCost: Float
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
