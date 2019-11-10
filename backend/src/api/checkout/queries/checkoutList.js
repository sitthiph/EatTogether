const CheckoutService = require('../../../services/checkoutService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  checkoutList(filter: CheckoutFilterInput, limit: Int, offset: Int, orderBy: CheckoutOrderByEnum): CheckoutPage!
`;

const resolver = {
  checkoutList: async (root, args, context, info) => {
    new PermissionChecker(context)
      .validateHas(permissions.checkoutRead);

    return new CheckoutService(context).findAndCountAll({
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
