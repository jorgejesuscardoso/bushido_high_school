const { DataTypes, sequelize } = require("sequelize");

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: '6'
    },
  }, {
    tableName: 'User',
    timestamps: false
  });

  return User;
}
  
  
module.exports = UserModel;