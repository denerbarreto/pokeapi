import { v4 as uuidv4 } from "uuid";
import { usePokemonColor } from "../../hooks/usePokemons";
import "./PokemonCard.scss";

const PokemonCard = ({ pokemon }) => {
  const pokemonColor = usePokemonColor(pokemon.id);
  // Convert id number to #001~
  var str = "" + pokemon.id;
  var ref = "000";
  var format = ref.substring(0, ref.length - str.length) + str;
  return (
    <div className="pokemonCard">
      <div
        className="pokemonCard__wrapper"
        style={{ backgroundColor: `var(--${pokemonColor?.name}-pokemon)` }}
      >
        <div className="pokemonCard__number">
          <p>{`#${format}`}</p>
        </div>
        <div className="pokemonCard__info">
          <div className="pokemonCard__info-text">
            <p>{pokemon.name}</p>
            <div className="pokemonCard__info-specie">
              {pokemon.types?.map((type, id) => (
                <div key={uuidv4()}>
                  <p>{type.name}</p>
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
    </div>
  );
};

export default PokemonCard;
