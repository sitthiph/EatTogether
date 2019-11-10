import model from 'modules/myOrder/myOrderModel';

const { fields } = model;

export default [
  fields.apiKeyRestaurant,
  fields.restaurantName,
  fields.apiKeysFood,
  fields.foodName,
  fields.quantity,
];
