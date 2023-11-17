import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter] = useState(0)

  const AddValue = ()=>{
      
    if(counter < 20)
      counter = counter+1;
      setcounter(counter);
  }

  const RemoveValue = ()=>{
    
    if(counter > 0)
      counter = counter-1;
      setcounter(counter);
}

  return (
    <>
     <h1>Counter Project using ReactJs</h1>
     <h3>Counter:{counter}</h3>

     <button onClick={AddValue}>Add Value:{counter}</button>
     <br />
     <button onClick={RemoveValue}>Remove Value:{counter}</button>
     <br />

     <p>Footer:{counter}</p>
    </>
  )
}

export default App
