/** @format */
//session 72
// import styles from './select.module.css'
// import Select from 'react-select'

// const SelectComponent = ({ value, onChange, options, title }) => {
//   return (
//     <div className={styles.selectContainer}>
//       <span> {title} </span>
//       <Select
//         value={value}
//         onChange={onChange}
//         options={options}
//         className={styles.selection}
//       />
//     </div>
//   )
// }

// export default SelectComponent

//sesion 73
import styles from './select.module.css'
import Select from 'react-select'
//...spread operator => for clone
//... rest => AN Object for containg of diffrent props
const SelectComponent = ({ title, ...rest }) => {
  console.log(rest)
  return (
    <div className={styles.selectContainer}>
      <span> {title} </span>
      <Select {...rest} className={styles.selection} />
    </div>
  )
}

export default SelectComponent
