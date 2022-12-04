/** @format */

// /** @format */

// import React, { Component } from 'react'
// import Product from '../product/Product'
// class ProductList extends Component {
//   componentDidUpdate(prevProps, prevState) {
//     console.log('ProductList.js componentDidUpdate')
//     if (prevProps !== this.props.products) {
//       //some AJAX call=> and gets new data
//     }
//   }
//   renderProduct = () => {
//     // if (this.state.products.length === 0)
//     //   return <div>there is no product in cart</div>
//     const { onChangeproduct, onDecrement, onDelete, onIncrement, products } =
//       this.props
//     return products.map(product => {
//       return (
//         <Product
//           product={product}
//           onDelete={() => onDelete(product.id)}
//           onIncrement={() => onIncrement(product.id)}
//           onChangeproduct={e => onChangeproduct(e, product.id)}
//           onDecrement={() => onDecrement(product.id)}
//         />
//       )
//     })
//   }
//   render() {
//     const { products } = this.props
//     return (
//       <div>
//         {!products.length && <div>go to the shopping</div>}
//         {this.renderProduct()}
//       </div>
//     )
//   }
// }

// export default ProductList

//session 63 vs 64

// import Product from '../product/Product'
// import { useProducts, useProductsActions } from '../Providers/ProductsProvider'

// const ProductList = props => {
//   const products = useProducts()

//   const {
//     removeHandler,
//     incrementHandler,
//     decrementHandler,
//     changeHandleProduct
//   } = useProductsActions()

//   const renderProduct = () => {
//     return products.map(product => {
//       if (products.length === 0) return <div>there is no product in cart </div>
//       return (
//         <Product
//           product={product}
//           onDelete={() => removeHandler(product.id)}
//           onIncrement={() => incrementHandler(product.id)}
//           onChangeproduct={e => changeHandleProduct(e, product.id)}
//           onDecrement={() => decrementHandler(product.id)}
//         />
//       )
//     })
//   }

//   return (
//     <div>
//       {!products.length && <div>go to the shopping</div>}
//       {renderProduct()}
//     </div>
//   )
// }

// export default ProductList

//sessio 65

import Product from '../product/Product'
import { useProducts, useProductsActions } from '../Providers/ProductsProvider'

const ProductList = props => {
  const products = useProducts()

  const dispatch = useProductsActions()

  const renderProduct = () => {
    return products.map(product => {
      if (products.length === 0) return <div>there is no product in cart </div>
      return (
        <Product
          key={product.id}
          product={product}
          onDelete={() => dispatch({ type: 'remove', id: product.id })}
          onIncrement={() => dispatch({ type: 'increment', id: product.id })}
          onChangeproduct={e =>
            dispatch({ type: 'edit', id: product.id, event: e })
          }
          onDecrement={() => dispatch({ type: 'decrement', id: product.id })}
        />
      )
    })
  }

  return (
    <div>
      {!products.length && <div>go to the shopping</div>}
      {renderProduct()}
    </div>
  )
}

export default ProductList
