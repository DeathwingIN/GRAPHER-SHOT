import React from "react";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen m-0 p-0 flex items-center justify-center">
      <div className="relative w-full h-full flex flex-grow ">
        {/* <!-- Left Column --> */}
        <div
          className="flex-1 flex justify-center items-center "
          style={{ backgroundColor: "#233942" }}
        >
          {/* <!-- Content for the left column --> */}
        </div>

        {/* <!-- Right Column --> */}
        <div className="flex-1 flex justify-centeritems-center">
          {/* <!-- Content for the right column --> */}
        </div>
      </div>

      {/* <!-- Image --> */}
      <div className="absolute  flex justify-center items-center z-10 -mt-10">
        <img
          src={heroImage}
          alt="Background"
          style={{
            objectPosition: "center",
          }}
          className="object-cover max-w-none h-auto"
        />
      </div>

      {/* <!-- Button --> */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Click Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
