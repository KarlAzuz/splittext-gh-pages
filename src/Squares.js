import React, { useRef, useEffect, useState } from "react";
import './Squares.css';

function getDirectionVector(direction) {
  switch (direction) {
    case "up": return [0, -1];
    case "down": return [0, 1];
    case "left": return [-1, 0];
    case "right": return [1, 0];
    case "diagonal": return [1, 1];
    default: return [1, 1];
  }
}

export default function Squares({
  speed = 0.5,
  squareSize = 40,
  direction = "diagonal",
  borderColor = "rgba(120,180,255,0.13)", // toned down
  hoverFillColor = "rgba(60,80,120,0.18)" // subtle highlight
}) {
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState({ x: -1, y: -1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let t = 0;
    const [dx, dy] = getDirectionVector(direction);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / squareSize) + 2;
      const rows = Math.ceil(height / squareSize) + 2;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          let offsetX = ((t * dx * speed) % squareSize);
          let offsetY = ((t * dy * speed) % squareSize);
          let px = x * squareSize - offsetX;
          let py = y * squareSize - offsetY;
          ctx.save();
          // Animate hover fill with subtle alpha
          if (hovered.x === x && hovered.y === y) {
            ctx.fillStyle = hoverFillColor;
            ctx.globalAlpha = 0.7;
            ctx.fillRect(px, py, squareSize, squareSize);
            ctx.globalAlpha = 1.0;
          }
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 1.2;
          ctx.strokeRect(px, py, squareSize, squareSize);
          ctx.restore();
        }
      }
      t += 1;
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, squareSize, direction, borderColor, hoverFillColor, hovered]);

  function handleMouseMove(e) {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / squareSize);
    const y = Math.floor((e.clientY - rect.top) / squareSize);
    setHovered({ x, y });
  }
  function handleMouseLeave() {
    setHovered({ x: -1, y: -1 });
  }

  return (
    <canvas
      ref={canvasRef}
      className="squares-bg"
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "auto"
      }}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
}
