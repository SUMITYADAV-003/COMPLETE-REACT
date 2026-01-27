import React from 'react'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom';
import "./app.scss";
import HomePage from './HeroPage/HomePage';
import About from './HeroPage/About';
import Contact from './HeroPage/Contact';
import SearchBar from './Component/SearchBar';


const App = () => {
  return (
    <main>
      <Navbar />
      <SearchBar />
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/coutact' element={<Contact/>} />
     </Routes>
    </main>
  )
}

export default App