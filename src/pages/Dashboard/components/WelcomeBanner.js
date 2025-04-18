import React from 'react';

function WelcomeBanner({ username }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Welcome back, {username} 👋
      </h1>
      <p className="text-gray-600">
        Here's your fraud protection overview and recent activity.
      </p>
    </div>
  );
}

export default WelcomeBanner;