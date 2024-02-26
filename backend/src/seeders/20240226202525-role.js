'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Role', [
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
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Role', null, {}),
};
