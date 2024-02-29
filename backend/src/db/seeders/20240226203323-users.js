'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    { 
      username: 'Bushido',
      email: 'tst.jorgecardoso@gmail.com',
      password: 'Abc.123',
      role_id: 1,
    },
    { 
      username: 'UserTest',
      email: 'testmail@gmail.com',
      password: 'Pass.Test1',
      role_id: 6,
    }
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
