import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import certifications from "../assets/certifications.png";

export function Certifications() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center mt-10">
      {/* Left Column - 100% on mobile, 70% on tablet and larger screens */}
      <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
        <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl md:max-w-5xl mb-10">
          I've achieved the{" "}
          <LinkPreview
            url="https://www.credly.com/badges/325b4307-3dab-410f-843b-38931ef603b5/public_url"
            className="font-bold text-slate-200">
            AWS Certified Cloud Practitioner
          </LinkPreview>{" "}
          certification, demonstrating my foundational knowledge of cloud
          computing.
        </div>
        <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl md:max-w-5xl mb-10">
          I've completed certifications in{" "}
          <LinkPreview
            url="https://drive.google.com/drive/folders/1SKBECAWf0gCebAdAmrrkHX4opsYibQJT"
            className="font-bold text-slate-200">
            Full Stack Web Development from 100xdevs
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            url="https://udemy-certificate.s3.amazonaws.com/image/UC-eddb3602-30aa-4259-a8ed-360c82893575.jpg"
            className="font-bold text-slate-200">
            Git and GitHub from Udemy
          </LinkPreview>{" "}
          expanding my skills in web development and version control.
        </div>
        <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl md:max-w-5xl">
          I've earned certifications as a{" "}
          <LinkPreview
            url="https://drive.google.com/file/d/10GczpW9vpxgf6UPI8Vn6IiEozW-YJ9-N/view?usp=sharing"
            className="font-bold text-slate-200">
            Senior System Architect from Pega Academy
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            url="https://drive.google.com/file/d/1SbwctIW8pF5-4WFJrQVR7fndoNJP71JZ/view"
            className="font-bold text-slate-200">
            System Architect from Pega Academy
          </LinkPreview>{" "}
          giving me a solid foundation in Pega system design and implementation.
        </div>
      </div>

      {/* Right Column - 0% on mobile, 30% on tablet and larger screens */}
      <div className="hidden md:block col-span-3 flex justify-center">
        <img
          src={certifications}
          alt="Certifications"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
