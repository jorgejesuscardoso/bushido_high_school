const RolesModel = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    name: DataTypes.STRING,
  }, { timestamps: false }); 

  return Roles;
}
  
  
module.exports = RolesModel;