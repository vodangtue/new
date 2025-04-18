import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import FeaturesPage from './pages/Features';
import PricingPage from './pages/Pricing';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';

// Mock auth state - in real app, this would come from auth context/provider
const isAuthenticated = true;

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Only show Header on non-dashboard routes */}
        {!window.location.pathname.startsWith('/dashboard') && <Header />}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/dashboard/*" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
        </Routes>

        {/* Only show Footer on non-dashboard routes */}
        {!window.location.pathname.startsWith('/dashboard') && <Footer />}
      </div>
    </Router>
  );
}

export default App;
