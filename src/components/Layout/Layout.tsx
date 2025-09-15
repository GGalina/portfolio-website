import React from "react";
import Navbar from "../Navbar/Navbar";
import { Main, Footer } from "./Layout.styles";


interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme, isDarkMode }) => {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Main>
        {children}
      </Main>
      <Footer>© 2025 Halyna Hryn. All rights reserved.</Footer>
    </>
  );
};

export default Layout;
