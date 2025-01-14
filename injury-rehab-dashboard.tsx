import React from 'react';
import { User, Trophy, Image, Search, Calendar, Activity, CreditCard, Eye, Plus } from 'lucide-react';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = React.useState('INJURY & REHAB');
  
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

  const injuryData = [
    {
      injury: 'Elbow Fracture (left)',
      date: '2nd Feb 2022',
      treatment: '####',
      poc: 'Max Eberl',
      status: '75% Recovered'
    }
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

        {/* Injury Table */}
        <div className="mb-8">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {['Injury', 'Date', 'Treatment', 'POC', 'Status'].map((header) => (
                    <th
                      key={header}
                      className="bg-cyan-500 text-left p-3 first:rounded-tl last:rounded-tr"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {injuryData.map((record, index) => (
                  <tr key={index} className="bg-gray-800">
                    <td className="p-3">{record.injury}</td>
                    <td className="p-3">{record.date}</td>
                    <td className="p-3">{record.treatment}</td>
                    <td className="p-3">{record.poc}</td>
                    <td className="p-3">{record.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* X-Ray and Documents Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* X-Ray Images */}
          <div className="col-span-2">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/api/placeholder/300/200" 
                  alt="X-Ray front view" 
                  className="w-full h-48 object-cover rounded"
                />
                <img 
                  src="/api/placeholder/300/200" 
                  alt="X-Ray side view" 
                  className="w-full h-48 object-cover rounded"
                />
              </div>
              <button className="mt-4 bg-cyan-500 px-4 py-2 rounded flex items-center space-x-2 hover:bg-cyan-600 transition-colors">
                <Eye size={16} />
                <span>View</span>
              </button>
            </div>
          </div>

          {/* Medical Documents */}
          <div>
            <div className="bg-gray-800 rounded-lg p-4">
              <img 
                src="/api/placeholder/200/300" 
                alt="Medical report" 
                className="w-full h-48 object-cover rounded mb-4"
              />
              <button className="w-full bg-cyan-500 px-4 py-2 rounded flex items-center justify-center space-x-2 hover:bg-cyan-600 transition-colors">
                <Eye size={16} />
                <span>View</span>
              </button>
            </div>
            <button className="mt-4 w-full bg-cyan-500 px-4 py-2 rounded flex items-center justify-center space-x-2 hover:bg-cyan-600 transition-colors">
              <Plus size={16} />
              <span>Other Docs</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
