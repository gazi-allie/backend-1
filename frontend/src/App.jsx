import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
  .then((response)=>
    setJokes(response.data)
    )
   .catch((error)=>{
    console.log("error: " + error); 
   })

  })

  return (
    <div> 
      <h1> This is gazis work place

      </h1>
      <p> JOKES : {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App
