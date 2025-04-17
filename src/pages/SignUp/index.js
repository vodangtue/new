import React from 'react';
import SignUpHero from './components/SignUpHero';
import SignUpForm from './components/SignUpForm';

function SignUpPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <SignUpHero />
        <div className="mt-12">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;