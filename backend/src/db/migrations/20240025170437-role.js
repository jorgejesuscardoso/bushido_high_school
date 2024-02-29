'use strict';

// cria a tabela de roles

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      }
    },
    {
      // remove os campos createdAt e updatedAt e mantém o underscored
      timestamps: false,
      underscored: true
    }
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  }
};
