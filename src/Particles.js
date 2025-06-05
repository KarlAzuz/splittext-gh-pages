import React, { useRef, useEffect } from "react";

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createParticle(width, height, colors, spread, baseSize, alpha, disableRotation) {
  const angle = randomBetween(0, 2 * Math.PI);
  const radius = randomBetween(0, Math.min(width, height) / spread);
  const x = width / 2 + Math.cos(angle) * radius;
  const y = height / 2 + Math.sin(angle) * radius;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = baseSize * randomBetween(0.3, 1);
  const rotation = disableRotation ? 0 : randomBetween(0, 2 * Math.PI);
  return { x, y, color, size, alpha: alpha ? randomBetween(0.2, 1) : 1, rotation, vx: 0, vy: 0 };
}

export default function Particles({
  particleColors = ["#fff"],
  particleCount = 120,
  particleSpread = 10,
  speed = 0.1,
  particleBaseSize = 100,
  moveParticlesOnHover = true,
  alphaParticles = false,
  disableRotation = false
}) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particlesRef.current = Array.from({ length: particleCount }, () =>
        createParticle(width, height, particleColors, particleSpread, particleBaseSize, alphaParticles, disableRotation)
      );
    }
    resize();
    window.addEventListener("resize", resize);

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particlesRef.current) {
        // Move slightly outward
        const dx = p.x - width / 2;
        const dy = p.y - height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        p.x += (dx / dist) * speed;
        p.y += (dy / dist) * speed;

        // Mouse interaction
        if (moveParticlesOnHover && mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const mx = mouseRef.current.x;
          const my = mouseRef.current.y;
          const mdx = p.x - mx;
          const mdy = p.y - my;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 120) {
            p.x += mdx / mdist * 1.5;
            p.y += mdy / mdist * 1.5;
          }
        }

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        if (!disableRotation) ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 20, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [
    particleColors,
    particleCount,
    particleSpread,
    speed,
    particleBaseSize,
    alphaParticles,
    disableRotation,
    moveParticlesOnHover
  ]);

  useEffect(() => {
    if (!moveParticlesOnHover) return;
    function handleMouse(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }
    function handleMouseOut() {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    }
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseout", handleMouseOut);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [moveParticlesOnHover]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "transparent"
      }}
      width={window.innerWidth}
      height={window.innerHeight}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
