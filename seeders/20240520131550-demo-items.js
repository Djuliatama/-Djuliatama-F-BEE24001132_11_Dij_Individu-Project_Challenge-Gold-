'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [
      {
        item_name: 'Coffee Latte',
        item_price: '18000',
        item_description:'ice only',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: 'Americano',
        item_price: '15000',
        item_description:'ice only',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        item_name: 'Espresso',
        item_price: '15000',
        item_description:'hot only',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
