const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class Checkout extends AbstractEntityModel {
  constructor() {
    super('checkout', 'checkout', {
      userName: new types.String(null, null),
      pictures: new types.Files(),
      orderList: new types.String(null, null),
      apiKeyRestaurant: new types.String(null, null),
      apiKeysFood: new types.String(null, null),
      foodName: new types.String(null, null),
      foodDesc: new types.String(null, null),
      foodCount: new types.Number(null, null),
      baseCost: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
