import React from 'react'
import { NavLink } from 'react-router-dom'
import menu from '../menu-lined-240.png'

const Navbar = () => {
  return (
    <nav className='font-poppins py-4 bg-white bg-opacity-60 fixed top-0 w-full rounded-sm  z-10'>
        <div className="md:w-4/5 md:m-auto flex justify-between lg:justify-around">
            {/* Logo */}
            <div className="">
                <h1 className='font-chillax font-bold text-2xl'><NavLink to='/'>Shihab</NavLink></h1>
            </div>
            {/* Navlinks */}
            <ul className='gap-5 md:gap-16 xl:gap-20 capitalize hidden md:flex'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar