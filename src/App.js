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
import SpotlightCard from "./SpotlightCard";
import SplitText from "./SplitText";

function DockNav() {
  const navigate = useNavigate();
  const items = [
    {
      icon: (
        <SpotlightCard className="dock-spotlight" spotlightColor="rgba(0,229,255,0.13)">
          <span className="dock-icon-inner"><VscHome size={22} /></span>
        </SpotlightCard>
      ),
      label: "Home",
      onClick: () => navigate("/")
    },
    {
      icon: (
        <SpotlightCard className="dock-spotlight" spotlightColor="rgba(0,229,255,0.13)">
          <span className="dock-icon-inner"><VscBriefcase size={22} /></span>
        </SpotlightCard>
      ),
      label: "Jobs",
      onClick: () => navigate("/jobs")
    },
    {
      icon: (
        <SpotlightCard className="dock-spotlight" spotlightColor="rgba(0,229,255,0.13)">
          <span className="dock-icon-inner"><VscMail size={22} /></span>
        </SpotlightCard>
      ),
      label: "Contact",
      onClick: () => navigate("/contact")
    }
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
                    <SpotlightCard className="custom-spotlight-card home-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <Card>
                        <div className="card-inner">
                          <h3>
                            <SplitText
                              text="Welcome to the Homepage"
                              className="text-2xl font-semibold text-center"
                              delay={60}
                              duration={0.7}
                              ease="power3.out"
                              splitType="chars"
                              from={{ opacity: 0, y: 40 }}
                              to={{ opacity: 1, y: 0 }}
                              threshold={0.1}
                              rootMargin="-100px"
                              textAlign="center"
                            />
                          </h3>
                          <SplitText
                            text="Discover our site with a beautiful retro dark theme and interactive cards."
                            className="text-lg text-center"
                            delay={18}
                            duration={0.7}
                            ease="power3.out"
                            splitType="words"
                            from={{ opacity: 0, y: 24 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                          />
                        </div>
                      </Card>
                    </SpotlightCard>
                    <SpotlightCard className="custom-spotlight-card home-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <Card>
                        <div className="card-inner">
                          <h3>
                            <SplitText
                              text="Explore Jobs"
                              className="text-2xl font-semibold text-center"
                              delay={60}
                              duration={0.7}
                              ease="power3.out"
                              splitType="chars"
                              from={{ opacity: 0, y: 40 }}
                              to={{ opacity: 1, y: 0 }}
                              threshold={0.1}
                              rootMargin="-100px"
                              textAlign="center"
                            />
                          </h3>
                          <SplitText
                            text="See our current job openings and join our amazing team!"
                            className="text-lg text-center"
                            delay={18}
                            duration={0.7}
                            ease="power3.out"
                            splitType="words"
                            from={{ opacity: 0, y: 24 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                          />
                        </div>
                      </Card>
                    </SpotlightCard>
                    <SpotlightCard className="custom-spotlight-card home-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <Card>
                        <div className="card-inner">
                          <h3>
                            <SplitText
                              text="Contact Us"
                              className="text-2xl font-semibold text-center"
                              delay={60}
                              duration={0.7}
                              ease="power3.out"
                              splitType="chars"
                              from={{ opacity: 0, y: 40 }}
                              to={{ opacity: 1, y: 0 }}
                              threshold={0.1}
                              rootMargin="-100px"
                              textAlign="center"
                            />
                          </h3>
                          <SplitText
                            text="Have questions? Reach out to us anytime."
                            className="text-lg text-center"
                            delay={18}
                            duration={0.7}
                            ease="power3.out"
                            splitType="words"
                            from={{ opacity: 0, y: 24 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                          />
                        </div>
                      </Card>
                    </SpotlightCard>
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