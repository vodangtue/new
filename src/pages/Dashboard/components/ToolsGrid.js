import React from 'react';
import { Link } from 'react-router-dom';

function ToolCard({ icon, title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <Link
          to={link}
          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
        >
          New Scan
        </Link>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link 
        to={link} 
        className="text-blue-600 text-sm hover:underline"
      >
        Launch tool →
      </Link>
    </div>
  );
}

function ToolsGrid() {
  const tools = [
    {
      icon: "🧠",
      title: "Chat Checker",
      description: "Analyze chat messages for scam patterns and fraud attempts.",
      link: "/dashboard/tools/chat"
    },
    {
      icon: "🌐",
      title: "Website Checker",
      description: "Verify URLs and detect phishing sites in real-time.",
      link: "/dashboard/tools/website"
    },
    {
      icon: "📧",
      title: "Email Checker",
      description: "Scan emails for fraud indicators and scam attempts.",
      link: "/dashboard/tools/email"
    },
    {
      icon: "🎭",
      title: "Deepfake Checker",
      description: "Detect AI-generated fake images and videos.",
      link: "/dashboard/tools/deepfake"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Quick Access Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
}

export default ToolsGrid;