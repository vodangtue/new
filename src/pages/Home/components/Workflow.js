import React from 'react';

function Workflow() {
  const steps = [
    { step: "1", title: "Input your text, URL, or media" },
    { step: "2", title: "Analyze using our ML & cybersecurity engine" },
    { step: "3", title: "Act on the real-time risk score & insights" }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <p className="text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;