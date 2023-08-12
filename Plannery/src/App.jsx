import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Start from './components/Start'
import Generate from './components/Generate'
import Div1 from './components/div1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Start/>
      <Div1/>
      
      <Generate/>
     
    </div>
  )
}

export default App

