import React from "react";


function SignupPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-100">
      {/* Blue Curved Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* This div creates the curve */}
        <div className="absolute bg-customBlue w-[160%] h-[100%] rounded-full -right-3/4"></div>
      </div>

      {/* Left Section with Logo */}
      <div className="hidden md:flex items-center justify-center w-1/2 z-10">
        <h1 className="text-6xl font-bold text-white">
          Tena<span className="text-tealGreen">Link</span>
        </h1>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center z-10">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-96">
          <h2 className="text-3xl font-bold text-center text-healthCareBlue mb-8">
            Welcome!
          </h2>
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-healthCareBlue text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Have an account?{" "}
            <a href="#" className="text-green-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;