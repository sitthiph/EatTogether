const userFixture = require('./userFixture');
const myOrderFixture = require('./myOrderFixture');
const checkoutFixture = require('./checkoutFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  myOrder: myOrderFixture,
  checkout: checkoutFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
