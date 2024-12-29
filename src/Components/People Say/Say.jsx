import React from 'react'
import './Say.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCreative } from 'swiper/modules';





const Say = () => {
  return (
   <>
<div className="all_Swiper_part">


<div className="container">



 
   <div className="all_mina_slide">

   <div className="heading_Say">
                <h1>What people say <span>about Us.</span></h1>

                <p>Our Clients send us bunch of smilies with our services and we love them.
                </p>
            </div>


   
    <div className=''>
    <Swiper
        grabCursor={true}
        effect={'creative'}
      
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}

      
        modules={[EffectCreative]}
        className="mySwiper"
      >

        <SwiperSlide>
          <img className='silk_pic' src="public/SwiperSlider.png" alt="swiperslide" />
    
        </SwiperSlide>
        <SwiperSlide><img src="public/SwiperSlider1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/SwiperSlider2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="public/SwiperSlider3.png" alt="" /></SwiperSlide>
      </Swiper>
        </div>
      </div>

      
      </div>

      </div>
      
    </>
  )
}

export default Say