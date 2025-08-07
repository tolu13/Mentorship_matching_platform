import React from "react";
import iilustration from "../../assets/illustration.svg";
import promentor from "../../assets/promentor-high-resolution-logo-transparent.png"
import { Form, Link } from "react-router";

const Register = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full bg-gray-50">
      
      <div className="hidden md:flex flex-col items-center justify-start bg-white p-8 rounded-lg shadow-md h-full">
        <img src={promentor} alt="logo" className="w-24 h-24 mb-6" />
        <img
          src={iilustration}
          alt="Illustration"
          className="w-full h-full object-contain"
        />
        <h6 className="font-sans text-blue-500 mt-7 text-center">
          Promentor! Linking Tomorrow's Leaders with Today's Experts
        </h6>
      </div>

      
      <div className="flex flex-col justify-center items-center px-6 md:px-12 bg-blue-300 h-full w-full">
        <h2 className="text-4xl font-semibold mb-4">Create an Account</h2>
        <h3 className="text-sm mb-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 underline">
            Login
          </Link>
        </h3>

        <form className="mt-8 space-y-4 w-full max-w-md">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
