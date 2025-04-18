import React from 'react';

function RiskIndicator({ icon, label, details }) {
  return (
    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-sm text-gray-600 mt-1">{details}</p>
      </div>
    </div>
  );
}

function RiskScore({ score }) {
  const getScoreColor = (score) => {
    if (score <= 30) return 'text-green-600';
    if (score <= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRiskLevel = (score) => {
    if (score <= 30) return 'Low';
    if (score <= 70) return 'Medium';
    return 'High';
  };

  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className="flex-1">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full ${getScoreColor(score).replace('text-', 'bg-')}`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
      <div className="text-right">
        <p className={`text-2xl font-bold ${getScoreColor(score)}`}>
          {score}%
        </p>
        <p className="text-sm text-gray-500">
          Risk Level: {getRiskLevel(score)}
        </p>
      </div>
    </div>
  );
}

function AIAnalysis({ analysis }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">AI Analysis</h2>
      
      <RiskScore score={analysis.riskScore} />

      <div className="space-y-4">
        {analysis.indicators.map((indicator, index) => (
          <RiskIndicator
            key={index}
            icon={indicator.icon}
            label={indicator.label}
            details={indicator.details}
          />
        ))}
      </div>
    </div>
  );
}

export default AIAnalysis;