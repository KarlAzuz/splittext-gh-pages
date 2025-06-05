import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import CardSwap, { Card } from "./CardSwap";
import Dock from "./Dock";
import { VscHome, VscBriefcase, VscMail } from "react-icons/vsc";
import Squares from "./Squares";

function DockNav() {
  const navigate = useNavigate();
  const items = [
    { icon: <VscHome size={22} />, label: "Home", onClick: () => navigate("/") },
    { icon: <VscBriefcase size={22} />, label: "Jobs", onClick: () => navigate("/jobs") },
    { icon: <VscMail size={22} />, label: "Contact", onClick: () => navigate("/contact") }
  ];
  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
}

function App() {
  return (
    <Router basename="/splittext-gh-pages">
      <div className="app-root">
        <div className="background-squares">
          <Squares 
            speed={0.5} 
            squareSize={40}
            direction="diagonal"
          />
        </div>
        <div className="content">
          <div className="main-content">
            <Routes>
              <Route path="/" element={
                <div className="centered-content">
                  <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                  >
                    <Card>
                      <h3>Welcome to the Homepage</h3>
                      <p>Discover our site with a beautiful retro dark theme and interactive cards.</p>
                    </Card>
                    <Card>
                      <h3>Explore Jobs</h3>
                      <p>See our current job openings and join our amazing team!</p>
                    </Card>
                    <Card>
                      <h3>Contact Us</h3>
                      <p>Have questions? Reach out to us anytime.</p>
                    </Card>
                  </CardSwap>
                </div>
              } />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <DockNav />
        </div>
      </div>
    </Router>
  );
}

export default App;