const CheckoutService = require('../../../services/checkoutService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  checkoutFind(id: String!): Checkout!
`;

const resolver = {
  checkoutFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.checkoutRead);

    return new CheckoutService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
