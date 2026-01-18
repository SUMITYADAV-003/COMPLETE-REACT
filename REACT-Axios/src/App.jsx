import React, { useState } from 'react'
import axios  from 'axios';
import Card from './Component/Card';

const App = () => {
  const [allUsers, setallUsers] = useState([]);
   async function GetData () {
    const response = await  axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response.data)
    setallUsers(response.data)
  }
  return (
    <div className='bg-black text-white'>
      <button className='px-10 py-5 bg-emerald-600 text-white font-semibold  rounded text-2xl active:scale-95 m-5 '  onClick={GetData}>Get Data</button>
      <div className='flex flex-wrap gap-5 p-3'>
        {allUsers.map(function(elem,idx) {
          return <div key={idx}>
             <Card elem={elem} idx={idx+1} />
          </div>
        })}
      </div>
    </div>
  )
}

export default App