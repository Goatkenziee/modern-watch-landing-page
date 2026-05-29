import Link from 'next/link';
import Image from 'next/image';

// Watch data (replace with actual data fetching if needed)
const watches = [
  {
    id: 1,
    name: 'Classic Chronograph',
    description: 'Timeless elegance for the modern individual.',
    price: 1200.00,
    imageUrl: '/watch1.jpg',
  },
  {
    id: 2,
    name: 'Sporty Navigator',
    description: 'Durable and stylish, perfect for adventures.',
    price: 850.00,
    imageUrl: '/watch2.jpg',
  },
  {
    id: 3,
    name: 'Minimalist Dress Watch',
    description: 'Sophistication in simplicity.',
    price: 1500.00,
    imageUrl: '/watch3.jpg',
  },
];

export default function HomePage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat hero-section" 
               style={{ backgroundImage: 'url(/hero-watch.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Discover Timeless Craftsmanship</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the art of watchmaking with our exquisite collection.</p>
          <Link href="#watches" className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out text-lg">
            Explore Our Collection
          </Link>
        </div>
      </section>

      {/* Watches Section */}
      <section id="watches" className="py-16 px-4 md:px-8 bg-custom-gray">
        <h2 className="text-4xl font-bold text-center mb-12">Our Latest Timepieces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {watches.map((watch) => (
            <div key={watch.id} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col">
              <div className="relative w-full h-64">
                <Image 
                  src={watch.imageUrl}
                  alt={watch.name}
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{watch.name}</h3>
                  <p className="text-gray-300 mb-4">{watch.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xl font-semibold text-white">${watch.price.toFixed(2)}</p>
                  <Link href={`/api/stripe-checkout?id=${watch.id}`}>
                    <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-lg transition duration-300 ease-in-out">Buy Now</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
