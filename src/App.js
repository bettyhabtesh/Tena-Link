import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Pages/Government-Side/sidebar";
import Header from "./Pages/Government-Side/header";
import Dashboard from "./Pages/Government-Side/dashboard";
import Notifications from "./Pages/Government-Side/notification";
import HospitalList from "./Pages/Government-Side/Hospital/hospitalList";
import HospitalDetail from "./Pages/Government-Side/Hospital/hospitaldetail";

const MainLayout = () => { 
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("Dashboard");

 
  useEffect(() => {
    if (location.pathname === "/") setCurrentPage("Dashboard");
    else if (location.pathname === "/hospitals") setCurrentPage("Hospitals");
    else if (location.pathname === "/notifications") setCurrentPage("Notifications");
  }, [location.pathname]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        onSelect={(page) => {
          setCurrentPage(page);
          navigate(page === "Hospitals" ? "/hospitals" : page === "Notifications" ? "/notifications" : "/");
        }}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <div className="flex-1">
        <Header title={currentPage} onBack={() => navigate("/")} />

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/hospitals" element={<HospitalList />} />
            <Route path="/hospital/:id" element={<HospitalDetail />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;