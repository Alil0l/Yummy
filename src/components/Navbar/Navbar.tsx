import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ visible }: Visible) {
  return (
    <nav className={visible ? "custHidden" : ""}>
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
    </nav>
  );
}

interface Visible {
  visible: boolean;
}
