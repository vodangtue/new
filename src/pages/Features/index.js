import React from 'react';
import FeatureHero from './components/FeatureHero';
import FeatureSection from './components/FeatureSection';
import BonusSection from './components/BonusSection';
import CallToAction from '../Home/components/CallToAction';

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
      <FeatureHero />
      {features.map((feature, index) => (
        <FeatureSection key={index} feature={feature} />
      ))}
      <BonusSection />
      <CallToAction />
    </div>
  );
}

export default FeaturesPage;