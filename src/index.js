import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

// Create the root element using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
