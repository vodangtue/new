import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import ScanDetailHeader from './components/ScanDetailHeader';
import ScanSummaryCard from './components/ScanSummaryCard';
import InputPreview from './components/InputPreview';
import AIAnalysis from './components/AIAnalysis';
import Recommendations from './components/Recommendations';
import UserNotes from './components/UserNotes';
import RelatedScans from './components/RelatedScans';

function ScanDetailFooter({ onNewScan }) {
  return (
    <div className="border-t bg-white py-4 fixed bottom-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          to="#"
          className="text-gray-600 hover:text-blue-600 text-sm"
          onClick={(e) => {
            e.preventDefault();
            // TODO: Implement false positive reporting
            console.log('Report false positive');
          }}
        >
          Report a false positive
        </Link>
        <button
          onClick={onNewScan}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          New Scan
        </button>
      </div>
    </div>
  );
}

function ScanDetailPage() {
  const { id } = useParams();

  // Mock data - in real app, this would come from an API call using the id
  const mockData = {
    scan: {
      id,
      type: 'chat',
      typeIcon: '🧠',
      status: 'suspicious',
      timestamp: '2025-04-18 14:30:00',
      inputData: {
        messages: [
          {
            isUser: false,
            sender: 'Unknown',
            content: 'Hello! I am contacting you about your extended car warranty...',
            timestamp: '14:29'
          },
          {
            isUser: true,
            sender: 'You',
            content: 'Who is this?',
            timestamp: '14:30'
          }
        ]
      },
      analysis: {
        riskScore: 85,
        indicators: [
          {
            icon: '⚠️',
            label: 'Urgency Phrases Detected',
            details: 'Message contains high-pressure sales tactics and urgency indicators.'
          },
          {
            icon: '🎭',
            label: 'Common Scam Pattern',
            details: 'Matches known car warranty scam template.'
          }
        ]
      },
      recommendations: [
        {
          icon: '🚫',
          title: 'Do not respond to this message',
          description: 'This appears to be a common scam attempt. Block and report the sender.'
        },
        {
          icon: '📞',
          title: 'Verify with your car dealer',
          description: 'If concerned, contact your car dealer directly using official channels.'
        }
      ],
      relatedScans: [
        {
          id: '123',
          type: 'Chat Analysis',
          typeIcon: '🧠',
          status: 'scam',
          timestamp: '1 day ago'
        },
        {
          id: '124',
          type: 'Chat Analysis',
          typeIcon: '🧠',
          status: 'suspicious',
          timestamp: '2 days ago'
        }
      ]
    }
  };

  const handleSaveNotes = async (notes) => {
    // TODO: Implement notes saving
    console.log('Saving notes:', notes);
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  const handleNewScan = () => {
    // TODO: Implement navigation to new scan page
    console.log('Navigate to new scan');
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        <ScanDetailHeader />
        <ScanSummaryCard scan={mockData.scan} />
        <InputPreview 
          type={mockData.scan.type}
          data={mockData.scan.inputData}
        />
        <AIAnalysis analysis={mockData.scan.analysis} />
        <Recommendations recommendations={mockData.scan.recommendations} />
        <UserNotes onSave={handleSaveNotes} />
        <RelatedScans scans={mockData.scan.relatedScans} />
      </div>
      <ScanDetailFooter onNewScan={handleNewScan} />
    </DashboardLayout>
  );
}

export default ScanDetailPage;