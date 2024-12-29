import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const LayoutOne = () => {
  return (
    <div>

        <Navbar/>
        <Outlet/>
        
    </div>
  )
}

export default LayoutOne