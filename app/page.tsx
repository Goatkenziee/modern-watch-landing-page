import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <Image
          src="/hero-watch.jpg"
          alt="Luxury Watch"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="relative z-10 p-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Timeless Elegance</h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover precision craftsmanship and sophisticated design.
          </p>
          <Link href="#products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Product Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/watch1.jpg"
              alt="Watch Model 1"
              width={500}
              height={500}
              objectFit="cover"
              className="w-full h-64"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Classic Chrono</h3>
              <p className="text-gray-400 mb-4">A timeless piece with intricate details.</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">$1,200</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                onClick={() => handleCheckout('price_12345')}
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/watch2.jpg"
              alt="Watch Model 2"
              width={500}
              height={500}
              objectFit="cover"
              className="w-full h-64"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Sport Elite</h3>
              <p className="text-gray-400 mb-4">Durable and stylish for the active individual.</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">$950</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                onClick={() => handleCheckout('price_67890')}
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/watch3.jpg"
              alt="Watch Model 3"
              width={500}
              height={500}
              objectFit="cover"
              className="w-full h-64"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">Midnight Elegance</h3>
              <p className="text-gray-400 mb-4">Sleek and sophisticated, perfect for evening wear.</p>
              <p className="text-3xl font-bold text-blue-400 mb-4">$1,500</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
                onClick={() => handleCheckout('price_abcde')}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 py-20 px-4 md:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          We are passionate about bringing you the finest timepieces, meticulously crafted with
          precision and an unwavering commitment to quality. Our collection embodies the perfect
          fusion of tradition and innovation.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Modern Watches. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Dummy handleCheckout function for now. Will be replaced with actual Stripe integration.
const handleCheckout = (priceId: string) => {
  console.log(`Initiating checkout for price ID: ${priceId}`);
  alert('Stripe integration coming soon!');
};