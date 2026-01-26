import React from 'react'
import "./app.scss";
import Home from './pages/Home';
import About from './pages/About';
import { Route, Routes, } from 'react-router-dom';
import Navbar from './pages/Navbar';


const App = () => {
  return (
    <div  className='homePage'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App