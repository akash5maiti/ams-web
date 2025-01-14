import React, { useState } from 'react';
import { User, Trophy, Image, Search, Calendar, Activity, CreditCard, ChevronDown } from 'lucide-react';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('SCHEDULE');
  const [selectedMonth, setSelectedMonth] = useState('JANUARY');
  const [selectedYear, setSelectedYear] = useState('2017');
  
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

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Calendar data with activities
  const calendarData = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    activity: Math.random() > 0.5 ? (Math.random() > 0.5 ? 'practice' : 'gym') : null
  }));

  const ActivityIcon = ({ type }) => {
    if (type === 'practice') {
      return (
        <div className="w-6 h-6">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        </div>
      );
    } else if (type === 'gym') {
      return (
        <div className="w-6 h-6">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
            <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
          </svg>
        </div>
      );
    }
    return null;
  };

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

        {/* Schedule Section */}
        <div>
          <p className="text-gray-400 mb-4">Can switch to weekly view</p>
          
          <div className="flex gap-4 mb-4">
            <div className="relative">
              <select 
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="appearance-none bg-cyan-500 px-4 py-2 pr-8 rounded cursor-pointer"
              >
                <option>JANUARY</option>
                {/* Add other months */}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            </div>

            <div className="relative">
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="appearance-none bg-cyan-500 px-4 py-2 pr-8 rounded cursor-pointer"
              >
                <option>2017</option>
                {/* Add other years */}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="grid grid-cols-7 gap-1 mb-1">
              {weekDays.map(day => (
                <div key={day} className="text-center text-sm text-gray-400 p-2">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {calendarData.map((date, index) => (
                <div 
                  key={index}
                  className="aspect-square p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer transition-colors"
                >
                  <div className="text-sm mb-2">{date.day}</div>
                  {date.activity && <ActivityIcon type={date.activity} />}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-cyan-500">
            On hover or click Pop up for training details
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
