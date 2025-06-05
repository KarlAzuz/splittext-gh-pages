import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function Home() {
  return <div className="page-content">Home Page</div>;
}
function About() {
  return <div className="page-content">About Page</div>;
}
function Work() {
  return <div className="page-content">Work Page</div>;
}
function Blog() {
  return <div className="page-content">Blog Page</div>;
}
function Contact() {
  return <div className="page-content">Contact Page</div>;
}

function App() {
  return (
    <Router basename="/splittext-gh-pages">
      <div className="app-root">
        <nav className="top-nav">
          <div className="nav-logo">MySite</div>
          <div className="nav-links">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/work" className="nav-link">
              Work
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
