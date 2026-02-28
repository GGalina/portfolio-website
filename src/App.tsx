import { GlobalStyle } from "./styles/globalStyles";
import Layout from "./components/Layout/Layout";
import { AppThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <AppThemeProvider>
      <GlobalStyle />
      <Layout />
    </AppThemeProvider>
  );
};

export default App;