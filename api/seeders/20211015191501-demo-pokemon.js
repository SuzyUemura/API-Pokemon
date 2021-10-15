'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pokemons', [
      {
        nomePokemon: "Pikachu",
        tipo: "Elétrico",
        createdAt: new Date(),
				updatedAt: new Date()
    },
    {
       nomePokemon: "Mareep",
       tipo: "Elétrico",
       createdAt: new Date(),
				updatedAt: new Date()
    },
    {
      nomePokemon: "Copag",
        tipo: "Fogo",
        createdAt: new Date(),
				updatedAt: new Date()
    },
    {
      nomePokemon: "Charmander",
      tipo: "Fogo",
      createdAt: new Date(),
				updatedAt: new Date()
    },
    {
      nomePokemon: "Blastoise",
      tipo: "Água",
      createdAt: new Date(),
				updatedAt: new Date()
    },
    {
      nomePokemon: "Squitler",
      tipo: "Água",
      createdAt: new Date(),
				updatedAt: new Date()
    }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pokemons', null, {})
  }
};
