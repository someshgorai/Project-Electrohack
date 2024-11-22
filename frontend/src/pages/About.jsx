import React from 'react'
import Creator from '../Home/Creator'

const About = () => {
  return (
    <div>
      <div className='container mx-auto mt-10'>
       <div className='my-5'>
       <h1 className='text-xl font-semibold mb-5 '>Our Mission</h1>
       <p>At mywebsite, our mission is to empower entrepreneurs to bring their visions to life. We aim to provide innovative solutions, resources, and guidance to help you succeed in a competitive business landscape.</p>
       </div>
       <div className='my-5'>
       <h1 className='text-blue-800 font-semibold mb-5 '>Our Vision</h1>
       <p> We envision a world where aspiring entrepreneurs are equipped with the tools and confidence to turn their dreams into reality. Through collaboration, innovation, and dedication, we aim to inspire the next generation of changemakers.
       </p>
       </div>
       <Creator />
       <div className='my-5'>
       <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            With a passion for innovation and a commitment to excellence, we
            provide unparalleled support for entrepreneurs at every stage of their
            journey. Join us as we shape the future of business, together.
          </p>
        </section>
       </div>
      </div>
    </div>
  )
}

export default About
