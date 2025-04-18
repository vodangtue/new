import React from 'react';
import { Link } from 'react-router-dom';

function UpgradeCTA({ isFreePlan }) {
  if (!isFreePlan) return null;

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
      <div className="flex items-start space-x-4">
        <div className="text-3xl">⭐</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Upgrade to Pro for More Protection</h3>
          <p className="text-gray-600 mb-4">
            Get unlimited scans, priority analysis, and advanced threat detection features.
          </p>
          <ul className="space-y-2 mb-4 text-sm text-gray-600">
            <li className="flex items-center">
              <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              500 scans/month
            </li>
            <li className="flex items-center">
              <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Priority analysis speed
            </li>
            <li className="flex items-center">
              <svg className="h-4 w-4 text-blue-500 mr-2" fill="none" viewBox="0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Email alerts for phishing
            </li>
          </ul>
          <Link
            to="/pricing"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Upgrade Plan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpgradeCTA;