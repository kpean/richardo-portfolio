"use client";

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

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={cn("pt-16 md:pt-20 py-20 md:py-32", className)}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 md:flex-row md:gap-12"
        >
          <div className="shrink-0">
            <div className="relative h-48 w-48 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-900 sm:h-56 sm:w-56">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-zinc-300 dark:text-zinc-700">
                  RK
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              I create cinematic videos that keep people watching. With a keen
              eye for pacing, color, and storytelling, I bring raw footage to
              life.
            </p>

            <div className="mt-8">
              <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Software
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {software.map((tool) => (
                  <li key={tool}>
                    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300">
                      {tool}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}