import React from 'react';

function UseCases() {
  const cases = [
    "Individuals & Content Creators",
    "Small Businesses & E-commerce",
    "Enterprise Security Teams"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Who It's For</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((title, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">Protect your digital assets with our AI-powered security tools.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;