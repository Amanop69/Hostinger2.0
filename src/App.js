import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Signup from './components/Signup'
import Home from './components/Home'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Signup />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App