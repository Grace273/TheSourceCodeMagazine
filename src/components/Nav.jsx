import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-placeholder.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link className="nav-brand" to="/" onClick={closeMenu}>
        <img id="nav-logo" alt="Site logo placeholder" src={logo} />
      </Link>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        
      </button>

      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        <NavLink
          className="nav-link"
          id="about-link"
          to="/about"
          onClick={closeMenu}
        >
          About Us
        </NavLink>
        <NavLink
          className="nav-link"
          id="archive-link"
          to="/archives"
          onClick={closeMenu}
        >
          Archive
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
