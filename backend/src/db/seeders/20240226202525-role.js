'use strict';

// Alimenta a tabela de roles com os valores padrões. Aqui são definidos os tipos de usuários que podem ser cadastrados no sistema. Esses são valores inicialmente definidos e podem ser alterados posteriormente.

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Roles', [
    {
      name: 'admin'
    },
    {
      name: 'manager'
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
