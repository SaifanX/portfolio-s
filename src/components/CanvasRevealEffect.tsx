"use client";

import { useEffect, useRef } from "react";

interface CanvasRevealEffectProps {
  animationSpeed?: number;
  colors?: number[][];
  dotSize?: number;
  spacing?: number;
  containerClassName?: string;
  className?: string;
}

export default function CanvasRevealEffect({
  animationSpeed = 0.6,
  colors = [
    [225, 29, 72], // crimson
    [251, 113, 133], // bright rose
    [255, 255, 255], // pure specular white
  ],
  dotSize = 3,
  spacing = 16,
  containerClassName = "",
  className = "",
}: CanvasRevealEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    let mouse = { x: -1000, y: -1000, active: false };

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseEnter = () => {
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += animationSpeed * 0.04;

      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      // Draw subtle radial glow spotlight behind dots if mouse is active
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const radGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          240
        );
        const [gr, gg, gb] = colors[0];
        radGlow.addColorStop(0, `rgba(${gr}, ${gg}, ${gb}, 0.22)`);
        radGlow.addColorStop(0.5, `rgba(${gr}, ${gg}, ${gb}, 0.08)`);
        radGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radGlow;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2;
          const y = j * spacing + spacing / 2;

          // Ambient Clerk-style wave pulsation
          const wave =
            Math.sin(i * 0.28 + time) * Math.cos(j * 0.28 + time * 0.75) * 0.5 + 0.5;

          // Proximity calculation to cursor
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 240;

          let proximity = 0;
          if (mouse.active && dist < maxDist) {
            proximity = Math.pow(1 - dist / maxDist, 1.5);
          }

          // Dynamic color palette selection
          const colorIndex =
            Math.floor((wave * 0.3 + proximity * 0.7) * colors.length) % colors.length;
          const [r, g, b] = colors[colorIndex];

          // High visibility evident alpha curves
          const baseAlpha = 0.25 + wave * 0.15; // Clearly evident matrix at rest
          const activeAlpha = proximity * 0.85;
          const alpha = Math.min(baseAlpha + activeAlpha, 1.0);

          // Dot size scaling
          const currentSize = dotSize + proximity * 2.8;

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

          // Draw crisp micro-dot / circle
          ctx.beginPath();
          ctx.arc(x, y, currentSize / 2, 0, Math.PI * 2);
          ctx.fill();

          // High-energy specular halo for dots very close to cursor
          if (proximity > 0.5) {
            ctx.fillStyle = `rgba(255, 255, 255, ${proximity * 0.6})`;
            ctx.beginPath();
            ctx.arc(x, y, (currentSize * 0.6) / 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animationSpeed, colors, dotSize, spacing]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${containerClassName}`}
    >
      <canvas
        ref={canvasRef}
        className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      />
    </div>
  );
}
