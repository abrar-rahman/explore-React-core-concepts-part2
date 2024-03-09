import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Counter from '../Counter'
import Team from './Team'
// import Users from './users'
import Myfriend from './Myfriend'


function App() {
  

  function handleClick() {
    alert('Button clicked');
  }

  const handleClick2 = () => {
    alert('Button 2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
    
      <h3>React Core Concepts 2</h3>

      

      <Myfriend></Myfriend>

      <Team></Team>

      {/* <Counter></Counter> */}


      {/* <button onClick={handleClick}>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('Third clicked') }}>Third</button>

      {/* Vejailla */}
      <button onClick={()=>addToFive(3)}>Four</button>
      
      
    </>
  )
}

export default App
