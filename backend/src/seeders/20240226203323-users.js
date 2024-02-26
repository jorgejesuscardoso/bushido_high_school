'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    { 
      name: 'Jorge Cardoso',
      email: 'tst.jorgecardoso@gmail.com',
      password: '83098332',
      role_id: 1,
    },
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
