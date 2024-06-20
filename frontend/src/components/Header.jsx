import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">E-Parking System</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/about"
                className="text-lg font-medium hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-medium hover:text-yellow-300 transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
