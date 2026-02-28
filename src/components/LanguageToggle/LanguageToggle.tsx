import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageWrapper, LanguageButton, Dropdown, DropdownItem } from './LanguageToggle.styles';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ua', label: 'UA' },
  { code: 'ru', label: 'RU' },
];

const LanguageToggle: React.FC = () => {
  const { i18n, ready } = useTranslation(); // ready ensures i18n is initialized
  const [open, setOpen] = useState(false);

  // Persist language in localStorage
  const [storedLanguage, setStoredLanguage] = useLocalStorage<string>('language', 'en');

  // Apply stored language once i18n is ready
  useEffect(() => {
    if (!ready) return;
    if (storedLanguage && storedLanguage !== i18n.resolvedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [ready, i18n, storedLanguage]);

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleChangeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setStoredLanguage(code);
    setOpen(false);
  };

  // Hook returns a ref that closes the dropdown on outside click
  const wrapperRef = useClickOutside<HTMLDivElement>(() => setOpen(false));

  const currentLanguage = useMemo(
    () => languages.find((lang) => lang.code === i18n.resolvedLanguage)?.label ?? 'EN',
    [i18n.resolvedLanguage]
  );

  return (
    <LanguageWrapper ref={wrapperRef}>
      <LanguageButton onClick={toggleDropdown}>{currentLanguage}</LanguageButton>

      <AnimatePresence>
        {open && (
          <Dropdown
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((lang) => (
              <DropdownItem key={lang.code} onClick={() => handleChangeLanguage(lang.code)}>
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
