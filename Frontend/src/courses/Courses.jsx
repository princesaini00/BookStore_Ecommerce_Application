import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function courses() {
  return (
   <>
    <Navbar></Navbar>
    <div className='min-h-screen'>
    <Course></Course>
    </div>
    <Footer></Footer>
   </>
  )
}

export default courses
