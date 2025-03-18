import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Notifications from "./notification";
import PatientsPage from "./patientlist";
import PatientDetail from "./PatientDetail";

const DoctorLayout = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("Patient List");

  // Handle sidebar selection
  const handleSelect = (page) => {
    setCurrentPage(page);
    if (page === "Patient List") navigate("/doctor-dashboard/patient-list");
    if (page === "Notifications") navigate("/doctor-dashboard/notifications");
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={handleSelect} currentPage={currentPage} />
      <div className="flex-1 flex flex-col">
        <Header title="Doctor Dashboard" />
        <div className="p-6 bg-gray-100 h-full">
          <Routes>
            <Route path="/patient-list" element={<PatientsPage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/patient/:id" element={<PatientDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DoctorLayout;
