'use strict';

// Alimenta a tabela de dados do usuário com valores iniciais. Esses valores são utilizados para testes e podem ser alterados posteriormente.

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('User_Data', [
      {
        name: 'Jorge de Jesus Cardoso',
        email: 'tst.jorgecardoso@gmail.com',
        matriculation: '1a2-b3c-4d5-e6f-7g8-h9i-0j',
        birthday: '1991-06-17',
        address: 'Travessa Ana Delmira, 31',
        phone: '91 9 8102-3020',
        CPF: '123.456.789-01',
        RG: '12.345.678-9',
        user_id: 1,
  },
  {
    name: 'Pereirinha Cardoso',
    email: 'pereirinha@test.com',
    matriculation: '2a3-b4c-5d6-e7f-8g9-h0i-1j',
    birthday: '1981-06-17',
    address: 'Travessa Ana Carla, 231',
    phone: '91 9 8102-5555',
    CPF: '234.567.890-12',
    RG: '23.456.789-0',
    user_id: 2,
},
{
  name: 'Paulo Cardoso',
  email: 'professor@test.com',
  matriculation: '3a4-b5c-6d7-e8f-9g0-h1i-2j',
  birthday: '1971-06-17',
  address: 'Travessa Carla, 231',
  phone: '91 9 8102-6666',
  CPF: '345.678.901-23',
  RG: '34.567.890-1',
  user_id: 3,
},
{
  name: 'Clara Cardoso',
  email: 'staffzin@test.com',
  matriculation: '4a5-b6c-7d8-e9f-0g1-h2i-3j',
  birthday: '1961-06-17',
  address: 'Travessa Ana, 231',
  phone: '91 9 8102-7777',
  CPF: '456.789.012-34',
  RG: '45.678.901-2',
  user_id: 4,
},
{
  name: 'Joãozinho Cardoso',
  email: 'jon@test.com',
  matriculation: '5a6-b7c-8d9-e0f-1g2-h3i-4j',
  birthday: '2011-06-17',
  address: 'Travessa Ana, 231',
  phone: '91 9 8102-8888',
  CPF: '567.890.123-45',
  RG: '56.789.012-3',
  user_id: 5,
},
{
  name: 'Lua Cardoso',
  email: 'lu@test.com',
  matriculation: '6a7-b8c-9d0-e1f-2g3-h4i-5j',
  birthday: '2001-06-17',
  address: 'Travessa Ana, 231',
  phone: '91 9 8102-9999',
  CPF: '678.901.234-56',
  RG: '67.890.123-4',
  user_id: 6,
},
], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('User_Data', null, {}),
};
