import React from 'react';

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      {/* Background Image */}
      <img
        src="./images/hero.jpg"
        alt="Background Image"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Left Column */}
      <div
        className="w-1/2 h-full flex justify-center items-center "
        style={{ backgroundColor: '#233942' }}
      >
        <div className="text-center">
          <h1
            className="text-90 font-cormorant text-white"
            style={{ fontFamily: 'Cormorant', fontSize: 90 }}
          >
            photo graphy
          </h1>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-1/2 h-full flex flex-col justify-end">
        <p
          className="text-22 font-lato text-white mb-10"
          style={{ fontFamily: 'Lato', fontSize: 22 }}
        >
          Pellentesque mauris a lobortis in bibendum sed lobortis semper. Eget eu vel eu vitae.
        </p>

        {/* Order Now Button */}
        <div className="flex justify-center mb-10">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            style={{ backgroundColor: '#FFC107', borderColor: '#FFC107' }}
          >
            Order Now
          </button>
        </div>

        {/* Social Media Nav Component */}
        <div className="h-10 bg-black flex justify-end items-center">
          {/* Social media links will go here */}
        </div>
      </div>
    </div>
  );
};

export default Hero;