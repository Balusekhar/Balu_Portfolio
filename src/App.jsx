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
      {/* Landing Page */}

      <Landing />

      {/* Projects */}
      <div id="projects" className="min-h-screen bg-secondary">
        <div className="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
          <h1 className="text-3xl sm:text-5xl sm:leading-[60px] font-medium text-primary max-w-full text-left h-full pb-5">
            Selected Projects
          </h1>
          <p className="description-text lg:text-lg text-base font-normal leading-relaxed lg:leading-[30px] font-manrope max-w-[800px] pb-10">
            Explore my curated projects, highlighting my focus on building
            functional and efficient web solutions.
          </p>
          <div className="max-w-6xl">
            <ProjectCards />
          </div>
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
