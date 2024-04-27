import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='py-6 bg-black bg-opacity-20 fixed top-0 w-full rounded-sm font-poppins'>
        <div className="md:w-4/5 md:m-auto flex justify-between lg:justify-around">
            {/* Logo */}
            <div className="">
                <h1 className='font-chillax font-bold text-2xl'>Shihab</h1>
            </div>
            {/* Navlinks */}
            <ul className='flex gap-5 md:gap-16 xl:gap-20 capitalize'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/projects'>Projects</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar