'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date()
    return queryInterface.bulkInsert('users', [
      { name: '太郎'},
      { name: '二郎'}
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
