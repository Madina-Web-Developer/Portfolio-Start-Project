import React from 'react'
import './ExclusiveSlider.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";



const ExclusiveSlider = () => {


  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <FaCircleArrowRight />,
    prevArrow: <FaCircleArrowLeft/>,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="mina_exclusive">

      <div className="container">

        <div className="All_Ex_text flex justify-center">

            <div className="heading_Ex">
                <h1>Exclusive <span>deals & discounts</span></h1>

                <p>Discover our fantastic early booking discounts & start planning your journey.
                </p>
            </div>



        </div>

{/* --------  Slider ----------- */}


<div className="slider-container">
      <Slider {...settings}>

  
     

      <div>
      <div className="Ex_singel_Card">

<div className="overlay">
<div className="overlay_button flex justify-center mt-[200px]">
  <button>Book Now</button>
</div>
</div>

<img src="public/Explore1.png" alt="exploreimg" />

<div className="Ex_text_part flex justify-between  items-center ">

  <div className="right_text">
    <h1>Madrid</h1>
    <div className="text_and_icon flex items-center gap-[8px] mt-[18px]">
      <div className="icon">
       <FaLocationDot className='location_icon' />
      </div>
      <h2>Spain</h2>
    </div>
  </div>

  <div className="left_text">
    <div className="icon_text flex items-center justify-end gap-[8px] mb-[18px]">
     <FaStar className='star_icon' />
     <h2>4.8</h2>
    </div>
    <div className="Just_texts flex items-center gap-[16px]">
      <h5><del>$950</del></h5>
      <h6>$850</h6>
    </div>
  </div>

</div>

      </div>
      </div>

        <div> 
        <div className="Ex_singel_Card">


<div className="overlay">
 <div className="overlay_button flex justify-center mt-[200px]">
   <button>Book Now</button>
 </div>
 </div>

 <img src="public/Explore2.png" alt="exploreimg" />

 <div className="Ex_text_part flex justify-between  items-center ">

   <div className="right_text">
     <h1>Firenze</h1>
     <div className="text_and_icon flex items-center gap-[8px] mt-[18px]">
       <div className="icon">
        <FaLocationDot className='location_icon' />
       </div>
       <h2>Italy</h2>
     </div>
   </div>

   <div className="left_text">
     <div className="icon_text flex items-center justify-end gap-[8px] mb-[18px]">
      <FaStar className='star_icon' />
      <h2>4.5</h2>
     </div>
     <div className="Just_texts flex items-center gap-[16px]">
       <h5><del>$850</del></h5>
       <h6>$750</h6>
     </div>
   </div>

 </div>

        </div>
        </div>
  
     

        <div>
        <div className="Ex_singel_Card">

<div className="overlay">
 <div className="overlay_button flex justify-center mt-[200px]">
   <button>Book Now</button>
 </div>
 </div>

 <img src="public/Explore3.png" alt="exploreimg" />

 <div className="Ex_text_part flex justify-between  items-center ">

   <div className="right_text">
     <h1>Paris</h1>
     <div className="text_and_icon flex items-center gap-[8px] mt-[18px]">
       <div className="icon">
        <FaLocationDot className='location_icon' />
       </div>
       <h2>France</h2>
     </div>
   </div>

   <div className="left_text">
     <div className="icon_text flex items-center justify-end gap-[8px] mb-[18px]">
      <FaStar className='star_icon' />
      <h2>4.4</h2>
     </div>
     <div className="Just_texts flex items-center gap-[16px]">
       <h5><del>$699</del></h5>
       <h6>$599</h6>
     </div>
   </div>

 </div>

        </div>
        </div>
        

        <div>
        <div className="Ex_singel_Card">

<div className="overlay">
 <div className="overlay_button flex justify-center mt-[200px]">
   <button>Book Now</button>
 </div>
 </div>

 <img src="public/Explore4.png" alt="exploreimg" />

 <div className="Ex_text_part flex justify-between  items-center ">

   <div className="right_text">
     <h1>London</h1>
     <div className="text_and_icon flex items-center gap-[8px] mt-[18px]">
       <div className="icon">
        <FaLocationDot className='location_icon' />
       </div>
       <h2>UK</h2>
     </div>
   </div>

   <div className="left_text">
     <div className="icon_text flex items-center justify-end gap-[8px] mb-[18px]">
      <FaStar className='star_icon' />
      <h2>4.8</h2>
     </div>
     <div className="Just_texts flex items-center gap-[16px]">
       <h5><del>$850</del></h5>
       <h6>$850</h6>
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

export default ExclusiveSlider