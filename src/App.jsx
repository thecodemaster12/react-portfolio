import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Projects />
    <Contact />
    </>
  )
}

export default App
