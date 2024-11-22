import axios from "axios"
import React, { createContext, useContext, useEffect, useState } from 'react'
export const AuthContext=createContext();
 export const AuthProvider = ({ children}) => {
   
    const [blogs,setblogs]=useState();

    useEffect(()=>{
       const fetchBlogs = async ()=>{
        try {
            const response = await axios.get("http://localhost:4001/api/blogs/all-blog");
            console.log(response);
            setblogs(response.data);
            
        } catch (error) {
            console.log(error);
            
        }
       }
       fetchBlogs();
        
    },[])

  return (
   <AuthContext.Provider value={{blogs}}>{children}</AuthContext.Provider>
  )
};

export const useAuth = ()  => useContext(AuthContext);
