import React from "react";

export default function Contact() {
  return (
    <div className="card">
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
  );
}
