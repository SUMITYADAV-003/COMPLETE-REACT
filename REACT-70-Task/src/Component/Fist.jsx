import React from 'react'
import Image1 from './Image1';
import Card from './Card';
import NumberCard from './NumberCard';
import TextImage from './TextImage';

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
       <Image1/>
       <div className='absolute top-46 flex gap-1 p-1.5'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       </div>
       <div className='absolute flex top-65'>
        <NumberCard/>
       </div>
       <div className='absolute top-85 flex'>
        <TextImage/>

       </div>
       
       
       
      
      
    </div>
    
  )
}

export default Fist;