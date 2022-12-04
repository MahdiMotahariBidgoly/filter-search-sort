/** @format */

//session63 vs 64
// import React, { useContext, useState } from 'react'
// const ProductContext = React.createContext()
// const ProductContextDispatcher = React.createContext()

// const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([
//     { title: 'React.js', value: '90$', id: 1, quantity: 1 },
//     { title: 'Node.js', value: '80$', id: 2, quantity: 2 },
//     { title: 'JavaScript.js', value: '70$', id: 3, quantity: 3 }
//   ])
//   return (
//     <ProductContext.Provider value={products}>
//       <ProductContextDispatcher.Provider value={setProducts}>
//         {children}
//       </ProductContextDispatcher.Provider>
//     </ProductContext.Provider>
//   )
// }

// export default ProductsProvider

// export const useProducts = () => useContext(ProductContext)

// export const useProductsActions = () => {
//   const setProducts = useContext(ProductContextDispatcher)
//   const products = useContext(ProductContext)
//   const removeHandler = id => {
//     console.log('clicked', id)
//     const filteredId = products.filter(p => p.id !== id)
//     setProducts(filteredId)
//   }
//   const incrementHandler = id => {
//     // 1. id => ok
//     // 2. index
//     const index = products.findIndex(item => item.id === id)
//     console.log(index)
//     // 3. clone the selected index an update the qty
//     const product = { ...products[index] }
//     product.quantity++
//     // 4. update products
//     const upgratedProducts = [...products]
//     upgratedProducts[index] = product
//     setProducts(upgratedProducts)
//   }

//   const decrementHandler = id => {
//     const index = products.findIndex(item => item.id === id)
//     console.log(index)

//     const product = { ...products[index] }

//     if (product.quantity === 1) {
//       const filteredProducts = products.filter(p => p.id !== id)
//       setProducts(filteredProducts)
//     } else {
//       const upgratedProducts = [...products]
//       product.quantity--
//       upgratedProducts[index] = product
//       setProducts(upgratedProducts)
//     }
//   }

//   const changeHandleProduct = (event, id) => {
//     const index = products.findIndex(item => item.id === id)
//     console.log(index)

//     const product = { ...products[index] }
//     product.title = event.target.value

//     const upgratedProducts = [...products]
//     upgratedProducts[index] = product
//     setProducts(upgratedProducts)
//   }
//   return {
//     removeHandler,
//     incrementHandler,
//     decrementHandler,
//     changeHandleProduct
//   }
// }

//session 65 (useReducer and useContext)

// import React, { useContext, useReducer } from 'react'
// const ProductContext = React.createContext()
// const ProductContextDispatcher = React.createContext()

// const initialState = [
//   { title: 'React.js', value: '90$', id: 1, quantity: 1 },
//   { title: 'Node.js', value: '80$', id: 2, quantity: 2 },
//   { title: 'JavaScript.js', value: '70$', id: 3, quantity: 3 }
// ]
// const reducer = (s, action) => {
//   switch (action.type) {
//     case 'increment': {
//       const index = s.findIndex(item => item.id === action.id)
//       console.log(index)
//       const product = { ...s[index] }
//       product.quantity++
//       const upgratedProducts = [...s]
//       upgratedProducts[index] = product
//       return upgratedProducts
//     }
//     case 'decrement': {
//       const index = s.findIndex(item => item.id === action.id)
//       console.log(index)

//       const product = { ...s[index] }

//       if (product.quantity === 1) {
//         const filteredProducts = s.filter(p => p.id !== action.id)
//         return filteredProducts
//       } else {
//         const upgratedProducts = [...s]
//         product.quantity--
//         upgratedProducts[index] = product
//         return upgratedProducts
//       }
//     }
//     case 'edit': {
//       const index = s.findIndex(item => item.id === action.id)
//       console.log(index)

//       const product = { ...s[index] }
//       product.title = action.event.target.value

