import React, { useEffect, useRef, useState } from "react";

export function Card({ children }) {
  // Remove the .card wrapper, just return children
  return children;
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false
}) {
  const [active, setActive] = useState(0);
  const timer = useRef(null);
  const count = React.Children.count(children);

  useEffect(() => {
    if (pauseOnHover) return;
    timer.current = setInterval(() => {
      setActive(a => (a + 1) % count);
    }, delay);
    return () => clearInterval(timer.current);
  }, [count, delay, pauseOnHover]);

  const handleMouseEnter = () => {
    if (pauseOnHover && timer.current) clearInterval(timer.current);
  };
  const handleMouseLeave = () => {
    if (pauseOnHover) {
      timer.current = setInterval(() => {
        setActive(a => (a + 1) % count);
      }, delay);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: verticalDistance * 2 + 220,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, (child, i) => {
        const isActive = i === active;
        const offset = i - active;
        return (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translateY(${offset * verticalDistance}px) scale(${isActive ? 1 : 0.92})`,
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 2 : 1,
              transition: "all 0.7s cubic-bezier(.7,0,.3,1)",
              pointerEvents: isActive ? "auto" : "none",
              width: "100%",
              maxWidth: 420,
              minWidth: 320
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
