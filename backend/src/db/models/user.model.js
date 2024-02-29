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