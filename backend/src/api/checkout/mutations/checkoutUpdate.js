const CheckoutService = require('../../../services/checkoutService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  checkoutUpdate(id: String!, data: CheckoutInput!): Checkout!
`;

const resolver = {
  checkoutUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.checkoutEdit);

    return new CheckoutService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
