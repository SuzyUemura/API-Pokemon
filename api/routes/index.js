const pokemon = require('./pokemonRoute')
const roteador = require('express').Router()

module.exports = roteador.use('/pokemons', pokemon)
