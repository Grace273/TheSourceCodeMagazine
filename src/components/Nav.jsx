import { useState } from "react";
import logo from "../assets/images/logo-placeholder.svg";

const Nav = ({ onClickHomepage, onClickAbout, onClickArchives }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (handler) => {
    setMenuOpen(false);
    handler();
  };

  return (
    <nav className="navbar">
      <a
        className="nav-brand"
        onClick={() => handleNavClick(onClickHomepage)}
      >
        <img id="nav-logo" alt="Site logo placeholder" src={logo} />
      </a>

      <button
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links${menuOpen ? " open" : ""}`}>
        <a
          className="nav-link"
          id="about-link"
          onClick={() => handleNavClick(onClickAbout)}
        >
          About Us
        </a>
        <a
          className="nav-link"
          id="archive-link"
          onClick={() => handleNavClick(onClickArchives)}
        >
          Archive
        </a>
      </div>
    </nav>
  );
};

export default Nav;
