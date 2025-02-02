import { Certifications } from "./components/Certification-Showcase";
import { ContactCard } from "./components/ContactCard";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import ProjectCards from "./components/Project-Card";
import SkillsShowcase from "./components/Skills-Showcase";
import Timeline from "./components/Timeline";

export default function App() {
  return (
    <div id="home" className="min-h-screen relative overflow-x-hidden">
      {/* Background */}
      <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Landing Page */}
      <Landing />

      {/* Projects */}
      <div id="projects" className="min-h-screen px-4">
        <h1 className="text-3xl sm:text-5xl mt-8 text-primary max-w-full text-center h-full pt-10 transition-all duration-300 hover:scale-110">
          Project Showcase
        </h1>
        <div className="max-w-5xl mx-auto">
          <ProjectCards />
        </div>
      </div>

      {/* Experience & Education */}
      <div id="experience" className="min-h-screen pt-20 px-4">
        <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-center h-full pb-16 transition-all duration-300 hover:scale-110">
          Experience and Education
        </h1>
        <div className="max-w-5xl mx-auto">
          <Timeline />
        </div>
      </div>

      {/* Skills */}
      <div id="skills" className="w-full pt-24 px-4">
        <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-center h-full transition-all duration-300 hover:scale-110">
          Skills
        </h1>
        <div className="max-w-5xl mx-auto">
          <SkillsShowcase />
        </div>
      </div>

      {/* Certifications */}
      <div id="certifications" className="w-full pt-24 px-4">
        <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-center h-full transition-all duration-300 hover:scale-110">
          Certifications
        </h1>
        <div className="max-w-5xl mx-auto">
          <Certifications />
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="w-full py-5 px-4">
        <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-center mb-10 transition-all duration-300 hover:scale-110">
          Get In Touch
        </h1>
        <div className="container max-w-3xl mx-auto px-4 mb-10">
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
