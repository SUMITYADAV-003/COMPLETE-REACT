import React from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom';
import "./app.scss";
import HomePage from './HeroPage/HomePage';
import About from './HeroPage/About';
import Contact from './HeroPage/Contact';
import ProductCard from './Component/ProductCard';
import HomeHero from './Component/HomeHero';


const App = () => {
  return (
    <main>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/coutact' element={<Contact/>} />
    </Routes>
    </main>
  )
}

export default App