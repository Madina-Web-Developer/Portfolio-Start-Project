import React from 'react'
import './Submit.css'
import { Link } from 'react-router-dom'



const Submit = () => {
  return (
    <>
    
    <div className="submit_all">

        <div className="container">

            
            <div className="Submit">

                <h1>Subscribe and get exclusive deals & offer</h1>

                <div className="data_sub flex items-center justify-start gap-[3%]">
                  <input className='sub_email' placeholder='@email.com' type="email" />

                  <div className="sub_button">

                <button><Link to={'#'}>Subscribe</Link></button>
                </div>


                </div>

            </div>


        </div>

    </div>
    </>
  )
}

export default Submit