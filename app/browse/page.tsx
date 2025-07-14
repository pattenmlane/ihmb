'use client'; // This page will have lots of interactivity (swiping, loading profiles)

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BrowsePage() {
  // Placeholder for current profile being viewed
  const [currentProfile, setCurrentProfile] = useState<any>(null);
  const [userGender, setUserGender] = useState<'male' | 'female' | null>(null); // To determine UI

  // In a real app, you'd fetch profiles based on user's gender and preferences
  useEffect(() => {
    // Simulate fetching user's gender (e.g., from an auth context or API)
    // For demonstration, let's assume 'female' or 'male' is determined
    const fetchedGender = 'female'; // Replace with actual user gender logic
    setUserGender(fetchedGender);

    // Simulate fetching the first profile
    if (fetchedGender === 'female') {
      setCurrentProfile({
        id: 'male-profile-123',
        name: 'John Doe',
        age: 30,
        bio: 'Adventure seeker, dog lover, always up for a good laugh.',
        photos: ['/img/male_profile_1.jpg', '/img/male_profile_2.jpg'], // Women see photos
        isOnline: true,
      });
    } else { // Male user
      setCurrentProfile({
        id: 'female-profile-456',
        name: 'Jane Smith',
        age: 28,
        bio: 'Loves reading, quiet nights in, and exploring new cafes. Looking for genuine connections.',
        photos: [], // Men do NOT see photos here
        preferences: ['values communication', 'enjoys nature'], // Men see descriptions/preferences
        isOnline: false,
      });
    }
  }, []);

  const handleLike = () => {
    console.log(`Liked profile: ${currentProfile?.id}`);
    // In a real app: send like to backend, load next profile
    // If current user is male, this "like" would send a pending match request
    // If current user is female, this "like" immediately creates a match
  };

  const handleDislike = () => {
    console.log(`Disliked profile: ${currentProfile?.id}`);
    // In a real app: send dislike to backend, load next profile
  };

  if (!currentProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading profiles...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {userGender === 'female' ? "Find Your Next Connection" : "Discover Profiles"}
      </h1>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-md mx-auto">
        {/* Profile Card */}
        <div className="relative">
          {userGender === 'female' && currentProfile.photos && currentProfile.photos.length > 0 ? (
            <img
              src={currentProfile.photos[0]} // Display first photo for women viewing men
              alt={`${currentProfile.name}'s profile`}
              className="w-full h-80 object-cover"
            />
          ) : (
            <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-gray-500 text-lg font-semibold">
              {userGender === 'male' ? "Photo hidden until match" : "No photo available"}
            </div>
          )}
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full text-white">
            <h2 className="text-3xl font-bold">{currentProfile.name}, {currentProfile.age}</h2>
            {currentProfile.isOnline && (
              <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 mr-2">
                Online
              </span>
            )}
            <p className="mt-2 text-sm">{currentProfile.bio}</p>
            {userGender === 'male' && currentProfile.preferences && (
                <p className="mt-1 text-xs text-gray-200">Preferences: {currentProfile.preferences.join(', ')}</p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around p-4">
          <button
            onClick={handleDislike}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 text-3xl hover:bg-red-200 transition duration-150 transform hover:scale-110 shadow-lg"
          >
            &#10006; {/* X mark */}
          </button>
          <button
            onClick={handleLike}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-3xl hover:bg-green-200 transition duration-150 transform hover:scale-110 shadow-lg"
          >
            &#10084; {/* Heart */}
          </button>
        </div>
      </div>

      <p className="mt-8 text-gray-500">
        <Link href="/chat" className="text-blue-500 hover:underline">Go to Chats</Link> |{' '}
        <Link href="/profile" className="text-blue-500 hover:underline">View Your Profile</Link>
      </p>
    </div>
  );
}