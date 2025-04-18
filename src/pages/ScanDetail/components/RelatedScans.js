import React from 'react';
import { Link } from 'react-router-dom';

function ScanCard({ scan }) {
  return (
    <Link 
      to={`/dashboard/scans/${scan.id}`}
      className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
    >
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-xl">{scan.typeIcon}</span>
        <span className="font-medium">{scan.type}</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{scan.timestamp}</p>
      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
        scan.status === 'safe' ? 'bg-green-100 text-green-800' :
        scan.status === 'suspicious' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {scan.status}
      </div>
    </Link>
  );
}

function RelatedScans({ scans }) {
  if (!scans?.length) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Similar Previous Scans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {scans.map((scan, index) => (
          <ScanCard key={index} scan={scan} />
        ))}
      </div>
    </div>
  );
}

export default RelatedScans;