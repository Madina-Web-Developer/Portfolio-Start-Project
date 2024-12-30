import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
  <div className="mina_all_nav bg-[#FEFCFB]">
    <div className="mina_nav">
        <div className="container">

            <div className="navbar">

                <div className="logo">
                  <img src="public/Logo.png" alt="navlogo" />
                </div>

                <div className="nav_ul_li">

                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'#'}>Destination</Link></li>
                        <li><Link to={'#'}>Tour</Link></li>
                        <li><Link to={'#'}>Blog</Link></li>
                    </ul>

                </div>

                <div className="nav_button">

                    <button className='button1'><Link to={'/login'}>Login</Link></button>
                    <button className='button2'><Link to={'/signup'}>Sign up</Link></button>

                </div>

            </div>

        </div>
    </div>
  </div>
    
    
    </>
  )
}

export default Navbar