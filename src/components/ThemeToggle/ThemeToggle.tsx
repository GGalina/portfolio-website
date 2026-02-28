import React from 'react';
import { motion } from 'framer-motion';
import {
  ToggleWrapper,
  ToggleTrack,
  ToggleKnob,
  TrackIconLeft,
  TrackIconRight,
} from './ThemeToggle.styles';
import { useTheme } from '../../context/ThemeContext';

const SunIcon = () => (
  <svg
    fill="currentColor"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M12 17.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1.5a7 7 0 100-14 7 7 0 000 14zm12-7a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h2.5A.75.75 0 0124 12zM4 12a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h2.5A.75.75 0 014 12zm16.485-8.485a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 01-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM6.343 17.657a.75.75 0 010 1.06l-1.768 1.768a.75.75 0 11-1.06-1.06l1.767-1.768a.75.75 0 011.061 0zM12 0a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0V.75A.75.75 0 0112 0zm0 20a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0112 20zM3.515 3.515a.75.75 0 011.06 0l1.768 1.768a.75.75 0 11-1.06 1.06L3.515 4.575a.75.75 0 010-1.06zm14.142 14.142a.75.75 0 011.06 0l1.768 1.768a.75.75 0 01-1.06 1.06l-1.768-1.767a.75.75 0 010-1.061z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    width="16"
    height="16"
    fill="currentColor"
  >
    <path d="M320 80C338.3 80 356 82 373.1 85.9C376.4 86.6 378.9 89.4 379.3 92.7C379.7 96 378 99.3 374.9 100.8C309.1 133.6 264 201.5 264 279.9C264 395.4 365.4 488.4 480.1 479.3C483.5 479 486.6 480.9 488 484C489.4 487.1 488.7 490.7 486.2 493C443.1 534.5 384.5 560 320 560C187.5 560 80 452.5 80 320C80 187.5 187.5 80 320 80z" />
  </svg>
);

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ToggleWrapper onClick={toggleTheme}>
      <ToggleTrack>
        <TrackIconLeft>{isDark && <MoonIcon />}</TrackIconLeft>
        <TrackIconRight>{!isDark && <SunIcon />}</TrackIconRight>

        <motion.div
          animate={{ x: isDark ? 30 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <ToggleKnob />
        </motion.div>
      </ToggleTrack>
    </ToggleWrapper>
  );
};

export default ThemeToggle;
