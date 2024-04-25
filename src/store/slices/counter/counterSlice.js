import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     value: 0
// }

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state) => {
            state.counter += 1
        }, decrement: (state) => {
            state.couner -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions