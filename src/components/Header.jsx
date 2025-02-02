import React from "react";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className=" w-full shadow-sm mx-auto px-24 py-6 flex justify-between items-center">
      <div className="text-xl font-medium">Balu Chandrasekhar</div>
      <nav className="flex gap-8 items-center">
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
         variant="outline" className="rounded-full">
          Resume
        </Button>
      </nav>
    </header>
  );
}

export default Header;
