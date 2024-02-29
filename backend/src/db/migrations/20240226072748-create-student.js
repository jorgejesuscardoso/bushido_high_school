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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      covidVacinne: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'covid_vacinne'
      },
      matriculation: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(12),
      },
      identity: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      birthday: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      responsibleName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'responsible_name'
      },
      responsibleCpf: {
        type: Sequelize.STRING(12),
        allowNull: false,
        field: 'responsible_cpf'
      },
      responsibleEmail: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'responsible_email'
      },
      responsiblePhone: {
        type: Sequelize.STRING(12),
        allowNull: false,
        field: 'responsible_phone'
      },
      responsibleAddress: {
        type: Sequelize.STRING(100),
        allowNull: false,
        field: 'responsible_address'
      },
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
