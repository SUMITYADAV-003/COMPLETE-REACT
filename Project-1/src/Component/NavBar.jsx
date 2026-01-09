import React from 'react'

const NavBar = () => {
  return (
    <div className='flex  items-center justify-between  bg-[#121212]'>
      <div className='flex gap-3'>
         <h1 className='py-1.5 px-3 rounded-[20px] bg-[#02F273] text-[15px] m-3'>D</h1>
      <p className='flex items-center text-sm '> Teach</p>
      </div>
     
      <div className=" gap-10  mr-3 flex text-[17px] font-bold
      ">
        <a href="/"> Home  </a>
      <a href="/"> About  </a>
      <a href="/"> Service  </a>
      <a href="/"> contact  </a>
      </div>
      
    </div>
  )
}

export default NavBar