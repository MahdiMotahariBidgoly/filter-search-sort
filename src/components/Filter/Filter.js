/** @format */

// import { useProductsActions } from '../Providers/ProductsProvider'
// import { useState } from 'react'
// import Select from 'react-select'
// import styles from './filter.module.css'
// const options = [
//   { value: '', label: 'All' },
//   { value: 'XL', label: 'XL' },
//   { value: 'L', label: 'L' },
//   { value: 'XXL', label: 'XXL' },
//   { value: 'XS', label: 'XS' },
//   { value: 'X', label: 'X' },
//   { value: 'M', label: 'M' },
//   { value: 'XX', label: 'XX' }
// ]
// const sortoptions = [
//   { value: 'highest', label: 'hightst' },
//   { value: 'lowest', label: 'lowest' }
// ]

// const Filter = () => {
//   const dispatch = useProductsActions()
//   const [value, setValue] = useState('')
//   const [sort, setSort] = useState('')

//   const changeHandler = selectedOption => {
//     console.log(selectedOption)
//     dispatch({ type: 'filter', selectedOption })
//     dispatch({ type: 'sort', selectedOption: sort })
//     setValue(selectedOption)
//   }

//   const sortHandler = selectedOption => {
//     console.log(selectedOption)
//     dispatch({ type: 'sort', selectedOption })
//     setSort(selectedOption)
//   }

//   return (
//     <div className={styles.filter}>
//       <p>Filter Product based on: </p>
//       <div className={styles.selectContainer}>
//         <span> order by </span>
//         <Select
//           value={value}
//           onChange={changeHandler}
//           options={options}
//           className={styles.filterselection}
//         />

//         <span> sort by </span>
//         <Select
//           value={sort}
//           onChange={sortHandler}
//           options={sortoptions}
//           className={styles.sortselection}
//         />
//       </div>
//     </div>
//   )
// }

// export default Filter

//session72  reuseability of components
import { useProductsActions } from '../Providers/ProductsProvider'
import { useState } from 'react'
import styles from './filter.module.css'
import SelectComponent from '../../common/Select/Select'
import SearchBar from '../../common/Search/Search'
const filterOptions = [
  { value: '', label: 'All' },
  { value: 'XL', label: 'XL' },
  { value: 'L', label: 'L' },
  { value: 'XXL', label: 'XXL' },
  { value: 'XS', label: 'XS' },
  { value: 'X', label: 'X' },
  { value: 'M', label: 'M' },
  { value: 'XX', label: 'XX' }
]
const sortoptions = [
  { value: 'highest', label: 'hightst' },
  { value: 'lowest', label: 'lowest' }
]

const Filter = () => {
  const dispatch = useProductsActions()
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('')

  const filterHandler = selectedOption => {
    console.log(selectedOption)
    dispatch({ type: 'filter', selectedOption })
    dispatch({ type: 'sort', selectedOption: sort })
    setFilter(selectedOption)
  }

  const onchange = selectedOption => {
    console.log(selectedOption)
    dispatch({ type: 'sort', selectedOption })
    setSort(selectedOption)
  }

  return (
    <section>
      <SearchBar filter={filter} sort={sort} />
      <div className={styles.filter}>
        <p>Filter Product based on: </p>

        <SelectComponent
          title='filter by size'
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
        />

        <SelectComponent
          title='sort by price'
          value={sort}
          onChange={onchange}
          options={sortoptions}
        />
      </div>
    </section>
  )
}

export default Filter
