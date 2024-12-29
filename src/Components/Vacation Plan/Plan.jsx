import React from 'react'
import './Plan.css'
import { FaStar } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

const Plan = () => {

  const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <FaCircleArrowRight />,
      prevArrow: <FaCircleArrowLeft/>,
  
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  
  
    };
  

  return (
   <>
   
   
   <div className="mina_Plan">

<div className="container">

  <div className="All_Ex_text flex justify-center">

      <div className="heading_plan">

        <div className="head_plan flex">
          <h1>Best <span>vacation plan</span></h1>
          <img src="public/VacationPlant copy.png" alt="plant" />
        </div>

          <p>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! 
          </p>
      </div>



  </div>

{/* --------  Slider ----------- */}


<div className="slider-container">
<Slider {...settings}>




<div>
<div className="plan_singel_Card">


<img src="public/Vplan1.png" alt="planimg" />

<div className="plan_text_part flex justify-between  items-center px-[20px] ">

<div className="right_text mt-[20px]">
<h1>Rome, Italty</h1>
<div className="text_and_icon flex items-center gap-[8px] mt-[18px]">
<div className="icon">
<FaLocationArrow className='location_icon' />
</div>
<h2>10 Days Trip</h2>
</div>
</div>

<div className="left_text mt-[10px]">
<div className="Just_texts flex items-center gap-[16px]">
<h6>$5,42k</h6>
</div>
<div className="icon_text flex items-center justify-end gap-[8px] mt-[15px]">
<FaStar className='star_icon' />
<h2>4.8</h2>
</div>
</div>

</div>

</div>
</div>

  <div> 
  <div className="plan_singel_Card">


<img src="public/Vplan2.png" alt="planimg" />

<div className="plan_text_part flex justify-between  items-center px-[20px] ">

<div className="right_text mt-[20px]">
<h1>London,UK</h1>
<div className="text_and_icon flex items-center gap-[8px] mt-[18px]">
<div className="icon">
<FaLocationArrow className='location_icon' />
</div>
<h2>7 Days Trip</h2>
</div>
</div>

<div className="left_text mt-[10px]">
<div className="Just_texts flex items-center gap-[16px]">
<h6>$2,42k</h6>
</div>
<div className="icon_text flex items-center justify-end gap-[8px] mt-[15px]">
<FaStar className='star_icon' />
<h2>4.7</h2>
</div>
</div>

</div>

</div>
  </div>



  <div>
  <div className="plan_singel_Card">


<img src="public/Vplan3.png" alt="planimg" />

<div className="plan_text_part flex justify-between  items-center px-[20px] ">

<div className="right_text mt-[20px]">
<h1>Osaka,Japan</h1>
<div className="text_and_icon flex items-center gap-[8px] mt-[18px]">
<div className="icon">
<FaLocationArrow className='location_icon' />
</div>
<h2>10 Days Trip</h2>
</div>
</div>

<div className="left_text mt-[10px]">
<div className="Just_texts flex items-center gap-[16px]">
<h6>$5,42k</h6>
</div>
<div className="icon_text flex items-center justify-end gap-[8px] mt-[15px]">
<FaStar className='star_icon' />
<h2>4.8</h2>
</div>
</div>

</div>

</div>
  </div>
  



</Slider>
</div>

{/* ---------------- Slider ------------ */}
 
</div>

</div>

   
   
   
   
   
   
   </>
  )
}

export default Plan