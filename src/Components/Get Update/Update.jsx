import React from 'react'
import './Update.css'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";



const Update = () => {

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

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

    <div className="update">

        <div className="container">

        <div className="All_Ex_text flex justify-center">

<div className="heading_Update">

  <div className="Update_text flex">
    <h1>Get update with <span>latest blog
    </span></h1>
  </div>

</div>
        </div>


        <div className="slider-container">
      <Slider {...settings}>

        <div>
        <div className="update_singel_Card">
    
    <img src="public/Update1.png" alt="exploreimg" />
    
    <div className="update_text_part flex justify-between  items-center ">
    
      <div className="update_text">
        <h1>The Amazing Difference a Year of Travelling .</h1>
          <h2>July 27, 2021</h2>
        </div>
      
    
          </div>
    
        </div>
        </div>

        <div>
        <div className="update_singel_Card">
    
    <img src="public/Update2.png" alt="exploreimg" />
    
    <div className="update_text_part flex justify-between  items-center ">
    
      <div className="update_text">
        <h1>Travel far enough, you meet yourself.</h1>
          <h2>July 27, 2021</h2>
        </div>
      
    
          </div>
    
          </div>
        </div>

        <div>
        <div className="update_singel_Card">
    
    <img src="public/Update3.png" alt="exploreimg" />
    
    <div className="update_text_part flex justify-between  items-center ">
    
      <div className="update_text">
        <h1>How to Save Money While Visiting Africa .</h1>
          <h2>July 27, 2021</h2>
        </div>
      
    
          </div>
    
          </div>
        </div>

        <div>
         <div className="update_singel_Card">
    
    <img src="public/Update4.png" alt="exploreimg" />
    
    <div className="update_text_part flex justify-between  items-center ">
    
      <div className="update_text">
        <h1>Reflections on 5 Months of Travel: Time to Hang</h1>
          <h2>July 27, 2021</h2>
        </div>
      
    
          </div>
    
          </div>
        </div>
       
      </Slider>
    </div>


     </div>

    </div>

    </>
  )
}

export default Update