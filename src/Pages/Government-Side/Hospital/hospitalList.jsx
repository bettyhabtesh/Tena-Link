import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaEllipsisV } from "react-icons/fa";
import AddHospital from "./AddHospital";
import Pagination from "./Pagination";

const statusColors = {
  Pending: "text-blue-500",
  Approved: "text-green-500",
  Rejected: "text-red-500",
};

const HospitalList = () => {
  const navigate = useNavigate();
  const [showAddHospital, setShowAddHospital] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [hospitals, setHospitals] = useState([
    { id: 1, date: "27 Dec, 2024", name: "Tikur Anbessa", address: "Mexico 123st.", city: "Addis Ababa", phoneNumber: "+251912345678", email: "Tikuranbesa@gmail.com", doctors: 15, status: "Pending" },
    { id: 2, date: "03 Feb, 2023", name: "Addis Hiwot", address: "DMK502", city: "Bisrate Gebriel", phoneNumber: "+251911112233", email: "addishiwot@gmail.com", doctors: 10, status: "Rejected" },
  ]);

  const handleAddHospital = (newHospital) => {
    setHospitals((prevHospitals) => [
      { id: prevHospitals.length + 1, date: new Date().toLocaleDateString(), ...newHospital, status: "Pending" },
      ...prevHospitals,
    ]);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHospitals = hospitals.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Hospital List</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setShowAddHospital(true)}>
          + Add Hospital
        </button>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-2 text-left">ADMITTED</th>
              <th className="text-left">HOSPITAL</th>
              <th className="text-left">ADDRESS</th>
              <th className="text-left">CITY</th>
              <th className="text-left">PHONE</th>
              <th className="text-left">EMAIL</th>
              <th className="text-left">DOCTORS</th>
              <th className="text-left">STATUS</th>
              <th className="text-left">CONTACT</th>
            </tr>
          </thead>
          <tbody>
            {currentHospitals.map((hospital) => (
              <tr
                key={hospital.id}
                className="text-sm border-b cursor-pointer hover:bg-gray-100"
                onClick={() => navigate(`/government-dashboard/hospital/${hospital.id}`)}
              >
                <td className="py-2">{hospital.date}</td>
                <td>{hospital.name}</td>
                <td>{hospital.address}</td>
                <td>{hospital.city}</td>
                <td>{hospital.phoneNumber}</td>
                <td>{hospital.email}</td>
                <td>{hospital.doctors}</td>
                <td className={`font-semibold ${statusColors[hospital.status]}`}>⬤ {hospital.status}</td>
                <td className="flex space-x-3">
                  <FaEnvelope className="text-gray-500" />
                  <FaPhone className="text-gray-500" />
                  <FaEllipsisV className="text-gray-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination totalItems={hospitals.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Add Hospital Modal */}
      {showAddHospital && <AddHospital onClose={() => setShowAddHospital(false)} onAddHospital={handleAddHospital} />}
    </div>
  );
};

export default HospitalList;