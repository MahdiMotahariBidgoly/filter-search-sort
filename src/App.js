/** @format */
// import React,{Component}from 'react'
// import { useState } from 'react'
// import Product from './components/Product/Product'

// class App extends Component {
//   state = {
//     products: [
//       { title: 'React.js', value: '90$' },
//       { title: 'Node.js', value: '80$' },
//       { title: 'JavaScript.js', value: '70$' }
//     ]
//   }

//   clickHandler = () => {
//     setState({
//       products: [
//         { title: 'React.js', value: '100$' },
//         { title: 'Node.js', value: '120$' },
//         { title: 'JavaScript.js', value: '130$' }
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className='container' id='title'>
//         <h1>Shoping Center</h1>
//         {products.map(product => {
//           return <Product name={product.title} price={product.value} />
//         })}
//         <button onClick={clickHandler}>Click</button>
//       </div>
//     )
//   }
// }
// export default App

// functional component:
// const App = () => {
//   const [products, setProducts] = useState([
//     { title: 'React.js', value: '100$' },
//     { title: 'Node.js', value: '120$' },
//     { title: 'JavaScript.js', value: '130$' }
//   ])
//   console.log(products)
//   const clickHandler = () => {
//     setProducts([
//       { title: 'React.js', value: '150$' },
//       { title: 'Node.js', value: '160$' },
//       { title: 'JavaScript.js', value: '140$' }
//     ])
//   }
//   return (
//     <div className='container' id='title'>
//       <h1>Shopping Center</h1>
//       {products.map(product => {
//         return <Product name={product.title} price={product.value} />
//       })}
//       <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }
// export default App

// import MyCounter from './components/counter/MyCounter'
// // import HookCounter from './components/counter/HookCounter'
// // import HookObject from './components/HookObject'
// // import HooksArray from './components/HookArray'
// const App = () => {
//   return (
//     <div>
//        {/* <HookCounter /> */}
//       {/* <HookObject /> */}
//       {/* <HooksArray /> */}
//     </div>
//   )
// }

// export default App

// session22//
// import React, { Component } from 'react'
// import Product from './components/product/Product'
// class App extends Component {
//   state = {
//     products: [
//       { title: 'React.js', value: '90$' },
//       { title: 'Node.js', value: '80$' },
//       { title: 'JavaScript.js', value: '70$' }
//     ]
//   }

//   clickHandler = newTitle => {
//     // console.log('Change price')
//     // setState({
//     //   products: [
//     //     { title: 'React.js', value: '100$' },
//     //     { title: newTitle, value: '120$' },
//     //     { title: 'JavaScript.js', value: '130$' }
//     //   ]
//     // })
//   }

//   render() {
//     return (
//       <div className='container' id='title'>
//         <h1>Shoping Center</h1>
//         {products.map(product => {
//           return (
//             <Product
//               name={product.title}
//               price={product.value}
//               click={() => clickHandler('newTitle')}
//             />
//           )
//         })}
//         <button onClick={clickHandler}>Click</button>
//       </div>
//     )
//   }
// }
// export default App

// session 24 Extract ProductList Component//
// import React, { Component } from 'react'
// import ProductList from './components/productlist/ProductList'
// import './App.css'
// class App extends Component {
//   state = {
//     products: [
//       { title: 'React.js', value: '90$' },
//       { title: 'Node.js', value: '80$' },
//       { title: 'JavaScript.js', value: '70$' }
//     ]
//   }

//   clickHandler = newTitle => {
//     // console.log('Change price')
//     // setState({
//     //   products: [
//     //     { title: 'React.js', value: '100$' },
//     //     { title: newTitle, value: '120$' },
//     //     { title: 'JavaScript.js', value: '130$' }
//     //   ]
//     // })
//   }

//   render() {
//     return (
//       <div className='container' id='title'>
//         <h1>Shoping Center</h1>
//         <ProductList />

//         <button onClick={clickHandler} className='Product'>
//           Click
//         </button>
//       </div>
//     )
//   }
// }
// export default App

