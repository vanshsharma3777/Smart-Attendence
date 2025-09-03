import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Location from './components/Location'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-gradient-to-t from-blue-300 to-blue-900'>
      <Location></Location>
      <Home></Home>
    </div>
  )
}

export default App
