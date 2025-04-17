import React from 'react';
import Hero from './components/Hero';
import HomeFeatures from './components/HomeFeatures';
import Workflow from './components/Workflow';
import UseCases from './components/UseCases';
import CallToAction from './components/CallToAction';

function HomePage() {
  return (
    <main>
      <Hero />
      <HomeFeatures />
      <Workflow />
      <UseCases />
      <CallToAction />
    </main>
  );
}

export default HomePage;