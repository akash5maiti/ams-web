import React, { useState } from 'react';
import { ChevronLeft, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const [activePage, setActivePage] = useState('PAYMENTS');
  
  const pages = [
    'PLAYER PROFILE',
    'TRAINING',
    'PERFORMANCE',
    'ACHIEVEMENTS',
    'GALLERY',
    'SCOUTING',
    'SCHEDULE',
    'INJURY & REHAB',
    'PAYMENTS'
  ];

  const playerInfo = {
    name: 'AVISHEK BANERJEE',
    position: 'Forward',
    age: 27,
    ovr: 85
  };

  const DummyPage = ({ title }) => (
    <div className="p-6">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-4 text-gray-600">This is a placeholder for the {title.toLowerCase()} page.</p>
    </div>
  );

  const PaymentsPage = () => (
    <div className="p-6 text-white">
      <div className="space-y-4">
        <p>Dashboard for player payment</p>
        <p>Option to pay through methods</p>
        <p>Options to see payment history</p>
        <p>Notification for payments will direct to this page.</p>
        <div className="flex items-center gap-2 mt-6 text-yellow-300">
          <AlertCircle size={20} />
          <p>Blip on the payment option (Alert) :-!</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <div className="flex items-center gap-2 mb-8">
          <ChevronLeft className="w-6 h-6" />
          <span>Back</span>
        </div>
        
        {/* Navigation */}
        <nav>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`w-full text-left p-3 mb-1 rounded ${
                activePage === page 
                  ? 'bg-cyan-400 text-black' 
                  : 'hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-900">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div>
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl font-bold">{playerInfo.name}</h1>
                <div className="flex gap-4 text-gray-400">
                  <span>Age: {playerInfo.age}</span>
                  <span>{playerInfo.position}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cyan-400 text-black px-4 py-2 rounded">
            OVR {playerInfo.ovr}
          </div>
        </div>

        {/* Page Content */}
        {activePage === 'PAYMENTS' ? (
          <PaymentsPage />
        ) : (
          <DummyPage title={activePage} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
