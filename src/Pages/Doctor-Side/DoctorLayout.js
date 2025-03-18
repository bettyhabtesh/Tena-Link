import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import Notifications from "./notification";
import PatientsPage from "./patientlist";
import PatientDetail from "./PatientDetail";

const DoctorLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
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
