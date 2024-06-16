import React from 'react'
import Counter from './components/Counter.jsx'
import Navbar from './components/Navbar.jsx'
import Product from './components/Product.jsx'
import Cart from './components/Cart.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/Cart' element={ <Cart/>}/>

     
      </Routes>
    </BrowserRouter>
  )
}

export default App
