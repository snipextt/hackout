import { useState } from "react";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import themes from "./_themes";
import Header from "./components/Header";
import Feed from "./components/Feed";

function App() {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  return (
    <ThemeProvider theme={themes[currentThemeIndex]}>
      <CssBaseline />
      <Header />
      <Feed />
    </ThemeProvider>
  );
}

export default App;
