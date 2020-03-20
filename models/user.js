'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING
  }, {
    timestamps: false
  })
  User.associate = function(models) {
    // associations can be defined here
  }
  return User
}
