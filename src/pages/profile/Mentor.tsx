import React, { useState } from 'react';

const Mentor = () => {
  const [expertise, setExpertise] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Expertise: ${expertise}\nAvailability: ${availability}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Set Up Your Mentor Profile</h2>
        <label htmlFor="expertise" className="block text-gray-700 font-medium mb-2">Areas of Expertise</label>
        <input
          id="expertise"
          name="expertise"
          type="text"
          value={expertise}
          onChange={e => setExpertise(e.target.value)}
          placeholder="e.g. Data Science, Leadership, UI/UX Design"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
          required
        />
        <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">Availability</label>
        <input
          id="availability"
          name="availability"
          type="text"
          value={availability}
          onChange={e => setAvailability(e.target.value)}
          placeholder="e.g. Weekends, Evenings, Flexible"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Mentor;