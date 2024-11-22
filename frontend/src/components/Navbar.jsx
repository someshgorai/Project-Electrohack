import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const {blogs}= useAuth();
  console.log(blogs);
  const [show,setshow] = useState(false);
  
  return (
    <>
    <nav className='shadow-xl px-4 py-3 bg-zinc-250'>
      <div className=' relative flex justify-between container mx-auto'>
        <div className='font-semibold text-xl'>
          Cilli<span className='text-blue-600'>Blog</span>
        </div>
         <div className='hidden md:flex' >
          <ul className='space-x-6 '>
          <Link to="/" className='hover:text-blue-700'>HOME</Link>
            <Link to="/blogs" className='hover:text-blue-700'>BLOGS</Link>
            <Link to="/creators" className='hover:text-blue-700'>CREATORS</Link>
            <Link to="/about" className='hover:text-blue-700'>ABOUT</Link>
            <Link to="/contact" className='hover:text-blue-700'>CONTACT</Link>
          </ul> 
          
        </div> 
      
        <div>
          <div className='space-x-3 hidden md:flex'>
            <Link to="/dashboard" className='bg-blue-500 text-white font-semibold hover:bg-blue-800 px-4 py-2 rounded-md'>DASHBOARD</Link>
            <Link to="/login" className='bg-red-500 text-white font-semibold hover:bg-red-800 px-4 py-2 rounded-md  '>LOGIN</Link>
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
