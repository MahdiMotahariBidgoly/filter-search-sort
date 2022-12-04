/** @format */

// /** @format */

// // import { CounterContext, CounterContextDispatcher } from './CounterProvider'
// // import { useContext } from 'react'
// import { useCount, useCountActions } from './CounterProvider'

// const CounterOne = () => {
//   // const count = useContext(counterContext)
//   // const setCounte= useContext(CounterContextDispatcher)

//   const count = useCount()
//   const setCount = useCountActions()

//   const addOne = () => {
//     setCount (count+1)
//   }

//   return (
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={addOne}>addOne</button>
//     </div>
//   )
// }

// export default CounterOne

// session57
// import { useCount, useCountActions } from './CounterProvider'
// const CounterOne = () => {
//   const count = useCount()
//   const { addOne, addFive, decOne } = useCountActions()

//   return (
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={addOne}>addOne</button>
//       <button onClick={addFive}>addFive</button>
//       <button onClick={decOne}>decOne</button>
//     </div>
//   )
// }

// export default CounterOne

//session61

import { useCount, useCountActions } from './CounterProvider'
const CounterOne = () => {
  const count = useCount()
  const dispatch = useCountActions()

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => dispatch({ type: 'add', value: 1 })}>
        addOne
      </button>
      <button onClick={() => dispatch({ type: 'add', value: 4 })}>
        addFour
      </button>
      <button onClick={() => dispatch({ type: 'Dec', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default CounterOne
