import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "./app.scss"

const App = () => {
  const [username, setUserName] = useState("");
  const [num, setnum] = useState(0);
  

  const getDate = async () => {
    const response = await axios.get('https://randomuser.me/api/')
    setUserName((response.data.results[0].name.first) + " " + (response.data.results[0].name.last))
    console.log(response.data)
  }
  useEffect(function() {
    getDate();
  }, [num])




  return (
    <main>
    <div>
      {username}
      <h1>{num}</h1>
      <button onClick={() => {
        setnum(num + 1);
      }}>click hear</button>
    </div>
    </main>
  )
}

export default App