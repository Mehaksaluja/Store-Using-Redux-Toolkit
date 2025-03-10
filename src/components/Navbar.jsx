import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-4 bg-gray-800 text-white">
      <span className="text-2xl font-bold ml-5">DressStore</span>
      <div className="flex space-x-6 mr-5 text-lg text-white">
        <Link to="/" className="px-2 py-1 hover:text-gray-200">
          Home
        </Link>
        <Link to="/about" className="px-2 py-1 hover:text-gray-200">
          About
        </Link>
        <Link to="/contact" className="px-2 py-1 hover:text-gray-200">
          Contact
        </Link>
        <Link to="/cart" className="px-2 py-1 hover:text-gray-200">
          Cart
        </Link>
        <span className="px-2 py-1">Cart Items: 0</span>
      </div>
    </div>
  );
};

export default Navbar;
