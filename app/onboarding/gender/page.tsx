import React from 'react';
import Link from 'next/link';

export default function GenderPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          What is your gender?
        </h2>
        <p className="text-gray-600 text-center">
          This helps us understand how you'll interact with others on the platform.
        </p>
        <div className="mt-8 space-y-4">
          <Link href="/onboarding/status?gender=female" passHref>
            <button className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-gray-900 bg-pink-100 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
              Female
            </button>
          </Link>
          <Link href="/onboarding/status?gender=male" passHref>
            <button className="w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-gray-900 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Male
            </button>
          </Link>
          {/* Add more options if needed (e.g., Non-binary, Prefer not to say) */}
        </div>
        <div className="mt-6 text-center">
          <Link href="/onboarding/welcome" passHref>
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}