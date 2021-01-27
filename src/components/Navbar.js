import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <li>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none", color: "white" }} to="/movies">
          Movies
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          About
        </Link>
      </li>
    </div>
  );
};
export default Navbar;
