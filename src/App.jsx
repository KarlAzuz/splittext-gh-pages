import React from "react";
import CardSwap, { Card } from "./CardSwap";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      {/* Home Section */}
      <section className="section home-section">
        <div className="section-content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="main-title"
          >
            Welcome Home
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="main-desc"
          >
            This is your animated home section. Scroll down to see more!
          </motion.p>
        </div>
        {/* Dock/CardSwap */}
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={3500}
          pauseOnHover={true}
          width={340}
          height={200}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Animated dock card one</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Animated dock card two</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Animated dock card three</p>
          </Card>
        </CardSwap>
      </section>

      {/* Job Section */}
      <section className="section job-section">
        <div className="section-content">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Job Experience
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="job-list"
          >
            <li>
              <strong>Frontend Developer</strong> at ExampleCorp (2022-2024)
            </li>
            <li>
              <strong>UI Designer</strong> at Designify (2020-2022)
            </li>
            <li>
              <strong>Intern</strong> at WebStart (2019-2020)
            </li>
          </motion.ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="section-content">
          <motion.h2
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Contact
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={4} required />
            <button type="submit">Send</button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

export default App;
