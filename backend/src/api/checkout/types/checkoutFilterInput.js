const schema = `
  input CheckoutFilterInput {
    id: String
    userName: String
    orderList: String
    apiKeyRestaurant: String
    apiKeysFood: String
    foodName: String
    foodCountRange: [ Int ]
    baseCostRange: [ Float ]
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
