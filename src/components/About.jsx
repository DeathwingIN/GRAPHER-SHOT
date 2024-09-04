import React from "react";

export default function About() {
  return (
    <section className="w-full h-screen">
      <div className="flex h-2/3">
        {/* First div taking half width */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="uppercase text-center">
            <h1 className="text-white font-cormorant text-[90px] leading-tight">
              About
            </h1>
            <h1 className="text-white font-cormorant text-[90px] leading-tight -mt-10">
              Us
            </h1>
          </div>
          {/* Arrow below */}
          <div className="w-px h-24 bg-[#233942] -mt-3 -mb-4"></div>
          <div className="mt-4">
            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-[#233942]"></div>
          </div>
        </div>

        {/* Second div taking half width */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="max-h-[300px] max-w-[500px]">
            <p className="font-lato text-[20px] text-white">
              Tincidunt sagittis mollis nec suspendisse sed felis massa urna
              nec. Urna quisque blandit turpis ultrices arcu ut sed. Ultricies
              diam est aliquet porta fermentum molestie morbi libero. Ultrices
              sit in elit eget nullam sem. Urna velit imperdiet habitant in.
            </p>
          </div>
        </div>
      </div>

      {/* Div below the two horizontal divs */}
      <div className="w-full h-1/4 flex justify-center items-center px-60">
        <div className="w-1/3 h-full border-r-2 border-white flex flex-col justify-center items-end">
          <div className="mr-5 text-right">
            <h1 className="text-white font-cormorant text-[80px] leading-tight -mt-10">
              +10 years
            </h1>
            <p className="font-lato text-white text-[22px] m-0">Experience</p>
          </div>
        </div>
        <div className="w-1/3 h-full border-r-2 border-white flex flex-col justify-center items-end">
          <div className="mr-5 text-right">
            <h1 className="text-white font-cormorant text-[80px] leading-tight -mt-10">
              +450
            </h1>
            <p className="font-lato text-white text-[22px] m-0">customers</p>
          </div>
        </div>
        <div className="w-1/3 h-full border-r-2 border-white flex flex-col justify-center items-end">
          <div className="mr-5 text-right">
            <h1 className="text-white font-cormorant text-[80px] leading-tight -mt-10">
              +15K
            </h1>
            <p className="font-lato text-white text-[22px] m-0">
              portfolio photos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
