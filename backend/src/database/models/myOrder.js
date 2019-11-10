const types = require('./types');
const AbstractEntityModel = require('./abstractEntityModel');

module.exports = class MyOrder extends AbstractEntityModel {
  constructor() {
    super('myOrder', 'myOrder', {
      apiKeyRestaurant: new types.String(null, null),
      restaurantName: new types.String(null, null),
      apiKeysFood: new types.String(null, null),
      foodName: new types.String(null, null),
      quantity: new types.Number(null, null),
      importHash: new types.String(null, 255),
    });
  }
};
