import { createSlice, configureStore } from "@reduxjs/toolkit"

const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: state => { state.value++ },
    decremented: state => { state.value -= 1 }
  }
})

export const { incremented, decremented } = CounterSlice.actions;

export const store = configureStore({
  reducer: CounterSlice.reducer
})

store.subscribe(() => console.log(store.getState().value))
