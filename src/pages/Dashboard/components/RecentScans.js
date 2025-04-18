import React from 'react';
import { Link } from 'react-router-dom';

function ScanBadge({ result }) {
  const colors = {
    safe: 'bg-green-100 text-green-800',
    risk: 'bg-red-100 text-red-800',
    pending: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <span className={`${colors[result.toLowerCase()]} px-2 py-1 rounded-full text-xs font-medium`}>
      {result}
    </span>
  );
}

function RecentScans({ scans }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Scans</h2>
        <Link to="/dashboard/history" className="text-blue-600 text-sm hover:underline">
          View all →
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Result</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Timestamp</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {scans.map((scan, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-lg mr-2">{scan.icon}</span>
                    <span className="text-gray-900">{scan.type}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ScanBadge result={scan.result} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {scan.timestamp}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <Link 
                    to={`/dashboard/scans/${scan.id}`}
                    className="text-blue-600 hover:underline mr-4"
                  >
                    View details
                  </Link>
                  <button 
                    onClick={() => scan.onRescan(scan.id)}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    Rescan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentScans;