import { useState } from "react";
import { usePokemons } from "../../hooks/usePokemons";
import PokemonCard from "../PokemonCard/PokemonCard";

import "./PokemonList.scss";

const PokemonList = () => {
  const firstPage = 0;
  const nextPage = 10;
  const maxPage = 1000;
  const [currentPage, setCurrentPage] = useState(firstPage);
  const data = usePokemons(currentPage, nextPage);

  return (
    <div className="container">
      <div className="pokemonList">
        <div className="pokemonList__pokemons">
          {data?.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <div className="pokemonList__btn">
          {/* The Inicio button just show if the current page is different of the firsts two pages */}
          {currentPage !== firstPage && currentPage !== nextPage ? (
            <button
              disabled={currentPage <= 1}
              onClick={() => {
                setCurrentPage(firstPage);
              }}
            >
              Inicio
            </button>
          ) : (
            ""
          )}
          <button
            disabled={currentPage <= 1}
            onClick={() => {
              setCurrentPage((previousValue) => previousValue - nextPage);
            }}
          >
            Previous
          </button>
          <button
            disabled={currentPage >= maxPage}
            onClick={() => {
              setCurrentPage((previousValue) => previousValue + nextPage);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
