const MyOrderService = require('../../../services/myOrderService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  myOrderList(filter: MyOrderFilterInput, limit: Int, offset: Int, orderBy: MyOrderOrderByEnum): MyOrderPage!
`;

const resolver = {
  myOrderList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.myOrderRead);

    return new MyOrderService(context).findAndCountAll({
      ...args,
      requestedAttributes: graphqlSelectRequestedAttributes(
        info,
        'rows',
      ),
    });
  },
};

exports.schema = schema;
exports.resolver = resolver;
