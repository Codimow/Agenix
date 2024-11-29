"use client";

import { motion } from "framer-motion";
import { Calendar3DScene } from "@/components/ui/3d-calendar";
import { AnimatedGrid } from "@/components/ui/animated-grid";
import { Button } from "@/components/ui/button";
import { CalendarDays, Github } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background">
      <AnimatedGrid />
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Open Source
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Calendar
            <br />
            <span className="text-primary">for the Future</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience intelligent scheduling that adapts to your needs. Let AI optimize your time
            while you focus on what matters most.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <CalendarDays className="mr-2" />
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2" />
              Star on GitHub
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Calendar3DScene />
        </motion.div>
      </div>
    </section>
  );
}