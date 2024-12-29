import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Components/Layouts/LayoutOne'
import Home from './Components/Pages/Home'
import app from './Firebase.Config'
import Register from './Components/Login and SignUp/Register'
import { ToastContainer } from 'react-toastify'
import Login from './Components/Login and SignUp/Login'


function App() {

const myRoute= createBrowserRouter(
  createRoutesFromElements(

    <Route>


      <Route path='/' element={<LayoutOne/>}>

      <Route index element={<Home/>}/>

      </Route>

      <Route path='/signup' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>



    </Route>
  )
)

  return (
    <>

    <RouterProvider router={myRoute}/>
    <ToastContainer/>
     
    </>
  )
}

export default App
