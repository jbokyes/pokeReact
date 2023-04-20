import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";

export default function Details() {
  const { pokeState } = useContext(PokemonContext);
  console.log(pokeState);
  return (
    <section className="details">
      <img src={pokeState[0]?.sprites.front_default} alt="" />
    </section>
  );
}
