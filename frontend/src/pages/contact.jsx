import React from 'react'

const contact = () => {
  return (
    
    <div className='min-h-screen flex items-center justify-center bg-gray-100 text-center mb'>
     <div className='w-full max-w-md bg-white shadow-md rounded p-8' >
      <div>
        <h1 className='text-xl font-semibold mb-5'>Contact Us</h1>
      </div>
      <div className=' flex container justify-evenly'>
        <div><h1 className='text-gray-500'>Send a message</h1>
        <div>
          <form action="" className='flex flex-col gap-2 container my-auto  mt-5'>
            <input type="text" placeholder='Your Name' className='border border-gray-600 rounded-md  mb-3 ' />
            <input type="email" placeholder='Your Email' className='border border-gray-600 rounded-md mb-3 ' />
            <textarea placeholder='Your Message' className='border border-gray-600 rounded-md  mb-3' />
            <button className='bg-black text-white text-sm rounded-md p-1 mb-3 ' type='submit'>Send Message </button>
          </form>
        </div>
        
        </div>
        <div>
          <div className='text-gray-500'>Contact information</div> 
          <div>  +913453676354</div>
        </div>
      </div>
     </div>
    </div>
    
  )
}

export default contact
