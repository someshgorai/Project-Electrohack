import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const login = () => {
  
  const [email,setemail]= useState("");
  const [password,setpassword]= useState("");
  const [role,setrole]= useState("");
    
  

  const handleLogin = async (e)=>{
    e.preventDefault();
    
    
    try {
      const {data} = await axios.post('http://localhost:4001/api/users/login',{email,password,role},{ withCredentials:true ,headers:{"Content-Type":"multipart/form-data"}});
      console.log(data);
      toast.success( data.message || "User login successfully");
      
      
      setemail("");
      
      setpassword("");
      setrole("");
      
     
      
    } catch (error) {
      console.log(error);
      toast.error(error.request.response || "Please fill required details")
    }

  }
   
  return (
    <div>
     <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md bg-white shadow-md rounded p-8'>
        <form onSubmit={handleLogin}>
        <div className='font-semibold text-xl items-center text-center'>
          Cilli<span className='text-blue-600'>Blog</span>
        </div>
        <h1 className='text-xl font-semibold mb-5'>Login</h1>
        <select value={role} onChange={(e)=>setrole(e.target.value)} className='w-full p-2 mb-3 border rounded-md'>
          <option value="">Select Role</option>
          <option value="user">Entrepreneur</option>
          <option value="admin">Investors</option>
        </select>
       
        <div className='mb-2'>
          <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setemail(e.target.value)} className='w-full p-2 mb-4 border rounded-md' />
        </div>
       
        <div className='mb-2'>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} className='w-full p-2 mb-4 border rounded-md' />
        </div>
       
       
         <p className='text-center mb-4'>New User? {" "} <Link to="/register" className='text-blue-600'>Register Now</Link></p>
         <button type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-800 duration-500 text-white'>Login</button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default login