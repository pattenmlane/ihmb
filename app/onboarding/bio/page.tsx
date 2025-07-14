'use client'; // Added this line

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function BioPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Tell us about yourself
        </h2>
        <p className="text-gray-600 text-center">
          Craft a short bio that highlights your personality and what you're looking for.
        </p>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="bio" className="sr-only">
              Your Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={5}
              maxLength={300} // Example max length
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="e.g., 'Adventurous soul looking for deep conversations...' (Max 300 characters)"
            ></textarea>
            <p className="mt-2 text-sm text-gray-500 text-right">0/300 characters</p>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => router.back()}
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Back
            </button>
            <Link href="/onboarding/photos" passHref>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-6 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}