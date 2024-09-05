import React, { useState } from "react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const galleryItems = [
    { id: 1, category: "Wedding", content: "Wedding Image 1" },
    { id: 2, category: "Product", content: "Product Image 1" },
    { id: 3, category: "Food", content: "Food Image 1" },
    { id: 4, category: "Fashion", content: "Fashion Image 1" },
    { id: 5, category: "Wedding", content: "Wedding Image 2" },
    { id: 6, category: "Product", content: "Product Image 2" },
    { id: 7, category: "Food", content: "Food Image 2" },
    { id: 8, category: "Fashion", content: "Fashion Image 2" },
    { id: 9, category: "Wedding", content: "Wedding Image 3" },
    { id: 10, category: "Product", content: "Product Image 3" },
    { id: 11, category: "Food", content: "Food Image 3" },
    { id: 12, category: "Fashion", content: "Fashion Image 3" },
    // Add more images as needed
  ];

  const tabs = ["All", "Wedding", "Product", "Food", "Fashion"];

  const filteredItems =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section className="w-full  p-4 mt-20">
      <h1 className="text-white font-cormorant md:text-[80px] text-[50px] leading-tight uppercase md:text-right md:mr-20 text-center">
        portfolio
      </h1>
      {/* Tabs */}
      <div className="flex space-x-0 md:space-x-4 mb-4 md:mt-8 md:mb-20 md:justify-end md:mr-40 justify-center  ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 ${
              activeTab === tab ? "text-[#bfd6df]" : "text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery content */}
      <div
        className={`h-full ${
          activeTab === "All"
            ? "grid grid-cols-1 gap-4 md:grid-cols-5" // Mobile view shows 1 column, desktop view shows 5 columns
            : "grid grid-cols-1 gap-4 md:grid-cols-8"
        }`}
      >
        {activeTab === "All" ? (
          <>
            <div className=" p-4  grid-cols-span-2 grid grid-cols-1  gap-4 md:col-span-2">
              <div className=" md:row-span-3 grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-1 p-4">
                  <img 
                    src="https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
                <div className="col-span-2 p-4 md:grid md:grid-rows-2  hidden  ">
                  <div className="row-span-1 ">
                    <img 
                      src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                  <div className="row-span-1 ">
                    <img 
                      src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className=" md:row-span-1 hidden md:block">
                <img  
                  src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>

            <div className=" p-4  hidden md:block md:col-span-1">
              <img 
                src="https://images.pexels.com/photos/27947208/pexels-photo-27947208/free-photo-of-vietcombank-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className=" p-4 h-full hidden md:grid grid-cols-1 gap-4 md:col-span-1">
              <div className="md:row-span-1">
                <img
                  src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="md:row-span-1">
                <img
                  src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
            <div className=" p-4 h-full hidden md:grid grid-cols-1 gap-4 md:col-span-1">
              <div className=" md:row-span-1">
                <img
                  src="https://images.pexels.com/photos/247287/pexels-photo-247287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className=" md:row-span-3">
                <img
                  src="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 border border-gray-300 bg-gray-100"
            >
              {item.content}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
