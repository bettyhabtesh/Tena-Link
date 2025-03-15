import React from "react";
import { FaHospital, FaCommentDots, FaRegQuestionCircle, FaCog, FaThLarge } from "react-icons/fa";


const Sidebar = ({ onSelect, currentPage }) => {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col justify-between">
      {/* Sidebar Top */}
      <div>
        <div className="p-5">
          <h1 className="text-3xl font-bold ml-8">
            Tena<span className="text-green-500">Link</span>
          </h1>
        </div>

        {/* Sidebar Links */}
        <nav className="mt-5">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => onSelect("Dashboard")}
                className={`w-full flex items-center px-5 py-3 rounded-md ${
                  currentPage === "Dashboard"
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FaThLarge className="mr-3" />
                Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelect("Doctors")}
                className={`w-full flex items-center px-5 py-3 rounded-md ${
                  currentPage === "Doctors"
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FaHospital className="mr-3" />
                Doctors
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelect("Notifications")}
                className={`w-full flex items-center px-5 py-3 rounded-md ${
                  currentPage === "Notifications"
                    ? "text-blue-600 bg-blue-100"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FaCommentDots className="mr-3" />
                Notifications
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar Bottom */}
      <div className="p-5">
        <ul className="space-y-2">
          <li>
            <button className="w-full flex items-center text-gray-600 hover:bg-gray-100 px-5 py-3 rounded-md">
              <FaRegQuestionCircle className="mr-3" />
              Help
            </button>
          </li>
          <li>
            <button className="w-full flex items-center text-gray-600 hover:bg-gray-100 px-5 py-3 rounded-md">
              <FaCog className="mr-3" />
              Settings
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;