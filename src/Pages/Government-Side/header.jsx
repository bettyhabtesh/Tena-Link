import { FaBell, FaChevronDown, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const Header = ({ title, onBack }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left Section: Back Button + Title */}
      <div className="flex items-center space-x-3">
        <button onClick={onBack} className="text-gray-600 hover:text-gray-900">
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>

      {/* Right Section: Notification + Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Bell */}
        <button
          className="relative text-gray-600 hover:text-gray-900"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full">
            1
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/32"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <FaChevronDown className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Header;