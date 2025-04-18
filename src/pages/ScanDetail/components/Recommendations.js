import React from 'react';

function Recommendation({ icon, title, description }) {
  return (
    <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="font-medium text-blue-900">{title}</p>
        <p className="text-sm text-blue-700 mt-1">{description}</p>
      </div>
    </div>
  );
}

function Recommendations({ recommendations }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <Recommendation
            key={index}
            icon={rec.icon}
            title={rec.title}
            description={rec.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;