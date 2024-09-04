import React from "react";
import heroImage from "../assets/images/hero.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    
<section className="relative w-full h-screen m-0 p-0 flex items-center justify-center">
  {/* <!-- Social Icon Bar --> */}
  <div className="absolute top-0 right-4 h-full flex flex-col justify-center z-20">
  <div className="w-px bg-white  h-28 mb-2 ml-2"></div>  {/* Adjusted spacing here */}
  <div className="flex flex-col items-center space-y-2 py-3">  {/* Reduced space-y to 2 */}
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
      <FaFacebook />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
      <FaTwitter />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
      <FaInstagram />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-300">
      <FaLinkedin />
    </a>
  </div>
  <div className="w-px bg-white h-28 mt-2 ml-2"></div>  {/* Adjusted spacing here */}
</div>


  <div className="relative w-full h-full flex flex-grow">
    {/* <!-- Left Column --> */}
    <div className="flex-1 flex justify-center items-center" style={{ backgroundColor: "#233942" }}>
      <div className="uppercase">
        <h1 style={{ color: "white", fontFamily: "Cormorant, serif", fontSize: "90px" }}>
          Photo
        </h1>
        <h1 className="-mt-10 ml-28" style={{ color: "white", fontFamily: "Cormorant, serif", fontSize: "90px" }}>
          graphy
        </h1>
      </div>
    </div>

    {/* <!-- Right Column --> */}
    <div className="flex-1 flex flex-col justify-center items-center">
      <div style={{ maxHeight: "96px", width: "380px" }}>
        <p style={{ fontFamily: "Lato, sans-serif", fontSize: "22px", color: "white", margin: "0", position: "relative", bottom: "-100px" }}>
          Pellentesque mauris a lobortis in bibendum <b /> sed lobortis semper. Eget eu vel eu vitae.
        </p>
      </div>
    </div>
  </div>

  {/* <!-- Image --> */}
  <div className="absolute flex justify-center items-center z-10 -mt-10">
    <img
      src={heroImage}
      alt="Background"
      style={{ objectPosition: "center" }}
      className="object-cover max-w-none h-auto"
    />
  </div>

  {/* <!-- Button --> */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Click Me
    </button>
  </div>
</section>



  );
};

export default Hero;
