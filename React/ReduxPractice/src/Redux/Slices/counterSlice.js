import { createSlice } from "@reduxjs/toolkit";

const initialState = {count:0};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        countIncrement: (state) => {
            state.count++;
        },

        countDecrement: (state) => {
            state.count--;
        },
        
        incrementCountBy5: (state, action) => {
            state.count = state.count + action.payload;
        },

        resetCount: (state) =>{
            state.count = 0;
        }
    }
})
export const {countIncrement, countDecrement, incrementCountBy5, resetCount} = counterSlice.actions;

export default counterSlice.reducer