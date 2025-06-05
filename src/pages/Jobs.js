import React from "react";

export default function Jobs() {
  return (
    <div className="card">
      <h1>Jobs</h1>
      <p>
        <strong>We're hiring!</strong> <br />
        Check out our current job openings and become part of a creative, passionate team.
      </p>
      <ul style={{ textAlign: "left", margin: "2em auto", maxWidth: 320, color: "#b2c6d9" }}>
        <li>Frontend Developer</li>
        <li>UI/UX Designer</li>
        <li>Backend Engineer</li>
      </ul>
      <p>
        Interested? <a href="/contact">Contact us</a> for more info!
      </p>
    </div>
  );
}
