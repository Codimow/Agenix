"use client";

import { motion } from "framer-motion";
import { Brain, Clock, Zap, Github, Share2, Lock, Cloud, Sparkles, Terminal } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Scheduling",
    description: "Smart algorithms that learn your preferences and optimize your calendar automatically."
  },
  {
    icon: Clock,
    title: "Time Analytics",
    description: "Deep insights into how you spend your time with AI-generated recommendations."
  },
  {
    icon: Zap,
    title: "Instant Optimization",
    description: "Real-time schedule adjustments based on your changing priorities and commitments."
  },
  {
    icon: Github,
    title: "Open Source",
    description: "Fully open-source and community-driven development. Contribute and shape the future."
  },
  {
    icon: Share2,
    title: "Team Collaboration",
    description: "Seamless sharing and coordination of schedules within teams and organizations."
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description: "Your data stays private with end-to-end encryption and local-first processing."
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Secure cloud synchronization across all your devices with real-time updates."
  },
  {
    icon: Sparkles,
    title: "Smart Templates",
    description: "Pre-built schedule templates that adapt to your workflow and preferences."
  },
  {
    icon: Terminal,
    title: "API Access",
    description: "Robust API for custom integrations and extending functionality."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover what makes our AI Calendar revolutionary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}