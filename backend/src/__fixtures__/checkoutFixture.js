const genericFixture = require('./genericFixture');
const CheckoutRepository = require('../database/repositories/checkoutRepository');

const checkoutFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new CheckoutRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = checkoutFixture;
