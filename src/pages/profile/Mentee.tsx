import React, { useState } from 'react';

const Mentee = () => {
  const [skills, setSkills] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Skills submitted: ${skills}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Set Up Your Mentee Profile</h2>
        <label htmlFor="skills" className="block text-gray-700 font-medium mb-2">Your Skills</label>
        <textarea
          id="skills"
          name="skills"
          value={skills}
          onChange={e => setSkills(e.target.value)}
          placeholder="List your skills, separated by commas (e.g. JavaScript, Communication, Design)"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6 min-h-[100px] resize-y"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Mentee;