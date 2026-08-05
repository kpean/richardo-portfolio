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
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface PortfolioGridProps {
  className?: string;
}

export function PortfolioGrid({ className }: PortfolioGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
        >
          <Link href={`/work/${project.slug}`}>
            <div className="group relative overflow-hidden rounded-xl border border-black/10 bg-white transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-950">
              <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-zinc-300 dark:text-zinc-700">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-white">
                      {project.title}
                    </span>
                    <span className="text-xs text-zinc-300">
                      {project.category} &middot; {project.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {project.category}
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}