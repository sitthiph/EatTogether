const CheckoutService = require('../../../services/checkoutService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  checkoutCreate(data: CheckoutInput!): Checkout!
`;

const resolver = {
  checkoutCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.checkoutCreate);

    return new CheckoutService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
