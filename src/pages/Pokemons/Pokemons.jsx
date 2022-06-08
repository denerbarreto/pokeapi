import PokemonList from "../../components/PokemonList/PokemonList";
import PokemonSearch from "../../components/PokemonSearch/PokemonSearch";
import { Toaster } from "react-hot-toast";

import "./Pokemons.scss";

const Pokemons = () => {
  return (
    <div className="container home">
      <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
      <PokemonSearch />
      <Toaster />
      <PokemonList />
    </div>
  );
};

export default Pokemons;
