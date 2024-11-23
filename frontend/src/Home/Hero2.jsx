import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import image from '../../public/Images/Entrepreneurship.png';


const Hero = () => (
  <section className="hero grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
     <div className="hero-image ">
      <img src={image} alt="Entrepreneurship concept" />
    </div>
    <div className="hero-content ">
      <h1>Empowering <b className='text-blue-600'>Entrepreneurs</b> Worldwide</h1>
      <p>We are a digital platform that <b>empowers entrepreneurs</b> by connecting them with<b> mentors, investors</b>, and <b>essential resources</b> to simplify the startup journey and foster innovation through collaboration.</p>
      <p>Join a community dedicated to innovation and growth.</p>
      <div>
        <button className="cta-btn"> <Link to="/login" className='font-semibold'>LOGIN</Link></button>
        <button className="secondary-btn"> <Link to="/register" className='font-semibold'>SIGN UP</Link></button>
      </div>
    </div>
   <br />
  </section>
  
);

export default Hero;
