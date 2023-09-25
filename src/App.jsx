// import { incremented, decremented, store } from './component/redux-toolkit'
// import { store as storeReduxCore } from './component/redux-core'
import './app.css'
// import { useState } from 'react'

// modern redux
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountedAdded, decremented } from "./component/modern-redux/counterSlice"

// export const ReduxToolKit = () => {
//   const [count, setCount] = useState(0)

//   const counter = (action) => {
//     store.dispatch(action())
//     setCount(store.getState().value)
//   }

//   return (
//     <div className='card'>
//       <h2>Menggunakan Redux Toolkit: {count}</h2>
//       <button type='button' onClick={() => counter(incremented)}>+</button>
//       <button type='button' onClick={() => counter(decremented)}>-</button>
//     </div>
//   )
// }

// export const ReduxCore = () => {
//   const [count, setCount] = useState(0)

//   const counter = (type) => {
//     storeReduxCore.dispatch({ type: type })
//     setCount(storeReduxCore.getState().value)
//   }
//   return (
//     <div className='card'>
//       <h2>Menggunakan Redux Toolkit: {count}</h2>
//       <button type='button' onClick={() => counter('increment')}>+</button>
//       <button type='button' onClick={() => counter('decrement')}>-</button>
//     </div>
//   )
// }

export const ModernRedux = () => {

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch()

  function handleClick(action) {
    dispatch(action());
  }

  return (
    <div className='card'>
      <h2>Menggunakan Redux Toolkit: {count}</h2>
      <button type='button' onClick={() => handleClick(incremented)} >+</button>
      <button type='button' onClick={() => handleClick(decremented)} >-</button>
    </div>
  )
}