'use strict';

// Alimenta a tabela de roles com os valores padrões. Aqui são definidos os tipos de usuários que podem ser cadastrados no sistema. Esses são valores inicialmente definidos e podem ser alterados posteriormente.

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Roles', [
    {
      name: 'admin',
      role_key: '8.3k1@4S09'
    },
    {
      name: 'manager',
      role_key: '1-k%3M4@9'
    },
    {
      name: 'teacher',
      role_key: '4c-18,U9'
    },
    {
      name: 'staff',
      role_key: '7*3.H4=f'
    },    
    {
      name: 'student',
      role_key: '5_t$3-T'
    },
    {
      name: 'default',
      role_key: 'p!d0G3-1'
    }
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Role', null, {}),
};
