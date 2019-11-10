const genericFixture = require('./genericFixture');
const MyOrderRepository = require('../database/repositories/myOrderRepository');

const myOrderFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new MyOrderRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = myOrderFixture;
