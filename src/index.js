import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from "webfontloader";

import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

WebFont.load({
  google: {
    families: [
      "Fredoka One: 400",
      "Lato: 300,400,700,900",
      "sans-serif",
      "Nunito: 400,500,600,700,800",
    ],
  },
});

ReactDOM.render(
  // contains all logic for toggle function, which theme to load when rendering and inject theme to all child components
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
