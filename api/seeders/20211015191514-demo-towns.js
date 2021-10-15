'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('towns', [
      {
        cidade: "Madrid",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cidade: "Singapure",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cidade: "Emirados",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cidade: "Hawaii",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cidade: "Pallet",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('towns', null, {})
  }
};
