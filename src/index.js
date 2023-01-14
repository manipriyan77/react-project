// 1. Import react and react dom library
import React from "react";
import ReatDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// 2. Get a reference to the div with id
const el = document.getElementById("root");

// 3. Tell react to take control of that element
const root = ReatDOM.createRoot(el);

// 4. Show the component on the screen
root.render(<App />);
