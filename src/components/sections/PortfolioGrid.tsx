"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

interface PortfolioGridProps {
  className?: string;
}

export function PortfolioGrid({ className }: PortfolioGridProps) {
  return (
    <div className={cn("px-4 sm:px-6 lg:px-8 pt-16", className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
          >
            <Link href={`/work/${project.slug}`}>
              <div className="group relative aspect-video overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-light text-zinc-300 dark:text-zinc-700">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-light text-white">
                    {project.title}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}