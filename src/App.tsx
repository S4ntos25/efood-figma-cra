import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante" element={<Restaurante />} />
    </Routes>
  )
}

export default App
