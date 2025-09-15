import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme, darkTheme } from "./styles/themes";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<h1 style={{ textAlign: "center", marginTop: "100px" }}>404 - Page Not Found</h1>}
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
