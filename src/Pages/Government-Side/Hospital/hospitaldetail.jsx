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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhviUTEWvGUmNH4JfZRRQgX8nBzLJCgASLKw&s", // Replace with actual URL
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhviUTEWvGUmNH4JfZRRQgX8nBzLJCgASLKw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhviUTEWvGUmNH4JfZRRQgX8nBzLJCgASLKw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhviUTEWvGUmNH4JfZRRQgX8nBzLJCgASLKw&s",
    ],
  },
  // Add more hospitals as needed
};

const HospitalDetail = () => {
  const { id } = useParams();
  const hospital = hospitalDetails[id];

  if (!hospital) return <div className="p-6">Hospital not found</div>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold text-blue-600">Hospital Detail</h2>

      <div className="flex mt-4">
        {/* Main Image */}
        <img src={hospital.image} alt={hospital.name} className="w-1/2 rounded-lg" />

        {/* Info Section */}
        <div className="ml-6 space-y-2">
          <h2 className="text-2xl font-bold">{hospital.name}</h2>
          <p><strong>Registration ID:</strong> {hospital.regId}</p>
          <p><strong>Address:</strong> {hospital.address}</p>
          <p><strong>Contact Email:</strong> {hospital.email}</p>
          <p><strong>Doctors Registered:</strong> {hospital.doctors}</p>
          <p><strong>Patients Treated:</strong> {hospital.patients}</p>
          <p><strong>Blockchain Key:</strong> {hospital.blockchainKey}</p>
          <p><strong>Status:</strong> {hospital.status}</p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex space-x-4 mt-4">
        {hospital.gallery.map((img, index) => (
          <img key={index} src={img} alt="Hospital Room" className="w-20 h-20 rounded-lg" />
        ))}
      </div>

      {/* Deactivate Button */}
      <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg">Deactivate</button>
    </div>
  );
};

export default HospitalDetail;
