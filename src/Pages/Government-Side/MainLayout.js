/** @format */

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import Dashboard from "./dashboard";
import Notifications from "./notification";
import HospitalList from "./Hospital/hospitalList";
import HospitalDetail from "./Hospital/hospitaldetail";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("Dashboard");

  useEffect(() => {
    const path = location.pathname.replace("/government-dashboard", ""); // Remove prefix

    if (path === "/" || path === "") setCurrentPage("Dashboard");
    else if (path.startsWith("/hospitals")) setCurrentPage("Hospitals");
    else if (path === "/notifications") setCurrentPage("Notifications");
  }, [location.pathname]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        onSelect={(page) => {
          setCurrentPage(page);
          navigate(
            page === "Hospitals"
              ? "/government-dashboard/hospitals" // 👈 Add absolute path
              : page === "Notifications"
              ? "/government-dashboard/notifications" // 👈 Add absolute path
              : "/government-dashboard"
          );
        }}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <div className="flex-1">
        <Header title={currentPage} onBack={() => navigate(-1)} />

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="hospitals" element={<HospitalList />} />
            <Route path="hospital/:id" element={<HospitalDetail />} />
            <Route path="notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
