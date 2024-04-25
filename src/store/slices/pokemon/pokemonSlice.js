import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        stateLoadingPokemons: (state) => {
            state.isLoading = true
        },
        setPokemons: (state, action) => {
            console.log(action)
        }
    }
})

export const { stateLoadingPokemons, setPokemons } = pokemonSlice.actions