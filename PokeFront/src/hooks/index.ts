import { useQuery } from "react-query";
import {  getPokemon, getPokemons } from "../api/pokemon-services";


export const useGetPokemons = (page : number ,items_per_page : number) => {
    return useQuery("getPokemons", () => getPokemons(page,items_per_page));
  };

export const useGetPokemon = (id: number) => {
  return useQuery("getPokemon", () => getPokemon(id));
};
