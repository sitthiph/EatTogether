const MyOrderService = require('../../../services/myOrderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  myOrderUpdate(id: String!, data: MyOrderInput!): MyOrder!
`;

const resolver = {
  myOrderUpdate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.myOrderEdit);

    return new MyOrderService(context).update(
      args.id,
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
