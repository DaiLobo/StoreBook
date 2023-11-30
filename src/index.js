import AppRouter from "App";
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "theme/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
  </React.StrictMode>
);
