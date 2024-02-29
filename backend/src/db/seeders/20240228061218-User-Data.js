'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('User_Data', [
      {
        name: 'Jorge de Jesus Cardoso',
        email: 'tst.jorgecardoso@gmail.com',
        matriculation: '1a2b3c4d5e6f7g8h9i0j',
        birthday: '1991-06-17',
        address: 'Travessa Ana Delmira, 31',
        phone: '91981023020',
        role: 'Presidente',
        shift: 'morning',
        cpf: '12345678901',
        identity: '12345678901',
        ctps: '12345678901',
        fgts: '12345678901',
        pis: '123456789141',
        admission_date: '2022-02-28',
        workload: 20,
        salary: 51000,
        bank: 'Banco do Brasil',
        account: '123456',
        agency: '1234',
        user_id: 1,
  },
], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('User_Data', null, {}),
};
