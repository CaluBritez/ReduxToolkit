import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks.js";
import { useSelector } from "react-redux";

export const PokemonApp = () => {

  const dispatch = useDispatch()

  const {isLoading, pokemons, page} = useSelector((state) => state.pokemon)

  useEffect(() => {
    dispatch(getPokemons());
  }, [])


  return (
    <>
    
    <h1>PokemonApp</h1>
    <hr />
    <span>Loading: {!isLoading ? 'False' : 'True'} </span>

    <ul>
      {
        pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
        ))
      }
    </ul>
    <button
      disabled = {isLoading}
      onClick = {() => dispatch(getPokemons(page))}
      >Next
    </button>
  
    </>
  )
}
