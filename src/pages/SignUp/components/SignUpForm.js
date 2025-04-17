import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import zxcvbn from 'zxcvbn';

function PasswordStrengthIndicator({ password }) {
  const score = password ? zxcvbn(password).score : 0;
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <div className="mt-1">
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${colors[score]} transition-all duration-300`} 
          style={{ width: `${(score + 1) * 20}%` }}
        />
      </div>
      <p className={`text-sm mt-1 ${colors[score].replace('bg-', 'text-')}`}>
        {labels[score]}
      </p>
    </div>
  );
}

function SocialSignIn() {
  return (
    <div className="space-y-4">
      <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50">
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
        <span>Continue with Google</span>
      </button>
      <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50">
        <img src="https://github.com/favicon.ico" alt="GitHub" className="w-5 h-5" />
        <span>Continue with GitHub</span>
      </button>
      <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50">
        <img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" className="w-5 h-5" />
        <span>Continue with LinkedIn</span>
      </button>
    </div>
  );
}

function SignUpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    referralCode: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6 mb-8">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
            <PasswordStrengthIndicator password={formData.password} />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700">
              Referral Code (Optional)
            </label>
            <input
              type="text"
              id="referralCode"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
              I accept the <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and{' '}
              <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Get Started
        </button>
      </form>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        <div className="mt-6">
          <SocialSignIn />
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-600">
        Already a member?{' '}
        <Link to="/login" className="text-blue-600 hover:underline font-medium">
          Log in here
        </Link>
      </p>
    </div>
  );
}

export default SignUpForm;