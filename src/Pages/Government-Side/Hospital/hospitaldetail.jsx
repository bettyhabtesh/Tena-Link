import { useParams } from "react-router-dom";

const hospitalDetails = {
  1: {
    name: "Tikur Anbessa Hospital",
    regId: "100jjdbqw fewbfe rvors",
    address: "Mexico 123st., Addis Ababa, Ethiopia",
    email: "Tikuranbesa@gmail.com",
    doctors: 15,
    patients: 1529,
    blockchainKey: "0xF23AB...1C",
    status: "Active",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhviUTEWvGUmNH4JfZRRQgX8nBzLJCgASLKw&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhviUTEWvGUmNH4JfZRRQgX8nBzLJCgASLKw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhviUTEWvGUmNH4JfZRRQgX8nBzLJCgASLKw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhviUTEWvGUmNH4JfZRRQgX8nBzLJCgASLKw&s",
    ],
  },
};

const HospitalDetail = () => {
  const { id } = useParams();
  const hospital = hospitalDetails[id];

  if (!hospital) return <div className="p-6">Hospital not found</div>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-blue-600">Hospital Detail</h2>
      <div className="flex mt-4">
        <img src={hospital.image} alt={hospital.name} className="w-1/2 rounded-lg" />
        <div className="ml-6 space-y-2">
          <h2 className="text-2xl font-bold">{hospital.name}</h2>
          <p><strong>Registration ID:</strong> {hospital.regId}</p>
          <p><strong>Address:</strong> {hospital.address}</p>
          <p><strong>Email:</strong> {hospital.email}</p>
          <p><strong>Doctors:</strong> {hospital.doctors}</p>
          <p><strong>Patients:</strong> {hospital.patients}</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetail;