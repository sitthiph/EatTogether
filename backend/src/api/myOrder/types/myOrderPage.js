const schema = `
  type MyOrderPage {
    rows: [MyOrder!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
