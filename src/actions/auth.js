/** @format */

import axios from "axios";

// Function to handle user login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(
      `https://tenalink-7jig.onrender.com/api/auth/login`,
      { email, password }
    );
    if (response.status === 200) {
      const { token } = response.data;
      console.log("token", token);
      localStorage.setItem("token", token);
      return { success: true, message: "Login successful", token };
    }
    return { success: false, message: "Login failed" };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred",
    };
  }
};

// Function to handle hospital login
export const loginHospital = async (email, password) => {
  try {
    const response = await axios.post("/loginHospital", { email, password });
    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem("token", token); // Store token in local storage
      return { success: true, message: "Login successful", token };
    }
    return { success: false, message: "Login failed" };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred",
    };
  }
};

// Function to handle doctor login
export const loginDoctor = async (email, password) => {
  try {
    const response = await axios.post("/loginDoctor", { email, password });
    if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem("token", token);
      return { success: true, message: "Login successful", token };
    }
    return { success: false, message: "Login failed" };
  } catch (error) {
    console.error("Login error:", error);
    return {
      success: false,
      message: error.response?.data?.message || "An error occurred",
    };
  }
};
