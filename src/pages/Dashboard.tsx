import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import MatchResults from './MatchResults';
import Chat from './Chat';
import Schedule from './Schedule';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    {
      title: 'Total Matches',
      value: '12',
      icon: '🤝',
      color: 'bg-blue-100',
      textColor: 'text-blue-700'
    },
    {
      title: 'Active Chats',
      value: '5',
      icon: '💬',
      color: 'bg-green-100',
      textColor: 'text-green-700'
    },
    {
      title: 'Scheduled Sessions',
      value: '3',
      icon: '📅',
      color: 'bg-purple-100',
      textColor: 'text-purple-700'
    },
    {
      title: 'Profile Views',
      value: '28',
      icon: '👁️',
      color: 'bg-orange-100',
      textColor: 'text-orange-700'
    }
  ];

  const recentMatches = [
    {
      id: 1,
      name: 'Jane Doe',
      expertise: 'Data Science',
      availability: 'Weekends',
      avatar: '👩',
      matchScore: '95%'
    },
    {
      id: 2,
      name: 'John Smith',
      expertise: 'UX Design',
      availability: 'Evenings',
      avatar: '👨',
      matchScore: '88%'
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      expertise: 'Marketing',
      availability: 'Weekdays',
      avatar: '👩',
      matchScore: '82%'
    }
  ];

  const recentActivity = [
    {
      type: 'message',
      text: 'New message from Jane Doe',
      time: '2 hours ago',
      icon: '💬'
    },
    {
      type: 'match',
      text: 'New match with John Smith',
      time: '1 day ago',
      icon: '🤝'
    },
    {
      type: 'schedule',
      text: 'Session scheduled with Sarah',
      time: '2 days ago',
      icon: '📅'
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-4 md:space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome back, John!</h1>
                <p className="text-gray-600 mt-1 text-sm md:text-base">Here's what's happening with your mentorship journey</p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm md:text-base">
                  Find Matches
                </button>
                <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition text-sm md:text-base">
                  View All
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-3 md:p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs md:text-sm font-medium text-gray-600 truncate">{stat.title}</p>
                      <p className="text-lg md:text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    </div>
                    <div className={`p-2 md:p-3 rounded-full ${stat.color} flex-shrink-0 ml-2`}>
                      <span className="text-lg md:text-2xl">{stat.icon}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Recent Matches */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800">Recent Matches</h2>
                  <button 
                    onClick={() => setActiveTab('matches')}
                    className="text-blue-600 hover:text-blue-700 text-xs md:text-sm font-medium"
                  >
                    View all
                  </button>
                </div>
                <div className="space-y-3 md:space-y-4">
                  {recentMatches.map((match) => (
                    <div key={match.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 md:p-4 bg-gray-50 rounded-lg space-y-3 sm:space-y-0">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-base md:text-lg">{match.avatar}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-sm md:text-base">{match.name}</h3>
                          <p className="text-xs md:text-sm text-gray-600">{match.expertise}</p>
                          <p className="text-xs text-gray-500">Available: {match.availability}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full self-start sm:self-auto">
                          {match.matchScore} match
                        </span>
                        <div className="flex space-x-1">
                          <button 
                            onClick={() => setActiveTab('chat')}
                            className="bg-blue-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm hover:bg-blue-700 transition"
                          >
                            Chat
                          </button>
                          <button 
                            onClick={() => setActiveTab('schedule')}
                            className="bg-green-600 text-white px-2 md:px-3 py-1 rounded text-xs md:text-sm hover:bg-green-700 transition"
                          >
                            Schedule
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Recent Activity</h2>
                <div className="space-y-3 md:space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs md:text-sm">{activity.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs md:text-sm font-medium text-gray-800">{activity.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-xs md:text-sm font-medium">
                  View all activity
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <button 
                  onClick={() => setActiveTab('matches')}
                  className="flex flex-col items-center p-3 md:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                >
                  <span className="text-xl md:text-2xl mb-1 md:mb-2">🤝</span>
                  <span className="text-xs md:text-sm font-medium text-gray-700 text-center">Find Matches</span>
                </button>
                <button 
                  onClick={() => setActiveTab('chat')}
                  className="flex flex-col items-center p-3 md:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition"
                >
                  <span className="text-xl md:text-2xl mb-1 md:mb-2">💬</span>
                  <span className="text-xs md:text-sm font-medium text-gray-700 text-center">Start Chat</span>
                </button>
                <button 
                  onClick={() => setActiveTab('schedule')}
                  className="flex flex-col items-center p-3 md:p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition"
                >
                  <span className="text-xl md:text-2xl mb-1 md:mb-2">📅</span>
                  <span className="text-xs md:text-sm font-medium text-gray-700 text-center">Schedule Session</span>
                </button>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className="flex flex-col items-center p-3 md:p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition"
                >
                  <span className="text-xl md:text-2xl mb-1 md:mb-2">⚙️</span>
                  <span className="text-xs md:text-sm font-medium text-gray-700 text-center">Settings</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return <Profile />;

      case 'matches':
        return <MatchResults />;

      case 'chat':
        return <Chat />;

      case 'schedule':
        return <Schedule />;

      case 'settings':
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">Settings</h2>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-gray-600 text-sm md:text-base">Manage your account settings here.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white p-2 rounded-lg shadow-lg border border-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
          <Sidebar activeTab={activeTab} onTabChange={(tab) => {
            setActiveTab(tab);
            setSidebarOpen(false); // Close sidebar on mobile when tab changes
          }} />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 pt-16 lg:pt-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 