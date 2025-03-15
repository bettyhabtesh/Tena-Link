import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaCommentDots, FaPlus, FaFilter } from "react-icons/fa";

const doctorsData = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  registered: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toDateString(),
  fullName: "Abebe Beso",
  licenseId: `BC${Math.floor(1000 + Math.random() * 9000)}`,
  specialty: "Cardiology",
  status: Math.random() > 0.2 ? "Active" : "Revoked",
}));

const DoctorsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 10;
  const totalPages = Math.ceil(doctorsData.length / doctorsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentDoctors = doctorsData.slice(
    (currentPage - 1) * doctorsPerPage,
    currentPage * doctorsPerPage
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Doctors List</h2>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <FaPlus className="mr-2" /> Add Doctor
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
            <FaFilter className="mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* Doctors Table */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">REGISTERED</th>
              <th className="p-3">FULL NAME</th>
              <th className="p-3">LICENSE ID</th>
              <th className="p-3">SPECIALITY</th>
              <th className="p-3">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {currentDoctors.map((doctor, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{doctor.registered}</td>
                <td className="p-3">{doctor.fullName}</td>
                <td className="p-3">{doctor.licenseId}</td>
                <td className="p-3">{doctor.specialty}</td>
                <td className="p-3 flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${
                      doctor.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  {doctor.status}
                </td>
                <td className="p-3 flex gap-3">
                  <FaPhone className="text-blue-500 cursor-pointer" />
                  <FaEnvelope className="text-gray-500 cursor-pointer" />
                  <FaCommentDots className="text-green-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1 ? "bg-gray-200 text-gray-400" : "bg-gray-300 hover:bg-gray-400"
          }`}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-2 rounded-md ${
                currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          )).slice(Math.max(0, currentPage - 3), currentPage + 2)}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages ? "bg-gray-200 text-gray-400" : "bg-gray-300 hover:bg-gray-400"
          }`}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default DoctorsPage;