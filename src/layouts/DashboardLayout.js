import React from 'react';
import { Link } from 'react-router-dom';

function UserAvatar({ username }) {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
          {username[0].toUpperCase()}
        </div>
        <span className="text-gray-700">{username}</span>
      </button>
      <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 hidden group-hover:block">
        <Link to="/dashboard/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Profile</Link>
        <Link to="/dashboard/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Settings</Link>
        <hr className="my-2" />
        <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">
          Logout
        </button>
      </div>
    </div>
  );
}

function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">DeepValidator</Link>
            <nav className="hidden md:ml-8 md:flex space-x-8">
              <Link to="/dashboard" className="text-gray-900 hover:text-blue-600">Dashboard</Link>
              <Link to="/dashboard/tools" className="text-gray-500 hover:text-blue-600">Tools</Link>
              <Link to="/dashboard/history" className="text-gray-500 hover:text-blue-600">History</Link>
              <Link to="/dashboard/settings" className="text-gray-500 hover:text-blue-600">Settings</Link>
            </nav>
          </div>
          <UserAvatar username="John Doe" />
        </div>
      </div>
    </header>
  );
}

function DashboardFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center space-x-6 text-sm text-gray-500">
          <Link to="/support" className="hover:text-blue-600">Support</Link>
          <Link to="/api-docs" className="hover:text-blue-600">API Docs</Link>
          <Link to="/privacy" className="hover:text-blue-600">Privacy</Link>
          <button className="hover:text-blue-600">Logout</button>
        </div>
      </div>
    </footer>
  );
}

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DashboardHeader />
      <main className="flex-1">
        {children}
      </main>
      <DashboardFooter />
    </div>
  );
}

export default DashboardLayout;