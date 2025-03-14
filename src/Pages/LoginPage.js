import { useState } from "react";

const LoginPage = () => {
  const [userType, setUserType] = useState("");
  const [credentials, setCredentials] = useState({
    governmentId: "",
    hospitalId: "",
    doctorId: "",
    password: "",
  });

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Logging in as:", userType, credentials);
  };

  return (
    <div className="relative flex justify-end items-center min-h-screen bg-[#ececff]">
      {/* Half Circle Section */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-blue-600 rounded-r-full flex justify-center items-center">
        <h1 className="text-white text-6xl font-bold ml-48">
          Tena<span className="text-green-400">Link</span>
        </h1>
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-white p-10 rounded-2xl shadow-xl w-96 mr-48">
        <h2 className="text-3xl font-semibold text-center text-blue-700">
          Welcome <span className="text-green-500">Back!</span>
        </h2>

        {/* User Type Selection */}
        <label className="block text-gray-700 font-medium mt-5">
          Select User Type
        </label>
        <select
          value={userType}
          onChange={handleUserTypeChange}
          className="w-full p-3 border border-gray-300 rounded-lg mb-5 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">-- Select --</option>
          <option value="government">Government</option>
          <option value="hospital">Hospital</option>
          <option value="doctor">Doctor</option>
        </select>

        {/* Dynamic Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {userType === "government" && (
            <div>
              <label className="block text-gray-700 font-medium">
                Government ID
              </label>
              <input
                type="text"
                name="governmentId"
                value={credentials.governmentId}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your Government ID"
                required
              />
            </div>
          )}

          {userType === "hospital" && (
            <div>
              <label className="block text-gray-700 font-medium">
                Hospital ID
              </label>
              <input
                type="text"
                name="hospitalId"
                value={credentials.hospitalId}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your Hospital ID"
                required
              />
            </div>
          )}

          {userType === "doctor" && (
            <div>
              <label className="block text-gray-700 font-medium">
                Doctor ID
              </label>
              <input
                type="text"
                name="doctorId"
                value={credentials.doctorId}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your Doctor ID"
                required
              />
            </div>
          )}

          {/* Common Password Field */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;