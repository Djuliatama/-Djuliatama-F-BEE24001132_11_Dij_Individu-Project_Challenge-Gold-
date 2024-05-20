'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Orders','item_quality','item_quantity');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Orders','item_quantity','item_quality');
  }
};
