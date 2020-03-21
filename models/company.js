'use strict'
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('company', {
    name: DataTypes.STRING
  })
  Company.associate = function(models) {
    Company.hasMany(models.user, {
      foreignKey: 'companyId'
    })
  }
  Company.sync()
  return Company
}
