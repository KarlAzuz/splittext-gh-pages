import React from "react";
import ScrollFloat from "../ScrollFloat";
import StarBorder from "../StarBorder";

export default function Jobs() {
  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      padding: "0 0 6rem 0",
      background: "transparent",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxSizing: "border-box"
    }}>
      <div style={{ margin: "3.5rem 0 2.5rem 0", width: "100%", display: "flex", justifyContent: "center" }}>
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Jobs
        </ScrollFloat>
      </div>
      <StarBorder as="section" className="jobs-section" color="cyan" speed="5s">
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ marginTop: 0 }}>We're hiring!</h2>
          <p>
            Check out our current job openings and become part of a creative, passionate team.
          </p>
        </div>
      </StarBorder>
      <StarBorder as="section" className="jobs-section" color="cyan" speed="5s" style={{ marginTop: "2.5rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h3>Open Positions</h3>
          <ul style={{ textAlign: "left", margin: "2em auto", maxWidth: 320, color: "#b2c6d9" }}>
            <li>Frontend Developer</li>
            <li>UI/UX Designer</li>
            <li>Backend Engineer</li>
          </ul>
        </div>
      </StarBorder>
      <StarBorder as="section" className="jobs-section" color="cyan" speed="5s" style={{ marginTop: "2.5rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p>
            Interested? <a href="/contact">Contact us</a> for more info!
          </p>
        </div>
      </StarBorder>
    </div>
  );
}
