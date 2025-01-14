import React, { useState } from 'react';
import { ChevronDown, User, Trophy, Image, Search, Calendar, Activity, CreditCard } from 'lucide-react';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('TRAINING');
  
  const menuItems = [
    { name: 'PLAYER PROFILE', icon: <User size={16} /> },
    { name: 'TRAINING', icon: <Activity size={16} /> },
    { name: 'PERFORMANCE', icon: <ChevronDown size={16} /> },
    { name: 'ACHIEVEMENTS', icon: <Trophy size={16} /> },
    { name: 'GALLERY', icon: <Image size={16} /> },
    { name: 'SCOUTING', icon: <Search size={16} /> },
    { name: 'SCHEDULE', icon: <Calendar size={16} /> },
    { name: 'INJURY & REHAB', icon: <Activity size={16} /> },
    { name: 'PAYMENTS', icon: <CreditCard size={16} /> }
  ];

  const drills = [
    { name: 'Speed Drills', code: 'G111' },
    { name: 'Passing Drills', code: 'G211' },
    { name: 'Strength Training', code: 'G312' },
    { name: 'Shooting', code: 'G311' }
  ];

  const changes = [
    { name: 'Pace', value: 15, positive: true },
    { name: 'Shooting', value: 12, positive: true },
    { name: 'Heading', value: 8, negative: true },
    { name: 'Weak foot', value: 6, positive: true },
    { name: 'Dribbling', value: 2, negative: true }
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <div className="text-lg font-bold mb-6">PLAYER PROFILE</div>
        <nav>
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center space-x-2 p-3 rounded cursor-pointer ${
                selectedMenu === item.name ? 'bg-cyan-500' : 'hover:bg-gray-700'
              }`}
              onClick={() => setSelectedMenu(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="text-6xl font-bold text-cyan-500">OVR</div>
            <div className="text-5xl font-bold">85</div>
          </div>
          
          <div className="text-right">
            <h1 className="text-2xl font-bold">AVISHEK BANERJEE</h1>
            <p className="text-gray-400">Age: 27</p>
            <p className="text-gray-400">Forward</p>
            <button className="text-cyan-500 hover:underline">View details</button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 bg-cyan-500 inline-block px-4 py-1">THIS WEEK</h2>
          <div className="space-y-2 text-gray-300">
            <p>Tabular Data: Consisting of historical training sessions.</p>
            <p>Tabular Data: Consisting of suggested trainings</p>
            <p>Scheduled training</p>
            <button className="text-cyan-500 hover:underline mt-4">Add nutrition tracker</button>
          </div>
        </div>

        {/* Right Side Panels */}
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold mb-4">Suggested Drills</h3>
            {drills.map((drill) => (
              <div key={drill.name} className="flex justify-between items-center mb-2 p-2 hover:bg-gray-700 rounded">
                <span>{drill.name} – {drill.code}</span>
                <ChevronDown size={16} />
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold mb-4">KEY CHANGES</h3>
            {changes.map((change) => (
              <div key={change.name} className="flex justify-between items-center mb-2">
                <span>{change.name}</span>
                <span className={`px-2 rounded ${
                  change.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {change.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
