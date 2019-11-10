const CheckoutService = require('../../../services/checkoutService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  checkoutImport(data: CheckoutInput!, importHash: String!): Boolean
`;

const resolver = {
  checkoutImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.checkoutImport);

    await new CheckoutService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
