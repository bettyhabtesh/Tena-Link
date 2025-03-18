import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const patientsData = Array.from({ length: 340 }, (_, index) => ({
  id: index + 1,
  registered: new Date(
    2023,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  ).toDateString(),
  fullName: `Patient ${index + 1}`,
  nationalId: `BC${Math.floor(1000 + Math.random() * 9000)}`,
  contactInfo: Math.random() > 0.5 ? "phone" : "email",
  profileImg: `https://i.pravatar.cc/150?u=${index}`, // Random avatar
  medicalHistory: [
    { date: "2023-01-15", diagnosis: "Flu", treatment: "Rest & Hydration" },
    { date: "2023-06-22", diagnosis: "Allergy", treatment: "Antihistamines" },
  ],
})).reverse();

const PatientsPage = () => {
  const [patients, setPatients] = useState(patientsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const patientsPerPage = 10;
  const totalPages = Math.ceil(patients.length / patientsPerPage);

  // Filter Patients based on search input
  const filteredPatients = patients.filter((patient) =>
    patient.nationalId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentPatients = filteredPatients.slice(
    (currentPage - 1) * patientsPerPage,
    currentPage * patientsPerPage
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Patients List</h2>
        <input
          type="text"
          placeholder="Search by National ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* Patient Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">REGISTERED</th>
              <th className="p-3">FULL NAME</th>
              <th className="p-3">NATIONAL ID</th>
              <th className="p-3">CONTACT INFO</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.map((patient) => (
              <tr
                key={patient.id}
                className="border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/doctor-dashboard/patient/${patient.id}`, { state: patient })}
              >
                <td className="p-3">{patient.registered}</td>
                <td className="p-3">{patient.fullName}</td>
                <td className="p-3">{patient.nationalId}</td>
                <td className="p-3">
                  {patient.contactInfo === "phone" ? <FaPhone /> : <FaEnvelope />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PatientsPage;