// session25
// import React, { Component } from 'react'
// import ProductList from './components/productlist/ProductList'
// import NavBar from './components/navBar/NavBar'
// import ClassCounter from './components/counter/ClassCounter'
// import './App.css'
// import FunctionalCounter from './components/counter/FunctionalCounter'
// import ClassTimer from './components/counter/ClassTimer'
// import FunctionalTimer from './components/counter/FunctionalComponent'
// import Wrapper from './components/hoc/Wrapper'
// import Clickcounter from './components/hocExample/ClickCounter'
// import Hovercounter from './components/hocExample/HoverCounter'
// import ParentCom from './components/Pure-Memo-Component/ParentCom'
// import ClassRef from './components/ref/ClassRef'
// import FuntionalRef from './components/ref/FunctionalRef'
// import CounterProvider from './components/Context/CounterProvider'
// import CounterOne from './components/Context/CounterOne'
// import CountReducer from './components/Reducer/CountReducer'
// class App extends Component {
//   constructor(props) {
//     super(props)
//     // console.log('App.js constructor')
//   }
//   state = {
//     products: [
//       { title: 'React.js', value: '90$', id: 1, quantity: 1 },
//       { title: 'Node.js', value: '80$', id: 2, quantity: 2 },
//       { title: 'JavaScript.js', value: '70$', id: 3, quantity: 3 }
//     ],
//     isShow: true
//   }
//   removeHandler = id => {
//     console.log('clicked', id)
//     const filteredId = products.filter(p => p.id !== id)
//     setState({ products: filteredId })
//   }
//   incrementHandler = id => {
//     // console.log('clicked on', id)
//     // const products = [...products] //to have a copy from state= i.e. clone
//     // const selectedItem = products.find(p => p.id === id)
//     // selectedItem.quantity++
//     // console.log(products)
//     // setState({ products })

//     //session 39
//     // 1. id => ok
//     // 2. index
//     const index = products.findIndex(item => item.id === id)
//     console.log(index)
//     // 3. clone the selected index an update the qty
//     const product = { ...products[index] }
//     product.quantity++
//     // 4. update products
//     const products = [...products]
//     products[index] = product
//     setState({ products })
//   }

//   decrementHandler = id => {
//     // console.log('clicked on', id)
//     // const products = [...products]
//     // const selectedItem = products.find(p => p.id === id)
//     // if (selectedItem.quantity === 1) {
//     //   const filteredProducts = products.filter(p => p.id !== id)
//     //   setState({ products: filteredProducts })
//     // } else {
//     //   selectedItem.quantity--
//     //   setState({ products })}
//     const index = products.findIndex(item => item.id === id)
//     console.log(index)

//     const product = { ...products[index] }

//     if (product.quantity === 1) {
//       const filteredProducts = products.filter(p => p.id !== id)
//       setState({ products: filteredProducts })
//     } else {
//       const products = [...products]
//       product.quantity--
//       products[index] = product
//       setState({ products })
//     }
//   }

//   changeHandleProduct = (event, id) => {
//     // console.log(event.target.value, id)
//     // const products = [...products] //to have a copy from state= i.e. clone
//     // const selectedItem = products.find(p => p.id === id)
//     // selectedItem.title = event.target.value
//     // setState({ products })

//     const index = products.findIndex(item => item.id === id)
//     console.log(index)

//     const product = { ...products[index] }
//     product.title = event.target.value

//     const products = [...products]
//     products[index] = product
//     setState({ products })
//   }
//   // state = {
//   //   products: [
//   //     { title: 'React.js', value: '90$' },
//   //     { title: 'Node.js', value: '80$' },
//   //     { title: 'JavaScript.js', value: '70$' }
//   //   ]
//   // }
//   //

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return true
//   // }
//   render() {
//     // console.log('App.js,render')
//     // return (
//     //   <div className='container' id='title'>
//     //     <h1>Shopping Center</h1>

