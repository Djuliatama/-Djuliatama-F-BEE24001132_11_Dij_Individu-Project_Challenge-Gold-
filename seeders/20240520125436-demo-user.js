'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [
      {
        user_name: 'Dije',
        user_email: 'dwina147@gmail.com',
        user_username:'djuliatama',
        user_password:'fafifu123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: 'Joan',
        user_email: 'joannatalie@gmail.com',
        user_username:'joannatalie',
        user_password:'korok123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: 'Nane',
        user_email: 'naneags@gmail.com',
        user_username:'nanea',
        user_password:'sumitomo123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
