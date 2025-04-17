import React from 'react';

function BillingToggle({ isYearly, onToggle }) {
  return (
    <div className="flex justify-center items-center space-x-4 mb-12">
      <span className={`text-lg ${!isYearly ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>Monthly</span>
      <button
        onClick={onToggle}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
            isYearly ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`text-lg ${isYearly ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
        Yearly <span className="text-green-500 text-sm">Save 20%</span>
      </span>
    </div>
  );
}

export default BillingToggle;