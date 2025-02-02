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
      <div id="projects" className="bg-secondary">
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
      <div
        id="experience"
        className="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
        <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-start h-full pb-16">
          Education and Experience
        </h1>
        <div className="max-w-5xl mx-auto">
          <Timeline />
        </div>
      </div>

      {/* Skills */}
      <div className="w-full bg-secondary h-[500px] flex flex-col justify-center">
        <div id="skills" className="container mx-auto px-6 sm:px-12 py-10">
          <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-start">
            Skills
          </h1>
          <div className="max-w-6xl">
            <SkillsShowcase />
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div id="certifications" className="w-full flex flex-col justify-center h-[700px] bg-stone-800 pt-6 px-4">
        <div className="container mx-auto px-6 sm:px-12 py-10">
          <h1 className="text-3xl sm:text-5xl text-white max-w-full text-start">
            Certifications
          </h1>
          <div className="">
            <Certifications />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
        <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-start mb-10">
          Get In Touch
        </h1>
        <div className="container max-w-3xl mb-10">
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
