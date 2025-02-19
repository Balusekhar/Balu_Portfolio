import skills from "@/data/skills";
import React from "react";

export default function SkillsShowcase() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="flex items-center gap-4 p-4 rounded-lg border border-dashed border-gray-200 hover:border-gray-300 transition-colors">
            <div className="h-12 w-12 relative shrink-0">
              <img
                src={skill.icon}
                alt={skill.name}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium text-foreground">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
