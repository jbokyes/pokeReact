import { useCallback, useReducer } from "react";
import { PokemonStructure } from "../models/pokemon";
import { cardListReducer } from "../reducer/cards.reducer";
import PokeApi from "../services/repository/pokeapi.repo";
import * as ac from "../reducer/cards.action.creator";

export function useCardList(repo: PokeApi) {
  const initialState: PokemonStructure[] = [];
  const [pokeState, dispatch] = useReducer(cardListReducer, initialState);

  const loadPokemonList = useCallback(async () => {
    try {
      const cards = (await repo.loadPokemon()) as PokemonStructure[];
      dispatch(ac.loadCardsCreator(cards));
    } catch (error) {
      console.log(error);
    }
  }, [repo]);
  return { pokeState, loadPokemonList };
}
