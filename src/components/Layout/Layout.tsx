import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import { SectionRefs } from "../../@types/sections";

interface LayoutProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Layout: React.FC<LayoutProps> = ({ toggleTheme, isDark }) => {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sectionRefs: SectionRefs = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} sectionRefs={sectionRefs} />

      <main>
        <section id="hero" ref={homeRef}>
          <Home />
        </section>

        <section id="about" ref={aboutRef}>
          <About />
        </section>

        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>

        <section id="contact" ref={contactRef}>
          <Contact />
        </section>
      </main>

      <Footer $isDark={isDark} />
    </>
  );
};

export default Layout;
