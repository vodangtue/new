import React from 'react';

function ComparisonTable() {
  const features = [
    { name: 'Number of Scans', free: '10/month', pro: '500/month', enterprise: 'Unlimited' },
    { name: 'Analysis Speed', free: 'Standard', pro: 'Priority', enterprise: 'Priority' },
    { name: 'Email Alerts', free: '❌', pro: '✅', enterprise: '✅' },
    { name: 'API Access', free: '❌', pro: 'Basic', enterprise: 'Full' },
    { name: 'SDK Access', free: '❌', pro: '❌', enterprise: '✅' },
    { name: 'On-premise Deployment', free: '❌', pro: '❌', enterprise: '✅' },
    { name: 'Security Audit Reports', free: '❌', pro: '❌', enterprise: '✅' },
    { name: 'Support', free: 'Community', pro: 'Email', enterprise: 'Dedicated' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left">Feature</th>
                <th className="px-6 py-4 text-center">Free</th>
                <th className="px-6 py-4 text-center">Pro</th>
                <th className="px-6 py-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-6 py-4 font-medium">{feature.name}</td>
                  <td className="px-6 py-4 text-center">{feature.free}</td>
                  <td className="px-6 py-4 text-center">{feature.pro}</td>
                  <td className="px-6 py-4 text-center">{feature.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ComparisonTable;