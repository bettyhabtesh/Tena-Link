import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";

const PatientDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Ensure patient data exists
  const patientData = location.state || {
    fullName: "Unknown",
    nationalId: "N/A",
    registered: "N/A",
    contactInfo: "N/A",
    profileImg: "https://via.placeholder.com/150",
    medicalHistory: [],
  };

  const [patient, setPatient] = useState(patientData);
  const [newRecord, setNewRecord] = useState({
    date: "",
    hospital: "",
    symptoms: "",
    diagnosis: "",
    treatment: "",
  });

  const handleAddRecord = () => {
    if (!newRecord.date || !newRecord.hospital || !newRecord.symptoms || !newRecord.diagnosis || !newRecord.treatment) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedMedicalHistory = [...patient.medicalHistory, newRecord];
    setPatient({ ...patient, medicalHistory: updatedMedicalHistory });

    setNewRecord({ date: "", hospital: "", symptoms: "", diagnosis: "", treatment: "" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <button onClick={() => navigate(-1)} className="flex items-center text-blue-600 mb-4">
        <FaArrowLeft className="mr-2" />
        Back to Patient List
      </button>

      {/* Patient Info */}
      <div className="bg-white shadow-md rounded-lg p-6 flex space-x-6">
        <img
          src={patient.profileImg}
          alt="Patient"
          className="w-32 h-32 rounded-full border"
        />
        <div>
          <h2 className="text-2xl font-semibold">{patient.fullName}</h2>
          <p className="text-gray-600">National ID: {patient.nationalId}</p>
          <p className="text-gray-600">Registered: {patient.registered}</p>
          <p className="text-gray-600">
            Contact: {patient.contactInfo === "phone" ? "📞 Phone" : "📧 Email"}
          </p>
        </div>
      </div>

      {/* Medical History */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Past Medical Records</h3>
        <div className="bg-white shadow-md rounded-lg p-4">
          {patient.medicalHistory.length > 0 ? (
            <ul>
              {patient.medicalHistory.map((record, index) => (
                <li key={index} className="border-b py-2">
                  <p><strong>Date:</strong> {record.date}</p>
                  <p><strong>Hospital:</strong> {record.hospital}</p>
                  <p><strong>Symptoms:</strong> {record.symptoms}</p>
                  <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
                  <p><strong>Treatment:</strong> {record.treatment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No medical history available.</p>
          )}
        </div>
      </div>

      {/* Add Medical Record Form */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">Add Medical Record</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            value={newRecord.date}
            onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
            className="border p-2 rounded w-full"
            placeholder="Date"
          />
          <input
            type="text"
            value={newRecord.hospital}
            onChange={(e) => setNewRecord({ ...newRecord, hospital: e.target.value })}
            className="border p-2 rounded w-full"
            placeholder="Hospital Name"
          />
          <input
            type="text"
            value={newRecord.symptoms}
            onChange={(e) => setNewRecord({ ...newRecord, symptoms: e.target.value })}
            className="border p-2 rounded w-full"
            placeholder="Symptoms"
          />
          <input
            type="text"
            value={newRecord.diagnosis}
            onChange={(e) => setNewRecord({ ...newRecord, diagnosis: e.target.value })}
            className="border p-2 rounded w-full"
            placeholder="Diagnosis"
          />
          <input
            type="text"
            value={newRecord.treatment}
            onChange={(e) => setNewRecord({ ...newRecord, treatment: e.target.value })}
            className="border p-2 rounded w-full"
            placeholder="Treatment"
          />
        </div>
        <button
          onClick={handleAddRecord}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md flex items-center"
        >
          <FaPlus className="mr-2" />
          Add Record
        </button>
      </div>
    </div>
  );
};

export default PatientDetail;
