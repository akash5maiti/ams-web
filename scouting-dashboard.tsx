import React from 'react';
import { User, Trophy, Image, Search, Calendar, Activity, CreditCard, Download, Share2, MessageSquare, FileEdit, Upload } from 'lucide-react';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = React.useState('SCOUTING');
  
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

  const actionButtons = [
    { label: 'DOWNLOAD PDF', icon: <Download size={16} />, primary: true },
    { label: 'SHARE CV', icon: <Share2 size={16} />, primary: true },
    { label: 'APPLY FOR REPRESENTATION', icon: <MessageSquare size={16} />, primary: true },
    { label: 'GET IN TOUCH', icon: <MessageSquare size={16} />, primary: true },
    { label: 'Create resume', icon: <FileEdit size={16} /> },
    { label: 'Upload resume', icon: <Upload size={16} /> }
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
          <div className="text-right">
            <h1 className="text-2xl font-bold">AVISHEK BANERJEE</h1>
            <p className="text-gray-400">Age: 27</p>
            <p className="text-gray-400">Forward</p>
            <button className="text-cyan-500 hover:underline">View details</button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* CV Preview */}
          <div className="flex-1">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <img 
                src="/api/placeholder/600/800"
                alt="CV Preview" 
                className="w-full h-auto rounded border border-gray-200"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-64 space-y-3">
            {actionButtons.map((button, index) => (
              <button
                key={index}
                className={`w-full flex items-center justify-center space-x-2 p-3 rounded transition-colors ${
                  button.primary 
                    ? 'bg-cyan-500 hover:bg-cyan-600' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {button.icon}
                <span>{button.label}</span>
              </button>
            ))}

            {/* Gallery Preview */}
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">2 photos from gallery</h3>
              <div className="grid grid-cols-2 gap-2">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Gallery preview 1" 
                  className="w-full h-24 object-cover rounded"
                />
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Gallery preview 2" 
                  className="w-full h-24 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
