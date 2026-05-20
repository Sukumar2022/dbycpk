import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="poppins h-[8vh] w-full px-8 flex justify-between items-center bg-white shadow-md relative z-50">
      {/* Logo */}
      <Link to="/">
        <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
      </Link>

      {/* Desktop Links - Visible on md screens and up */}
      <div className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className="text-lg font-medium hover:text-blue-600 transition"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg font-medium hover:text-blue-600 transition"
        >
          About Us
        </Link>
        <Link
          to="/courses"
          className="text-lg font-medium hover:text-blue-600 transition"
        >
          Courses
        </Link>
        <Link
          to="/contact"
          className="text-lg font-medium hover:text-blue-600 transition"
        >
          Contact
        </Link>
        <Link to="tel:+7003014415">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Join Now
          </button>
        </Link>
      </div>

      {/* Mobile Toggle Button - Visible only on small screens */}
      <div className="md:hidden flex items-center z-[1001]">
        <button
          onClick={() => {
            console.log("Button clicked!"); // Debugging line
            setIsOpen(!isOpen);
          }}
          className="text-3xl focus:outline-none relative"
        >
          <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-[10vh] left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out transform ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} md:hidden`}
      >
        <ul className="flex flex-col items-center py-8 space-y-6">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="tel:+7003014415">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg">
                Enroll Today
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
