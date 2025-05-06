import React from 'react';
import heroBg from '../assets/overview.webp'; // Adjust path as needed

const Hero = ({ onEnquireClick }) => {
  return (
    <section
      className="h-[80vh] bg-cover bg-center text-white flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your Dream Property</h1>
        <p className="text-lg md:text-xl mb-6">Luxury Living | Prime Location | Premium Amenities</p>
        <button onClick={onEnquireClick} className="bg-white text-black px-6 py-2 rounded">Enquire Now</button>
      </div>
    </section>
  );
};

export default Hero;
