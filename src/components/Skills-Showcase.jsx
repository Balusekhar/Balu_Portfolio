import skills from "@/data/skills";
import React from "react";

export default function SkillsShowcase() {
  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-6xl mx-auto">
        {/* Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 text-center text-white bg-[#121212] border border-gray-500 rounded-lg shadow-sm">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
