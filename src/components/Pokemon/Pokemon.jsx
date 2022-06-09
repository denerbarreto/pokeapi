import { useParams } from "react-router-dom";
import { usePokemon, useSpecie } from "../../hooks/usePokemon";
import Spinner from "../Spinner/Spinner";
import weigh from "../../assets/weigh.svg";
import height from "../../assets/height.svg";

import "./Pokemon.scss";

const Pokemon = () => {
  const { pokemonId } = useParams();
  const { data: dataPokemon, isLoading: dataPokemonLoading } =
    usePokemon(pokemonId);
  const { data: dataSpecie, isLoading: dataSpecieLoading } =
    useSpecie(pokemonId);

  return (
    <div className="container">
      {dataPokemonLoading && dataSpecieLoading ? (
        <Spinner />
      ) : (
        <div className="pokemon">
          <div
            className="pokemon__img"
            style={{
              backgroundColor: `var(--${
                dataSpecie ? dataSpecie?.color.name : "purple"
              }-pokemon)`,
            }}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${dataPokemon?.id}.png`}
              alt={`pokemon-${dataPokemon?.id}`}
            />
          </div>
          <div className="pokemon__info">
            <span>#005</span>
            <div className="pokemon__info-name">
              <h2>{dataPokemon?.name}</h2>
              <p>{dataSpecie?.flavor_text_entries[1]?.flavor_text}</p>
            </div>
            <div className="pokemon__info-features">
              <div className="features-wrapper">
                <div className="features-icon">
                  <img src={weigh} alt="" />
                  <h4>{dataPokemon?.weight}</h4>
                </div>
                <p>Peso</p>
              </div>
              <div className="features-wrapper">
                <div className="features-icon">
                  <img src={height} alt="" />
                  <h4>{dataPokemon?.height}</h4>
                </div>
                <p>Altura</p>
              </div>
              <div className="features-wrapper">
                <h4>{dataPokemon?.abilities[0]?.ability.name}</h4>
                <p>Poder Principal</p>
              </div>
            </div>
            <div className="pokemon__info-status">
              {dataPokemon?.stats.map((stat, id) => (
                <div key={id} className="status-line">
                  <p>{stat.stat.name}</p>
                  <p>{stat.base_stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
