import React, { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Dashboard from "./dashboard";
import DoctorsPage from "./Doctors/doctorlist";
import Notifications from "./notification";

const HospitalAdminLayout = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar onSelect={setCurrentPage} currentPage={currentPage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header title={currentPage} />

        {/* Render Content Based on Sidebar Selection */}
        <div className="p-6">
          {currentPage === "Dashboard" && <Dashboard />}
          {currentPage === "Doctors" && <DoctorsPage />}
          {currentPage === "Notifications" && <Notifications/>}
        </div>
      </div>
    </div>
  );
};

export default HospitalAdminLayout;
