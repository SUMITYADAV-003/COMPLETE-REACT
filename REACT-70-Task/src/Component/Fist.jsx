import React from 'react'

const Fist = () => {
  return (
    <div className='h-[600px] w-sm bg-[#060503] relative top-5 left-8 rounded-md'>
      <div className='flex text-[7px] gap-2.5 justify-between p-2 text-white'>
        <h3>DVSY</h3>
        <div className='flex gap-2'>
          <button className='px-1 py-1 bg-[#6E6E6E] rounded-md'>DESIGNERS</button>
          <button className='px-1 py-1 bg-[#6E6E6E] rounded-md'>COLLABS</button>
          <button className='px-1 py-1 bg-[#6E6E6E] rounded-md'>EVENTS</button>
          <button className='px-1 py-1 bg-[#6E6E6E] rounded-md'>BLOG</button>
          <button className='px-1 py-1 bg-[#6E6E6E] rounded-md'>CARD</button>
          <button className='px-1 py-1 bg-[#EC6F5B] rounded-md'>GET IN TOUCH</button>

        </div>
      </div>
    </div>
  )
}

export default Fist;