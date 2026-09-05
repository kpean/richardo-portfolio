"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section id="work" className={cn("flex h-[280px] flex-col items-center justify-center", className)}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-light tracking-tight sm:text-5xl md:text-6xl"
          >
            Richardo Kevin
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-sm font-light tracking-wide text-zinc-500 sm:text-base md:text-lg"
          >
            Video Editor
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-2 text-xs font-light tracking-wide text-zinc-400 sm:text-sm"
          >
            Cinematic video editing for brands and storytellers
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}