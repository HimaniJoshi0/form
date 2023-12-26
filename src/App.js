import React from 'react'
import Register from './pages/register'
import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App