const MyOrderService = require('../../../services/myOrderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  myOrderCreate(data: MyOrderInput!): MyOrder!
`;

const resolver = {
  myOrderCreate: async (root, args, context) => {
    new PermissionChecker(context)
      .validateHas(permissions.myOrderCreate);

    return new MyOrderService(context).create(
      args.data
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
