/** @format */

import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Weekly");

  // Data for Bar Chart (Total Registered vs. Pending Hospitals)
  const barChartData = {
    labels: ["Pending", "Approved", "Rejected"],
    datasets: [
      {
        label: "Total",
        data: [20, 50, 30], // Sample data, update as needed
        backgroundColor: ["#b0b4be", "#007bff", "#a6c8fa"],
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Data for Doughnut Chart
  const doughnutChartData = {
    labels: ["Doctors", "Hospitals", "Insurances"],
    datasets: [
      {
        data: [53, 31, 16],
        backgroundColor: ["#007bff", "#6c757d", "#f4c542"],
      },
    ],
  };

  const doughnutChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#FFFFFF",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value) => `${value}%`,
      },
    },
    cutout: "70%",
    responsive: true,
  };

  return (
    <div className="p-6 space-y-6">
      {/* Stats Section - Adjusted Height */}
      <div className="grid grid-cols-3 gap-6">
        {/* Total Registered Hospitals */}
        <div className="bg-white p-4 rounded-lg shadow-md h-24 flex flex-col justify-between">
          <p className="text-gray-500 text-sm">Total Registered Hospitals</p>
          <h2 className="text-2xl font-bold">1070</h2>
          <p className="text-green-500 flex items-center text-sm">
            -1.5% <FaArrowDown className="ml-1" />
          </p>
        </div>

        {/* Pending Hospital Approval */}
        <div className="bg-white p-4 rounded-lg shadow-md h-24 flex flex-col justify-between">
          <p className="text-gray-500 text-sm">Pending Hospital Approval</p>
          <h2 className="text-2xl font-bold">7</h2>
          <button className="text-blue-500 text-xs underline">
            See details
          </button>
        </div>

        {/* Active User Session */}
        <div className="bg-white p-4 rounded-lg shadow-md h-24 flex flex-col justify-between">
          <p className="text-gray-500 text-sm">Active User Session</p>
          <h2 className="text-2xl font-bold">5208</h2>
          <p className="text-blue-500 flex items-center text-sm">
            1.5% <FaArrowUp className="ml-1" />
          </p>
        </div>
      </div>

      {/* Graph + Analytics Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Graph Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-lg font-semibold">
              Total Registered vs. Pending Hospitals
            </p>
            <button className="text-sm bg-gray-200 px-3 py-1 rounded-md">
              Daily
            </button>
          </div>
          <div className="mt-4">
            <Bar data={barChartData} options={barChartOptions} />
          </div>
        </div>

        {/* Data Access Breakdown (Doughnut Chart) */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
          <p className="text-gray-800 font-bold text-lg">
            Data Access Breakdown
          </p>
          <div className="relative w-48 h-48">
            <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          </div>
          <div className="flex space-x-6 mt-4 text-center">
            <div>
              <p className="text-blue-500 text-lg font-bold">53%</p>
              <p className="text-gray-500">Doctors</p>
            </div>
            <div>
              <p className="text-blue-500 text-lg font-bold">31%</p>
              <p className="text-gray-500">Hospitals</p>
            </div>
            <div>
              <p className="text-gray-700 text-lg font-bold">16%</p>
              <p className="text-gray-500">Insurances</p>
            </div>
          </div>
        </div>
      </div>
      {/* Hospital List Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between border-b pb-2">
          <p className="text-lg font-semibold">Hospital List</p>
          <div className="flex space-x-4 text-blue-500">
            <button
              onClick={() => setActiveTab("Weekly")}
              className={
                activeTab === "Weekly" ? "border-b-2 border-blue-500" : ""
              }
            >
              Weekly
            </button>
            <button
              onClick={() => setActiveTab("Monthly")}
              className={
                activeTab === "Monthly" ? "border-b-2 border-blue-500" : ""
              }
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("Quarterly")}
              className={
                activeTab === "Quarterly" ? "border-b-2 border-blue-500" : ""
              }
            >
              Quarterly
            </button>
          </div>
        </div>

        <table className="w-full mt-4">
          <thead>
            <tr className="border-b text-left text-sm">
              <th className="py-2">Name</th>
              <th>Registration Date</th>
              <th>Hospital ID</th>
              <th>No of Doctors</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-sm">
              <td className="text-green-500 font-bold">Tikur Anbesa</td>
              <td>12-09-2023</td>
              <td>UI/201</td>
              <td>10</td>
            </tr>
            <tr className="text-sm">
              <td className="text-green-500 font-bold">Lancet</td>
              <td>12-09-2023</td>
              <td>AC/32</td>
              <td>21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
