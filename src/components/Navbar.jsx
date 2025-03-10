import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <span>StoreHouse</span>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/cart" className="nav-link">
        Cart
      </Link>
    </div>
  );
};

export default Navbar;
