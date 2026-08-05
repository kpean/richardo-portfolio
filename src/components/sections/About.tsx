"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

const software = [
  "Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Photoshop",
];

export const About = React.memo(({ className }: AboutProps) => {
  return (
    <section id="about" className={cn("py-24 md:py-32", className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            About
          </h2>
          <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Richardo Kevin is a Bali-based video editor specializing in cinematic
            storytelling for brands, businesses, and creators. Focused on creating
            clean visuals, engaging pacing, and emotional narratives.
          </p>

          <ul className="mt-8 space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {software.map((tool) => (
              <li key={tool} className="leading-6">
                {tool}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
});
