import React from "react";
import { motion } from "framer-motion";
import { ToggleWrapper, Knob } from "./ThemeToggle.styles";

interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
    return (
        <ToggleWrapper isDark={isDarkMode} onClick={toggleTheme}>
            <motion.div
                animate={{ x: isDarkMode ? 30 : 0 }} // smooth sliding using numeric x
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <Knob isDark={isDarkMode} />
            </motion.div>
        </ToggleWrapper>
    );
};

export default ThemeToggle;