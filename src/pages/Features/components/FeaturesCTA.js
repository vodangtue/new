import React from 'react';
import { Link } from 'react-router-dom';

function FeaturesCTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Start Using Our Tools Today</h2>
        <Link 
          to="/signup"
          className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg mb-4 inline-block hover:bg-blue-700 transition-colors"
        >
          Try for Free
        </Link>
        <p className="text-gray-600">No credit card needed – get instant access.</p>
      </div>
    </section>
  );
}

export default FeaturesCTA;