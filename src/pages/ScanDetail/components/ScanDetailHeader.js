import React from 'react';
import { Link } from 'react-router-dom';

function ScanDetailHeader() {
  return (
    <div className="mb-8">
      <Link 
        to="/dashboard" 
        className="text-blue-600 hover:text-blue-700 mb-4 inline-block"
      >
        ← Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Scan Report</h1>
      <p className="text-gray-600">
        Detailed results and AI analysis of your submission.
      </p>
    </div>
  );
}

export default ScanDetailHeader;