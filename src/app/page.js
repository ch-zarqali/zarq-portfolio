"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import PortfolioSection from "@/components/PortfolioSection";
import PreviousProjectsSection from "@/components/PreviousProjectsSection";
import ContactSection from "@/components/ContactSection";
import NavigationDock from "@/components/NavigationDock";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sections = ["home", "about", "resume", "portfolio", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="portfolio-scroll-container">
      <div className="portfolio-blocks-wrapper">
        {/* Block 1: Hero */}
        <section id="home" className="portfolio-card-block hero-block">
          <HeroSection onNavigate={scrollToSection} />
        </section>

        {/* Block 2: About Me */}
        <section id="about" className="portfolio-card-block">
          <AboutSection />
        </section>

        {/* Block 3: Resume */}
        <section id="resume" className="portfolio-card-block">
          <ResumeSection />
        </section>

        {/* Block 4: Portfolio */}
        <section id="portfolio" className="portfolio-card-block">
          <PortfolioSection />
        </section>

        {/* Block 5: Previous Projects */}
        <section id="previous-projects" className="portfolio-card-block">
          <PreviousProjectsSection />
        </section>

        {/* Block 6: Contact */}
        <section id="contact" className="portfolio-card-block">
          <ContactSection />
        </section>
      </div>

      {/* Floating Right Yellow Navigation Dock */}
      <NavigationDock
        activeTab={activeSection}
        onTabChange={scrollToSection}
      />
    </main>
  );
}
