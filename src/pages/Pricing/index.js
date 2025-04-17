import React, { useState } from 'react';
import PricingHero from './components/PricingHero';
import BillingToggle from './components/BillingToggle';
import PricingCard from './components/PricingCard';
import ComparisonTable from './components/ComparisonTable';
import FAQ from './components/FAQ';
import CallToAction from '../Home/components/CallToAction';

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
      buttonLink: "/signup",
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
      buttonLink: "/signup?plan=pro",
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
      buttonLink: "/contact",
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
      <CallToAction />
    </div>
  );
}

export default PricingPage;