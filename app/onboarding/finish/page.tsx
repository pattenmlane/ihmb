import React from 'react';
import Link from 'next/link';

export default function FinishPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center p-10 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-gray-900">
          You're All Set!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your profile is complete. Get ready to connect with amazing people!
        </p>
        <Link href="/dashboard" passHref> {/* Assuming /dashboard is your main app page */}
          <button className="mt-8 w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 shadow-lg transform transition duration-150 hover:scale-105">
            Start Exploring
          </button>
        </Link>
        {/* Or direct to a "how it works" for women, or "browse men" for men etc. */}
      </div>
    </div>
  );
}