import React, { useState } from "react";
import hospital from "..//..//Assets/hospital.jpg";


const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Available Doctors */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-500">
            Total Available Doctors
          </h3>
          <p className="text-3xl font-bold mt-2 text-gray-800">10</p>
          <button className="text-sm text-green-600 bg-green-100 px-3 py-1 rounded-full mt-2">
            See more
          </button>
        </div>

        {/* Total Patients Treated */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-500">
            Total Patients Treated
          </h3>
          <p className="text-3xl font-bold mt-2 text-gray-800">780</p>
        </div>
      </div>

      {/* Enter Patient's National ID 
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-2/3 bg-green-100 text-gray-800 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Enter patient’s National ID
        </button>
      </div>*/}

      {/* Doctors List */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Doctors List</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="py-3 px-6 text-left">Full Name</th>
                  <th className="py-3 px-6 text-left">Registration Date</th>
                  <th className="py-3 px-6 text-left">License ID</th>
                  <th className="py-3 px-6 text-left">Speciality</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t">
                  <td className="py-3 px-6 font-semibold text-green-600">
                    Abebe Anbesa
                  </td>
                  <td className="py-3 px-6">12-09-2023</td>
                  <td className="py-3 px-6">UI/201</td>
                  <td className="py-3 px-6 text-blue-500">Cardiology</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-6 font-semibold text-green-600">
                    Lamrot Abeba
                  </td>
                  <td className="py-3 px-6">12-09-2023</td>
                  <td className="py-3 px-6">AC/32</td>
                  <td className="py-3 px-6 text-blue-500">Cardiology</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={hospital}
            alt="Hospital Room"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Add Patient Modal 
      <AddPatientModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />*/}
    </div>
  );
};

export default Dashboard;
