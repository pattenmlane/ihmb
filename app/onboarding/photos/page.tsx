'use client'; // Added this line

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function PhotosPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Add Your Photos
        </h2>
        <p className="text-gray-600 text-center">
          Upload at least [Number] photos to complete your profile. Remember, your photos will be private until you match with someone.
        </p>
        <div className="mt-8 space-y-4">
          {/* Placeholder for photo upload area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center text-gray-500 hover:border-pink-400 hover:text-pink-400 cursor-pointer transition duration-150">
            Click or drag photos here to upload
            <input type="file" multiple className="sr-only" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Placeholder for uploaded photo thumbnails */}
            <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
              +
            </div>
            <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
              +
            </div>
            <div className="w-full h-24 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
              +
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Back
          </button>
          <Link href="/onboarding/finish" passHref>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}