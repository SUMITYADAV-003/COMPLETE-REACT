import React from 'react'
import Navbar from '../Component/Navbar';
import HomeHero from '../Component/HomeHero';
import ProductCard from '../Component/ProductCard';
import "./HomePage.scss"
const HomePage = () => {
  return (
   <div className='HomePage'>
       <Navbar />
       <HomeHero />
       <ProductCard/>
   </div>
  )
}

export default HomePage