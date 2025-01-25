import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black p-4 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold">xsmntR</div>

        {/* Hamburger Icon for mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`lg:flex lg:space-x-8 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-8">
            <li>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`px-4 py-2 rounded-md transition-all ${
                  location.pathname === "/"
                    ? "font-extrabold"
                    : "hover:font-extrabold"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`px-4 py-2 rounded-md transition-all ${
                  location.pathname === "/about"
                    ? "font-extrabold"
                    : "hover:font-extrabold"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                onClick={closeMobileMenu}
                className={`px-4 py-2 rounded-md transition-all ${
                  location.pathname === "/project"
                    ? "font-extrabold"
                    : "hover:font-extrabold"
                }`}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`px-4 py-2 rounded-md transition-all ${
                  location.pathname === "/contact"
                    ? "font-extrabold"
                    : "hover:font-extrabold"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
