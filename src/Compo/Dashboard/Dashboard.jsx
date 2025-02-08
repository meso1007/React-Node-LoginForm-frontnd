import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FaSearch } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex">
      {/* Sidebar */}
      <div className="w-16 sm:w-64 fixed h-full bg-gray-900">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-16 sm:ml-64">
        {/* Header Section */}
        <header className="bg-gray-900 p-4 shadow-lg">
          <div className="flex justify-center sm:justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-200">Welcome to Grafty!</h1>
            <nav className="flex items-center space-x-2">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              {/* Search Button */}
              <button className="bg-lime-400 text-gray-800 px-4 py-2 rounded-md hover:bg-lime-500 transition">
                <FaSearch/>
              </button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: User Statistics */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">User Statistics</h2>
              <p className="text-gray-300">Total Posts: 1,234</p>
              <p className="text-gray-300">Followers: 987</p>
              <p className="text-gray-300">Following: 456</p>
            </div>

            {/* Card 2: Recent Activity */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <ul className="text-gray-300">
                <li>Commented on a post: "Great work!"</li>
                <li>Followed John Doe</li>
                <li>Liked a photo: "Sunset view"</li>
              </ul>
            </div>

            {/* Card 3: Notifications */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Notifications</h2>
              <ul className="text-gray-300">
                <li>You have 2 new messages</li>
                <li>Your post received 5 likes</li>
                <li>New follower: Jane Smith</li>
              </ul>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 p-4 text-center text-gray-500">
          <p>&copy; 2025 Grafty, Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
