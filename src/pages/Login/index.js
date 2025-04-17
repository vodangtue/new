import React from 'react';
import LoginHero from './components/LoginHero';
import LoginForm from './components/LoginForm';

function LoginPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <LoginHero />
        <div className="mt-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;