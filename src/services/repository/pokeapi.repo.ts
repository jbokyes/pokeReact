export type BasePokeResult = {
  name: string;
  url: string;
};

export default class PokeApi {
  url: string;
  constructor() {
    this.url = "https://pokeapi.co/api/v2/pokemon?limit=12&offset=";
  }

  async loadPokemon(offset: number = 0) {
    try {
      const getPokemon = await fetch(this.url + (offset * 12).toString());
      const data = await getPokemon.json();
      const pokemonInfo = data.results.map(async (e: BasePokeResult) => {
        const pokemonResult = await fetch(e.url);
        return await pokemonResult.json();
      });
      return Promise.all(pokemonInfo);
    } catch (error) {
      console.log(error);
    }
  }
}
