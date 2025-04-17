import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to stay safe online?</h2>
        <Link 
          to="/signup" 
          className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg mb-4 inline-block"
        >
          Start Your Free Trial
        </Link>
        <p className="text-gray-600">No credit card required.</p>
      </div>
    </section>
  );
}

export default CallToAction;