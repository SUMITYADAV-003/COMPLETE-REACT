import React from 'react'

const Card = (props,idx) => {
  const bg1 = Math.floor(Math.random() * 256);
  const bg2 = Math.floor(Math.random() * 256);
  const bg3 = Math.floor(Math.random() * 256);
 
  return (
    <div style={{backgroundColor: `rgb(${bg1},${bg2},${bg3})`}} className='h-[300px] w-[350px] rounded  text-center mt-3 p-3 '>git
      <h5>{props.elem.body}</h5>
      <p>ID = {props.elem.id}</p>
      <p>Title<i>{props.elem.title}</i></p>
      <b> UserId = {props.elem.userId}</b>
    </div>
  )
}

export default Card