/** @format */

// import { useState } from 'react'
// import styles from './search.module.css'
// const SearchBar = () => {
//   const [value, setValue] = useState('')
//   const changeHandler = e => {
//     setValue(e.target.value)
//   }
//   return (
//     <div className={styles.formControl}>
//       <div>Search for</div>
//       <input
//         type='text'
//         placeholder='Search for...'
//         onChange={changeHandler}
//         value={value}
//       />
//     </div>
//   )
// }

// export default SearchBar

//sesion75
import { useProductsActions } from '../../components/Providers/ProductsProvider'
import { useState } from 'react'
import styles from './search.module.css'
const SearchBar = ({ filter, sort }) => {
  const dispatch = useProductsActions()
  const [value, setValue] = useState('')
  const changeHandler = e => {
    dispatch({ type: 'filter', selectedOption: filter })
    dispatch({ type: 'sort', selectedOption: sort })
    dispatch({ type: 'search', event: e })

    setValue(e.target.value)
  }
  return (
    <div className={styles.formControl}>
      <div>Search for</div>
      <input
        type='text'
        placeholder='Search for...'
        onChange={changeHandler}
        value={value}
      />
    </div>
  )
}

export default SearchBar
