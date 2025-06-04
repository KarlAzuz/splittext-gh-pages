import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [words, setWords] = useState([
    "Hello",
    "World",
    "React",
    "Animation",
    "Demo"
  ]);
  const [input, setInput] = useState("");
  const positionsRef = useRef({}); // Store y positions for each word

  // Handle right-click to remove word
  const handleWordRightClick = (word, e) => {
    e.preventDefault();
    setWords(words.filter(w => w !== word));
    // Optionally, remove position from positionsRef
    delete positionsRef.current[word];
  };

  // Handle adding a new word
  const handleAddWord = () => {
    if (input.trim() && !words.includes(input.trim())) {
      setWords(prevWords => [...prevWords, input.trim()]);
      // Only set position for the new word
      positionsRef.current[input.trim()] = 0; // Start at top
      setInput("");
    }
  };

  // Animate words falling (simplified)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setWords(currentWords => {
        // Only update positions for words that are still present
        currentWords.forEach(word => {
          if (positionsRef.current[word] < 300) { // Example: 300px max fall
            positionsRef.current[word] += 5;
          }
        });
        return [...currentWords];
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter") handleAddWord(); }}
      />
      <button onClick={handleAddWord}>Add Word</button>
      <div>
        {words.map(word => (
          <span
            key={word}
            className="falling-word"
            style={{
              display: "inline-block",
              margin: "10px",
              transform: `translateY(${positionsRef.current[word] || 0}px)`,
              transition: "transform 0.1s linear"
            }}
            onContextMenu={e => handleWordRightClick(word, e)}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;