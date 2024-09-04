import { AppState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"

class PokemonsService {
  async getPokemon() {
    const response = await pokeApi.get('/pokemon?limit=100000&offset=0')
    console.log(response.data.results)
    AppState.pokemon = response.data.results
  }

  async getPokemonByName(pokeName) {
    const response = await pokeApi.get(`pokemon/${pokeName}`)
    console.log(pokeName, response.data)
  }
}

export const pokemonsService = new PokemonsService()