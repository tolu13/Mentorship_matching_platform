import React, { useState } from 'react';

const Schedule = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Session scheduled for ${date} at ${time}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 flex flex-col items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Schedule a Session</h2>
        <label className="block text-gray-700 font-medium mb-2">Date</label>
        <input
          type="date"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
        <label className="block text-gray-700 font-medium mb-2">Time</label>
        <input
          type="time"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 mb-6"
          value={time}
          onChange={e => setTime(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-md"
        >
          Schedule
        </button>
      </form>
    </div>
  );
};

export default Schedule; 