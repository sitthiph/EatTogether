const schema = `
  input MyOrderFilterInput {
    id: String
    apiKeyRestaurant: String
    restaurantName: String
    foodName: String
    quantityRange: [ Int ]
    createdAtRange: [ DateTime ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
