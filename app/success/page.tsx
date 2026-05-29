"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState('Verifying your payment...');

  useEffect(() => {
    if (sessionId) {
      // In a real application, you would verify the session ID with your backend
      // For this example, we'll simulate a successful payment.
      const timer = setTimeout(() => {
        setPaymentStatus('Payment Successful! Thank you for your purchase.');
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setPaymentStatus('No session ID found. Something went wrong.');
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">Payment Status</h1>
        {loading ? (
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        ) : (
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        )}
        <p className="text-xl mb-6">{paymentStatus}</p>
        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}