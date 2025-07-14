'use client'; // This page displays dynamic public profiles based on viewer's context

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PublicProfilePage() {
  const params = useParams();
  const router = useRouter();
  const username = params.username as string; // Access the username from the URL
  const [profile, setProfile] = useState<any>(null);
  const [viewerGender, setViewerGender] = useState<'male' | 'female' | null>(null); // Gender of the person viewing this profile
  const [isMatched, setIsMatched] = useState(false); // If the viewer is matched with this profile

  useEffect(() => {
    // In a real app, you'd fetch both the profile data for `username`
    // AND determine the `viewerGender` and `isMatched` status from your backend/auth context.

    // Simulate fetching the viewer's gender
    const currentViewerGender = 'male'; // Example: Current logged-in user is male
    setViewerGender(currentViewerGender);

    // Simulate fetching profile based on username
    // This example will display a female profile for a male viewer
    // If the viewer was female, it would fetch a male profile
    const fetchedProfile = {
      id: 'profile-id-of-username',
      name: 'Sophia',
      age: 27,
      gender: 'female', // Gender of the profile being viewed
      bio: 'Loves deep conversations, nature walks, and art. Believes in honest connections.',
      photos: ['/img/sophia_profile_1.jpg', '/img/sophia_profile_2.jpg'], // Photos would be hidden for male viewers if not matched
      preferences: ['intellectual conversations', 'kindness', 'adventure'],
    };
    setProfile(fetchedProfile);

    // Simulate match status (e.g., check if current viewer is matched with this profile ID)
    // For a male viewer looking at a female profile, photos are ONLY visible IF matched.
    // For a female viewer looking at a male profile, photos are ALWAYS visible (like Tinder).
    setIsMatched(false); // Assume not matched for now
  }, [username]);

  const handleLike = () => {
    console.log(`Liking profile: ${username}`);
    // In a real app: Send like action to backend.
    // If viewer is male and liked a female, this sends a "pending" like.
    // If viewer is female and liked a male, this instantly creates a match.
  };

  const showPhotos = viewerGender === 'female' || isMatched; // Logic based on your context

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <button onClick={() => router.back()} className="text-pink-600 text-2xl mr-4">&larr;</button>
          <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
        </div>

        <div className="text-center mb-6">
          {showPhotos && profile.photos && profile.photos.length > 0 ? (
            <img
              src={profile.photos[0]}
              alt={`${profile.name}'s profile`}
              className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-pink-500"
            />
          ) : (
            <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 text-gray-500 text-lg">
              {viewerGender === 'male' && profile.gender === 'female' && !isMatched ? "Photos Hidden (Match to view)" : "No Photo"}
            </div>
          )}
          {profile.photos && profile.photos.length > 1 && showPhotos && (
            <div className="flex justify-center space-x-2 mt-4">
              {profile.photos.slice(1).map((photo: string, index: number) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Profile photo ${index + 2}`}
                  className="w-20 h-20 object-cover rounded-md shadow-sm"
                />
              ))}
            </div>
          )}
          {!showPhotos && viewerGender === 'male' && profile.gender === 'female' && !isMatched && (
              <p className="text-sm text-red-500 mt-2">Photos are hidden until a match is made.</p>
          )}
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-lg"><strong>Age:</strong> {profile.age}</p>
          <p className="text-lg"><strong>Bio:</strong> {profile.bio}</p>
          {profile.preferences && (
            <p className="text-lg"><strong>Preferences:</strong> {profile.preferences.join(', ')}</p>
          )}
        </div>

        <div className="flex justify-center">
          {!isMatched && ( // Only show like button if not already matched
            <button
              onClick={handleLike}
              className="py-3 px-8 border border-transparent rounded-full shadow-lg text-lg font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 transform hover:scale-105"
            >
              {viewerGender === 'male' && profile.gender === 'female' ? "Send Like" : "Like Profile"}
            </button>
          )}
          {isMatched && (
            <Link href={`/chat/${profile.id}`} passHref>
              <button
                className="py-3 px-8 border border-transparent rounded-full shadow-lg text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 transform hover:scale-105"
              >
                Go to Chat
              </button>
            </Link>
          )}
        </div>

        <p className="mt-8 text-center text-gray-500">
            <Link href="/browse" className="text-blue-500 hover:underline">Back to Browse</Link>
        </p>
      </div>
    </div>
  );
}