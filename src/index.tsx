import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Prevent right mouse click from opening browser
// context menu in order to be able to flag
document.addEventListener("contextmenu", (event) => event.preventDefault());

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
