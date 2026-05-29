import Link from 'next/link';
import Image from 'next/image';

// Mock data for watches - replace with actual data fetching if needed
const watches = [
  {
    id: 1,
    name: 'The Chronos Pro',
    price: 599,
    imageUrl: '/watch1.jpg',
    description: 'A sophisticated timepiece with advanced features for the modern professional.',
  },
  {
    id: 2,
    name: 'The Aurora',
    price: 899,
    imageUrl: '/watch2.jpg',
    description: 'Elegant and timeless, crafted with precision for everyday luxury.',
  },
  {
    id: 3,
    name: 'The Apex',
    price: 1299,
    imageUrl: '/watch3.jpg',
    description: 'The ultimate sports watch, built for performance and durability.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero-watch.jpg" // Ensure this image exists in public/
            alt="Luxury Watch Hero"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Timeless Elegance, Modern Precision.</h1>
          <p className="text-xl md:text-2xl mb-8">Discover our curated collection of the finest watches.</p>
          <Link href="#products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Shop Now</button>
          </Link>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Latest Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {watches.map((watch) => (
            <div key={watch.id} className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col items-center text-center transition duration-300 ease-in-out hover:scale-105">
              <Image
                src={watch.imageUrl}
                alt={watch.name}
                width={300}
                height={300}
                className="rounded-lg mb-6 object-cover"
              />
              <h3 className="text-2xl font-semibold mb-3">{watch.name}</h3>
              <p className="text-xl font-bold text-blue-400 mb-4">${watch.price.toLocaleString()}</p>
              <p className="text-gray-300 mb-6">{watch.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-300 mb-6">We are passionate about timekeeping and dedicated to sourcing and offering watches that blend classic craftsmanship with modern innovation. Each piece in our collection is selected for its quality, design, and the story it tells.</p>
          <p className="text-lg text-gray-300">Experience the art of time with us.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-6">Have questions or inquiries? Reach out to us!</p>
          <Link href="mailto:support@modernwatchstore.com">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Email Support</button>
          </Link>
        </div>
      </section>

      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <p>&copy; 2024 Modern Watch Store. All rights reserved.</p>
      </footer>
    </div>
  )
}
