/** @format */
// import styles from './navBar.module.css'
// const NavBar = props => {
//   return (
//     <header className={styles.navBar}>
//       <h1>frontHook.ir Shopping</h1>
//       <span>{props.totalItems}</span>
//     </header>
//   )
// }
// export default NavBar

//session 63
import { useProducts } from '../Providers/ProductsProvider'
import styles from './navBar.module.css'
const NavBar = () => {
  const products = useProducts()
  const totalItems = products.filter(p => p.quantity > 0).length

  return (
    <header className={styles.navBar}>
      <h1>frontHook.ir Shopping</h1>
      <span>{totalItems}</span>
    </header>
  )
}
export default NavBar
