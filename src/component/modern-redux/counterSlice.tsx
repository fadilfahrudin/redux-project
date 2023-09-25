// DUCKS PATTERN
import {createSlice, PayloadAction} from "@reduxjs/toolkit" 

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        // increment
        incremented(state){
            // ini bisa di jalankan karena redux toolkit 
            // memiliki library namanya immer yg bisa membuat immutable under the hood
            state.value++;
        },
        // decrement
        decremented(state){
            state.value--;
        },
        // Amounted Added
        amountedAdded(state, action: PayloadAction<number>){
            state.value += action.payload;
        }
        // reset
    }
})

export const {incremented, decremented, amountedAdded} = counterSlice.actions;
export default counterSlice.reducer;