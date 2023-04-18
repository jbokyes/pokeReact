import { useState } from "react";
import { PokemonStructure } from "../../models/pokemon";
import "./card.css";

export function Card(props: PokemonStructure) {
  const [imageRotate, setImageRotate] = useState("");
  const handleRotate = () => {
    imageRotate !== props.sprites.back_default
      ? setImageRotate(props.sprites.back_default)
      : setImageRotate(props.sprites.front_default);
  };
  return (
    <div className="pokemon-card">
      <li>
        <img
          src={imageRotate || props.sprites.front_default}
          alt={props.name}
        />
      </li>
      <li>{props.name}</li>
      <button onClick={handleRotate}>Rotate!</button>
    </div>
  );
}
