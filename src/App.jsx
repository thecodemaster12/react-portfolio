import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Check from './components/MobileMenu'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Skills from './pages/Skills'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
