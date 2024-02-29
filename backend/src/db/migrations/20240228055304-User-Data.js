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
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'User_id',
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      matriculation: {
        type: Sequelize.STRING(20),
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
      role: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      shift: {
        type: Sequelize.STRING(12),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      identity: {
        type: Sequelize.STRING(14),
        allowNull: false
      },
      ctps : {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      fgts : {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      pis : {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      admissionDate : {
        type: Sequelize.DATEONLY,
        allowNull: false,
        field: 'admission_date'
      },
      workload: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      salary: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      bank: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      agency: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      account: {
        type: Sequelize.STRING(50),
        allowNull: false
      },      
    },
    {
    // remove os campos createdAt e updatedAt e mantém o underscored
      timestamps: false,
      underscored: true
    }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('User_Data');
  }
};
