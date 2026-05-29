import Image from 'next/image';
import Link from 'next/link';

// Mock product data
const products = [
  {
    id: 'prod_1',
    name: 'Classic Chronograph',
    price: 299.99,
    imageUrl: '/watch1.jpg',
    description: 'Timeless elegance with a sophisticated chronograph movement.',
  },
  {
    id: 'prod_2',
    name: 'Modern Minimalist',
    price: 199.99,
    imageUrl: '/watch2.jpg',
    description: 'Sleek design for the contemporary individual.',
  },
  {
    id: 'prod_3',
    name: 'Luxury Automatic',
    price: 499.99,
    imageUrl: '/watch3.jpg',
    description: 'Precision engineering meets luxurious aesthetics.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-custom-gray flex flex-col">
      {/* Hero Section */}
      <header className="relative w-full h-96 overflow-hidden">
        <Image
          src="/hero-watch.jpg"
          alt="Hero Watch"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-custom-gold mb-4 font-['Inter', sans-serif]">
              Timeless Precision
            </h1>
            <p className="text-xl text-white mb-8">
              Discover the art of timekeeping with our exquisite collection.
            </p>
            <Link
              href="#products"
              className="bg-custom-gold text-custom-gray-light font-semibold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
            >
              Explore Watches
            </Link>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <main id="products" className="py-16 px-4 md:px-8 lg:px-16 bg-custom-gray-light">
        <h2 className="text-4xl font-bold text-center text-custom-gold mb-12 font-['Inter', sans-serif]">
          Our Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-custom-gray rounded-lg shadow-lg overflow-hidden text-center p-6 transition transform hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={300}
                objectFit="cover"
                className="rounded-md mb-4 mx-auto"
              />
              <h3 className="text-2xl font-semibold mb-2 text-custom-gold font-['Inter', sans-serif]">
                {product.name}
              </h3>
              <p className="text-white text-sm mb-4 opacity-80">
                {product.description}
              </p>
              <p className="text-2xl font-bold text-white mb-4">
                ${product.price.toFixed(2)}
              </p>
              <Link
                href={`/api/stripe-checkout?productId=${product.id}&productName=${encodeURIComponent(product.name)}&price=${product.price}`}
                className="bg-custom-gold text-custom-gray-light font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition duration-300"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-custom-gray-light text-center py-8">
        <p className="text-white opacity-70">
          © 2024 Modern Watches. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
