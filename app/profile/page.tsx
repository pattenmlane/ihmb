'use client'; // This page will allow editing and displaying user's own profile

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OwnProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // In a real app, fetch the user's own profile data from the backend
    // Simulate fetching
    setProfile({
      name: 'Emma',
      age: 26,
      gender: 'female', // Crucial context for profile visibility
      status: 'single',
      bio: 'Enthusiastic traveler and aspiring chef. Looking for genuine connections and interesting conversations. Love exploring new places and trying new foods!',
      photos: ['/img/my_profile_pic_1.jpg', '/img/my_profile_pic_2.jpg'],
      preferences: ['outdoors', 'reading', 'movies'],
    });
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving profile:", profile);
    // In a real app: send updated profile to backend
    setIsEditing(false);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle photo upload logic here
    console.log("Photo uploaded:", e.target.files?.[0]);
    // You'd typically upload to cloud storage and update profile.photos state
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">My Profile</h1>

      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          {profile.photos && profile.photos.length > 0 ? (
            <img
              src={profile.photos[0]}
              alt={`${profile.name}'s profile`}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-500"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4 text-gray-500">
              No Photo
            </div>
          )}
          {isEditing && (
            <input type="file" onChange={handlePhotoUpload} className="mt-2 text-sm" />
          )}
        </div>

        {isEditing ? (
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                id="age"
                value={profile.age}
                onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) || '' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                id="bio"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              ></textarea>
            </div>
            {/* Add more fields as needed: preferences, gender, status etc. */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <p className="text-lg"><strong>Name:</strong> {profile.name}</p>
            <p className="text-lg"><strong>Age:</strong> {profile.age}</p>
            <p className="text-lg"><strong>Gender:</strong> {profile.gender}</p>
            <p className="text-lg"><strong>Status:</strong> {profile.status}</p>
            <p className="text-lg"><strong>Bio:</strong> {profile.bio}</p>
            {profile.photos && profile.photos.length > 1 && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Other Photos:</h3>
                <div className="flex space-x-2 overflow-x-auto">
                  {profile.photos.slice(1).map((photo: string, index: number) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Profile photo ${index + 2}`}
                      className="w-24 h-24 object-cover rounded-md shadow-sm"
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsEditing(true)}
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-8 text-center text-gray-500">
        <Link href="/browse" className="text-blue-500 hover:underline">Back to Browse</Link>
      </p>
    </div>
  );
}