import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./utils/theme";
import { Grid } from "./ui/Grid";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Grid />
      </>
    </ThemeProvider>
  );
};

export default App;
