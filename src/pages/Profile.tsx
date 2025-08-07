import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Your Profile</h2>
        <div className="mb-4">
          <div className="font-semibold">Name:</div>
          <div className="text-gray-600 mb-2">John Doe</div>
          <div className="font-semibold">Skills/Expertise:</div>
          <div className="text-gray-600 mb-2">JavaScript, Data Science</div>
          <div className="font-semibold">Availability:</div>
          <div className="text-gray-600 mb-2">Weekends</div>
        </div>
        <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile; 