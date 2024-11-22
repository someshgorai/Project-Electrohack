import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Creator() {

   const [admin,setadmin]= useState([]);

   useEffect(() => {
    const fetchAdmin = async () => {
      const {data} = await axios.get(
        "http://localhost:4001/api/users/alladmin",
        {
          withCredentials:true,
        }
      );
     console.log(data);
     
      setadmin(data);
    }
   
   fetchAdmin();
  }, []);
  return (
   <div className='container mx-auto p-4'>
    <h1 className='text-2xl font-semibold mb-6'>Meet Our Team</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  '>
     { admin && admin.length >0 ? (
      admin.slice(0,3).map((element)=>{
        return(
         
           <div key={element._id} className='rounded-full text-center' >
            <div className=' group relative ml-6 bg-white rounded-full '>
              <img src={element.photo.url} alt="" className='w-full h-56 object-cover p-3   rounded-full ' />
              
             </div>
             <div>
               <p className=''>{element.name}</p>
               <p className='text-gray-600 text-xs'>{element.role}</p>
              </div>
          
              </div>
        )
      })
    ):(<div></div>)}
     </div>
       
    </div>
  )
}

export default Creator
