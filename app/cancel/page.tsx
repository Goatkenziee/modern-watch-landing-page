import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Payment Canceled</h1>
        <p className="text-xl mb-6">Your payment was not completed. Please try again or contact support.</p>
        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}