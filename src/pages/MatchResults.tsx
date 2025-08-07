import React, { useState } from 'react';

const mentors = [
  { id: 1, name: 'Jane Doe', skills: 'Data Science', availability: 'Weekends' },
  { id: 2, name: 'John Smith', skills: 'UI/UX Design', availability: 'Evenings' },
];

const MatchResults = () => {
  const [filters, setFilters] = useState({ name: '', skills: '', availability: '' });

  const filteredMentors = mentors.filter(m =>
    m.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    m.skills.toLowerCase().includes(filters.skills.toLowerCase()) &&
    m.availability.toLowerCase().includes(filters.availability.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Mentor Matches</h2>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Filter by name"
            className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            value={filters.name}
            onChange={e => setFilters({ ...filters, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Filter by skills"
            className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            value={filters.skills}
            onChange={e => setFilters({ ...filters, skills: e.target.value })}
          />
          <input
            type="text"
            placeholder="Filter by availability"
            className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            value={filters.availability}
            onChange={e => setFilters({ ...filters, availability: e.target.value })}
          />
        </div>
        <div className="grid gap-4">
          {filteredMentors.map(mentor => (
            <div key={mentor.id} className="bg-blue-100 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between shadow">
              <div>
                <div className="font-semibold text-lg">{mentor.name}</div>
                <div className="text-sm text-gray-500">Skills: {mentor.skills}</div>
                <div className="text-sm text-gray-500">Availability: {mentor.availability}</div>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Chat</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition">View Profile</button>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Connect</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchResults; 