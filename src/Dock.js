import React, { useState } from "react";

export default function Dock({
  items,
  panelHeight = 68,
  baseItemSize = 50,
  magnification = 70
}) {
  const [hovered, setHovered] = useState(-1);

  return (
    <div
      className="dock-panel"
      style={{
        height: panelHeight,
        minHeight: panelHeight,
      }}
    >
      {items.map((item, idx) => (
        <div
          key={item.label}
          className={`dock-item${hovered === idx ? " active" : ""}`}
          style={{
            width: baseItemSize,
            height: baseItemSize + (hovered === idx ? magnification * 0.3 : 0),
            fontSize: hovered === idx ? 1.15 * baseItemSize / 32 + "rem" : baseItemSize / 32 + "rem",
            transition: "all 0.18s cubic-bezier(.7,0,.3,1)",
          }}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(-1)}
          onClick={item.onClick}
        >
          {item.icon}
          <span className="dock-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
