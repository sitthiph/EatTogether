import model from 'modules/checkout/checkoutModel';

const { fields } = model;

export default [
  fields.userName,
  fields.pictures,
  fields.orderList,
  fields.apiKeyRestaurant,
  fields.apiKeysFood,
  fields.foodName,
  fields.foodDesc,
  fields.foodCount,
  fields.baseCost,
];
