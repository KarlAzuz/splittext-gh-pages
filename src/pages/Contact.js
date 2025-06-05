import React from "react";
import StarBorder from "../StarBorder";

export default function Contact() {
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
      <StarBorder as="section" className="contact-section" color="cyan" speed="5s" style={{ marginTop: "4rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h1>Contact</h1>
          <p>
            We'd love to hear from you! <br />
            Email us at <a href="mailto:info@example.com">info@example.com</a> or use the form below.
          </p>
          <form style={{ marginTop: "2em" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={4} required />
            <button type="submit" style={{ marginTop: "1em" }}>Send</button>
          </form>
        </div>
      </StarBorder>
    </div>
  );
}
