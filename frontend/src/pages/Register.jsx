import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom';

const Register = () => {
  const [name,setname]= useState("");
  const [email,setemail]= useState("");
  const [phone,setphone]= useState("");
  const [password,setpassword]= useState("");
  const [role,setrole]= useState("");
  const [education,seteducation]= useState("");
  const [photo,setphoto]= useState("");
  const [photoPreview,setphotoPreview]= useState("");
  const navigate = useNavigate();
  
  const changePhotoHandler = (e)=>{
      console.log(e);
      const file = e.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = ()=>{
        setphotoPreview(reader.result);
        setphoto(file)
      }
      
      
  }

  const handleRegister = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('phone',phone);
    formData.append('password',password);
    formData.append('role',role);
    formData.append('education',education);
    formData.append('photo',photo);
    try {
      const {data} = await axios.post('http://localhost:4001/api/users/register',formData,{ headers:{"Content-Type":"multipart/form-data"}});
      console.log(data);
      toast.success( data.message || "User Registered successfully");




      if (role ==="user") {
        setname("");
        setemail("");
        setphone("");
        setpassword("");
        setrole("");
        seteducation("");
        setphoto("");
        setphotoPreview("");
        // Redirect to Home Page
        navigate("/blogs"); // Replace "/" with the route for your Home page
      } else {
        navigate("/creators");
      }
     
      
    } catch (error) {
      console.log(error);
      toast.error( "Please fill required details")
    }

  }
   
  return (
    <div>
     <div className='min-h-screen flex items-center justify-center nav'>
      <div className='w-full max-w-md bg-white shadow-md rounded p-8'>
        <form onSubmit={handleRegister}>
        <div className='font-semibold text-xl items-center text-center'>
          Cilli<span className='text-blue-600'>Blog</span>
        </div>
        <h1 className='text-xl font-semibold mb-5'>Register</h1>
        <select value={role} onChange={(e)=>setrole(e.target.value)} className='w-full p-2 mb-3 border rounded-md'>
          <option value="">Select Role</option>
          <option value="user">Entrepreneur</option>
          <option value="admin">Investor</option>
        </select>
        <div className='mb-2'>
          <input type="text" placeholder='Your Name' value={name} onChange={(e)=>setname(e.target.value)} className='w-full p-2 mb-4 border rounded-md' />
        </div>
        <div className='mb-2'>
          <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setemail(e.target.value)} className='w-full p-2 mb-4 border rounded-md' />
        </div>
        <div className='mb-2'>
          <input type="number" placeholder='Phone Number' value={phone} onChange={(e)=>setphone(e.target.value)} className='w-full p-2 mb-4 border rounded-md' />
        </div>
        <div className='mb-2'>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} className='w-full p-2 mb-4 border rounded-md' />
        </div>
        <select value={education} onChange={(e)=>seteducation(e.target.value)} className='w-full p-2 mb-3 border rounded-md'>
          <option value="">Select Your Education</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MATRIC">MATRIC</option>
          <option value="INTERMIDIATE">INTERMIDIATE</option>
          <option value="DOCTOR">DOCTOR</option>
        </select>
        <div className='flex items-center mb-2'>
          <div  className='photo w-20 h-20 mr-4 '>
            <img src={photoPreview} alt="photo" />
          </div>
          <input type="file" onChange={changePhotoHandler} className='w-full p-2 mb-3 border rounded-md' />
        </div>
         <p className='text-center mb-4'>Already Register? <Link to="/login" className='text-blue-600'>Login Now</Link></p>
         <button type='submit' className='w-full p-2 bg-blue-500 hover:bg-blue-800 duration-500 text-white'>Register</button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default Register
