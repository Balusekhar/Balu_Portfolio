import React from "react";
import profilePhoto from "../assets/balu_main.png";
import { ShimmerButton } from "./ui/shimmer-button";
import Header from "./Header";

function Landing() {
  return (
    <div className="min-h-screen bg-white w-full flex flex-col overflow-x-hidden ">
      {/* Header - Left-aligned */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-6 sm:px-12 flex-1 flex items-center pb-8 pt-24 sm:pt-32">
        <div className="flex flex-col gap-10 lg:gap-6">
          {/* Profile Image */}
          <div className="flex items-center">
            <img
              src={profilePhoto}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover mt-6 sm:mt-0"
            />
          </div>

          {/* Heading */}
          <h1 className="heading-text text-4xl sm:text-[55px] lg:text-[55px] lg:leading-[66px] leading-tight sm:leading-[66px] font-manrope font-normal max-w-[1200px]">
            I’m Tirupati Balu Chandrasekhar, a Full Stack Web Developer
            specializing in React, Next.js, and Typescript.
          </h1>

          {/* Description */}
          <p className="description-text lg:text-lg text-base font-normal leading-relaxed lg:leading-[30px] font-manrope max-w-[800px]">
            I enjoy building practical and efficient web solutions, leveraging
            my experience in frontend frameworks, backend integrations, and AWS
            services for seamless performance.
          </p>

          {/* Resume Button */}
          <div className="flex gap-4">
            <ShimmerButton
              className="w-[180px] sm:w-[200px] h-[50px] sm:h-[56px] shadow-2xl"
              onClick={() => window.open("/Balu_Resume.pdf", "_blank")}>
              <span className="text-center text-lg font-medium leading-none tracking-tight text-white">
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
