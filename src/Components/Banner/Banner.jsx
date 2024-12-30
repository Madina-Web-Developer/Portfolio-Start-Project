import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

import { FaChevronDown } from "react-icons/fa";

const Banner = () => {
  return (
    <>

    <div className="mina_all_banner bg-[#FEFCFB]
    
     md:pb-[120px] pb-[80px] pt-[30px]
    ">


        <div className="container">

          

            <div className="all_banner flex justify-between items-center">

                <div className="all_text">

                    <div className="heading">
                    <p>
                    Get started your exciting<span> journey</span> with us.
                    </p>
                    </div>

                    <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>

                    <div className="banner_button">
                        <button><Link to={'#'}>Discover Now</Link></button>
                    </div>

                </div>

                <div className="Banner_img">
                    <img src="public/BannerImage.png" alt="Bannerimg
                    " />
                </div>

            </div>

             

            <div className="banner_end">

                <div className="all_text_end ">

                    <div className="single_text">

                        <div className="text_with_icon flex items-center gap-[5px] ">
                        <h1>Location</h1>
                        <div className="icon">
                        <FaChevronDown className='icon' />
                        </div>
                        </div>

                        <p>Where are you going</p>
                    </div>



                      <div className="single_text">

                        <div className="text_with_icon flex items-center gap-[5px] ">
                        <h1>Location</h1>
                        <div className="icon">
                        <FaChevronDown className='icon' />
                        </div>
                        </div>

                        <p>Where are you going</p>
                    </div>



                      <div className="single_text">

                        <div className="text_with_icon flex items-center gap-[5px] ">
                        <h1>Location</h1>
                        <div className="icon">
                        <FaChevronDown className='icon ' />
                        </div>
                        </div>

                        <p>Where are you going</p>
                    </div>


                    <div className="text_button">

                        <button><Link to={'#'}>Explore Now</Link></button>
                    </div>



                </div>
            </div>

            


        </div>


    </div>
    
    </>
  )
}

export default Banner