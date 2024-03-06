import React from 'react'
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cartitem from './components/Cartitem';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    
    <BrowserRouter>
    
    <Sidebar/>
    <Header/>
    <Routes>
       <Route index element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/ProductDetail/:id" element={<ProductDetail/>}/>
    </Routes>
  </BrowserRouter>
  
  )
}

export default App