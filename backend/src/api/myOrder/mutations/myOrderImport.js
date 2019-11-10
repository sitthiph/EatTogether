const MyOrderService = require('../../../services/myOrderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  myOrderImport(data: MyOrderInput!, importHash: String!): Boolean
`;

const resolver = {
  myOrderImport: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.myOrderImport);

    await new MyOrderService(context).import(
      args.data,
      args.importHash
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
