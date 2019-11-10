const MyOrderService = require('../../../services/myOrderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  myOrderFind(id: String!): MyOrder!
`;

const resolver = {
  myOrderFind: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.myOrderRead);

    return new MyOrderService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
