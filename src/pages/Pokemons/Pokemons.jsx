import PokemonSearch from "../../components/PokemonSearch/PokemonSearch";
import "./Pokemons.scss";

const Pokemons = () => {
  return (
    <div className="container home">
      <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
      <PokemonSearch />
    </div>
  );
};

export default Pokemons;
