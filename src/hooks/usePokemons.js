import axios from "axios";
import { urls, queryKeys } from "../api/constants";
import { useQuery, useQueryClient } from "react-query";
import { useEffect } from "react";

async function getAllPokemons(pageNum) {
  const { data } = await axios.get(
    `${urls.pokemon}/?limit=10&offset=${pageNum}`
  );
  const allPokemons = [];

  data.results.forEach(
    async (pokemon) =>
      await axios
        .get(pokemon.url)
        .then((result) => allPokemons.push(result.data))
  );

  return allPokemons;
}

async function getPokemonColor(pokemonId) {
  const { data } = await axios.get(`${urls.color}/${pokemonId}`);
  return data;
}
export function usePokemonColor(pokemonId) {
  const { data } = useQuery([queryKeys.color, pokemonId], () =>
    getPokemonColor(pokemonId)
  );
  return data;
}

// Get all pokemons in the pagination
export function usePokemons(currentPage, nextPage) {
  const { data } = useQuery(
    [queryKeys.pokemons, currentPage],
    () => getAllPokemons(currentPage),
    { staleTime: Infinity }
  );

  const queryClient = useQueryClient();
  // Prefetch the next page
  useEffect(() => {
    const preFechNextPage = currentPage + nextPage;
    queryClient.prefetchQuery(
      [queryKeys.pokemons, preFechNextPage],
      () => getAllPokemons(preFechNextPage),
      { staleTime: Infinity }
    );
  }, [currentPage, nextPage, queryClient]);

  return data;
}

export function usePrefetchPokemons() {
  const queryClient = useQueryClient();
  const currentPage = 0;
  queryClient.prefetchQuery([queryKeys.pokemons, currentPage], getAllPokemons, {
    staleTime: Infinity,
  });
}
