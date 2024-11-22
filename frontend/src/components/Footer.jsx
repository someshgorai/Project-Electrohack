import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    <div>
      <hr />
      <footer className='mb-5 mt-10'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto'>
        <div >
          <h1 className='text-xl font-semibold mb-4'> Products</h1>
          <div className='text-gray-600'>
          <h2>Flutter</h2>
          <h2>React</h2>
          <h2>Android</h2>
          <h2>iOS</h2>
          </div>
        </div>
        <div >
          <h1 className='text-xl font-semibold mb-4'>Design to code</h1>
          <div className='text-gray-600'>
          <h2>Figma Plugin</h2>
          <h2>Templates</h2>
         
          </div>
        </div>
        <div>
          <h1 className='text-xl font-semibold mb-4'>Comparison</h1>
          <div className='text-gray-600'>
         < h2>DinWise vs Anima</h2>
          <h2>DinWise vs Appsmith</h2>
          <h2>DinWise vs Flutterflow</h2>
          <h2>DinWise vs Monday Hero</h2>
          <h2>DinWise vs Retool</h2>
          <h2>DinWise vs Buble</h2>
          <h2>DinWise vs Figma web tool</h2>
         
        </div>
        </div>
        <div >
          <h1 className='text-xl font-semibold mb-4'>Company</h1>
          <div className='text-gray-600'>
         < h2>About Us</h2>
          <h2>Contact Us </h2>
          <h2>Career</h2>
          <h2>Terms and conditions</h2>
          <h2>Privacy Policy</h2>
         
          
         
        
      </div>
      
   </div>
    </div>
    
    </footer>
    <hr />
    
   <div className=" container mx-auto flex flex-col md:flex-row justify-between items-center mt-2">
    <div className='font-semibold text-xl hidden md:flex'>
          Cilli<span className='text-blue-600'>Blog</span>
        </div >
      <div className='hidden md:flex text-sm '><p>
        2024 DhiWise PVT. LTD. All rights reserved</p></div>
      <div className='mt-4 md:mt-0 flex space-x-4'>
        <FaGithub />
        <FaYoutube />
        <FaLinkedin />
      
      </div>
    </div>
    
   </div>
    
    
  )
}

export default footer
