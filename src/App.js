import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import LoginPage from "./Pages/LoginPage";
import MainLayout from "./Pages/Government-Side/MainLayout";
import HospitalAdminLayout from "./Pages/Hospital-Admin/HospitalAdminLayout"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/government-dashboard/*" element={<MainLayout />} />
        <Route path="/hospital-dashboard/*" element={<HospitalAdminLayout />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
