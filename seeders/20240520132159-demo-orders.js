'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders', [
      {
        user_id: 7,
        item_id: 2,
        item_quantity: 1,
        order_status:"completed",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        user_id: 11,
        item_id: 1,
        item_quantity: 2,
        order_status:"completed",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        user_id: 12,
        item_id: 3,
        item_quantity: 1,
        order_status:"pending",
        createdAt:new Date(),
        updatedAt:new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
