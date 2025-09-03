import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Teacher from './components/Teacher'
import Student from './components/Student'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-gradient-to-t from-blue-300 to-blue-900'>
      <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home></Home>}> </Route>
            <Route path='/time' element={<Timer></Timer>}> </Route>

            <Route path='/teacher' element={<Teacher></Teacher>}> </Route>
            <Route path='/student' element={<Student></Student>}> </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
