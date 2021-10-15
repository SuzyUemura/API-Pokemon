const PokemonController = require('../controller/PokemonController')
const router = require('express').Router()


router.get('/', PokemonController.getAllPokemons)
router.get('/:id', PokemonController.getPokemonId)
router.post('/', PokemonController.postPokemon)
router.put('/:id', PokemonController.putPokemon)
module.exports = router