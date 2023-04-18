import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";

export default function Details() {
  const { pokeState } = useContext(PokemonContext);
  return (
    <section className="details">
      <img src={pokeState[0].sprites.front_default} alt="" />
    </section>
  );
}
