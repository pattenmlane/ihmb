'use client'; // This page needs to fetch and display dynamic chat list

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ChatListPage() {
  const [matches, setMatches] = useState<any[]>([]); // Placeholder for list of matched users

  useEffect(() => {
    // In a real app, fetch actual matches/conversations from your backend
    // This simulates fetching data
    setMatches([
      { id: 'match1', name: 'Alice', lastMessage: 'Hey there!', timestamp: '2h ago', unread: 1, profilePic: '/img/profile_alice.jpg' },
      { id: 'match2', name: 'Bob', lastMessage: 'Sounds good to me!', timestamp: 'yesterday', unread: 0, profilePic: '/img/profile_bob.jpg' },
      { id: 'match3', name: 'Charlie', lastMessage: 'Let me know when you\'re free.', timestamp: '3d ago', unread: 0, profilePic: '/img/profile_charlie.jpg' },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Your Chats</h1>

      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {matches.length === 0 ? (
          <p className="p-6 text-center text-gray-500">No active conversations yet. Start Browse to find matches!</p>
        ) : (
          <ul>
            {matches.map((match) => (
              <li key={match.id} className="border-b last:border-b-0 border-gray-200">
                <Link href={`/chat/${match.id}`} passHref>
                  <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
                    <img
                      src={match.profilePic || '/img/default_avatar.jpg'}
                      alt={`${match.name}'s profile`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-gray-900">{match.name}</h2>
                        <span className="text-sm text-gray-500">{match.timestamp}</span>
                      </div>
                      <p className="text-gray-600 text-sm truncate">{match.lastMessage}</p>
                    </div>
                    {match.unread > 0 && (
                      <span className="ml-4 flex-shrink-0 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {match.unread}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-8 text-center text-gray-500">
        <Link href="/browse" className="text-blue-500 hover:underline">Back to Browse</Link>
      </p>
    </div>
  );
}