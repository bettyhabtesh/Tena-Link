import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { FaEnvelope, FaCommentDots, FaPhone, FaEllipsisV } from "react-icons/fa"; 
import AddHospital from "./AddHospital"; 
import Pagination from "./Pagination"; // Import Pagination component

const hospitalsData = [ 
  { id: 1, date: "27 Dec, 2024", name: "Tikur Anbessa", address: "BC5001", location: "Sarbet", inCharge: "Kristin", status: "Pending" }, 
  { id: 2, date: "03 Feb, 2023", name: "Addis Hiwot", address: "DMK502", location: "Bisrate Gebriel", inCharge: "Kristin", status: "Rejected" }, 
  { id: 3, date: "02 Mar, 2023", name: "Brook", address: "DMK502", location: "Bisrate Gebriel", inCharge: "Colleen", status: "Approved" }, 
  { id: 4, date: "02 Mar, 2023", name: "Landmark", address: "BC1022", location: "Bisrate Gebriel", inCharge: "Kristin", status: "Pending" },
  { id: 5, date: "27 Dec, 2024", name: "Tikur Anbessa", address: "BC5001", location: "Sarbet", inCharge: "Kristin", status: "Pending" }, 
  { id: 6, date: "03 Feb, 2023", name: "Addis Hiwot", address: "DMK502", location: "Bisrate Gebriel", inCharge: "Kristin", status: "Rejected" }, 
  { id: 7, date: "02 Mar, 2023", name: "Brook", address: "DMK502", location: "Bisrate Gebriel", inCharge: "Colleen", status: "Approved" }, 
  { id: 8, date: "02 Mar, 2023", name: "Landmark", address: "BC1022", location: "Bisrate Gebriel", inCharge: "Kristin", status: "Pending" },
  { id: 9, date: "27 Dec, 2024", name: "Tikur Anbessa", address: "BC5001", location: "Sarbet", inCharge: "Kristin", status: "Pending" }, 
  { id: 10, date: "03 Feb, 2023", name: "Addis Hiwot", address: "DMK502", location: "Bisrate Gebriel", inCharge: "Kristin", status: "Rejected" }, 
  { id: 12, date: "02 Mar, 2023", name: "Brook", address: "DMK502", location: "Bisrate Gebriel", inCharge: "Colleen", status: "Approved" }, 
  { id: 13, date: "02 Mar, 2023", name: "Landmark", address: "BC1022", location: "Bisrate Gebriel", inCharge: "Kristin", status: "Pending" },
];

const statusColors = { 
  Pending: "text-blue-500", 
  Approved: "text-green-500", 
  Rejected: "text-red-500", 
};

const HospitalList = () => { 
  const navigate = useNavigate(); 
  const [showAddHospital, setShowAddHospital] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of hospitals per page

  // Logic to paginate data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHospitals = hospitalsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Hospital List</h2>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setShowAddHospital(true)}
        >
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
              <th className="text-left">LOCATION</th>
              <th className="text-left">IN CHARGE</th>
              <th className="text-left">STATUS</th>
              <th className="text-left">CONTACT</th>
            </tr>
          </thead>
          <tbody>
            {currentHospitals.map((hospital) => (
              <tr
                key={hospital.id}
                className="text-sm border-b cursor-pointer hover:bg-gray-100"
                onClick={() => navigate(`/hospital/${hospital.id}`)}
              >
                <td className="py-2">{hospital.date}</td>
                <td>{hospital.name}</td>
                <td>{hospital.address}</td>
                <td>{hospital.location}</td>
                <td>{hospital.inCharge}</td>
                <td className={`font-semibold ${statusColors[hospital.status]}`}>⬤ {hospital.status}</td>
                <td className="flex space-x-3">
                  <FaEnvelope className="text-gray-500" />
                  <FaCommentDots className="text-gray-500" />
                  <FaPhone className="text-gray-500" />
                  <FaEllipsisV className="text-gray-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination 
        totalItems={hospitalsData.length} 
        itemsPerPage={itemsPerPage} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
      
      {/* Add Hospital Modal */}
      {showAddHospital && <AddHospital onClose={() => setShowAddHospital(false)} />}
    </div>
  );
};

export default HospitalList;
