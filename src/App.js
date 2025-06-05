import React, { useState } from "react";

const cards = [
  { title: "React Basics", description: "Learn the basics of React.", link: "#" },
  { title: "Hooks", description: "Understand React Hooks.", link: "#" },
  { title: "Components", description: "Reusable UI building blocks.", link: "#" },
  { title: "State Management", description: "Manage state in your app.", link: "#" }
];

export default function App() {
  const [query, setQuery] = useState("");
  const filtered = cards.filter(card =>
    card.title.toLowerCase().includes(query.toLowerCase()) ||
    card.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>ReactBits Lite</h1>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </header>
      <main>
        <div className="card-list">
          {filtered.map(card => (
            <a className="card" href={card.link} key={card.title}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
