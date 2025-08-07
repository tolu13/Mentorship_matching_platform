import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome to Your Dashboard</h1>
        <div className="mb-8 text-center text-gray-600">Here you will see your matches and can start chatting or schedule a session.</div>
        <div className="grid gap-4">
          {/* Example match card */}
          <div className="bg-blue-100 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between shadow">
            <div>
              <div className="font-semibold text-lg">Jane Doe</div>
              <div className="text-sm text-gray-500">Expertise: Data Science</div>
              <div className="text-sm text-gray-500">Availability: Weekends</div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Chat</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Schedule</button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 