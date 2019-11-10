const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const MyOrderService = require('../../../services/myOrderService');

const schema = `
  myOrderAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  myOrderAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.myOrderAutocomplete);

    return new MyOrderService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
