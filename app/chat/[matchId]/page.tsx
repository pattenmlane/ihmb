'use client'; // This page needs dynamic chat loading, message sending, and potentially real-time updates

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ChatThreadPage() {
  const params = useParams();
  const router = useRouter();
  const matchId = params.matchId as string; // Access the matchId from the URL
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [matchedUser, setMatchedUser] = useState<any>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null); // For auto-scrolling

  useEffect(() => {
    // In a real app, fetch messages for this matchId and the matched user's details
    // Simulate data fetching
    const fetchedMessages = [
      { id: 'msg1', sender: 'other', text: 'Hey, how are you?', timestamp: '10:00 AM' },
      { id: 'msg2', sender: 'self', text: 'I\'m great, thanks! How about you?', timestamp: '10:05 AM' },
      { id: 'msg3', sender: 'other', text: 'Doing well! Just saw your profile, looks interesting.', timestamp: '10:10 AM' },
    ];
    setMessages(fetchedMessages);

    // Simulate fetching matched user details
    setMatchedUser({
      id: matchId,
      name: 'Alice', // Or fetched based on matchId
      profilePic: '/img/profile_alice.jpg',
    });
  }, [matchId]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: `msg-${Date.now()}`, // Unique ID for new message
      sender: 'self',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prevMessages) => [...prevMessages, newMsg]);
    setNewMessage('');
    // In a real app: send message to backend, potentially via WebSockets for real-time chat
  };

  if (!matchedUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Loading conversation...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Chat Header */}
      <div className="bg-white shadow p-4 flex items-center border-b border-gray-200">
        <button onClick={() => router.back()} className="text-pink-600 text-2xl mr-4">&larr;</button>
        <img
          src={matchedUser.profilePic || '/img/default_avatar.jpg'}
          alt={`${matchedUser.name}'s profile`}
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <h1 className="text-xl font-bold text-gray-800">{matchedUser.name}</h1>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'self' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg shadow-sm ${
                msg.sender === 'self'
                  ? 'bg-pink-500 text-white rounded-br-none'
                  : 'bg-gray-300 text-gray-800 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="block text-xs mt-1 opacity-75">{msg.timestamp}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* For scrolling to bottom */}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="bg-white p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="ml-4 bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}