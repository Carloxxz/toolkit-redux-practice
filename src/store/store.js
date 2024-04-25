import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from './slices/counter/counterSlice.js'
import { pokemonSlice } from "./slices/pokemon/pokemonSlice.js";
import { todosApi } from './apis/todosApi.js'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        [todosApi.reducerPath]: todosApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(todosApi.middleware)
})