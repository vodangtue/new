import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold">DeepValidator</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">Use Cases</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Docs</a>
          <a href="#" className="nav-link">Blog</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700">Login</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">Get Started</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Detect Scams with AI, in Real Time</h1>
          <p className="text-xl text-gray-600 mb-8">DeepValidator is your AI-powered scam detection platform—stop fraud before it stops you.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg">Try It Now</button>
            <button className="text-blue-600 px-8 py-3 rounded-md text-lg border border-blue-600">Watch Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: "🧠",
      title: "Fraud Chat Checker",
      description: "Spot scammy language in chats immediately."
    },
    {
      icon: "🌐",
      title: "Phishing Website Checker",
      description: "Instantly verify URLs for phishing threats."
    },
    {
      icon: "📧",
      title: "Scam Email Checker",
      description: "Analyze inbox messages for fraud patterns."
    },
    {
      icon: "🎭",
      title: "Deepfake Checker",
      description: "Detect AI-generated fakes in images & video."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">🔐 Our Tools at a Glance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-blue-600 hover:underline">See all features →</a>
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Input your text, URL, or media" },
            { step: "2", title: "Analyze using our ML & cybersecurity engine" },
            { step: "3", title: "Act on the real-time risk score & insights" }
          ].map((item, index) => (
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

function UseCases() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Who It's For</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Individuals & Content Creators",
            "Small Businesses & E-commerce",
            "Enterprise Security Teams"
          ].map((title, index) => (
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

function CallToAction() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to stay safe online?</h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg mb-4">
          Start Your Free Trial
        </button>
        <p className="text-gray-600">No credit card required.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300">Features</a></li>
              <li><a href="#" className="text-gray-300">Pricing</a></li>
              <li><a href="#" className="text-gray-300">Integrations</a></li>
              <li><a href="#" className="text-gray-300">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300">About</a></li>
              <li><a href="#" className="text-gray-300">Careers</a></li>
              <li><a href="#" className="text-gray-300">Blog</a></li>
              <li><a href="#" className="text-gray-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300">Help Center</a></li>
              <li><a href="#" className="text-gray-300">FAQs</a></li>
              <li><a href="#" className="text-gray-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300">Twitter</a>
              <a href="#" className="text-gray-300">LinkedIn</a>
              <a href="#" className="text-gray-300">GitHub</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2025 DeepValidator</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <UseCases />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
