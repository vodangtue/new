import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-300">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300">Pricing</Link></li>
              <li><Link to="#" className="text-gray-300">Integrations</Link></li>
              <li><Link to="#" className="text-gray-300">API Docs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300">About</Link></li>
              <li><Link to="#" className="text-gray-300">Careers</Link></li>
              <li><Link to="#" className="text-gray-300">Blog</Link></li>
              <li><Link to="#" className="text-gray-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300">Help Center</Link></li>
              <li><Link to="#" className="text-gray-300">FAQs</Link></li>
              <li><Link to="#" className="text-gray-300">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-300">Twitter</Link>
              <Link to="#" className="text-gray-300">LinkedIn</Link>
              <Link to="#" className="text-gray-300">GitHub</Link>
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

export default Footer;