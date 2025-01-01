import { Certifications } from "./components/Certification-Showcase";
import { ContactCard } from "./components/ContactCard";
import Landing from "./components/Landing";
import ProjectShowcase from "./components/Project-Showcase";
import SkillsShowcase from "./components/Skills-Showcase";
import Timeline from "./components/Timeline";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <Landing />
      <div className="min-h-screen">
        <h1 className="text-5xl text-primary w-full text-center h-full pt-10">
          Projects
        </h1>
        <ProjectShowcase />
        <ProjectShowcase />
        <ProjectShowcase />
      </div>
      <div className="min-h-screen">
        <h1 className="text-5xl text-primary w-full text-center h-full pt-10">
          Experience and Education
        </h1>
        <Timeline />
      </div>
      {/* Skills */}
      <div className="w-full">
        <h1 className="text-5xl text-primary w-full text-center h-full pt-10">
          Skills
        </h1>
        <SkillsShowcase />
      </div>
      {/* Certifications */}
      <div className="w-full">
        <h1 className="text-5xl text-primary w-full text-center h-full pt-10">
          Certifications
        </h1>
        <Certifications />
      </div>
      {/* Contact */}
      <div className="w-full py-24">
        <h1 className="text-5xl text-primary w-full text-center mb-16">
          Get In Touch
        </h1>
        <div className="container mx-auto px-4">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
