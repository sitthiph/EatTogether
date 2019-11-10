const CheckoutService = require('../../../services/checkoutService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  checkoutDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  checkoutDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.checkoutDestroy);

    await new CheckoutService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
