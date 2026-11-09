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

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    const targetEl = container.parentElement || container;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
      if (mouse.x < -500) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.x = mouse.targetX;
      mouse.y = mouse.targetY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("resize", handleResize);
    targetEl.addEventListener("mousemove", handleMouseMove as EventListener);
    targetEl.addEventListener("mouseenter", handleMouseEnter as EventListener);
    targetEl.addEventListener("mouseleave", handleMouseLeave as EventListener);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += animationSpeed * 0.04;

      // Smooth cursor follow interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.22;
        mouse.y += (mouse.targetY - mouse.y) * 0.22;
      } else {
        mouse.x += (-1000 - mouse.x) * 0.15;
        mouse.y += (-1000 - mouse.y) * 0.15;
      }

      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      // Draw dynamic radial glow spotlight directly tracking cursor
      if (mouse.x > -100 && mouse.x < width + 100 && mouse.y > -100 && mouse.y < height + 100) {
        const radGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          260
        );
        const [gr, gg, gb] = colors[0];
        radGlow.addColorStop(0, `rgba(${gr}, ${gg}, ${gb}, 0.28)`);
        radGlow.addColorStop(0.4, `rgba(${gr}, ${gg}, ${gb}, 0.12)`);
        radGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = radGlow;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * spacing + spacing / 2;
          const baseY = j * spacing + spacing / 2;

          // Ambient Clerk wave pulsation
          const wave =
            Math.sin(i * 0.28 + time) * Math.cos(j * 0.28 + time * 0.75) * 0.5 + 0.5;

          // Proximity calculation to cursor
          const dx = baseX - mouse.x;
          const dy = baseY - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 240;

          let proximity = 0;
          let shiftX = 0;
          let shiftY = 0;

          if (dist < maxDist) {
            proximity = Math.pow(1 - dist / maxDist, 1.6);
            // Dots follow and react gently to cursor flow
            const angle = Math.atan2(dy, dx);
            const nudge = proximity * 4.5;
            shiftX = Math.cos(angle) * nudge;
            shiftY = Math.sin(angle) * nudge;
          }

          const x = baseX + shiftX;
          const y = baseY + shiftY;

          // Dynamic color selection
          const colorIndex =
            Math.floor((wave * 0.25 + proximity * 0.75) * colors.length) % colors.length;
          const [r, g, b] = colors[colorIndex];

          const baseAlpha = 0.22 + wave * 0.12;
          const activeAlpha = proximity * 0.88;
          const alpha = Math.min(baseAlpha + activeAlpha, 1.0);

          const currentSize = dotSize + proximity * 3.2;

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;

          ctx.beginPath();
          ctx.arc(x, y, currentSize / 2, 0, Math.PI * 2);
          ctx.fill();

          // High-energy specular core for dots very close to cursor
          if (proximity > 0.45) {
            ctx.fillStyle = `rgba(255, 255, 255, ${proximity * 0.75})`;
            ctx.beginPath();
            ctx.arc(x, y, (currentSize * 0.55) / 2, 0, Math.PI * 2);
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
      targetEl.removeEventListener("mousemove", handleMouseMove as EventListener);
      targetEl.removeEventListener("mouseenter", handleMouseEnter as EventListener);
      targetEl.removeEventListener("mouseleave", handleMouseLeave as EventListener);
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
