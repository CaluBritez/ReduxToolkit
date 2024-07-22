import { pokemonApi } from '../../../api/pokemonApi.js'
import { startLoadingPokemons, setPokemons } from './pokemonSlice.js'

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons())

        // realizar peticion

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        console.log(data.results);

        dispatch(setPokemons({ 
            pokemons:
                data.results,
                page: page + 1 }))
    }
}