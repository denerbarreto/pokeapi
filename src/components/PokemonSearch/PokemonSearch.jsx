import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import "./PokemonSearch.scss";

const PokemonSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pokemonSearch">
      <form onSubmit={handleSubmit} className="pokemonSearch__form">
        <div className="pokemonSearch__form-field">
          <input type="text" placeholder="Pesquisar pokemon" />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default PokemonSearch;
