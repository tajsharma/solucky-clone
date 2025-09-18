// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import whitemenuIcon from "./src-assets/navbar-dropdown-icon-white.png"; // adjust path if needed
import blackmenuIcon from "./src-assets/navbar-dropdown-icon-black.png";

const Navbar = () => {
  const location = useLocation();

  // pages that use the "white" theme for the navbar
  const isWhiteNavbar =
    location.pathname === "/events" || location.pathname === "/media";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Close the menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
    // window.scrollTo(0, 0); // optional: jump to top on nav
  }, [location.pathname]);

  // Keep isMobile in sync and auto-close when leaving mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 600;
      setIsMobile(mobile);
      if (!mobile) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close when a user taps/clicks anywhere inside the list on mobile
  const handleNavClick = () => {
    if (isMobile) setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isWhiteNavbar ? "white-navbar" : ""}`}>
      {isMobile && (
        <img
          src={isWhiteNavbar ? whitemenuIcon : blackmenuIcon}
          alt="menu"
          className="menu-toggle-icon"
          onClick={toggleMenu}
        />
      )}

      <div className="header text-dm-serif">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <h1 className="title">solucky</h1>
        </Link>
        <h3 className="titleCaption">
          <i>est. 2020</i>
        </h3>
      </div>

      <ul
        className={`navList ${isMobile ? (isMenuOpen ? "show" : "hide") : ""}`}
        onClick={handleNavClick}
      >
        <li>
          <Link to="/shop" className={location.pathname === "/shop" ? "active" : ""}>
            shop
          </Link>
        </li>
        <li>
          <Link
            to="/magazine"
            className={location.pathname === "/magazine" ? "active" : ""}
          >
            magazine
          </Link>
        </li>
        <li>
          <Link to="/media" className={location.pathname === "/media" ? "active" : ""}>
            media
          </Link>
        </li>
        <li>
          <Link
            to="/collabs"
            className={location.pathname === "/collabs" ? "active" : ""}
          >
            collabs
          </Link>
        </li>
        <li>
          <Link
            to="/events"
            className={location.pathname === "/events" ? "active" : ""}
          >
            events
          </Link>
        </li>
        <li>
          <Link to="/team" className={location.pathname === "/team" ? "active" : ""}>
            team
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            about
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
