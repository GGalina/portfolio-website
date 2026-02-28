import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Skills from "../../pages/Skills/Skills";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import { SectionRefs } from "../../types/sections";

const Layout: React.FC = () => {
  // Section refs for smooth scrolling
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const sectionRefs: SectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    contact: contactRef,
  };

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />

      <main>
        <section id="hero" ref={homeRef}><Home /></section>
        <section id="about" ref={aboutRef}><About /></section>
        <section id="skills" ref={skillsRef}><Skills /></section>
        <section id="projects" ref={projectsRef}><Projects /></section>
        <section id="contact" ref={contactRef}><Contact /></section>
      </main>

      <Footer />
    </>
  );
};

export default Layout;