import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function Certifications() {
  return (
    <div className="flex justify-center items-start h-[25rem] flex-col">
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
  );
}
