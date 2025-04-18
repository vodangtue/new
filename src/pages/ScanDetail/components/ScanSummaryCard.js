import React from 'react';

const STATUS_CONFIGS = {
  safe: {
    icon: '✅',
    label: 'Safe',
    bgColor: 'bg-green-50',
    textColor: 'text-green-800',
    borderColor: 'border-green-100'
  },
  suspicious: {
    icon: '⚠️',
    label: 'Suspicious',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-100'
  },
  scam: {
    icon: '❌',
    label: 'Scam Detected',
    bgColor: 'bg-red-50',
    textColor: 'text-red-800',
    borderColor: 'border-red-100'
  }
};

function ScanSummaryCard({ scan }) {
  const status = STATUS_CONFIGS[scan.status];

  const handleDownloadReport = () => {
    // TODO: Implement PDF report generation
    console.log('Downloading report for scan:', scan.id);
  };

  return (
    <div className={`${status.bgColor} ${status.borderColor} border rounded-lg p-6 mb-8`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Scan Type</p>
            <div className="flex items-center space-x-2">
              <span className="text-xl">{scan.typeIcon}</span>
              <span className="font-medium">{scan.type}</span>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <div className={`flex items-center space-x-2 ${status.textColor} font-medium`}>
              <span>{status.icon}</span>
              <span>{status.label}</span>
            </div>
          </div>

          {scan.id && (
            <div>
              <p className="text-sm text-gray-500">Scan ID</p>
              <p className="font-mono text-sm">{scan.id}</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Date/Time</p>
            <p className="font-medium">{scan.timestamp}</p>
          </div>

          <button
            onClick={handleDownloadReport}
            className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Report (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScanSummaryCard;