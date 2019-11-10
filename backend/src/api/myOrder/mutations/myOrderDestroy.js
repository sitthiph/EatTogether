const MyOrderService = require('../../../services/myOrderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  myOrderDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  myOrderDestroy: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.myOrderDestroy);

    await new MyOrderService(context).destroyAll(
      args.ids
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
