'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date()
    return queryInterface.bulkInsert('companies', [{
      name: '会社1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '会社2',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('companies', null, {})
  }
};
