/** @format */

// import React, { useState } from 'react'
// export const CounterContext = React.createContext()
// export const CounterContextDispatcher = React.createContext()

// import React, { useState, useContext } from 'react'
// const CounterContext = React.createContext()
// const CounterContextDispatcher = React.createContext()
// const CounterProvider = ({ children }) => {
//   const [count, setCount] = useState(0)
//   return (
//     <CounterContext.Provider value={count}>
//       <CounterContextDispatcher.Provider value={setCount}>
//         {children}
//       </CounterContextDispatcher.Provider>
//     </CounterContext.Provider>
//   )
// }

// export default CounterProvider

// export const useCount = () => useContext(CounterContext)
// export const useCountActions = () => useContext(CounterContextDispatcher)

// session57
// import React, { useState, useContext } from 'react'
// const CounterContext = React.createContext()
// const CounterContextDispatcher = React.createContext()
// const CounterProvider = ({ children }) => {
//   const [count, setCount] = useState(0)
//   return (
//     <CounterContext.Provider value={count}>
//       <CounterContextDispatcher.Provider value={setCount}>
//         {children}
//       </CounterContextDispatcher.Provider>
//     </CounterContext.Provider>
//   )
// }

// export default CounterProvider

// export const useCount = () => useContext(CounterContext)

// export const useCountActions = () => {
//   const setCount = useContext(CounterContextDispatcher)
//   const addOne = () => {
//     setCount(prevCount => prevCount + 1)
//   }
//   const addFive = () => {
//     setCount(prevCount => prevCount + 5)
//   }
//   const decOne = () => {
//     setCount(prevCount => prevCount - 1)
//   }
//   return { addOne, addFive, decOne }
// }

//61 useCotext + useReducer ترکیب

import React, { useContext, useReducer } from 'react'
const CounterContext = React.createContext()
const CounterContextDispatcher = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + action.value
    case 'Dec':
      return state - action.value
    case 'reset':
      return initialState
    default:
      return state
  }
}
const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  )
}

export default CounterProvider

export const useCount = () => useContext(CounterContext)

export const useCountActions = () => {
  return useContext(CounterContextDispatcher)

  // const addOne = () => {
  //   setCount(prevCount => prevCount + 1)
  // }
  // const addFive = () => {
  //   setCount(prevCount => prevCount + 5)
  // }
  // const decOne = () => {
  //   setCount(prevCount => prevCount - 1)
  // }
  // return { addOne, addFive, decOne }
}
