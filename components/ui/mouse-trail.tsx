"use client";

import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/use-mouse-position';

export function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const points = useRef<Array<{ x: number; y: number; age: number }>>([]);
  const rafId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new point
      if (mousePosition.x !== 0 || mousePosition.y !== 0) {
        points.current.push({
          x: mousePosition.x,
          y: mousePosition.y,
          age: 0,
        });
      }

      // Update and draw points
      ctx.beginPath();
      points.current = points.current.filter((point) => {
        point.age += 1;
        if (point.age > 20) return false;

        const alpha = 1 - point.age / 20;
        ctx.fillStyle = `hsla(var(--primary), ${alpha})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      rafId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}