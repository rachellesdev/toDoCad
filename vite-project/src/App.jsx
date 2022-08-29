import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import FormCad from './Pages/FormCad/FormCad'

function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<FormCad />} />
        {/* Dinâmico */}
      </Routes>
    </div>
    {/* Estático */}
  </BrowserRouter>
  )
}

export default App
