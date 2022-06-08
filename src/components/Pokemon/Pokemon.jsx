import { useParams } from "react-router-dom";
import { useCharacteristic, usePokemon } from "../../hooks/usePokemon";

const Pokemon = () => {
  const { pokemonId } = useParams();
  const dataPokemon = usePokemon(pokemonId);
  const dataCharacteristic = useCharacteristic(pokemonId);

  return (
    <div>
      {dataPokemon?.stats.map((stat, id) => (
        <div key={id}>
          <h1>{stat.base_stat}</h1>
          <p>{stat.stat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
