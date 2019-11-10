const schema = `
  type CheckoutPage {
    rows: [Checkout!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
