import React from 'react'
import Navbar from '../Components/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

export default function Root() {
  return (
    <div className='w-11/12 mx-auto'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
