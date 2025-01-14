import React from 'react';
import { User, Trophy, Image, Search, Calendar, Activity, CreditCard, Plus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'Apr', shooting: 8, passing: 7, stamina: 6 },
  { name: 'Jun', shooting: 7, passing: 8, stamina: 7 },
  { name: 'Jul', shooting: 9, passing: 7, stamina: 8 },
  { name: 'Sept', shooting: 8, passing: 9, stamina: 7 },
  { name: 'Oct-Dec', shooting: 8, passing: 8, stamina: 8 },
  { name: 'Jan-Mar', shooting: 9, passing: 8, stamina: 9 }
];

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = React.useState('PERFORMANCE');
  
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

  const RatingCircle = ({ value, label }) => (
    <div className="text-center">
      <div className="relative w-20 h-20 mb-2">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-cyan-500 flex items-center justify-center">
            <span className="text-xl font-bold">{value}/10</span>
          </div>
        </div>
      </div>
      <div className="bg-cyan-500 px-3 py-1 text-sm">{label}</div>
    </div>
  );

  const ImprovementItem = ({ label }) => (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-2">
        <Plus className="text-red-500" />
      </div>
      <span className="text-xs uppercase">{label}</span>
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
            
            <div className="flex space-x-4 mt-6">
              <RatingCircle value="7" label="TRAINING" />
              <RatingCircle value="5" label="MATCH" />
            </div>
          </div>
          
          <div className="text-right">
            <h1 className="text-2xl font-bold">AVISHEK BANERJEE</h1>
            <p className="text-gray-400">Age: 27</p>
            <p className="text-gray-400">Forward</p>
            <button className="text-cyan-500 hover:underline">View details</button>
            
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">Performance Data</h3>
              <div className="w-96 h-48">
                <ResponsiveContainer>
                  <LineChart data={performanceData}>
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Line type="monotone" dataKey="shooting" stroke="#06b6d4" />
                    <Line type="monotone" dataKey="passing" stroke="#22c55e" />
                    <Line type="monotone" dataKey="stamina" stroke="#eab308" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">To improve</h2>
          <div className="flex space-x-8 mb-8">
            <ImprovementItem label="SHOOTING" />
            <ImprovementItem label="PACE" />
            <ImprovementItem label="POSITIONING" />
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Coach's Notes</h3>
            <p className="text-gray-300">
              Game confidence must be improved in forward passes.
              Posture while receiving the ball needs work. Runs need to be more precise.
            </p>
          </div>
        </div>

        {/* Heat Map */}
        <div className="mt-8">
          <div className="w-full h-64 bg-green-800 rounded relative overflow-hidden">
            <div className="absolute inset-0" style={{
              background: `radial-gradient(circle at 60% 50%, rgba(239, 68, 68, 0.7), transparent 50%),
                          radial-gradient(circle at 40% 40%, rgba(239, 68, 68, 0.5), transparent 40%)`
            }} />
            {/* Soccer field lines */}
            <div className="absolute inset-0 border-2 border-white/30">
              <div className="absolute left-1/3 right-1/3 inset-y-0 border-x-2 border-white/30" />
              <div className="absolute inset-x-0 top-1/2 border-t-2 border-white/30" />
              <div className="absolute left-1/2 top-1/2 w-16 h-16 -ml-8 -mt-8 border-2 border-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
