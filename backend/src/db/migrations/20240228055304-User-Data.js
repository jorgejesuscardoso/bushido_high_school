'use strict';

// cria a tabela de User_Data. Dados do usuário.

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('User_Data', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      matriculation: {
        type: Sequelize.STRING(26),
        allowNull: false,
        unique: true,
      },
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      CPF: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      RG: {
        type: Sequelize.STRING(12),
        allowNull: false
      },     
    },
    {
      timestamps: false,
      underscored: true
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('User_Data');
  }
};
