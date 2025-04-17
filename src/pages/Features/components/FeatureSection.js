import React from 'react';

function FeatureSection({ feature }) {
  return (
    <div className="py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-4xl">{feature.icon}</div>
            <h2 className="text-3xl font-bold">{feature.title}</h2>
            <p className="text-xl text-gray-600">{feature.description}</p>
            <ul className="space-y-4">
              {feature.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
            <span className="text-gray-500">{feature.visual}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;