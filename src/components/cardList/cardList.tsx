/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useCardList } from "../../hooks/use.cardList";
import PokeApi from "../../services/repository/pokeapi.repo";
import { PokemonStructure } from "../../models/pokemon";

export default function CardList() {
  const { pokeState, loadPokemonList } = useCardList(new PokeApi());
  useEffect(() => {
    loadPokemonList();
  }, []);
  console.log(pokeState);
  return (
    <div className="CardList">
      <h3>Poke List</h3>
      <ul className="CardList__ul">
        {pokeState?.map((item: PokemonStructure) => (
          <div>
            <li>{item.name}</li>
            <img src={item.sprites.front_default} alt={item.name}></img>
          </div>
        ))}
      </ul>
    </div>
  );
}
