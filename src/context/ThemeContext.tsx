import { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/themes";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // Persist theme in localStorage; default to dark
    const [isDark, setIsDark] = useLocalStorage<boolean>("theme", true);

    const toggleTheme = () => setIsDark((prev) => !prev);

    return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used inside AppThemeProvider");
    }
    return context;
};