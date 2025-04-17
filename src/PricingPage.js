import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PricingHero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8">Choose the plan that fits your needs — whether you're an individual or an enterprise.</p>
        </div>
      </div>
    </section>
  );
}

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
      <button className={`w-full py-3 rounded-md font-semibold ${
        plan.popular ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
      }`}>
        {plan.buttonText}
      </button>
    </div>
  );
}

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

function FAQ() {
  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to your plan until the end of your billing period."
    },
    {
      question: "What happens if I exceed my scan limit?",
      answer: "You'll receive a notification when you're approaching your limit. Once reached, you can upgrade your plan or wait until your next billing cycle."
    },
    {
      question: "Is there a free trial of the Pro plan?",
      answer: "Yes! You can try the Pro plan free for 14 days. No credit card required during the trial period."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Detect Smarter?</h2>
        <Link to="/signup" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg mb-4">
          Start for Free
        </Link>
        <p className="text-gray-600">No commitment. Upgrade anytime.</p>
      </div>
    </section>
  );
}

function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      icon: "🧪",
      title: "Free",
      price: 0,
      description: "Perfect for personal use or testing",
      features: [
        "Access to all 4 tools (limited scans)",
        "Up to 10 scans/month",
        "Community support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      icon: "🚀",
      title: "Pro",
      price: 19,
      description: "For creators, professionals & small teams",
      features: [
        "500 scans/month",
        "Priority analysis speed",
        "Email alerts for phishing",
        "Basic API access"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      icon: "🛡️",
      title: "Enterprise",
      price: "Custom",
      description: "Tailored for large teams & organizations",
      features: [
        "Unlimited scans",
        "Dedicated support",
        "Full API & SDK access",
        "On-premise deployment (optional)",
        "Security audit reports"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      <PricingHero />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BillingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} isYearly={isYearly} />
            ))}
          </div>
        </div>
      </section>
      <ComparisonTable />
      <FAQ />
      <PricingCTA />
    </div>
  );
}

export default PricingPage;