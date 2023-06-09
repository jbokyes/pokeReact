import { useCallback, useReducer } from "react";
import { PokemonStructure } from "../models/pokemon";
import { cardListReducer } from "../reducer/cards.reducer";
import PokeApi from "../services/repository/pokeapi.repo";
import * as ac from "../reducer/cards.action.creator";
export type usePokemonStructure = ReturnType<typeof usePokemon>;
export function usePokemon(offset: number = 0) {
  const initialState: PokemonStructure[] = [];
  const [pokeState, dispatch] = useReducer(cardListReducer, initialState);

  const loadPokemonList = useCallback(async () => {
    const repo = new PokeApi();
    try {
      const cards = (await repo.loadPokemon()) as PokemonStructure[];
      dispatch(ac.loadCardsCreator(cards));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const loadPokemonListOffset = useCallback(async () => {
    const repo = new PokeApi();
    try {
      const cards = (await repo.loadPokemonOffset(
        offset
      )) as PokemonStructure[];
      dispatch(ac.loadCardsCreator(cards));
    } catch (error) {
      console.log(error);
    }
  }, [offset]);
  return { pokeState, loadPokemonList, loadPokemonListOffset };
}
