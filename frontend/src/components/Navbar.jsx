import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../public/Images/LaunchPAD.png"
const Navbar = () => {
  const {blogs}= useAuth();
  console.log(blogs);
  const [show,setshow] = useState(false);
  
  return (
    <>
    <nav className='shadow-xl px-4 py-3 nav'>
      <div className=' relative flex justify-between container mx-auto'>
        <div className='font-semibold text-xl '>
         <img src={logo} alt="" className='logo2'  />
        </div>
         <div className='hidden md:flex mt-4' >
          <ul className='space-x-6 '>
          <Link to="/" className='hover:text-blue-700'>HOME</Link>
            <Link to="/blogs" className='hover:text-blue-700'>ENTREPRENEURS</Link>
            <Link to="/creators" className='hover:text-blue-700'>INVESTORS</Link>
            <Link to="/about" className='hover:text-blue-700'>ABOUT</Link>
            <Link to="/contact" className='hover:text-blue-700'>FEEDBACK</Link>
          </ul> 
          
        </div> 
      
        <div>
          <div className='space-x-3 hidden md:flex'>
            <Link to="/dashboard" className='bg-blue-transparent text-black border-2 border-green-600  font-semibold hover:bg-green-600 px-4 py-2 rounded-md'>PITCH</Link>
            <Link to="/login" className='bg-green-600 text-black border-2 border-green-600 rounded-md px-2 pt-2  hover:bg-gray-300 font-semibold'>LOGIN</Link>
          </div>
        </div>
        <div className='md:hidden' onClick={()=>setshow(!show)}>
          {show?<IoCloseSharp size={24} />: <AiOutlineMenu  size={24}/>}
          </div>
         
      </div>
      {show && (
          <div className='bg-white '>
             <ul className=' flex flex-col items-center justify-center min-h-screen   space-y-3 md:hidden text-xl'>
          <Link to="/" onClick={()=>setshow(!show)} smooth="true" duration={500} offset={-70} activeClass="active"  className='hover:text-blue-700'>HOME</Link>
            <Link to="/blogs" onClick={()=>setshow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-blue-700'>BLOGS</Link>
            <Link to="/creators" onClick={()=>setshow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-blue-700'>CREATORS</Link>
            <Link to="/about" onClick={()=>setshow(!show)} smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-blue-700'>ABOUT</Link>
            <Link to="/contact" onClick={()=>setshow(!show)}  smooth="true" duration={500} offset={-70} activeClass="active" className='hover:text-blue-700'>CONTACT</Link>
          </ul> 
          </div>)}
     
    </nav>

   
    </>
  )
}

export default Navbar
