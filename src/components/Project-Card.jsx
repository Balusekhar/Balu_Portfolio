import projects from "@/data/projects";
import { MoveUpRight } from "lucide-react";

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 gap-8 min-h-screen text-white">
      {projects.map((project) => (
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-8 text-white">
          {/* Left Grid */}
          <div className="flex flex-col mb-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-normal">
                {project.name}
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div
                onClick={() => window.open(project.website, "_blank")}
                className="flex cursor-pointer justify-between px-2 items-center border-b border-gray-800 pb-6 group">
                <span className="text-xl">Live Website</span>
                <MoveUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div
                onClick={() => window.open(project.source, "_blank")}
                className="flex justify-between items-center px-2 cursor-pointer border-b border-gray-800 pb-6 group">
                <span className="text-xl">Github</span>
                <MoveUpRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={project.image}
              alt="Project Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
