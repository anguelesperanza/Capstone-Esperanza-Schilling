import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Home from './Components/Home.jsx'
import Cart from './Components/Cart.jsx'
import About from './Components/About.jsx'
import Search from './Components/Search.jsx'
import { Route, Routes, Navigate, Link} from 'react-router-dom'
import Featured from './Components/Featured.jsx'
import Products from './Components/Products.jsx'

function App() {
  return (
    <>
      <div>
        <nav>
          
          <Link to="/home">Home</Link>&nbsp;
          <Link to="/products">Products</Link>&nbsp;
          <Link to="/about">About</Link>&nbsp;
          <Link to="/cart">Cart</Link>
          <br />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App
