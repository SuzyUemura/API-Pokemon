const pokemonsMockado = require('../mocks')
const PokemonService = require('../services/PokemonService')

class PokemonController {

    static async getAllPokemons(req, res) {
        try {
            const listaPokemons = pokemonsMockado.pokemons
            res.status(200).json(listaPokemons)
        } catch (error) {
            res.status(404).json({menssage: error.toString()})
        }
    }

    static async getPokemonId(req, res) {
        try {
            const id = req.params.id
            const pokemonEncontrado = await PokemonService.pokemonById(id)
            res.status(200).json(pokemonEncontrado)
        } catch (error) {
            res.status(404).json({menssage: error.toString()})
        }
    }

    static async postPokemon(req, res) {
        try {
            const pokemon = req.body
            const novoPokemon = PokemonService.criarPokemon(pokemon)
            res.status(201).json(novoPokemon)
        } catch (error) {
            res.status(400).json({menssage: error.toString()}) 
        }
    } 

    static async putPokemon(req, res) {
        try {
            const idPokemon = req.params.id
            const pokemon = req.body
            PokemonService.atualizarPokemon(idPokemon, pokemon)
            res.status(204).end()
        } catch (error) {
            res.status(400).json({menssage: error.toString()})
        }
    } // alterar a lista
}

module.exports = PokemonController