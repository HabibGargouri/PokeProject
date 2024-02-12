import apiClient from "./api-client";
import { Pokemon } from "../classes";

// export const getAllPokemons = (): Promise<Pokemon[]> =>
//   apiClient.get(`json/pokemon/all/`).then(({ data }) => data["pokemonData"]);

interface PokemonApiResponse {
  pokemonData: Pokemon[];
  numPages: number;
}

export const getPokemons = (
  page: number | undefined,
  itemsPerPage: number | undefined
): Promise<{ pokemons: Pokemon[]; numPages: number }> =>
  apiClient
    .get(`pokemons?page=${page}&items_per_page=${itemsPerPage}`)
    .then(({ data }) => {
      const pokemonData: Pokemon[] = data["pokemonData"];
      const numPages: number = data["numPages"];
      return { pokemons: pokemonData, numPages };
    });

export const getPokemon = (id: number | undefined): Promise<Pokemon> =>
  apiClient.get(`pokemons/${id}`).then(({ data }) => data["pokemonData"]);
