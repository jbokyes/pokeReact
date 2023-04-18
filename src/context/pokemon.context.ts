import { createContext } from "react";
import { usePokemonStructure } from "../hooks/use.Pokemon";

export const PokemonContext = createContext({} as usePokemonStructure);
