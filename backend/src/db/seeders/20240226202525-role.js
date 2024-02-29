'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Roles', [
    {
      name: 'admin'
    },
    {
      name: 'managers'
    },
    {
      name: 'teacher'
    },
    {
      name: 'staff'
    },    
    {
      name: 'student'
    },
    {
      name: 'default'
    }
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Role', null, {}),
};
