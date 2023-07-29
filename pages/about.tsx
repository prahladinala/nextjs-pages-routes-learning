import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function about() {
  return (
    <>
    <Navbar/>
    <header className='text-center h-[60vh]'>
        <h1 className='text-3xl'>About ToolMate</h1>
      </header>
    <Footer/>
    </>
  )
}

export default about