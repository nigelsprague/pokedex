import { AppState } from "../AppState.js"
import { pokemonsService } from "../services/PokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class PokemonsController {
  constructor() {
    AppState.on('pokemon', this.drawPokedex)

    this.getPokemon()
  }

  async getPokemon() {
    try {
      await pokemonsService.getPokemon()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawPokedex() {
    const pokemon = AppState.pokemon
    let pokedexHTML = ''
    pokemon.forEach(pokemon => {
      pokedexHTML += `<button onclick="app.PokemonsController.getPokemonByName('${pokemon.name}')" class="w-100 mb-2"><span class="mdi mdi-pokeball"></span> ${pokemon.name}</button>`
    })
    setHTML('pokedex', pokedexHTML)
  }

  async getPokemonByName(pokeName) {
    try {
      await pokemonsService.getPokemonByName(pokeName)
    } catch (error) {
      Pop.error(error)
      console.error(error);

    }
  }
}