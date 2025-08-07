import React, { useState, useRef } from "react";

const Profile = () => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Your Profile
        </h2>

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <div
            className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors mb-4"
            onClick={handleAvatarClick}
          >
            {avatar ? (
              <img
                src={avatar}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
                onClick={handleAvatarClick}
              />
            ) : (
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            )}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            accept="image/*"
            className="hidden"
          />
          
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          <div>
            <div className="font-semibold text-gray-700">Name:</div>
            <div className="text-gray-600">John Doe</div>
          </div>

          <div>
            <div className="font-semibold text-gray-700">Profession:</div>
            <div className="text-gray-600">Software Engineer</div>
          </div>

          <div>
            <div className="font-semibold text-gray-700">Skills/Expertise:</div>
            <div className="text-gray-600">JavaScript, Data Science</div>
          </div>

          <div>
            <div className="font-semibold text-gray-700">Availability:</div>
            <div className="text-gray-600">Weekends</div>
          </div>
        </div>

        <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mt-6">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
