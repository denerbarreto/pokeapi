import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useSpecie } from "../../hooks/usePokemon";
import "./PokemonCard.scss";

const PokemonCard = ({ pokemon, pokemonName }) => {
  const { data: dataColor } = useSpecie(pokemonName);
  // Convert id number to #001~
  var str = "" + pokemon?.id;
  var ref = "000";
  var format = ref.substring(0, ref.length - str.length) + str;
  return (
    <Link to={`${pokemon?.id}`} className="pokemonCard">
      <div
        className="pokemonCard__wrapper"
        style={{
          backgroundColor: `var(--${
            dataColor ? dataColor?.color.name : "purple"
          }-pokemon)`,
        }}
      >
        <div className="pokemonCard__number">
          <p>{`#${format}`}</p>
        </div>
        <div className="pokemonCard__info">
          <div className="pokemonCard__info-text">
            <p>{pokemon?.name}</p>
            <div className="pokemonCard__info-specie">
              {pokemon?.types?.map((type) => (
                <div key={uuidv4()}>
                  <p>{type.type.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pokemonCard__info-img">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
              alt={`pokemon-${pokemon.id}`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
