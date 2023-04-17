import { PokemonStructure } from "../models/pokemon";
import { cardListActions } from "./cards.action";
import { CardsAction } from "./cards.action.creator";

export function cardListReducer(
  state: PokemonStructure[],
  action: CardsAction
) {
  switch (action.type) {
    case cardListActions.load:
      return action.payload;
    default:
      return state;
  }
}
