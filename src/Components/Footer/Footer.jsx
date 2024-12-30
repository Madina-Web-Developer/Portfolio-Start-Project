import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>

    <div className="mina_Footer">

        <div className="container">
            <div className="all_part_footer flex justify-between">

                <div className="left_part">

                    <div className="logo">
                        <Link to={'/'} ><img src="public/Logo.png" alt="" /> </Link>
                    </div>

                    <p>Book your trip in minute, get full
                    Control for much longer.</p>

                    <div className="icons_footer">

                        <div className="circle">
                        <Link to={''}><BiLogoFacebook className='f_icon' /></Link>
                        </div>

                        <div className="circle">
                        <Link to={''}><IoLogoInstagram className='f_icon' /></Link>
                        </div>


                        <div className="circle">
                        <Link to={''}><FaTwitter className='f_icon' /></Link>
                        </div>

                    </div>

                </div>


                <div className="right_part flex gap-[139px]">

                  <div className="single_one">

                    <h1>Company</h1>

                    <h2>About</h2>
                    <h2>Careers</h2>
                    <h2>Logistic</h2>
                    <h2>Privacy & Policy</h2>

                  </div>


                   <div className="single_one">

                    <h1>Contact</h1>

                    <h2>Help/FAQ</h2>
                    <h2>Press</h2>
                    <h2>Affilates</h2>
                    
                  </div>



                   <div className="single_one">

                    <h1>More</h1>

                    <h2>Press Centre</h2>
                    <h2>Our Blog</h2>
                    <h2>Low fare tips</h2>
                  </div>

                </div>
            </div>

            <br />
        
            <hr />

            <div className="last_end flex justify-between mt-[40px]">
                <h2>Copyright, Trabook 2022. All rights reserved.</h2>
                <h2>Terms & Conditions</h2>
            </div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Footer