// Define o modelo de usuário. Para poder utilizar os metodos de criação de tabelas e relacionamentos do sequelize é necessário importar o { Users } no arquivo de destino, exemplo: const { Users } = require('../db/models');

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,      
    password: DataTypes.STRING,
    role_id: DataTypes.NUMBER,
  }, { timestamps: false }); 

  return User;
}
  
  
module.exports = UserModel;