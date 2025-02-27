import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Header from './Header'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid-container'>
    <Header />
    <Sidebar />
    <Home />
    </div>
    </>
  )
}

export default App
