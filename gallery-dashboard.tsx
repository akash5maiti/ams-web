import React from 'react';
import { User, Trophy, Image, Search, Calendar, Activity, CreditCard, Play, ChevronRight } from 'lucide-react';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = React.useState('GALLERY');
  
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

  const mediaItems = [
    { type: 'video', thumbnail: '/api/placeholder/300/200' },
    { type: 'video', thumbnail: '/api/placeholder/300/200' },
    { type: 'video', thumbnail: '/api/placeholder/300/200' },
    { type: 'video', thumbnail: '/api/placeholder/300/200' }
  ];

  const VideoThumbnail = ({ item }) => (
    <div className="relative group cursor-pointer">
      <img 
        src={item.thumbnail} 
        alt="Video thumbnail" 
        className="w-full h-48 object-cover rounded"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
          <Play className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

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

        {/* Gallery Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold bg-cyan-500 px-4 py-1">
              MAX 10 Photos/videos
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {mediaItems.map((item, index) => (
              <VideoThumbnail key={index} item={item} />
            ))}
          </div>

          <button className="mt-6 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center float-right hover:bg-cyan-600 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
