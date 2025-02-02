import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react"; // Icon for the 3-dot menu

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm px-6 sm:px-24 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <a href="#" className="text-xl font-medium">
        Balu Chandrasekhar
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        <a href="#projects" className="text-gray-600 hover:text-black">
          Projects
        </a>
        <a href="#experience" className="text-gray-600 hover:text-black">
          Experience
        </a>
        <a href="#contact" className="text-gray-600 hover:text-black">
          Contact
        </a>
        <Button
          onClick={() => window.open("/Balu_Resume.pdf", "_blank")}
          variant="outline"
          className="rounded-full">
          Resume
        </Button>
      </nav>

      {/* Mobile Menu Button (3 dots) */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={28} />
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4 w-48 md:hidden">
          <a
            href="#projects"
            className="text-gray-600 hover:text-black"
            onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a
            href="#experience"
            className="text-gray-600 hover:text-black"
            onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-black"
            onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <Button
            onClick={() => window.open("/Balu_Resume.pdf", "_blank")}
            variant="outline"
            className="rounded-full">
            Resume
          </Button>
        </div>
      )}
    </header>
  );
}

export default Header;
