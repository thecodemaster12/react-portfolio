import React from 'react'
import Navbar from '../components/Navbar'

const Hero = () => {
  return (
    <>
    <Navbar />
      <div className='h-screen  flex flex-col justify-center items-center bg-emerald-200'>
          <h1 className='font-satoshi'>Satoshi</h1>
          <h1 className='font-chillax'>chillax</h1>
          <h1 className='font-montsrrat'>Montsarret</h1>
          <h1 className='font-poppins'>Poppins</h1>
          <h1 className='font-roboto'>Roboto</h1>
          <h1 className="font-montsrrat text-4xl uppercase py-8">Hero</h1>
      </div>
      </>
  )
}

export default Hero