import { Certifications } from "./components/Certification-Showcase";
import { ContactCard } from "./components/ContactCard";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import ProjectCards from "./components/project-card";
import ProjectShowcase from "./components/Project-Showcase";
import SkillsShowcase from "./components/Skills-Showcase";
import Timeline from "./components/Timeline";

export default function App() {
  return (
    <div id="home" className="min-h-screen relative">
      <div className="absolute top-0 z-[-2] h-full w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Landing Page */}
      <Landing />

      {/* Projects */}
      <div id="projects" className="min-h-screen">
        <h1 className="text-5xl mt-8 text-primary w-full text-center h-full pt-10 transition-all duration-300 hover:scale-110">
          Project Showcase
        </h1>
        <ProjectCards />
      </div>

      {/* Education */}
      <div id="education" className="min-h-screen pt-20">
        <h1 className="text-5xl text-primary w-full text-center h-full pb-16 transition-all duration-300 hover:scale-110">
          Experience and Education
        </h1>
        <Timeline />
      </div>

      {/* Skills */}
      <div id="skills" className="w-full pt-24">
        <h1 className="text-5xl text-primary w-full text-center h-full transition-all duration-300 hover:scale-110">
          Skills
        </h1>
        <SkillsShowcase />
      </div>

      {/* Certifications */}
      <div id="certifications" className="w-full pt-24">
        <h1 className="text-5xl text-primary w-full text-center h-full transition-all duration-300 hover:scale-110">
          Certifications
        </h1>
        <Certifications />
      </div>

      {/* Contact */}
      <div id="contact" className="w-full py-5">
        <h1 className="text-5xl text-primary w-full text-center mb-10 transition-all duration-300 hover:scale-110">
          Get In Touch
        </h1>
        <div className="container mb-10 mx-auto px-4">
          <ContactCard />
        </div>
      </div>

      {/* Footer */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
