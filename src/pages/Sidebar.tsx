import React from "react";
import { FaHome } from "react-icons/fa";  
import { FaUser } from "react-icons/fa";  
import { FaHandshake } from "react-icons/fa";   
import { FaCalendarAlt } from 'react-icons/fa';   
import { FaComments } from 'react-icons/fa';   
import { FaCog } from "react-icons/fa";    

interface SidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const sidebarItems = [
    { id: "overview", label: "Overview", icon: <FaHome /> },
    { id: "profile", label: "Profile", icon: <FaUser /> },
    { id: "matches", label: "Matches", icon: <FaHandshake /> },
    { id: "chat", label: "Chat", icon: <FaComments /> },
    { id: "schedule", label: "Schedule", icon: <FaCalendarAlt /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800 mb-8">Dashboard</h1>
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
