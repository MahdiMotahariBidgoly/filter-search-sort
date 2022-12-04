/** @format */
//58
//first model

// import { useReducer } from 'react'
// const initialState = 0
// const reducer = (s, action) => {
//   switch (action) {
//     case 'addOne':
//       return s + 1
//     case 'addFive':
//       return s + 5
//     case 'decrement':
//       return s - 1
//     default:
//       return s
//   }
// }
// const CountReducer = () => {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//       <h1>count : {count}</h1>
//       <button onClick={() => dispatch('addOne')}>Add One </button>
//       <button onClick={() => dispatch('addFive')}>Add Five </button>
//       <button onClick={() => dispatch('decrement')}>Decrement </button>
//     </div>
//   )
// }

// export default CountReducer

//second model

// import { useReducer } from 'react'
// const initialState = 0

// const CountReducer = () => {
//   const [count, dispatch] = useReducer((s, action) => {
//     switch (action) {
//       case 'addOne':
//         return s + 1
//       case 'addFive':
//         return s + 5
//       case 'decrement':
//         return s - 1
//       default:
//         return s
//     }
//   }, initialState)
//   return (
//     <div>
//       <h1>count : {count}</h1>
//       <button onClick={() => dispatch('addOne')}>Add One </button>
//       <button onClick={() => dispatch('addFive')}>Add Five </button>
//       <button onClick={() => dispatch('decrement')}>Decrement </button>
//     </div>
//   )
// }

// export default CountReducer

//59th session
// import { useReducer } from 'react'
// const initialState = {
//   firstCount: 0,
//   secondCount: 0
// }
// const reducer = (s, action) => {
//    switch (action.type) {
//     case 'addOne':
//       return { ...s, firstCount: s.firstCount + action.value }

//     case 'decrement':
//       return { ...s, firstCount: s.firstCount - action.value }
//     case 'addOne2':
//       return { ...s, secondCount: s.secondCount + action.value }

//     case 'decrement2':
//       return { ...s, secondCount: s.secondCount - action.value }
//     case 'reset':
//       return initialState
//     default:
//       return s.firstCount
//   }
// }
// const CountReducer = () => {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   console.log(count)
//   return (
//     <div>
//       <h1>count : {count.firstCount}</h1>
//       <h1>count : {count.secondCount}</h1>
//       <div>
//         <button onClick={() => dispatch({ type: 'addOne', value: 1 })}>
//           Add One
//         </button>
//         <button onClick={() => dispatch({ type: 'addOne', value: 5 })}>
//           Add Five
//         </button>
//         <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
//           Decrement
//         </button>
//       </div>
//       <div>
//         <button onClick={() => dispatch({ type: 'addOne2', value: 1 })}>
//           Add One 2
//         </button>
//         <button onClick={() => dispatch({ type: 'addOne2', value: 5 })}>
//           Add Five 2
//         </button>
//         <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
//           Decrement 2
//         </button>
//         <button onClick={() => dispatch({ type: 'reset' })}>Reset </button>
//       </div>
//     </div>
//   )
// }

// export default CountReducer

//60 multiple useReducer

import { useReducer } from 'react'
const initialState = 0
const reducer = (s, action) => {
  switch (action.type) {
    case 'addOne':
      return s + action.value
    case 'decrement':
      return s - action.value
    case 'reset':
      return initialState
    default:
      return s
  }
}
const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  console.log(count)
  return (
    <div>
      <h1>count : {count}</h1>

      <div>
        <button onClick={() => dispatch({ type: 'addOne', value: 1 })}>
          Add One
        </button>
        <button onClick={() => dispatch({ type: 'addOne', value: 5 })}>
          Add Five
        </button>
        <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
      <h1>count : {countTwo}</h1>
      <div>
        <button onClick={() => dispatchTwo({ type: 'addOne', value: 1 })}>
          Add One
        </button>
        <button onClick={() => dispatchTwo({ type: 'addOne', value: 5 })}>
          Add Five
        </button>
        <button onClick={() => dispatchTwo({ type: 'decrement', value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatchTwo({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  )
}

export default CountReducer
