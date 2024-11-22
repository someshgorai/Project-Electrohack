import React from 'react'
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home.jsx";
import Footer2 from './components/Footer2.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import  Blogs from "./pages/Blogs"
import   About  from "./pages/About"
import  Contact from "./pages/Contact"
import  Login from "./pages/Login"
import  Register from "./pages/Register"
import  Dashboard from "./pages/Dashboard"
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import Creaters from './pages/Creators';

const App = () => {
  const location = useLocation();
  const hideNabarFooter=["/login","/register","/dashboard","/contact"].includes(
    location.pathname
  )
  const hideNabar=["/contact"].includes(
    location.pathname
  )
   const {blogs}=useAuth();
   console.log(blogs);
   


  return (
    <div>
   {(!hideNabarFooter || hideNabar) &&   < Navbar />} 
    <Routes>
    
    <Route exact path='/blogs' element={<Blogs />} />
    <Route exact path='/' element={<Home/>} />

    <Route exact path='/about' element={<About />} />

    <Route exact path='/contact' element={<Contact/>} />
    <Route exact path='/creators' element={<Creaters/>} />

    <Route exact path='/login' element={<Login/>} />

    <Route exact path='/register' element={<Register/>} />
    <Route exact path='/dashboard' element={<Dashboard/>} />



    </ Routes>
   {!hideNabarFooter &&   <Footer2 />}
   <Toaster />
    </div>
  )
}

export default App
