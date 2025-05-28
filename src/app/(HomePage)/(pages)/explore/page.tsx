"use client"
import { postdata } from '@/app/components/data/postData';
import React, { useState } from 'react'

export default function page() {
  const [searchTerm, setSearchTerm] = useState('');
  // You may also want to define filteredUsers for the search results to work
  const [filteredUsers, setFilteredUsers] = useState<{ id: string; username: string; posts: { id: string; content: string; }[] }[]>([]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Search Bar */}
      <div className="w-full max-w-md flex items-center mb-8">
      <input
        type="text"
        placeholder="Search users..."
        className="flex-1 px-4 py-2 border rounded-l focus:outline-none"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button className="bg-blue-500 px-4 py-2 rounded-r text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
        </svg>
      </button>
      </div>

      {/* Search Results */}
      {searchTerm && (
      <div className="w-full max-w-md bg-white shadow rounded p-4 mb-8">
        {postdata.length > 0 ? (
          postdata
            .filter(user =>
              user.username.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .length > 0 ? (
              postdata
                .filter(user =>
                  user.username.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((user, index) => (
                  <div key={index} className="mb-4 flex items-center">
                    {/* Profile image in a circle */}
                    <img
                      src={user.images[0] || "/default-profile.png"}
                      alt={user.username}
                      className="w-10 h-10 rounded-full mr-3 object-cover border"
                    />
                    <div>
                      <div className="font-semibold">{user.username}</div>
                    </div>
                  </div>
                ))
            ) : (
              <div className="text-gray-500">No users found.</div>
            )
        ) : (
          <div className="text-gray-500">No users found.</div>
        )}
      </div>
      )}

      <h1 className="text-4xl font-bold mb-4">Explore</h1>
      <p className="text-lg text-gray-600">Explore the latest features and updates.</p>
      <div className="mt-8">
      <a href="#/explore/features" className="text-blue-500 hover:underline">
        View Features
      </a>
      <a href="#/explore/updates" className="ml-4 text-blue-500 hover:underline">
        View Updates
      </a>
      </div>
    </div>
  )
}
