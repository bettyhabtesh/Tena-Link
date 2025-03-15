import React from "react";
import person from "..//..//Assets/person.jpg";

const AddPatientModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3 relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 left-2 text-gray-600 hover:text-black"
        >
          ←
        </button>

        {/* Patient Image */}
        <div className="flex justify-center">
          <img
            src={person}
            alt="Patient"
            className="w-24 h-24 rounded-full border"
          />
        </div>

        {/* Patient Details */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-600">Full Name</p>
            <input
              type="text"
              value="Birtukan Abebe"
              disabled
              className="w-full p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <p className="text-gray-600">Date of Birth</p>
            <input
              type="text"
              value="10/02/2011"
              disabled
              className="w-full p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <p className="text-gray-600">Gender</p>
            <input
              type="text"
              value="Female"
              disabled
              className="w-full p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <p className="text-gray-600">National ID</p>
            <input
              type="text"
              value="12345678987654"
              disabled
              className="w-full p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <p className="text-gray-600">Phone Number</p>
            <input
              type="text"
              value="0987654321"
              disabled
              className="w-full p-2 border rounded-lg bg-gray-100"
            />
          </div>
          <div>
            <p className="text-gray-600">Assign Doctor</p>
            <select className="w-full p-2 border rounded-lg bg-gray-100">
              <option>Select a doctor</option>
              <option>Abebe Anbesa - Cardiology</option>
              <option>Lamrot Abeba - Cardiology</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPatientModal;
