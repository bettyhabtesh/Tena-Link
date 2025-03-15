import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("userType");
    if (storedUser) {
      navigate(`/${storedUser}-dashboard`); // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  const [credentials, setCredentials] = useState({
    governmentId: "",
    hospitalId: "",
    doctorId: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userType) {
      localStorage.setItem("userType", userType); // Save login state
      navigate(`/${userType}-dashboard`); // Redirect to respective dashboard
    }
  };

  return (
    <div className="relative flex justify-end items-center min-h-screen bg-[#ececff]">
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-blue-600 rounded-r-full flex justify-center items-center">
        <h1 className="text-white text-6xl font-bold ml-48">
          Tena<span className="text-green-400">Link</span>
        </h1>
      </div>

      <div className="relative z-10 bg-white p-10 rounded-2xl shadow-xl w-96 mr-48">
        <h2 className="text-3xl font-semibold text-center text-blue-700">
          Welcome <span className="text-green-500">Back!</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-gray-700 font-medium">Select User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">-- Select --</option>
            <option value="government">Government</option>
            <option value="hospital">Hospital</option>
            <option value="doctor">Doctor</option>
          </select>

          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;