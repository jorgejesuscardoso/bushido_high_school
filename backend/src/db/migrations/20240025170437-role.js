'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Role', {
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
      timestamps: false,
      underscored: true
    }
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Role');
  }
};
