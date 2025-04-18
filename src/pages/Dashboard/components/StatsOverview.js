import React from 'react';
import { Link } from 'react-router-dom';

function StatCard({ icon, title, value, link, linkText }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm mb-1">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
      {link && (
        <Link to={link} className="text-blue-600 text-sm hover:underline block mt-4">
          {linkText} →
        </Link>
      )}
    </div>
  );
}

function StatsOverview({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        icon="✅"
        title="Scans Remaining"
        value={`${stats.scansRemaining} scans left`}
        link="/dashboard/upgrade"
        linkText="Upgrade for more"
      />
      <StatCard
        icon="📈"
        title="Recent Activity"
        value={`${stats.threatsDetected} threats detected`}
        link="/dashboard/history"
        linkText="View history"
      />
      <StatCard
        icon="🛠"
        title="Plan Type"
        value={stats.planType}
        link="/pricing"
        linkText="Upgrade plan"
      />
      <StatCard
        icon="🔔"
        title="Notifications"
        value={`${stats.notifications} new alerts`}
        link="/dashboard/notifications"
        linkText="View all"
      />
    </div>
  );
}

export default StatsOverview;