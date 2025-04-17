import React from 'react';

function FeaturePageHero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Explore Our AI-Powered Tools</h1>
          <p className="text-xl text-gray-600 mb-8">Real-time fraud detection at your fingertips.</p>
        </div>
      </div>
    </section>
  );
}

function FeatureSection({ feature }) {
  return (
    <div className="py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-4xl">{feature.icon}</div>
            <h2 className="text-3xl font-bold">{feature.title}</h2>
            <p className="text-xl text-gray-600">{feature.description}</p>
            <ul className="space-y-4">
              {feature.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
            <span className="text-gray-500">{feature.visual}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

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

function FeaturesCTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Start Using Our Tools Today</h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg mb-4">
          Try for Free
        </button>
        <p className="text-gray-600">No credit card needed – get instant access.</p>
      </div>
    </section>
  );
}

function FeaturesPage() {
  const features = [
    {
      icon: "🧠",
      title: "Fraud Chat Checker",
      description: "Analyze chat messages for scammy patterns.",
      visual: "Chat bubbles being scanned by AI",
      highlights: [
        "Real-time analysis",
        "Detect coercive, manipulative language",
        "Works in DMs, forums, group chats"
      ]
    },
    {
      icon: "🌐",
      title: "Phishing Website Checker",
      description: "Check suspicious links for phishing threats.",
      visual: "Browser window with warning overlay",
      highlights: [
        "URL reputation analysis",
        "Domain pattern matching",
        "Instant warnings before click-through"
      ]
    },
    {
      icon: "📧",
      title: "Scam Email Checker",
      description: "Identify scam emails using NLP and pattern recognition.",
      visual: "Inbox with suspicious email flagged",
      highlights: [
        "NLP-powered detection",
        "Flag spoofed addresses",
        "Identify urgency-based scams"
      ]
    },
    {
      icon: "🎭",
      title: "Deepfake Checker",
      description: "Detect fake videos or images powered by AI.",
      visual: "Split image/video showing real vs. fake",
      highlights: [
        "Image & video upload support",
        "Facial manipulation detection",
        "Voice and lip-sync analysis"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <FeaturePageHero />
      {features.map((feature, index) => (
        <FeatureSection key={index} feature={feature} />
      ))}
      <BonusSection />
      <FeaturesCTA />
    </div>
  );
}

export default FeaturesPage;