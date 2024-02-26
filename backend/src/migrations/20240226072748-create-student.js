'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Student', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      role_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Role',
          key: 'id'
        }
      }
    },
    {
      timestamps: false,
      underscored: true
    }
  );
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Student');
  }
};
