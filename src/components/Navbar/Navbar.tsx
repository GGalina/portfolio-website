import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";
import { Nav, NavLinks, ToggleContainer } from "./Navbar.styles";

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const { t } = useTranslation();

  return (
    <Nav isDark={isDarkMode}>
      {/* Logo on the left */}
      <Logo />

      {/* Navigation links */}
      <NavLinks isDark={isDarkMode}>
        <Link to="/">{t("nav.home")}</Link>
        <Link to="/about">{t("nav.about")}</Link>
        <Link to="/projects">{t("nav.projects")}</Link>
        <Link to="/contact">{t("nav.contact")}</Link>
      </NavLinks>

      {/* Right-aligned toggles */}
      <ToggleContainer>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <LanguageToggle isDark={isDarkMode} />
      </ToggleContainer>
    </Nav>
  );
};

export default Navbar;
