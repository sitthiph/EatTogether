import model from 'modules/myOrder/myOrderModel';

const { fields } = model;

export default [
  fields.id,
  fields.apiKeyRestaurant,
  fields.restaurantName,
  fields.foodName,
  fields.quantity,
  fields.createdAt,
  fields.updatedAt
];
