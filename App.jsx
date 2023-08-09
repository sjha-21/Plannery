import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Start from './components/Start'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Start/>
    </div>
  )
}

export default App
