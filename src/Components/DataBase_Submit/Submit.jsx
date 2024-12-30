import React, { useState } from 'react'
import './Submit.css'
import { Link } from 'react-router-dom'
import { getDatabase, push, ref, set } from "firebase/database";



const Submit = () => {

// --------- Custom Variables 

const [Data, SetData] = useState({Email:''})


// --------- Firebase Variables

const db = getDatabase();


// ----- Function 

const handelSubmit =()=>{

  set(push(ref(db, 'Allemails/')), {

    email: Data.Email
    
  });

  SetData((prev)=>({...prev, Email:''}))
    
}



console.log(Data)

  return (
    <>
    
    <div className="submit_all">

        <div className="container">

            
            <div className="Submit">

                <h1>Subscribe and get exclusive deals & offer</h1>

                <div className="data_sub flex items-center justify-start gap-[3%]">
                  <input onChange={(e)=>SetData((prev)=>({...prev, Email:e.target.value}))} value={Data.Email} className='sub_email' placeholder='@email.com' type="email" />

                  <div className="sub_button">

                <button onClick={handelSubmit}
                ><Link to={'#'}>Subscribe</Link></button>
                </div>


                </div>

            </div>


        </div>

    </div>
    </>
  )
}

export default Submit