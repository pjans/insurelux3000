import React from "react";
import {  Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/policies/">Policies</Link>
        </li>
        <li>
          <Link to="/add-policy/">Add policy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
