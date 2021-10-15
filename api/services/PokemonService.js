const pokemonsMockado = require('../mocks')

class PokemonService {
    static pokemonById(id) {
        try {
            const listaPokemons = pokemonsMockado.pokemons
            const pokemonEncontrado = listaPokemons.filter(r => r.Id == id)
            return pokemonEncontrado
        } catch (error) {
            return error.toString
        }
    }

    static criarPokemon(pokemon) {
        try {
            const novoPokemon = pokemonsMockado.pokemons.push(pokemon)
            return novoPokemon
        } catch (error) {
            return error.toString
        }
    }

    static atualizarPokemon(id, pokemon) {
        console.log("req.body " + pokemon)
        try {
            const pokemonEncontrado = pokemonsMockado.pokemons.filter(result => result.Id == id)
/*            pokemonEncontrado.map(result => {
               
                if (result.Pokémon != pokemon) {
                    console.log("Objeto " +  result.Pokémon)
                    
                    delete pokemonEncontrado.result
                    pokemonEncontrado.splice(id, 0, pokemon[campo])
                }
            })
*/
        } catch (error) {
            error.toString()
        }
    }
}

module.exports = PokemonService