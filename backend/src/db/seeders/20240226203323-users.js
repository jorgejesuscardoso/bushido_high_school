'use strict';

// Alimenta a tabela de usuários com valores iniciais. Esses valores são utilizados para testes e podem ser alterados posteriormente.

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
      username: 'ManagerTest',
      email: 'pereirinha@test.com',
      password: 'Test.123',
      role_id: 2,
    },
    {
      username: 'TeacherTest',
      email: 'professor@test.com',
      password: 'Test.123',
      role_id: 3,
    },
    {
      username: 'StaffTest',
      email: 'staffzin@test.com',
      password: 'Test.123',
      role_id: 4,
    },
    {
      username: 'StudentTest',
      email: 'aluninho@test.com',
      password: 'Test.123',
      role_id: 5,      
    }, 
    {
      username: 'DefaultTest',
      email: 'padraozin@test.com',
      password: 'Test.123',
      role_id: 6,      
    }
  ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