//     //     <NavBar
//     //       totalItems={products.filter(p => p.quantity > 0).length}
//     //     />
//     //     <ProductList
//     //       products={products}
//     //       onDelete={removeHandler}
//     //       onIncrement={incrementHandler}
//     //       onDecrement={decrementHandler}
//     //       onChangeproduct={changeHandleProduct}
//     //     />
//     //     {/* <ClassCounter />
//     //     <FunctionalCounter /> */}
//     //     {/* <button onClick={() => setState({ isShow: !isShow })}>
//     //       {isShow ? 'Hide' : 'Show'}
//     //     </button>
//     //     {isShow && <ClassTimer />}  */}

//     //     {/* <button onClick={() => setState({ isShow: !isShow })}>
//     //       {isShow ? 'Hide' : 'Show'}
//     //     </button>
//     //     {isShow && <FunctionalTimer />} */}
//     //   </div>

//     // )

//     //session47
//     // return (
//     //   <>
//     //     <h1>Shopping Center</h1>

//     //     <NavBar
//     //       totalItems={products.filter(p => p.quantity > 0).length}
//     //     />
//     //     <ProductList
//     //       products={products}
//     //       onDelete={removeHandler}
//     //       onIncrement={incrementHandler}
//     //       onDecrement={decrementHandler}
//     //       onChangeproduct={changeHandleProduct}

//     //     />

//     //   </>
//     // )

//     //session 48
//     return (
//       <>
//         <CounterProvider>
//           <h1>context</h1>
//           <p>welcome</p>
//           {/* <CountReducer /> */}
//           <CounterOne />
//         </CounterProvider>
//         {/* <Clickcounter name='MahdiMotah' />
//         <Hovercounter /> */}
//         {/* <ParentCom /> */}
//         {/* <ClassRef /> */}
//         {/* <FuntionalRef /> */}
//       </>
//     )
//   }
// }
// export default Wrapper(App, 'container')

// ////session62     تبدیل اپ به فانکشنال کامپوننت
// import ProductList from './components/productlist/ProductList'
// import NavBar from './components/navBar/NavBar'
// import './App.css'
// import Wrapper from './components/hoc/Wrapper'

// import React, { useState } from 'react'
// const App = () => {
//   const [products, setProduct] = useState([
//     { title: 'React.js', value: '90$', id: 1, quantity: 1 },
//     { title: 'Node.js', value: '80$', id: 2, quantity: 2 },
//     { title: 'JavaScript.js', value: '70$', id: 3, quantity: 3 }
//   ])
//   const removeHandler = id => {
//     console.log('clicked', id)
//     const filteredId = products.filter(p => p.id !== id)
//     setProduct(filteredId)
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
//     setProduct(upgratedProducts)
//   }

//   const decrementHandler = id => {
//     const index = products.findIndex(item => item.id === id)
//     console.log(index)

//     const product = { ...products[index] }

//     if (product.quantity === 1) {
//       const filteredProducts = products.filter(p => p.id !== id)
//       setProduct(filteredProducts)
//     } else {
//       const upgratedProducts = [...products]
//       product.quantity--
//       upgratedProducts[index] = product
//       setProduct(upgratedProducts)
//     }
//   }

//   const changeHandleProduct = (event, id) => {
//     const index = products.findIndex(item => item.id === id)
//     console.log(index)

//     const product = { ...products[index] }
//     product.title = event.target.value

//     const upgratedProducts = [...products]
//     upgratedProducts[index] = product
//     setProduct(upgratedProducts)
//   }

//   return (
//     <>
//       <h1>Shopping Center</h1>

//       <NavBar totalItems={products.filter(p => p.quantity > 0).length} />
//       <ProductList
//         products={products}
//         onDelete={removeHandler}
//         onIncrement={incrementHandler}
//         onDecrement={decrementHandler}
//         onChangeproduct={changeHandleProduct}
//       />
//     </>
//   )
// }

// export default Wrapper(App, 'container')

////session63
import ProductList from './components/productlist/ProductList'
import NavBar from './components/navBar/NavBar'
import Wrapper from './components/hoc/Wrapper'
import Filter from './components/Filter/Filter'
import './App.css'
import ProductsProvider from './components/Providers/ProductsProvider'

const App = () => {
  return (
    <>
      <ProductsProvider>
        <h1>Shopping Center</h1>
        <NavBar />

        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  )
}

export default Wrapper(App, 'container')
