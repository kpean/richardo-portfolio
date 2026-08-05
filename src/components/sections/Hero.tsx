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
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
    <section id="work" className={cn("flex min-h-screen flex-col items-center justify-center pt-16 md:pt-20", className)}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Richardo Kevin
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg font-light tracking-wide text-zinc-500 dark:text-zinc-400 sm:text-xl md:text-2xl"
          >
            Video Editor
          </motion.p>

          <motion.blockquote
            variants={itemVariants}
            className="mt-8 max-w-xl text-base italic text-zinc-400 dark:text-zinc-500 sm:text-lg"
          >
            &ldquo;I create cinematic videos that keep people watching.&rdquo;
          </motion.blockquote>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="/work/cinematic-reels"
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              )}
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className={cn(
                "inline-flex h-11 items-center justify-center rounded-full border border-black/20 bg-transparent px-8 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black"
              )}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}