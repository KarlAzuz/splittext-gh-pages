import React from "react";
import { createRoot } from "react-dom/client";
import FallingText from "./FallingText";
import "./FallingText.css";

const demoText = "This is a demo of FallingText with highlighted words and physics!";
const highlightWords = ["FallingText", "highlighted", "physics"];

const root = createRoot(document.getElementById("root"));
root.render(
  <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: 600, height: 300 }}>
      <FallingText
        text={demoText}
        highlightWords={highlightWords}
        highlightClass="highlighted"
        trigger="auto"
        backgroundColor="#f0f0f0"
        wireframes={false}
        gravity={1}
        mouseConstraintStiffness={0.2}
        fontSize="2rem"
      />
    </div>
  </div>
);
