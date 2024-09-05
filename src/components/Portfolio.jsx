import React, { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');

  const galleryItems = [
    { id: 1, category: 'Wedding', content: 'Wedding Image 1' },
    { id: 2, category: 'Product', content: 'Product Image 1' },
    { id: 3, category: 'Food', content: 'Food Image 1' },
    { id: 4, category: 'Fashion', content: 'Fashion Image 1' },
    { id: 5, category: 'Wedding', content: 'Wedding Image 2' },
    { id: 6, category: 'Product', content: 'Product Image 2' },
    { id: 7, category: 'Food', content: 'Food Image 2' },
    { id: 8, category: 'Fashion', content: 'Fashion Image 2' },
  ];

  const tabs = ['All', 'Wedding', 'Product', 'Food', 'Fashion'];

  const filteredItems = activeTab === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeTab);

  return (
    <section className="w-full p-4">
      {/* Tabs */}
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-white ${activeTab === tab ? 'bg-blue-500' : 'bg-gray-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery content */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-4 border border-gray-300">
            {item.content}
          </div>
        ))}
      </div>
    </section>
  );
}
