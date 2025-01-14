import React from 'react';
import { User, Trophy, Image, Search, Calendar, Activity, CreditCard } from 'lucide-react';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = React.useState('ACHIEVEMENTS');
  
  const menuItems = [
    { name: 'PLAYER PROFILE', icon: <User size={16} /> },
    { name: 'TRAINING', icon: <Activity size={16} /> },
    { name: 'PERFORMANCE', icon: <Activity size={16} /> },
    { name: 'ACHIEVEMENTS', icon: <Trophy size={16} /> },
    { name: 'GALLERY', icon: <Image size={16} /> },
    { name: 'SCOUTING', icon: <Search size={16} /> },
    { name: 'SCHEDULE', icon: <Calendar size={16} /> },
    { name: 'INJURY & REHAB', icon: <Activity size={16} /> },
    { name: 'PAYMENTS', icon: <CreditCard size={16} /> }
  ];

  const achievements = [
    "Keventer's Cup 2018 Best Player",
    "Intra-UEM League 2017 Top Scorer",
    "Jovenes Cup 2018 Champions",
    "Jovenes Cup 2019 Champions",
    "Alcheringa 2020 Runners Up",
    "Intra-UEM League 2021 Champion",
    "Best Player Kolkata Premier League 2022"
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

        {/* Achievements Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 bg-cyan-500 inline-block px-6 py-2">
            ACHIEVEMENTS
          </h2>
          
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-cyan-500/20 p-4 rounded hover:bg-cyan-500/30 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Trophy className="text-cyan-500" size={20} />
                  <span className="text-lg">{achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
