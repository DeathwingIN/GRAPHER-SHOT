import React from "react";

export default function About() {
  return (
    <section className="w-full h-screen ">
      <div className="flex h-2/3">
        {/* First div taking half width */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className="uppercase text-center">
            <h1
              style={{
                color: "white",
                fontFamily: "Cormorant, serif",
                fontSize: "90px",
              }}
            >
              About
            </h1>
            <h1
              className="-mt-10"
              style={{
                color: "white",
                fontFamily: "Cormorant, serif",
                fontSize: "90px",
              }}
            >
              Us
            </h1>
          </div>
          {/* Arrow below */}
          <div className="w-px h-24 bg-[#233942] -mt-3 -mb-4 "></div>
          <div className="mt-4">
            <div
              style={{
                width: "0",
                height: "0",
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: "10px solid #233942",
              }}
            />
          </div>
        </div>

        {/* Second div taking half width */}
        <div className="w-1/2 h-full">
          <div style={{ maxHeight: "300px", width: "500px" }}>
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "20px",
                color: "white",
                margin: "0",
                position: "relative",
                bottom: "-120px",
              }}
            >
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
          <div className="mr-5">
            <h1
              className="-mt-10 text-right"
              style={{
                color: "white",
                fontFamily: "Cormorant, serif",
                fontSize: "80px",
              }}
            >
              +10 years
            </h1>

            <p
              className="text-right"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "22px",
                color: "white",
                margin: "0",
              }}
            >
              Experience
            </p>
          </div>
        </div>
        <div className="w-1/3 h-full border-r-2 border-white flex flex-col justify-center items-end">
          <div className="mr-5">
            <h1
              className="-mt-10 text-right"
              style={{
                color: "white",
                fontFamily: "Cormorant, serif",
                fontSize: "80px",
              }}
            >
              +450
            </h1>

            <p
              className="text-right"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "22px",
                color: "white",
                margin: "0",
              }}
            >
              customers
            </p>
          </div>
        </div>
        <div className="w-1/3 h-full border-r-2 border-white flex flex-col justify-center items-end">
          <div className="mr-5">
            <h1
              className="-mt-10 text-right"
              style={{
                color: "white",
                fontFamily: "Cormorant, serif",
                fontSize: "80px",
              }}
            >
              +15K
            </h1>

            <p
              className="text-right"
              style={{
                fontFamily: "Lato, sans-serif",
                fontSize: "22px",
                color: "white",
                margin: "0",
              }}
            >
              portfolio photos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
