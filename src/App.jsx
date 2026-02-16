import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Jai Shree Ram</h1>
        <img style={{width: "100px", height: "100px"}} src='src\assets\Ganesh.jpg' />
        <div> I personally invite everyone to my Sister Engagement</div>
        <img src='src\assets\Jaanu-Enagagement.jpeg'></img>
       </div>
    </>
  )
}

export default App
