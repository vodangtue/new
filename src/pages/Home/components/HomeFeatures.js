import React from 'react';
import { Link } from 'react-router-dom';

function HomeFeatures() {
  const features = [
    {
      icon: "🧠",
      title: "Fraud Chat Checker",
      description: "Spot scammy language in chats immediately."
    },
    {
      icon: "🌐",
      title: "Phishing Website Checker",
      description: "Instantly verify URLs for phishing threats."
    },
    {
      icon: "📧",
      title: "Scam Email Checker",
      description: "Analyze inbox messages for fraud patterns."
    },
    {
      icon: "🎭",
      title: "Deepfake Checker",
      description: "Detect AI-generated fakes in images & video."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">🔐 Our Tools at a Glance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/features" className="text-blue-600 hover:underline">See all features →</Link>
        </div>
      </div>
    </section>
  );
}

export default HomeFeatures;