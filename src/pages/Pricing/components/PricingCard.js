import React from 'react';
import { Link } from 'react-router-dom';

function PricingCard({ plan, isYearly }) {
  const getPrice = () => {
    if (plan.price === 'Custom') return 'Custom';
    if (isYearly) return `$${Math.floor(plan.price * 12 * 0.8)}/year`;
    return `$${plan.price}/month`;
  };

  return (
    <div className={`p-8 rounded-lg ${plan.popular ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white border border-gray-200'}`}>
      {plan.popular && (
        <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold text-blue-600 bg-blue-100 mb-4">
          Most Popular
        </span>
      )}
      <div className="text-4xl mb-4">{plan.icon}</div>
      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{getPrice()}</span>
        {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{plan.description}</p>
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <svg className="h-6 w-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        to={plan.buttonLink || '/signup'}
        className={`w-full py-3 rounded-md font-semibold block text-center ${
          plan.popular ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        {plan.buttonText}
      </Link>
    </div>
  );
}

export default PricingCard;