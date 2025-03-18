import { useState } from "react";

const AddHospital = ({ onClose, onAddHospital }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    doctors: "",
    city: "",
    phoneNumber: "",
    email: "",
    images: [],
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHospital(formData);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <button className="text-gray-500 mb-4" onClick={onClose}>
          ← Back
        </button>
        <h2 className="text-xl font-semibold text-blue-500 mb-2">Add Hospital</h2>
        <p className="text-sm text-gray-600 mb-4">Please fill in the details below to add hospital information</p>
        <hr className="mb-4" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Name*" className="border p-2 rounded" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address*" className="border p-2 rounded" onChange={handleChange} required />
            <input type="number" name="doctors" placeholder="Doctors*" className="border p-2 rounded" onChange={handleChange} required />
            <input type="text" name="city" placeholder="City*" className="border p-2 rounded" onChange={handleChange} required />
            <input type="text" name="phoneNumber" placeholder="Phone number*" className="border p-2 rounded" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email*" className="border p-2 rounded" onChange={handleChange} required />
            <input type="file" multiple accept="image/*" className="border p-2 rounded col-span-2" onChange={handleFileChange} />
          </div>

          <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-lg">
            Submit
          </button>
        </form>

        {successMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-600 border border-green-300 rounded">
            <p>Hospital has been registered successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddHospital;