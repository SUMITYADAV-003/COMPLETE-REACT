import React from 'react'
import Navbar from './Component/Navbar'
import SearchBar from './Component/SearchBar'

const App = () => {
  return (
    <div className='bg-[#E9EAEC] pl-20 pr-20 h-full w-full'>
      <Navbar />
      <SearchBar />
    </div>
  )
}

export default App