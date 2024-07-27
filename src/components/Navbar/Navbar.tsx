import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">Yummy</div>
      <div className="links">
        <ul className="nav-links">
          <li>
            <Link to="/">Popular Plates</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/ingredients">Ingredients</Link>
          </li>
        </ul>
      </div>
      <button className="toggle ">X</button>
    </nav>
  );
}
