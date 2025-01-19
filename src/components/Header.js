import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Mendapatkan path aktif saat ini

  return (
    <nav className="bg-black p-4 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link
              to="/"
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
              to="/portfolio"
              className={`px-4 py-2 rounded-md transition-all ${
                location.pathname === "/portfolio"
                  ? "font-extrabold"
                  : "hover:font-extrabold"
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
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
    </nav>
  );
}

export default Header;

