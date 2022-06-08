import axios from "axios";
import { urls, queryKeys } from "../api/constants";
import { useQuery } from "react-query";

async function getPokemon(pokemonId) {
  const { data } = await axios.get(`${urls.pokemon}/${pokemonId}`);
  return data;
}

async function getCharacteristic(pokemonId) {
  const { data } = await axios.get(`${urls.characteristic}/${pokemonId}`);
  return data;
}

export function usePokemon(pokemonId) {
  const { data } = useQuery([queryKeys.pokemon, pokemonId], () =>
    getPokemon(pokemonId)
  );
  return data;
}

export function useCharacteristic(pokemonId) {
  const { data } = useQuery([queryKeys.characteristic, pokemonId], () =>
    getCharacteristic(pokemonId)
  );
  return data;
}
