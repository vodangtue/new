import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">DeepValidator</Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="#" className="nav-link">Use Cases</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="#" className="nav-link">Docs</Link>
          <Link to="#" className="nav-link">Blog</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-blue-600 transition-colors">Login</Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Get Started</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;