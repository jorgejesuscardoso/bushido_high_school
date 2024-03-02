// Define o modelo de usuário. Para poder utilizar os metodos de criação de tabelas e relacionamentos do sequelize é necessário importar o { User_Data } no arquivo de destino, exemplo: const { User_Data } = require('../db/models');

const UserData = (sequelize, DataTypes) => {
  const UserData = sequelize.define('User_Data', {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    matriculation: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
    shift: DataTypes.STRING,
    cpf: DataTypes.STRING,
    identity: DataTypes.STRING,
    ctps: DataTypes.STRING,
    fgts: DataTypes.STRING,
    pis: DataTypes.STRING,
    admission_date: DataTypes.DATEONLY,
    workload: DataTypes.STRING,
    bank: DataTypes.STRING,
    account: DataTypes.STRING,
    agency: DataTypes.STRING,
    salary: DataTypes.INTEGER,
  }, { timestamps: false}); 

  return UserData;
}
  
  
module.exports = UserData;