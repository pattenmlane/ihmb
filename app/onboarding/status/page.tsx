'use client'; // Added this line

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter to go back

export default function StatusPage() {
  const router = useRouter(); // Initialize router

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          What's your relationship status?
        </h2>
        <p className="text-gray-600 text-center">
          This helps us tailor your experience.
        </p>
        <div className="mt-8 space-y-4">
          <Link href="/onboarding/bio" passHref>
            <button className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              Single
            </button>
          </Link>
          <Link href="/onboarding/bio" passHref>
            <button className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              In a Relationship
            </button>
          </Link>
        </div>
        <div className="mt-6 text-center">
          <button onClick={() => router.back()} className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}