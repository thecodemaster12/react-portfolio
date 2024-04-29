import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className='min-h-[92vh] flex justify-center items-center bg-[#272829] text-white'>
      <h1 className="font-heading text-4xl uppercase py-8">Contacts Section</h1>
    </div>
    <Footer />
    </>
  )
}

export default Contact