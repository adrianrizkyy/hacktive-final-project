'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('reflections', [
      {
        success: 'Admin Success',
        low_point: 'Low Point Admin',
        take_away: 'Take Away Admin',
        owner_id: 'admin@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        success: 'Customer Success',
        low_point: 'Low Point Customer',
        take_away: 'Take Away Customer',
        owner_id: 'customer@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reflections', null, {});
  }
};
