// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import whitemenuIcon from "./src-assets/navbar-dropdown-icon-white.png";
import blackmenuIcon from "./src-assets/navbar-dropdown-icon-black.png";

const navLinks = [
  { to: "/magazine", label: "magazine" },
  { to: "/collabs", label: "collabs" },
  { to: "/events", label: "events" },
  { to: "/shop", label: "shop" },
  { to: "/team", label: "team" },
  { to: "/about", label: "about" },
];

const Navbar = ({ isWhiteNavbar = true }) => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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

  const handleNavClick = () => {
    if (isMobile) setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${!isWhiteNavbar ? "white-navbar" : ""}`}>
      <div className="navbar-row">
        <div className="navbar-logo">
          <Link to="/" onClick={handleNavClick}>
            <span className="logo-title text-dm-serif">solucky</span>
            <span className="logo-caption text-dm-serif">est. 2020</span>
          </Link>
        </div>

        {isMobile && (
          <img
            src={isWhiteNavbar ? whitemenuIcon : blackmenuIcon}
            alt="menu"
            className="menu-toggle-icon"
            onClick={toggleMenu}
          />
        )}

        <div
          className={`navbar-right ${isMobile ? (isMenuOpen ? "show" : "hide") : ""}`}
        >
          <ul className="navList" onClick={handleNavClick}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={location.pathname === to ? "active" : ""}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-border" />
    </nav>
  );
};

export default Navbar;
