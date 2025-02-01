import React from "react";
import profilePhoto from "../assets/profile-pic.png";
import { SlideTabsExample } from "./SlideTabs";
import ShimmerButton from "./ui/shimmer-button";

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Header - Now left-aligned */}
      <header className="w-full py-4">
        <nav className="mx-auto">
          <SlideTabsExample />
        </nav>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-8">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-700">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Text */}
          <div className="space-y-6 mt-8">
            <h1 className="text-4xl md:text-6xl font-medium text-gray-400 leading-tight">
              Hi, I'm <span className="text-gray-200">Balu Chandrasekhar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
              Full Stack Developer passionate about building efficient and
              engaging web applications.
            </p>
          </div>

          {/* Shimmer Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            {/* Resume Button */}
            <ShimmerButton
              className="w-[200px] h-[56px] shadow-2xl"
              onClick={() => window.open("/Balu_Resume.pdf", "_blank")}>
              <span className="whitespace-pre-wrap text-center text-lg font-medium leading-none tracking-tight text-white">
                Resume
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
