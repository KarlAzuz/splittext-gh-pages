import React from "react";
import StarBorder from "../StarBorder";

export default function Home() {
  return (
    <StarBorder as="section" className="home-section" color="cyan" speed="5s">
      {/* Home content handled by App.js carousel */}
    </StarBorder>
  );
}
