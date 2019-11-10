import model from 'modules/checkout/checkoutModel';

const { fields } = model;

export default [
  fields.id,
  fields.userName,
  fields.orderList,
  fields.apiKeyRestaurant,
  fields.apiKeysFood,
  fields.foodName,
  fields.foodCount,
  fields.baseCost,
  fields.createdAt,
  fields.updatedAt
];
