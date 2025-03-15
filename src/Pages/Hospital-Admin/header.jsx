/** @format */

import { FaBell, FaChevronDown, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import person from "..//..//Assets/person.jpg";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
      {/* Left Section: Back Button + Title */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-gray-900"
        >
          <FaArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>

      {/* Right Section: Notification + Profile */}
      <div className="flex items-center space-x-6">
        {/* Notification Bell */}
        <button
          className="relative text-gray-600 hover:text-gray-900"
          onClick={() => navigate("/notifications")}
        >
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full">
            1
          </span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img
              src={person}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <FaChevronDown className="text-gray-600" />
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  localStorage.removeItem("userType"); // Clear login state
                  setShowProfileMenu(false);
                  navigate("/"); // Redirect to login page
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
