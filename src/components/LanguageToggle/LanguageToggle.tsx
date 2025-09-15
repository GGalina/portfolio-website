import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  LanguageWrapper,
  LanguageButton,
  DropdownItem,
} from "./LanguageToggle.styles";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", label: "EN" },
  { code: "ua", label: "UA" },
  { code: "ru", label: "RU" },
];

const LanguageToggle: React.FC<{ isDark?: boolean }> = ({ isDark }) => {
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

  const currentLanguage = languages.find(
    (lang) => lang.code === i18n.resolvedLanguage
  )?.label;

  return (
    <LanguageWrapper ref={wrapperRef}>
      <LanguageButton onClick={toggleDropdown} isDark={isDark}>
        {currentLanguage}
      </LanguageButton>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ position: "absolute", top: "110%", right: 0 }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageWrapper>
  );
};

export default LanguageToggle;
