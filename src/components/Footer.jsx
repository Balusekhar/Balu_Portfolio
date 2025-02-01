import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { FaMediumM, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-6 py-6 bg-transparent text-white">
      {/* Left Section: Copyright */}
      <div className="text-sm">
        © 2024 Balu Chandrasekhar. All Rights Reserved.
      </div>

      {/* Middle Section: Header Links */}
      <nav className="flex gap-8 text-sm me-24">
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

      {/* Right Section: Social Links */}
      <div className="flex gap-4">
        <a
          href="mailto:balusekhar8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400">
          <MdOutlineMailOutline />
        </a>
        <a
          href="https://github.com/Balusekhar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400">
          <SiGithub />
        </a>
        <a
          href="https://medium.com/@balusekhar8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400">
          <FaMediumM />
        </a>
        <a
          href="https://www.linkedin.com/in/baluchandrasekhar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-gray-400">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
