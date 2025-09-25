import React, { useState, useRef, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  LanguageWrapper,
  LanguageButton,
  Dropdown,
  DropdownItem,
} from "./LanguageToggle.styles";

interface LanguageToggleProps {
  isDark: boolean;
}

const languages = [
  { code: "en", label: "EN" },
  { code: "ua", label: "UA" },
  { code: "ru", label: "RU" },
];

const LanguageToggle: React.FC<LanguageToggleProps> = ({ isDark }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChangeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  const currentLanguage = useMemo(
    () => languages.find((lang) => lang.code === i18n.resolvedLanguage)?.label,
    [i18n.resolvedLanguage]
  );

  return (
    <LanguageWrapper ref={wrapperRef}>
      <LanguageButton onClick={toggleDropdown} isDark={isDark}>
        {currentLanguage}
      </LanguageButton>

      <AnimatePresence>
        {open && (
          <Dropdown
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            isDark={isDark} // pass prop to styled-component
          >
            {languages.map((lang) => (
              <DropdownItem
                key={lang.code}
                onClick={() => handleChangeLanguage(lang.code)}
                isDark={isDark}
              >
                {lang.label}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </LanguageWrapper>
  );
};

export default LanguageToggle;
