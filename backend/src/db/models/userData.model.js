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
    CPF: DataTypes.STRING,
    RG: DataTypes.STRING,
  }, { timestamps: false}); 

  return UserData;
}
  
  
module.exports = UserData;