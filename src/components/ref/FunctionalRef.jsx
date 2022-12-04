/** @format */

// /** @format */

// import { useRef, useEffect, useState } from 'react'

// const FuntionalRef = () => {
//   // const [reset, setReset] = useState('')

//   const inputRef = useRef()
//   const [inputValue, setInputValue] = useState('')
//   const resetRef = useRef()
//   useEffect(() => {
//     inputRef.current.focus()
//   }, [])
//   // useEffect(() => {
//   //   resetRef.current.focus()
//   // }, [])

//   const changeHandler = e => {
//     setInputValue(e.target.value)
//     inputRef.current.focus()
//   }
//   const resetHandler = e => {
//     setInputValue('')
//     // resetRef.current.focus()
//   }
//   return (
//     <div>
//       <input
//         type='text'
//         //session53
//         onChange={changeHandler}
//         ref={inputRef}
//         value={inputValue}
//       />

//       <button onClick={resetHandler} ref={resetRef}>
//         RESET
//       </button>
//     </div>
//   )
// }

// export default FuntionalRef

// import { useRef, useState } from 'react'

// const FuntionalRef = () => {
//   // const [reset, setReset] = useState('')

//   const inputRef = useRef()
//   const [inputValue, setInputValue] = useState('')

//   const changeHandler = e => {
//     setInputValue(e.target.value)
//     inputRef.current.focus()
//   }
//   const resetHandler = () => {
//     setInputValue('')
//     inputRef.current.focus()
//   }
//   return (
//     <div>
//       <input
//         type='text'
//         //session53
//         onChange={changeHandler}
//         ref={inputRef}
//         value={inputValue}
//       />

//       <button onClick={resetHandler}>RESET</button>
//     </div>
//   )
// }

// export default FuntionalRef

// استفاده شد؟  useEffect   سوال پس چرا در کد قبلی از

//session 53 part the Example for store previous-state with useRef

// import { useRef, useState, useEffect } from 'react'

// const FuntionalRef = () => {
//   //first inputValue generate and component re-rendered
//   const [inputValue, setInputValue] = useState('')
//   const previousValue = useRef()

//   const changeHandler = e => {
//     setInputValue(e.target.value)
//     // inputValue.current.focus()
//   }
//   console.log('re-render', inputValue)
//   console.log('prev-value', previousValue.current)

//   //third useEffect is going to generate but it doesnt re-render component
//   useEffect(() => {
//     previousValue.current = inputValue
//     // console.log('previousValue', previousValue.current)
//   }, [inputValue])

//   //second return is going to generate
//   return (
//     <div>
//       <input
//         type='text'
//         //session53
//         onChange={changeHandler}
//         value={inputValue}
//       />
//       <h1>
//         my name is {inputValue} and it used to be {previousValue.current}

//       </h1>
//     </div>
//   )
// }

// export default FuntionalRef

import { useRef, useState, useEffect } from 'react'

const FuntionalRef = () => {
  const [inputValue, setInputValue] = useState('')
  const [count, setCount] = useState(0)

  const inputRef = useRef()
  const previousValue = useRef()
  const previousCount = useRef()

  const changeHandler = e => {
    setInputValue(e.target.value)
    // inputRef.current.focus() ???????????????????????????????????  why it doesnt work instead of blow useEffect
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [inputValue])
  useEffect(() => {
    previousValue.current = inputValue
  }, [inputValue])
  useEffect(() => {
    previousCount.current = count
  }, [count])

  return (
    <div>
      <input
        type='text'
        //session53
        ref={inputRef}
        onChange={changeHandler}
        value={inputValue}
      />
      <h1>
        my name is {inputValue} and it used to be {previousValue.current}
      </h1>
      <hr />
      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        generate Random
      </button>
      <h1>count is - {count}</h1>
      <h2>previousCount is {previousCount.current}</h2>
    </div>
  )
}

export default FuntionalRef
