import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

import { customTheme } from "./themeConfig";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
