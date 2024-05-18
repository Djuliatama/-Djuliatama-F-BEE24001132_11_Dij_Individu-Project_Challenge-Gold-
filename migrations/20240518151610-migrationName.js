'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users','firstName','user_name');
    await queryInterface.renameColumn('Users','lastName','user_email');
    await queryInterface.renameColumn('Users','email','user_username');
    await queryInterface.addColumn('Users', 'user_password', DataTypes.STRING,);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users','user_name','firstName');
    await queryInterface.renameColumn('Users','user_email','lastName');
    await queryInterface.renameColumn('Users','user_username','email');
    await queryInterface.removeColumn('Users', 'user_password');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
