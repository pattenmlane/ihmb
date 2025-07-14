'use client'; // This page likely needs client-side interactivity to handle the form submission and token validation

import React from 'react';
import { useParams } from 'next/navigation'; // Import useParams to access the token

export default function ResetPasswordPage() {
  const params = useParams();
  const token = params.token; // Access the token from the URL

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Set your new password for account {token ? `(Token: ${token})` : ''}
          </p>
          {token && (
            <p className="mt-1 text-center text-xs text-gray-500">
              (This token is typically hidden in a real application)
            </p>
          )}
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          {/* New Password Input */}
          <div>
            <label htmlFor="new-password" className="sr-only">
              New Password
            </label>
            <input
              id="new-password"
              name="new-password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
              placeholder="New Password"
            />
          </div>
          {/* Confirm New Password Input */}
          <div>
            <label htmlFor="confirm-new-password" className="sr-only">
              Confirm New Password
            </label>
            <input
              id="confirm-new-password"
              name="confirm-new-password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
              placeholder="Confirm New Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Reset Password
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          <a href="/login" className="font-medium text-pink-600 hover:text-pink-500">
            Back to Sign In
          </a>
        </p>
      </div>
    </div>
  );
}