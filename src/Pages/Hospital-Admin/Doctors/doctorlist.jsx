import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaCommentDots, FaPlus, FaFilter, FaTimes } from "react-icons/fa";

const doctorsData = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  registered: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toDateString(),
  fullName: "Abebe Beso",
  licenseId: `BC${Math.floor(1000 + Math.random() * 9000)}`,
  specialty: "Cardiology",
  status: Math.random() > 0.2 ? "Active" : "Revoked",
})).reverse();

const Modal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    licenseId: "",
    specialty: "Cardiology",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add Doctor</h3>
          <FaTimes className="cursor-pointer" onClick={onClose} />
        </div>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          name="licenseId"
          placeholder="License ID"
          value={formData.licenseId}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        />
        <select
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="Active">Active</option>
          <option value="Revoked">Revoked</option>
        </select>
        <button className="w-full bg-blue-600 text-white py-2 rounded" onClick={handleSubmit}>Add Doctor</button>
      </div>
    </div>
  );
};

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState(doctorsData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 10;
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const addDoctor = (doctor) => {
    setDoctors([{ id: doctors.length + 1, ...doctor, registered: new Date().toDateString() }, ...doctors]);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentDoctors = doctors.slice(
    (currentPage - 1) * doctorsPerPage,
    currentPage * doctorsPerPage
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Doctors List</h2>
        <div className="flex gap-3">
          <button onClick={() => setIsModalOpen(true)} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <FaPlus className="mr-2" /> Add Doctor
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
            <FaFilter className="mr-2" /> Filter
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={addDoctor} />

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
            {currentDoctors.map((doctor) => (
              <tr key={doctor.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{doctor.registered}</td>
                <td className="p-3">{doctor.fullName}</td>
                <td className="p-3">{doctor.licenseId}</td>
                <td className="p-3">{doctor.specialty}</td>
                <td className="p-3 flex items-center">
                  <span className={`w-2 h-2 rounded-full mr-2 ${doctor.status === "Active" ? "bg-green-500" : "bg-red-500"}`}></span>
                  {doctor.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">Next</button>
      </div>
    </div>
  );
};

export default DoctorsPage;
