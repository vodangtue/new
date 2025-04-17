import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
});

function SocialLogin() {
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

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
    setFieldErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setFieldErrors({});
    
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      // Handle successful login here
    } catch (err) {
      if (err.inner) {
        // Validation errors
        const errors = {};
        err.inner.forEach(error => {
          errors[error.path] = error.message;
        });
        setFieldErrors(errors);
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-md p-3 text-sm">
            {error}
          </div>
        )}
        
        <div className="space-y-6 mb-8">
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
              className={`mt-1 block w-full rounded-md border ${
                fieldErrors.email ? 'border-red-300' : 'border-gray-300'
              } px-3 py-2 focus:border-blue-500 focus:ring-blue-500`}
              required
            />
            {fieldErrors.email && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border ${
                  fieldErrors.password ? 'border-red-300' : 'border-gray-300'
                } px-3 py-2 focus:border-blue-500 focus:ring-blue-500`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {fieldErrors.password && (
              <p className="mt-1 text-sm text-red-600">{fieldErrors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md transition-colors relative ${
            isLoading ? 'bg-blue-400 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {isLoading ? (
            <>
              <span className="opacity-0">Log In</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            </>
          ) : (
            'Log In'
          )}
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
          <SocialLogin />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Sign up now →
          </Link>
        </p>
      </div>

      <p className="mt-8 text-center text-xs text-gray-500">
        We use industry-standard encryption to protect your data.
      </p>
    </div>
  );
}

export default LoginForm;