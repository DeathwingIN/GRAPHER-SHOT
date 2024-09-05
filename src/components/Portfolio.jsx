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
    <section className="w-full h-screen p-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-white ${
              activeTab === tab ? "bg-blue-500" : "bg-gray-300"
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
            <div className="bg-gray-300 p-4 h-full md:col-span-2">Div 1</div>
            <div className="bg-gray-300 p-4 h-full md:col-span-1">Div 2</div>
            <div className="bg-gray-300 p-4 h-full md:col-span-2">Div 3</div>
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
