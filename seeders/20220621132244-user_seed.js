'use strict';

module.exports = {
  up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@gmail.com',
        password: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'customer@gmail.com',
        password: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
