"use client";

import { useState } from 'react';
import Link from 'next/link';

const watches = [
  {
    id: 1,
    name: 'The Chronos Master',
    description: 'A sophisticated timepiece with a perpetual calendar and moon phase complication. Perfect for the discerning collector.',
    price: 1200.00,
    imageUrl: '/watch1.jpg',
  },
  {
    id: 2,
    name: 'The Aurora Borealis',
    description: 'Limited edition automatic watch with a mesmerizing meteorite dial, capturing the essence of the northern lights.',
    price: 2500.00,
    imageUrl: '/watch2.jpg',
  },
  {
    id: 3,
    name: 'The Urban Navigator',
    description: 'A sleek, minimalist design for the modern adventurer. Water-resistant with a precise quartz movement.',
    price: 450.00,
    imageUrl: '/watch3.jpg',
  },
];

export default function HomePage() {
  const [selectedWatch, setSelectedWatch] = useState(null);

  // Explicitly type 'watch' parameter as 'any' to resolve TS7006 error
  const handlePurchase = (watch: any) => {
    setSelectedWatch(watch);
    // In a real app, you would redirect to a checkout page or initiate Stripe checkout
    console.log('Purchasing:', watch.name);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-watch.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Elegance Redefined</h1>
          <p className="text-xl md:text-2xl mb-8">Discover timepieces that blend tradition with innovation.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 text-lg">
            <Link href="#watches">Explore Collection</Link>
          </button>
        </div>
      </section>

      {/* Watches Section */}
      <section id="watches" className="py-16 px-4 w-full max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {watches.map((watch) => (
            <div key={watch.id} className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition duration-300 hover:shadow-xl">
              <img src={watch.imageUrl} alt={watch.name} className="w-full h-64 object-cover rounded-lg mb-6 shadow-md" />
              <h3 className="text-2xl font-semibold mb-3">{watch.name}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{watch.description}</p>
              <p className="text-2xl font-bold text-blue-400 mb-4">${watch.price.toFixed(2)}</p>
              <button
                onClick={() => handlePurchase(watch)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 py-8 mt-16 text-center">
        <p>&copy; 2024 Modern Watch Store. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">Stripe integration powered by Next.js</p>
      </footer>
    </div>
  );
}
