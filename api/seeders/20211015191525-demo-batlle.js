'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('batlles', [
      {
        localBatalha: "Ginario de Pallet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        localBatalha: "Adventure",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        localBatalha: "Parque aquático",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        localBatalha: "Floresta",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        localBatalha: "Fazenda",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('batlles', null, {})
  }
};
