import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';




const Login = () => {


  // ---------- custom Variables

  const [show, setShow] = useState(false)

  const [FormData, setFormData] = useState({Email:'', Password:''})

  const [error , seterror] = useState({EmailError:'', PasswordError:''})



  // ---------- Firebase Variables 

  const auth = getAuth();


  // --------- navigate

  const navigate = useNavigate()


  // ----------- Login Button Function 

  const handelLogin = (e)=>{

    e.preventDefault()
  
    if(FormData.Email == ''){
  
      seterror((preve)=>({...preve, EmailError:'Please Enter Your Email'}))
    }

  
    if(FormData.Password == ''){
  
      seterror((preve)=>({...preve, PasswordError:'Please Enter Your Password'}))
    }
    else{
// ---------- Sign in
      signInWithEmailAndPassword(auth, FormData.Email, FormData.Password)
  .then((userCredential) => {
   
    const user = userCredential.user;


// ---------- Navigate to the login page 

            navigate('/')

    // -------- Login success toast
    toast.success('Login Successful', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar:true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      });

  })


  // ---------- Login Error 

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

   if(errorCode == 'auth/invalid-credential'){

    toast.error('Something with Wrong', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
      });

   }

  });
    }

  }

  return (
   <>
  
  <form>

      
      <h4>Welcome Back <span className='text-gray-600'>!</span></h4>
      <h3>Login</h3>
     

      {/* --------- Email Input */}

    <label className='login_label' htmlFor="username">Email</label>
    <input onChange={(e)=>{setFormData((preve)=>({...preve, Email:e.target.value})), seterror((preve)=>({...preve, EmailError:''}))}} className="login_input" placeholder="Email" type="email"/>

    {/* ---UserName Error */}
    <p className='login_Error' >{error.EmailError}</p>



{/* ------ Password Input */}
    <label className='login_label' htmlFor="username">Password</label>
    <div className="input_login relative">

      {

        show?

         <FaEye onClick={()=>setShow(!show)} className='icon text-[20px] absolute top-[10px] right-3 text-[#909090]'/>
           
            :
           
         <FaEyeSlash onClick={()=>setShow(!show)} className='icon text-[22px] absolute top-[10px] right-3 text-[#909090]' />
      }

    <input onChange={(e)=>{setFormData((preve)=>({...preve, Password:e.target.value})), seterror((preve)=>({...preve, PasswordError:''}))}} type={show? 'text':'password'} className="login_input" placeholder="Password"/>


    {/* password Error  */}
    <p className='login_Error' >{error.PasswordError}</p>
    </div>


   {/* --------Login button */}
    <button
        onClick={handelLogin} className="group/button mt-[40px] relative w-full inline-flex  items-center justify-center overflow-hidden rounded-md bg-[#00000091]  px-3 lg:px-4 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out  hover:shadow-lg hover:shadow-gray-300/60"
      >
        <span className="text-base font-bold  lg:text-[18px] text-[16px]">Login</span>
        <div
          className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-[1.5s] group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
        >
          <div className="relative h-full w-10 bg-white/30"></div>
        </div>
                </button>

{/* ---- Sign up feild */}
                <Link to={'/signup'}>
                <h2>Don't have an account ? <span className='s font-Volvohk'> <i>Sign up</i></span></h2>
                </Link>


  </form>

   
   
   
   </>
   
  );
};

export default Login;