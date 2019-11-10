const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const CheckoutService = require('../../../services/checkoutService');

const schema = `
  checkoutAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  checkoutAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.checkoutAutocomplete);

    return new CheckoutService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
