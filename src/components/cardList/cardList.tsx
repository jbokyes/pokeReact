import { useEffect, useState } from "react";
import { usePokemon } from "../../hooks/use.Pokemon";
import { PokemonStructure } from "../../models/pokemon";
import "./cardList.css";

export default function CardList() {
  const [offset, setOffset] = useState(0);
  const { pokeState, loadPokemonList } = usePokemon(offset);
  function handleNextOffset() {
    setOffset(offset + 1);
  }
  function handlePrevOffset() {
    setOffset(offset - 1);
  }
  useEffect(() => {
    loadPokemonList();
  }, [loadPokemonList]);
  console.log(pokeState);
  return (
    <div className="CardList">
      <h3>Poke List</h3>
      <ul className="CardList__ul">
        {pokeState?.map((item: PokemonStructure) => (
          <div>
            <li key={item.id}>{item.name}</li>
            <img src={item.sprites.front_default} alt={item.name}></img>
          </div>
        ))}
      </ul>
      {offset >= 1 ? <button onClick={handlePrevOffset}>Previous</button> : ""}

      {offset <= Math.floor(898 / 12) ? (
        <button onClick={handleNextOffset}>Next</button>
      ) : (
        ""
      )}
    </div>
  );
}
