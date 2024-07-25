import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Yummy</div>
      <div className="links">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/ingredients">Ingredients</Link>
          </li>
          <li>
            <Link to="/plates">Plates</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
