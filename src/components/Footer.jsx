import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row font-manrope justify-between items-center px-6 py-6 bg-transparent text-primary border-t border-gray-200">
      {/* Left Section: Copyright */}
      <div className="text-sm mb-4 md:mb-0">
        © 2025 Balu Chandrasekhar. All Rights Reserved.
      </div>

      {/* Right Section: Nav Links */}
      <nav className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-center">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#experience" className="hover:underline">
          Experience
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </footer>
  );
};

export default Footer;