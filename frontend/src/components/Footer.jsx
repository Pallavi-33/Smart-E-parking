import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
// import logo from "./logo.png"; // Import your project logo here

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 lg:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Project Logo
        <div className="mb-4 lg:mb-0">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div> */}
        {/* Project Description */}
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="mb-2">E-Parking System</p>
          <p className="text-sm text-gray-400">
            Revolutionizing the parking industry with innovative solutions.
          </p>
        </div>
        {/* Social Media Links */}
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="mb-2">Stay Connected:</p>
          <div className="flex items-center justify-center lg:justify-start">
            <a href="#" className="mr-4">
              <FaFacebook className="text-2xl text-gray-300 hover:text-white transition duration-300" />
            </a>
            <a href="#" className="mr-4">
              <FaTwitter className="text-2xl text-gray-300 hover:text-white transition duration-300" />
            </a>
            <a href="#" className="mr-4">
              <FaInstagram className="text-2xl text-gray-300 hover:text-white transition duration-300" />
            </a>
          </div>
        </div>
        {/* Contact Information */}
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <p className="mb-2">Contact Us:</p>
          <p className="mb-1 text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: +1234567890</p>
        </div>
        {/* Navigation Links */}
        <div className="text-center lg:text-right">
          <Link to="/about" className="text-gray-400 hover:text-white mr-4">
            About
          </Link>
          <Link to="/services" className="text-gray-400 hover:text-white mr-4">
            Services
          </Link>
          <Link to="/contact" className="text-gray-400 hover:text-white mr-4">
            Contact
          </Link>
        </div>
      </div>
      {/* Bottom Text */}
      <div className="container mx-auto mt-4 text-center">
        <p className="text-gray-400">
          © 2024 E-Parking System by ABESEC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
