import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../Logo/Logo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { SectionRefs } from '../../types/sections';
import { Nav, NavLinks, ToggleContainer, NavLinkButton } from './Navbar.styles';
import { useScrollToSection } from '../../hooks/useScrollToSection';

interface NavbarProps {
  sectionRefs: SectionRefs;
}

const Navbar: React.FC<NavbarProps> = ({ sectionRefs }) => {
  const { t } = useTranslation();
  const scrollToSection = useScrollToSection();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <Nav>
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
        <ThemeToggle />
        <LanguageToggle />
      </ToggleContainer>
    </Nav>
  );
};

export default Navbar;
