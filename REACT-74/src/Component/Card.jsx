import React from 'react'

const Card = (props) => {
  return (
    <div className=' lg:w-[23vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 flex items-center text-center flex-col bg-white text-black border-0 overflow-hidden'>
      <img className='h-24 w-24 rounded-full object-center object-cover flex ' src={props.elem.Image} alt="" />
      <h1 className='text-2xl mt-2 font-bold'>{props.elem.Name}</h1>
      <h5 className=' text-blue-500 text-lg font-semibold my-1'>{props.elem.Role}</h5>
      <p className='text-sm font-medium leading-tight'>{props.elem.Email}</p>
      <button 
      onClick={() => {
         props.deleteHandler(props.idx)
      }}
      className='px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-3'>Remove</button>



    </div>
  )
}

export default Card