//       const upgratedProducts = [...s]
//       upgratedProducts[index] = product
//       return upgratedProducts
//     }
//     case 'remove': {
//       const filteredId = s.filter(p => p.id !== action.id)
//       return filteredId
//     }

//     default:
//       return s
//   }
// }

// const ProductsProvider = ({ children }) => {
//   const [products, dispatch] = useReducer(reducer, initialState)
//   return (
//     <ProductContext.Provider value={products}>
//       <ProductContextDispatcher.Provider value={dispatch}>
//         {children}
//       </ProductContextDispatcher.Provider>
//     </ProductContext.Provider>
//   )
// }

// export default ProductsProvider

// export const useProducts = () => useContext(ProductContext)

// export const useProductsActions = () => {
//   return useContext(ProductContextDispatcher)

// }

//session 66
import React, { useContext, useReducer } from 'react'
import { productsData } from '../../db/products'
import _ from 'lodash'
const ProductContext = React.createContext()
const ProductContextDispatcher = React.createContext()

// const initialState = [
//   { title: 'React.js', value: '90$', id: 1, quantity: 1 },
//   { title: 'Node.js', value: '80$', id: 2, quantity: 2 },
//   { title: 'JavaScript.js', value: '70$', id: 3, quantity: 3 }
// ]
const reducer = (s, action) => {
  switch (action.type) {
    case 'increment': {
      const index = s.findIndex(item => item.id === action.id)
      console.log(index)
      const product = { ...s[index] }
      product.quantity++
      const upgratedProducts = [...s]
      upgratedProducts[index] = product
      return upgratedProducts
    }
    case 'decrement': {
      const index = s.findIndex(item => item.id === action.id)
      console.log(index)

      const product = { ...s[index] }

      if (product.quantity === 1) {
        const filteredProducts = s.filter(p => p.id !== action.id)
        return filteredProducts
      } else {
        const upgratedProducts = [...s]
        product.quantity--
        upgratedProducts[index] = product
        return upgratedProducts
      }
    }
    case 'edit': {
      const index = s.findIndex(item => item.id === action.id)
      console.log(index)

      const product = { ...s[index] }
      product.title = action.event.target.value

      const upgratedProducts = [...s]
      upgratedProducts[index] = product
      return upgratedProducts
    }
    case 'remove': {
      const filteredId = s.filter(p => p.id !== action.id)
      return filteredId
    }
    case 'filter': {
      const value = action.selectedOption.value
      if (value === '') {
        return productsData
      } else {
        const updatedProducts = productsData.filter(
          p => p.availableSize.indexOf(value) >= 0
        )
        return updatedProducts
      }
    }

    case 'sort': {
      // const value = action.selectedOption.value
      // const products = [...s]
      // if (value === 'lowest') {
      //   const sorttedProducts = products.sort((a, b) => {
      //     if (a.price > b.price) {
      //       return 1
      //     }
      //     if (a.price < b.price) {
      //       return -1
      //     }
      //     return 0
      //   })
      //   return sorttedProducts
      // } else {
      //   const sorttedProducts = products.sort((a, b) => {
      //     if (a.price < b.price) {
      //       return 1
      //     }
      //     if (a.price > b.price) {
      //       return -1
      //     }
      //     return 0
      //   })
      //   return sorttedProducts
      // }

      // session70
      const value = action.selectedOption.value
      if (value === 'lowest') {
        return _.orderBy(s, ['price'], ['asc']) // Use Lodash to sort array by 'name'
      } else {
        return _.orderBy(s, ['price'], ['desc']) // Use Lodash to sort array by 'name'
      }
    }
    case 'search': {
      const value = action.event.target.value
      if (value === '') {
        return s
      } else {
        const filteredProducts = s.filter(p =>
          p.title.toLowerCase().includes(value.toLowerCase())
        )
        return filteredProducts
      }
    }

    default:
      return s
  }
}

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData)
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  )
}

export default ProductsProvider

export const useProducts = () => useContext(ProductContext)

export const useProductsActions = () => {
  return useContext(ProductContextDispatcher)
}
