import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { from: 'mentor', text: 'Hello! How can I help you?' },
    { from: 'mentee', text: 'I would like to learn more about Data Science.' },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { from: 'mentee', text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center p-6">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg flex flex-col h-[70vh]">
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, idx) => (
            <div key={idx} className={`max-w-xs px-4 py-2 rounded-lg ${msg.from === 'mentee' ? 'bg-blue-100 self-end ml-auto' : 'bg-gray-200 self-start mr-auto'}`}>{msg.text}</div>
          ))}
        </div>
        <form onSubmit={handleSend} className="flex p-4 border-t border-gray-200">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat; 