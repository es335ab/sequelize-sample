'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    companyId: DataTypes.INTEGER
  })
  User.associate = function(models) {
    User.belongsTo(models.company, {
      foreignKey: 'companyId'
    })
  }
  User.sync()
  return User
}
