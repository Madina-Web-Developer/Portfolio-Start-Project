import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";


const About = () => {

// -------- Custom Variables 

const [Alldata, setAllData] = useState([])


// ------------ Firebase Variables

const db = getDatabase();



// ------------- All functions from Firebase 

useEffect(()=>{

onValue(ref(db, 'Allemails/'), (snapshot) => {
  let arr = []
   
  snapshot.forEach((item)=>{
    arr.push(item.val())
  })

  setAllData(arr)

});

},[])




  return (
    <>


    <div className="all  w-full">

        <h1 className='lg:text-[30px]  text-orange-500 font-bold font-Volvohk pt-[10%]   text-center' >You can see all emails here that are submitted to the customer </h1>

        <div className="email_sub ">

          {

          Alldata.map((item)=>(


              <h4 className='bg-orange-500 m-auto rounded-md py-[1%] px-[1%] w-[500px]   lg:text-[20px] mt-[2%] text-center  text-white  font-Poppins font-semibold leading-[35px]'>{item.email}</h4>

            ))

          }


            

        </div>

    </div>
    
    
    
    </>
  )
}

export default About