import Navbar from "@/components/navbar";
import HeroSection from "@/app/sections/HeroSection";
import ProjectsSection from "@/app/sections/ProjectsSection";
import AboutSection from "@/app/sections/AboutSection";
import { getProjectData } from "@/lib/dataService";
import ContactSection from "./sections/ContactSection";

export default async function Home() {
  const projects = await getProjectData();
  return (
    <div className="font-sans relative min-h-screen">
      <div className="fixed z-50 flex flex-col items-center top-0 right-0 left-0 px-8 py-4 sm:px-20">
        <Navbar />
      </div>
      
      <section id="home" className="h-screen flex items-center justify-center px-8 sm:px-20">
        <HeroSection />
      </section>

      <section id="about" className="h-screen flex  px-8 sm:px-20">
        <AboutSection />
      </section>

      <section id="projects" className="py-20 px-8 sm:px-20">
        <ProjectsSection projects={projects} />
      </section>

      <section id="contact" className="py-20 px-8 sm:px-20">
        <ContactSection />
      </section>
    </div>
  );
}
