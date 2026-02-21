import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { SectionRefs } from "../../types/sections";
import { Nav, NavLinks, ToggleContainer, NavLinkButton } from "./Navbar.styles";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  sectionRefs: SectionRefs;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, sectionRefs }) => {
  const { t } = useTranslation();

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  // Safe scroll function that handles null refs
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Nav $isDark={isDark}>
      <Logo />

      <NavLinks>
        {navItems.map((item) => (
          <NavLinkButton
            key={item.id}
            onClick={() => scrollToSection(sectionRefs[item.id as keyof SectionRefs])}
          >
            {item.label}
          </NavLinkButton>
        ))}
      </NavLinks>

      <ToggleContainer>
        <ThemeToggle $isDark={isDark} toggleTheme={toggleTheme} />
        <LanguageToggle $isDark={isDark} />
      </ToggleContainer>
    </Nav>
  );
};

export default Navbar;
