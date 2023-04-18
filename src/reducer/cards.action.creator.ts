import { PokemonStructure } from "../models/pokemon";
import { cardListActions } from "./cards.action";

interface Action {
  type: string;
  payload?: any;
}

export interface CardsAction extends Action {
  payload: PokemonStructure | PokemonStructure[] | PokemonStructure["id"];
}

export const loadCardsCreator = (payload: PokemonStructure[]): CardsAction => {
  return {
    type: cardListActions.load,
    payload,
  };
};
