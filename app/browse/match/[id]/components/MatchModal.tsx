'use client'; // This is a client-side modal component

import React from 'react';
import Link from 'next/link';

interface MatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  matchId: string;
  matchedUserName: string;
  matchedUserProfilePic?: string; // Optional for women's view of men
}

export default function MatchModal({ isOpen, onClose, matchId, matchedUserName, matchedUserProfilePic }: MatchModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 shadow-2xl text-center max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-4xl font-extrabold text-pink-600 mb-4 animate-bounce">
          It's a Match!
        </h2>
        {matchedUserProfilePic && (
          <img
            src={matchedUserProfilePic}
            alt={`${matchedUserName}'s profile`}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-pink-500"
          />
        )}
        <p className="text-xl text-gray-800 mb-6">
          You and <span className="font-semibold">{matchedUserName}</span> have connected!
        </p>
        <div className="flex flex-col space-y-4">
          <Link href={`/chat/${matchId}`} passHref>
            <button
              onClick={onClose} // Close modal on navigating
              className="w-full py-3 px-6 bg-pink-600 text-white font-semibold rounded-md shadow-md hover:bg-pink-700 transition duration-150 transform hover:scale-105"
            >
              Start Chatting
            </button>
          </Link>
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-gray-200 text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-300 transition duration-150"
          >
            Keep Browse
          </button>
        </div>
      </div>
    </div>
  );
}