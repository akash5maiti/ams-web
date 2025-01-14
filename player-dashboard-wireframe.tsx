import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, Calendar, Video, Trophy, 
  ClipboardList, Activity, AlertCircle,
  Star
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Mock performance data
const performanceData = [
  { period: 'Apr-Jun', shooting: 20, passing: 15, stamina: 18 },
  { period: 'Jul-Sept', shooting: 25, passing: 22, stamina: 20 },
  { period: 'Oct-Dec', shooting: 18, passing: 25, stamina: 22 },
  { period: 'Jan-Mar', shooting: 22, passing: 20, stamina: 25 }
];

// Splash Screen Component
const SplashScreen = () => (
  <div className="h-screen w-screen flex flex-col items-center justify-center bg-blue-900">
    <h1 className="text-6xl font-bold text-white mb-4">AMS</h1>
    <h2 className="text-2xl text-white mb-8">DIGITIZING SPORTS</h2>
    <div className="text-xl text-white">
      ACADEMIES PLAYERS COACHES
    </div>
  </div>
);

// Login Component
const Login = ({ onLogin }) => (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
    <Card className="w-full max-w-md bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-white">AMS Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => onLogin('google')}
        >
          Continue with Google
        </Button>
        <Button 
          variant="outline"
          className="w-full border-gray-700 text-gray-300 hover:bg-gray-800"
          onClick={() => onLogin('email')}
        >
          Continue with Email
        </Button>
      </CardContent>
    </Card>
  </div>
);

// Hexagon Attribute Component
const HexagonAttribute = ({ label, value }) => (
  <div className="relative w-24 h-24">
    <div className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon 
          points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
          className="fill-gray-800 stroke-blue-500"
          strokeWidth="2"
        />
        <text
          x="50"
          y="45"
          textAnchor="middle"
          className="text-2xl font-bold fill-blue-400"
        >
          {value}
        </text>
        <text
          x="50"
          y="65"
          textAnchor="middle"
          className="text-xs fill-gray-400 uppercase"
        >
          {label}
        </text>
      </svg>
    </div>
  </div>
);

// Player Profile Component
const PlayerProfile = () => {
  const playerData = {
    name: 'AVISHEK BANERJEE',
    age: 27,
    position: 'Forward',
    overall: 85,
    attributes: [
      { label: 'PASSING', value: 7 },
      { label: 'BALL CONTROL', value: 6 },
      { label: 'CROSSING', value: 6 },
      { label: 'SHOOTING', value: 8 },
      { label: 'PACE', value: 7 },
      { label: 'POSITIONING', value: 7 }
    ]
  };

  return (
    <div className="p-6 bg-gray-900">
      <div className="flex items-center gap-6 mb-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img 
              src="/api/placeholder/120/120" 
              alt="Player"
              className="rounded-full border-2 border-gray-700" 
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-gray-900 px-2 py-1 rounded-full text-sm font-semibold">
              Fit
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-2xl font-bold text-white">85</span>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{playerData.name}</h2>
          <p className="text-gray-400">Age: {playerData.age}</p>
          <p className="text-gray-400">{playerData.position}</p>
        </div>
      </div>

      <Card className="mb-8 bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Performance Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <LineChart width={600} height={200} data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="period" stroke="#9CA3AF" />
              <YAxis domain={[0, 25]} stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none',
                  color: '#fff'
                }}
              />
              <Line type="monotone" dataKey="shooting" stroke="#60A5FA" />
              <Line type="monotone" dataKey="passing" stroke="#34D399" />
              <Line type="monotone" dataKey="stamina" stroke="#FBBF24" />
            </LineChart>
          </div>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-white">Player Attributes</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {playerData.attributes.map((attr) => (
            <HexagonAttribute 
              key={attr.label} 
              label={attr.label} 
              value={attr.value} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Side Navigation Component
const Navigation = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: 'profile', label: 'PLAYER PROFILE', icon: User },
    { id: 'training', label: 'TRAINING', icon: Activity },
    { id: 'performance', label: 'PERFORMANCE', icon: Activity },
    { id: 'achievements', label: 'ACHIEVEMENTS', icon: Trophy },
    { id: 'videos', label: 'VIDEOS', icon: Video },
    { id: 'scouting', label: 'SCOUTING', icon: ClipboardList },
    { id: 'schedule', label: 'SCHEDULE', icon: Calendar },
    { id: 'injury', label: 'INJURY & REHAB', icon: AlertCircle }
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen border-r border-gray-800">
      <div className="p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full text-left px-4 py-3 rounded flex items-center gap-3 mb-2 ${
                currentPage === item.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Main Dashboard Layout
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('profile');

  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <PlayerProfile />;
      default:
        return (
          <div className="p-6 bg-gray-900">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold capitalize text-white">{currentPage}</h2>
                <p className="text-gray-400 mt-4">This section is under development.</p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
    </div>
  );
};

// Main App Component
const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (method) => {
    console.log(`Logging in with ${method}`);
    setIsLoggedIn(true);
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return <Dashboard />;
};

export default App;
