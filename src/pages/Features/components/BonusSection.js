import React from 'react';

function BonusSection() {
  const differences = [
    "AI + cybersecurity hybrid engine",
    "Constant model updates",
    "Privacy-first, secure architecture"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Makes DeepValidator Different?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {differences.map((difference, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <p className="text-lg font-semibold">{difference}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BonusSection;