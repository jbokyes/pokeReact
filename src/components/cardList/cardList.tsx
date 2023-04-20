import { useEffect, useState } from "react";
import { usePokemon } from "../../hooks/use.Pokemon";
import { PokemonStructure } from "../../models/pokemon";
import "./cardList.css";
import { Card } from "../card/card";

export default function CardList() {
  const [offset, setOffset] = useState(0);
  const { pokeState, loadPokemonListOffset } = usePokemon(offset);
  function handleNextOffset() {
    setOffset(offset + 1);
  }
  function handlePrevOffset() {
    setOffset(offset - 1);
  }
  useEffect(() => {
    loadPokemonListOffset();
  }, [loadPokemonListOffset]);
  console.log(pokeState);
  return (
    <div className="CardList">
      <h3>Poke List</h3>
      <ul className="CardList__ul">
        {pokeState?.map((item: PokemonStructure) => (
          <Card {...item}></Card>
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
