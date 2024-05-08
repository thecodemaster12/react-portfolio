import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import menu from '../menu-lined-240.png'
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className='py-4 bg-black text-white fixed top-0 w-full rounded-sm  z-10'>
        <div className="md:w-4/5 md:m-auto flex justify-between lg:justify-around px-10">
            {/* Logo */}
            <div className="">
                <h1 className='font-logoText font-bold text-2xl'><NavLink to='/'>Shihab</NavLink></h1>
            </div>
            {/* Navlinks */}
            <ul className='gap-5 md:gap-16 xl:gap-20 capitalize hidden md:flex'>
                <li className='font-base'><NavLink to='/'>Home</NavLink></li>
                <li className='font-base'><NavLink to='/skills'>Skills</NavLink></li>
                <li className='font-base'><NavLink to='/projects'>Projects</NavLink></li>
                <li className='font-base'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
              {/* <MenuIcon className='md:hidden' /> */}
              <div className="md:hidden block">
                <MobileMenu />
              </div>
        </div>
    </nav>
  )
}

export default Navbar