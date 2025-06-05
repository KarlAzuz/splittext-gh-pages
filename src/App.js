import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Contact from "./pages/Contact";
import Dither from "./Dither";
import CardSwap, { Card } from "./CardSwap";

function App() {
  return (
    <Router basename="/splittext-gh-pages">
      <div className="app-root">
        <div className="background-dither">
          <Dither
            waveSpeed={0.07}
            waveFrequency={2.5}
            waveAmplitude={0.25}
            waveColor={[0.12, 0.14, 0.18]}
            colorNum={6}
            pixelSize={2}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.25}
          />
        </div>
        <div className="content">
          <nav className="main-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/jobs" className="nav-link">Jobs</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          <div className="main-content">
            <Routes>
              <Route path="/" element={
                <div style={{ height: '600px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
        </div>
      </div>
    </Router>
  );
}

export default App;