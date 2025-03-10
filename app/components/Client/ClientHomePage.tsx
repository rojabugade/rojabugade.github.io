"use client"; // Mark as Client Component

import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutMeSection from "./ClientAboutSection";
import ClientProjectsSection from "./ClientProjectSection";
import ContactSection from "./ClientContactSection";
import Footer from "./ClientFooter";
import { ProjectData } from "../Server/FetchGithub";

// Define props interface
interface ClientHomePageProps {
  projects?: ProjectData[]; // Make it optional with default value
}

const ClientHomePage: React.FC<ClientHomePageProps> = ({ projects = [] }) => {
  // Refs for sections to enable smooth scrolling
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  // Handler to scroll to a section smoothly
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  // Create scroll handler functions for each section
  const handleScrollToAbout = () => scrollToSection(aboutSectionRef);
  const handleScrollToProjects = () => scrollToSection(projectsSectionRef);
  const handleScrollToContact = () => scrollToSection(contactSectionRef);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar
        onScrollToAbout={handleScrollToAbout}
        onScrollToProjects={handleScrollToProjects}
        onScrollToContact={handleScrollToContact}
      />

      <main>
        <HeroSection handleScrollToAbout={handleScrollToAbout} handleScrollToContact={handleScrollToContact} />
        <div ref={aboutSectionRef}>
          <AboutMeSection />
        </div>

        <div ref={projectsSectionRef}>
          {/* Pass the projects data to the ClientProjectsSection */}
          <ClientProjectsSection projects={projects} />
        </div>

        <div ref={contactSectionRef}>
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClientHomePage;
