import React from 'react'

const Card = ({imagePath, alt,info1}) => {
  return (
    <div className='m-5   w-70 rounded-2xl '>
      <div>
      
      </div>
      <div className=''>
        <div className='flex justify-center items-center  '>
         <img src={imagePath} alt={alt} className='h-20 w-20 mt-2 object-cover rounded-[40px]'/>
        </div>
        <div className='p-3 text-center'>
          <h4 className='leading-15'>{info1}</h4>
        <p className='leading-1'>Lorem ipsum dolor sit amet.</p><br />
        <p className='leading-1'>Lorem ipsum dolor sit amet.</p><br />
        <p className='leading-1'>Lorem ipsum dolor sit amet.</p><br />
        <p className='leading-1'>Lorem ipsum dolor sit amet.</p><br />
        <button className="px-4 bg-[#02F273] mb-3">Learn More</button>
        </div>
        
      </div>
    </div>
  )
}

export default Card