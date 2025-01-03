import React, { useState } from 'react'
import './Register.css'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from "firebase/auth";
import { Bounce, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {


// ------------- Custom Variable

const [show, setShow] = useState(false)

const [FormData, SetFormData] = useState({UserName:'' , Email:'' , Password:''})

const [Error , SetError] = useState({UsereNameError:'', EmailError:'', PasswordError:''})


// ---------- Navigate Variable ---------


const navigate = useNavigate()

//  ------------- Firebase Variable

const auth = getAuth();



// ----------- Register Button ----------


const handelSubmit = (e)=>{
  e.preventDefault()

  if(FormData.UserName == ''){

    SetError((preve)=>({...preve, UsereNameError:'Please Enter Your Name'}))
  }

  if(FormData.Email == ''){

    SetError((preve)=>({...preve, EmailError:'Please Enter Your Email'}))
  }

  if(FormData.Password == ''){

    SetError((preve)=>({...preve, PasswordError:'Please Enter Your Password'}))
  }

  else{

    // ----------- Firebase Sign up 

    createUserWithEmailAndPassword(auth, FormData.Email, FormData.Password)
    .then((userCredential) => {
     
      const user = userCredential.user;

// ------------- Create Userid and Name 

      updateProfile(auth.currentUser, {
        displayName: FormData.UserName, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
       
        console.log(user)

// ---------- Navigate  to the login page

         navigate('/login')

// ---------- Email Verification 
        sendEmailVerification(auth.currentUser)
        .then(() => {
    
          toast.info('Email Verification Send', {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Slide,
              });

            
  
    });
  
  //  ------- Create user id Catch
       
 


      }); 
  
    })




// ------------ Firebase If Signup not work it will go in the Catch
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      

      if(errorCode == 'auth/email-already-in-use'){
        toast.error('Email has already used', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });

           
      }


      if(errorCode == 'auth/weak-password'){

        toast.error('Make a strong password like @123m%Tn', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition:Zoom,
            });
      }
    });

  }
  
}



  return (
    <>
    
    <div className="background">
       
       </div>
       <form>
   
         <img className='m-auto w-[90px]' src="public/Logo.png" alt="Logo" />
   
           <h3>Sign Up</h3>
   
   
           {/* --------- UserName Input ----------- */}
   
           <label htmlFor="username">Username</label>
           <input onChange={(e)=>{SetFormData((preve)=>({...preve , UserName:e.target.value})) , SetError((preve)=>({...preve, UsereNameError:''}))}} type="text" placeholder="Enter your name..."/>
   
           {/* ======= UsearName Error======== */}
   
           <p className='Error' >{Error.UsereNameError}</p>
           
   
   {/* ------------------ Email Input ------------------ */}
           
           <label htmlFor="email">Email</label>
           <input onChange={(e)=>{SetFormData((preve)=>({...preve, Email:e.target.value})), SetError((preve)=>({...preve, EmailError:''}))}}  type="email" placeholder="@Email..." id="username"/>
           {/* -------- EmailError----------- */}
           <p className='Error' > {Error.EmailError} </p>
   
           {/* ---------- Password input ------------ */}
   
           <label htmlFor="password">Password</label>
           <div className="input relative">
   
               {
                   show?
                   <FaEye onClick={()=>setShow(!show)} className=' text-[20px] absolute top-[10px] right-3 text-[#909090]'/>
   
                   :
   
                   <FaEyeSlash onClick={()=>setShow(!show)} className=' text-[22px] absolute top-[10px] right-3 text-[#909090]' />
   
               }
           <input onChange={(e)=>{SetFormData((preve)=>({...preve, Password:e.target.value})), SetError((preve)=>({...preve, PasswordError:''}))}} type={show? 'text': 'password'} placeholder="Password..."/>
   
            {/* -------- PasswordError----------- */}
   
            <p className='Error'> {Error.PasswordError} </p>
   
   
   
           {/* ---------------- Button ------------------ */}
   
   
           </div>
   
           <button onClick={handelSubmit}  className='b1'>Register</button>
   
           <h2 className='mt-[15px] text-center text-[#d7d7d7] text-[16px]'>OR</h2>
   
           <div className="b_2 flex justify-end">
          <Link to={'/login'}>
          
          <button
        className="group/button mt-[10px] relative w-full inline-flex  items-center justify-center overflow-hidden rounded-md bg-[#ff5900]  px-3 lg:px-4 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-gray-300/60"
      >
        <span className="text-base font-bold font-Volvohk lg:text-[16px] text-[14px]">Login</span>
        <div
          className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-[1.5s] group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
        >
          <div className="relative h-full w-10 bg-white/30"></div>
        </div>
                </button>
          
          </Link>
           </div>
           
       </form>
    
    
    </>
  )
}

export default Register