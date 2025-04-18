import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import WelcomeBanner from './components/WelcomeBanner';
import StatsOverview from './components/StatsOverview';
import ToolsGrid from './components/ToolsGrid';
import RecentScans from './components/RecentScans';
import UpgradeCTA from './components/UpgradeCTA';

function DashboardPage() {
  // Mock data - in real app, this would come from API
  const mockData = {
    user: {
      name: 'John Doe',
      planType: 'Free Plan'
    },
    stats: {
      scansRemaining: 43,
      threatsDetected: 3,
      planType: 'Free Plan',
      notifications: 1
    },
    recentScans: [
      {
        id: 1,
        icon: '🧠',
        type: 'Chat Analysis',
        result: 'Safe',
        timestamp: '2 hours ago',
        onRescan: (id) => console.log('Rescan', id)
      },
      {
        id: 2,
        icon: '🌐',
        type: 'Website Check',
        result: 'Risk',
        timestamp: '3 hours ago',
        onRescan: (id) => console.log('Rescan', id)
      },
      {
        id: 3,
        icon: '📧',
        type: 'Email Analysis',
        result: 'Safe',
        timestamp: '5 hours ago',
        onRescan: (id) => console.log('Rescan', id)
      }
    ]
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeBanner username={mockData.user.name} />
        <StatsOverview stats={mockData.stats} />
        <ToolsGrid />
        <RecentScans scans={mockData.recentScans} />
        <UpgradeCTA isFreePlan={mockData.user.planType === 'Free Plan'} />
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;