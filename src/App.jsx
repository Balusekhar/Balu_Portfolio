import Lenis from "lenis";
import { Certifications } from "./components/Certification-Showcase";
import { ContactCard } from "./components/ContactCard";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import ProjectCards from "./components/Project-Card";
import SkillsShowcase from "./components/Skills-Showcase";
import Timeline from "./components/Timeline";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <div id="home" className="min-h-screen relative overflow-x-hidden">
      {/* Landing Page */}
      <Landing />

      {/* Projects */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="container mx-auto px-6 sm:px-12 py-10 sm:py-20">
          <h1 className="text-3xl sm:text-5xl sm:leading-[60px] font-medium text-primary max-w-full text-left h-full pb-10">
            Selected Projects
          </h1>
          <div className="max-w-6xl">
            <ProjectCards />
          </div>
        </div>
      </motion.div>

      {/* Experience & Education */}
      <motion.div
        id="experience"
        className="container mx-auto px-6 sm:px-12 py-10 sm:py-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-start h-full pb-12 sm:pb-16">
          Education and Experience
        </h1>
        <div className="max-w-5xl mx-auto">
          <Timeline />
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="w-full h-full flex flex-col justify-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div id="skills" className="container mx-auto px-6 sm:px-12 py-10">
          <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-start">
            Skills
          </h1>
          <div className="max-w-6xl">
            <SkillsShowcase />
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        id="certifications"
        className="w-full flex flex-col justify-center h-full pt-6 px-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="container mx-auto px-6 sm:px-12 py-10">
          <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-start">
            Certifications
          </h1>
          <div>
            <Certifications />
          </div>
        </div>
      </motion.div>

      {/* Contact */}
      <motion.div
        id="contact"
        className="container mx-auto h-full px-6 sm:px-12 py-10 sm:py-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        <h1 className="text-3xl sm:text-5xl text-primary max-w-full text-start mb-10">
          Get In Touch
        </h1>
        <div className="container max-w-3xl mb-10">
          <ContactCard />
        </div>
      </motion.div>

      {/* Footer */}
      <div id="footer">
        <Footer />
      </div>
      <Analytics />
    </div>
  );
}
