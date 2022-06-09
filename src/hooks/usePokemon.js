import axios from "axios";
import { urls, queryKeys } from "../api/constants";
import { useQuery } from "react-query";
// Get pokemon
async function getPokemon(pokemonId) {
  const { data } = await axios.get(`${urls.pokemon}/${pokemonId}`);
  return data;
}

export function usePokemon(pokemonId) {
  const { data, isLoading } = useQuery([queryKeys.pokemon, pokemonId], () =>
    getPokemon(pokemonId)
  );
  return { data, isLoading };
}

// get pokemon specie
async function getSpecie(pokemonNome) {
  const { data } = await axios.get(`${urls.specie}/${pokemonNome}`);
  return data;
}

export function useSpecie(pokemonNome) {
  const { data, isLoading } = useQuery([queryKeys.specie, pokemonNome], () =>
    getSpecie(pokemonNome)
  );
  return { data, isLoading };
}
