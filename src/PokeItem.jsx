import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/PokeItems.css";
import imageGray from "./assets/Frame.png";

function PokeItem({ name, url }) {
  const [pokemon, setPokemon] = useState({
    id: "-",
    name: name,
    sprites: {
      other: {
        "official-artwork": {
          front_default: imageGray,
        },
      },
    },
    types: [
      {
        type: {
          name: `wireframe`,
        },
      },
    ],
  });

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div className={`card ${pokemon.types[0].type.name}`}>
      <p className={`id text-color-${pokemon.types[0].type.name} `}>
        #{pokemon.id}
      </p>
      <NavLink to={`/cardInfo/${pokemon.id}`}>
        <img
          className="imagen"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </NavLink>

      <p className="nombre"> {pokemon.name} </p>
    </div>
  );
}

export default PokeItem;
