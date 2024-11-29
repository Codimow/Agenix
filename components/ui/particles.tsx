"use client";

import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/use-mouse-position';

export function ParticlesEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
  }>>([]);
  const rafId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      }));
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * 0.2;
          particle.vy -= Math.sin(angle) * 0.2;
        }

        // Boundaries
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(var(--primary), 0.2)';
        ctx.fill();
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
      className="fixed inset-0 pointer-events-none"
    />
  );
}