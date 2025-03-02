import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import App component
import "./index.css"; // Optional for global styles

// Make sure React is rendering inside `#root`
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
