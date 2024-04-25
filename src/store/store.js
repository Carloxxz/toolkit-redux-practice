import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from './slices/counter/counterSlice.js'
import { pokemonSlice } from "./slices/pokemon/pokemonSlice.js";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    },
})