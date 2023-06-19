// Example: src/main.tsx

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n"; // <-- Importing the i18n configuration here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
