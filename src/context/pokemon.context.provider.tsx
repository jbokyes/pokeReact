import { usePokemon } from "../hooks/use.Pokemon";
import { PokemonContext } from "./pokemon.context";

export function PokemonContextProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const context = {
    ...usePokemon(),
  };
  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
}
