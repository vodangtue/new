import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Detect Scams with AI, in Real Time</h1>
          <p className="text-xl text-gray-600 mb-8">DeepValidator is your AI-powered scam detection platform—stop fraud before it stops you.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg">Try It Now</Link>
            <button className="text-blue-600 px-8 py-3 rounded-md text-lg border border-blue-600">Watch Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;