import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/splittext-gh-pages">
      <div style={{ minHeight: '100vh' }}>
        <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
          <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Home</Link>
          <Link to="/jobs" style={{ color: "#fff", marginRight: "1rem" }}>Jobs</Link>
          <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
        </nav>
        <div style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;