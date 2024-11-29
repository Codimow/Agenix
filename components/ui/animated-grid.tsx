"use client";

import { motion } from 'framer-motion';

export function AnimatedGrid() {
  const gridSize = 20;
  const points = Array.from({ length: gridSize * gridSize });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      <div
        className="absolute inset-0"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gap: '1px',
        }}
      >
        {points.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{
              duration: 2,
              delay: (i % gridSize) * 0.05 + Math.floor(i / gridSize) * 0.05,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="bg-primary/10 w-full h-full"
          />
        ))}
      </div>
    </div>
  );
}