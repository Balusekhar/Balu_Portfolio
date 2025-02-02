import React from "react";
import { SlideTabsExample } from "./SlideTabs";
import ShimmerButton from "./ui/shimmer-button";
import Header from "./Header";
import profilePhoto from "../assets/balu_main.png";
import { Dribbble, Linkedin, Twitter } from "lucide-react";

function Landing() {
  return (
    <div className="h-screen bg-white w-screen flex flex-col">
      {/* Header - Now left-aligned */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 flex-1 flex items-center">
        <div className="flex flex-col gap-8">
          <div className="flex items-center">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>

          <h1 className="heading-text text-[55px] leading-[66px] font-manrope font-normal max-w-[1200px]">
            I’m Tirupati Balu Chandrasekhar, a Full Stack Web Developer
            specializing in React, Next.js and cloud-based applications.
          </h1>

          <p className="description-text text-lg font-normal leading-[30px] font-manrope max-w-[800px]">
            I enjoy building practical and efficient web solutions, leveraging
            my experience in frontend frameworks, backend integrations, and AWS
            services for seamless performance.
          </p>

          <div className="flex gap-4">
            <ShimmerButton
              className="w-[200px] h-[56px] shadow-2xl"
              onClick={() => window.open("/Balu_Resume.pdf", "_blank")}>
              <span className="whitespace-pre-wrap text-center text-lg font-medium leading-none tracking-tight text-white">
                Resume
              </span>
            </ShimmerButton>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landing;
