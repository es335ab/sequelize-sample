'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date()
    return queryInterface.bulkInsert('users', [{
      name: 'A',
      companyId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'B',
      companyId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
